/**
 * Post-build prerender: boots the built SPA in headless Chromium, lets
 * react-helmet-async inject the per-route <head> (title, canonical, og/twitter,
 * JSON-LD), then writes the settled HTML back to dist/<route>/index.html.
 *
 * Why this exists: the app renders client-side, so the server ships the same
 * bare index.html for every route. Social scrapers (Facebook, X, LinkedIn,
 * WhatsApp) don't run JS, so they never see the MusicEvent schema or the
 * per-page tags. Prerendering bakes them into the static HTML.
 *
 * Fail-safe by design: any launch/render error logs a warning and exits 0, so
 * a CI environment without a working Chromium still produces a valid (if
 * un-prerendered) build instead of failing the deploy.
 */
import { createServer } from 'node:http'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, extname, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, '..', 'dist')
const PORT = 4183

// Routes to prerender. /tickets is a client-side redirect and /archive does
// not exist, so both are intentionally omitted.
const ROUTES = ['/', '/about', '/events', '/contact', '/newsletter', '/socials']

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf',
  '.webm': 'video/webm', '.ico': 'image/x-icon', '.txt': 'text/plain',
  '.xml': 'application/xml'
}

// Static file server with SPA fallback so client-side routing can boot on any path.
function startServer() {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      try {
        const urlPath = decodeURIComponent(req.url.split('?')[0])
        let filePath = join(DIST, urlPath)
        if (!extname(filePath) || !existsSync(filePath)) {
          filePath = existsSync(filePath) && extname(filePath) ? filePath : join(DIST, 'index.html')
        }
        const body = await readFile(filePath)
        res.writeHead(200, { 'Content-Type': MIME[extname(filePath)] || 'application/octet-stream' })
        res.end(body)
      } catch {
        res.writeHead(404).end('not found')
      }
    })
    server.listen(PORT, () => resolve(server))
  })
}

// Runs in the page: drop static <head> SEO tags that Helmet (data-rh) now owns,
// so the snapshot has exactly one title/canonical/og set. JSON-LD is left alone
// (Organization from index.html + MusicEvent from Helmet may coexist).
function dedupeHead() {
  const keyOf = (el) => {
    if (el.tagName === 'TITLE') return 'title'
    if (el.tagName === 'META') return 'meta:' + (el.getAttribute('property') || el.getAttribute('name') || '')
    if (el.tagName === 'LINK' && el.getAttribute('rel') === 'canonical') return 'canonical'
    return null
  }
  const managed = new Set()
  document.querySelectorAll('head [data-rh="true"]').forEach((el) => {
    const k = keyOf(el); if (k) managed.add(k)
  })
  document.querySelectorAll('head title, head meta, head link[rel="canonical"]').forEach((el) => {
    if (el.getAttribute('data-rh') === 'true') return
    const k = keyOf(el)
    if (k && managed.has(k)) el.remove()
  })
}

async function run() {
  let puppeteer
  try {
    puppeteer = (await import('puppeteer')).default
  } catch (e) {
    console.warn('[prerender] puppeteer unavailable, skipping:', e.message)
    return
  }

  const server = await startServer()
  let browser
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    })
  } catch (e) {
    console.warn('[prerender] could not launch Chromium, skipping:', e.message)
    server.close()
    return
  }

  let ok = 0
  for (const route of ROUTES) {
    try {
      const page = await browser.newPage()

      // Block third-party requests so networkidle is reliable and fast
      // (GA, Meta pixel, AdSense, Google Fonts would otherwise hang idle).
      await page.setRequestInterception(true)
      page.on('request', (r) => {
        const u = r.url()
        if (u.startsWith(`http://localhost:${PORT}`) || u.startsWith('data:')) r.continue()
        else r.abort()
      })

      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000
      })

      // Wait past the 2.5s LogoLoader: loader unmounted AND Helmet has run.
      await page.waitForFunction(
        () => !document.querySelector('.fixed.inset-0.z-50') &&
              !!document.querySelector('head [data-rh="true"]'),
        { timeout: 15000 }
      )
      // Settle buffer for the loader's exit animation and any late head writes.
      await new Promise((r) => setTimeout(r, 600))

      await page.evaluate(dedupeHead)

      const html = '<!DOCTYPE html>' + await page.evaluate(() => document.documentElement.outerHTML)

      // Write flat files (events.html), not directory indexes (events/index.html).
      // Netlify serves a flat .html at its no-slash URL (/events) with no redirect,
      // which matches the canonical; a directory index would 301 /events -> /events/.
      const outFile = route === '/' ? join(DIST, 'index.html') : join(DIST, route.slice(1) + '.html')
      await mkdir(dirname(outFile), { recursive: true })
      await writeFile(outFile, html, 'utf8')
      await page.close()
      ok++
      console.log(`[prerender] ${route} -> ${route === '/' ? 'index.html' : route.slice(1) + '.html'}`)
    } catch (e) {
      console.warn(`[prerender] ${route} failed, leaving SPA fallback:`, e.message)
    }
  }

  await browser.close()
  server.close()
  console.log(`[prerender] done (${ok}/${ROUTES.length} routes)`)
}

run().catch((e) => {
  console.warn('[prerender] unexpected error, build continues:', e.message)
  process.exit(0)
})
