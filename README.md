# ICON Entertainmentz Website

A modern, ultra-stylish React website for ICON Entertainmentz - premier entertainment events celebrating Indian culture across the USA.

## 🚀 Live Website

**Production:** [https://icon-entertainmentz.com](https://icon-entertainmentz.com)  
**Netlify Dashboard:** [app.netlify.com](https://app.netlify.com)

---

## 📋 Table of Contents

- [Tech Stack & Architecture](#-tech-stack--architecture)
- [Quick Start Setup](#-quick-start-setup)
- [Development Workflow](#-development-workflow)
- [Git Workflow](#-git-workflow)
- [Production Deployment](#-production-deployment)
- [Downstream Services](#-downstream-services--integrations)
- [Database Management](#-database-management)
- [Analytics & SEO](#-analytics--seo)
- [Troubleshooting](#-troubleshooting)
- [Maintenance Checklist](#-maintenance-checklist)

---

## 🛠️ Tech Stack & Architecture

### Frontend Framework
- **React 18.2.0** - UI library
- **Vite 5.0.8** - Build tool (faster than Create React App)
- **React Router DOM 6.20.1** - Client-side routing

### Styling & UI
- **Tailwind CSS 3.3.6** - Utility-first CSS framework
- **Framer Motion 10.16.16** - Animation library
- **Three.js 0.158.0** - 3D graphics
- **React Three Fiber 8.15.11** - React renderer for Three.js
- **Drei 9.88.17** - Three.js helpers
- **Lucide React** - Icon library

### Backend & Database
- **Netlify Functions** - Serverless backend (Node.js)
- **Neon PostgreSQL** - Serverless Postgres database via `@netlify/neon`
- **pg 8.16.3** - PostgreSQL client

### Analytics & SEO
- **Google Analytics 4** - User tracking (ID: `G-LPJKBV2E2K`)
- **React Helmet Async** - Meta tags and SEO management
- **Schema.org** - Structured data for search engines

### External Integrations
- **Eventbrite** - Ticket sales (https://iconiccountdown2026.eventbrite.com)
- **Email/Phone** - Direct contact (+1 512-884-0540)

### Build Configuration
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes
- **Terser** - JavaScript minification

---

## 🚀 Quick Start Setup

### Prerequisites
```bash
# Check versions
node -v    # Need v18.0.0 or higher
npm -v     # Need v9.0.0 or higher
git --version
```

### Initial Setup (First Time)

```bash
# 1. Clone the repository
git clone https://github.com/iconentertainmentz2025/icon-showtime.git
cd icon-showtime

# 2. Install dependencies (this may take 2-3 minutes)
npm install

# 3. Create environment file (optional for local dev)
touch .env

# 4. Start development server
npm run dev
```

**Development server runs at:** `http://localhost:3001`

### Verify Installation
```bash
# Check if all packages installed correctly
npm list --depth=0

# Run build to ensure everything works
npm run build
```

---

## 💻 Development Workflow

### Daily Development Process

```bash
# 1. Pull latest changes from GitHub
git pull origin main

# 2. Start development server
npm run dev
# Opens at http://localhost:3001
# Hot reload enabled - changes appear instantly

# 3. Make your code changes
# Edit files in src/ directory

# 4. Check for errors
npm run lint

# 5. Test production build locally
npm run build
npm run preview  # Preview production build at http://localhost:4173
```

### Project Structure
```
icon-showtime/
├── public/                  # Static assets
│   ├── robots.txt          # SEO crawler instructions
│   ├── sitemap.xml         # SEO sitemap
│   ├── fonts/              # Custom fonts
│   └── images/             # Event images, logos
├── src/
│   ├── main.jsx            # App entry point
│   ├── App.jsx             # Main app component with routing
│   ├── index.css           # Global styles
│   ├── components/         # Reusable UI components
│   │   ├── Layout.jsx      # Page layout wrapper
│   │   ├── Navigation.jsx  # Header navigation
│   │   ├── Footer.jsx      # Footer with newsletter banner
│   │   ├── Newsletter.jsx  # Newsletter signup form
│   │   ├── Logo.jsx        # Company logo component
│   │   ├── EventImage.jsx  # Event image handler
│   │   ├── SEOData.jsx     # SEO meta tags component
│   │   ├── 3d/
│   │   │   └── Hero3DScene.jsx  # Three.js 3D animations
│   │   └── ui/
│   │       └── LoadingSpinner.jsx
│   ├── pages/              # Route pages
│   │   ├── AboutUs.jsx     # / (home page)
│   │   ├── Events.jsx      # /events (upcoming events)
│   │   ├── Archive.jsx     # /archive (past events)
│   │   ├── Contact.jsx     # /contact (contact form)
│   │   └── Newsletter.jsx  # /newsletter (newsletter page)
│   └── utils/
│       └── analytics.js    # GA4 tracking functions
├── netlify/
│   └── functions/          # Serverless backend functions
│       ├── contact-submit.cjs        # Contact form handler
│       ├── newsletter-subscribe.cjs  # Newsletter signup handler
│       ├── db-config.cjs            # Database connection config
│       └── test-db-connection.cjs   # DB test utility
├── migrations/             # Database schema migrations
│   ├── 001_create_subscribers_table.sql
│   └── 002_create_contact_submissions_table.sql
├── scripts/
│   └── run-migrations.js   # Migration runner
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite build configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── netlify.toml            # Netlify deployment config
└── README.md               # This file
```

### Available NPM Scripts
```bash
npm run dev      # Start dev server (port 3001)
npm run build    # Build for production (outputs to dist/)
npm run preview  # Preview production build locally
npm run lint     # Check code for errors
npm run migrate  # Run database migrations
```

### Making Code Changes

**Editing Pages:**
- Edit files in `src/pages/` for content changes
- Each page has its own file (Events.jsx, Contact.jsx, etc.)

**Editing Components:**
- Reusable components in `src/components/`
- Navigation, Footer, Newsletter are shared across pages

**Editing Styles:**
- Global styles in `src/index.css`
- Tailwind utility classes in JSX files
- Custom colors defined in `tailwind.config.js`

**Adding Analytics Tracking:**
- Import from `src/utils/analytics.js`
- Use `trackCustomEvents.eventName()` functions

---

## 🔀 Git Workflow

### Daily Git Commands

```bash
# 1. Check current status
git status

# 2. See what changed
git diff

# 3. Stage all changes
git add .

# Or stage specific files
git add src/pages/Events.jsx src/components/Footer.jsx

# 4. Commit with descriptive message
git commit -m "feat: Add new event details for ICONIC Countdown 2026"

# 5. Push to GitHub (triggers automatic Netlify deployment)
git push origin main
```

### Git Commit Message Convention
```bash
# Format: <type>: <description>

feat: Add new feature
fix: Fix bug or issue
docs: Update documentation
style: Format code (no functional changes)
refactor: Restructure code
chore: Update dependencies or config

# Examples:
git commit -m "feat: Add newsletter signup analytics tracking"
git commit -m "fix: Correct timezone for event date display"
git commit -m "docs: Update README with deployment steps"
```

### Common Git Scenarios

**Undo last commit (keep changes):**
```bash
git reset --soft HEAD~1
```

**Discard all local changes:**
```bash
git reset --hard HEAD
git clean -fd
```

**Create a new branch for feature:**
```bash
git checkout -b feature/new-event-page
# Make changes, commit
git push origin feature/new-event-page
# Create pull request on GitHub
```

**Pull latest changes:**
```bash
git pull origin main
```

### Checking Git Status
```bash
# See what files changed
git status

# See detailed changes
git diff

# See commit history
git log --oneline -10

# See remote repository URL
git remote -v
```

---

## 🚀 Production Deployment

### Automatic Deployment (Recommended)

**Every push to GitHub `main` branch automatically deploys to production.**

```bash
# 1. Make your changes locally
# 2. Test thoroughly (npm run build)
# 3. Commit and push
git add .
git commit -m "feat: Update event details"
git push origin main

# 4. Netlify automatically:
#    - Detects push to main branch
#    - Runs npm run build
#    - Deploys to icon-entertainmentz.com
#    - Takes ~2-3 minutes
```

### Manual Build Process

```bash
# 1. Build production files
npm run build

# Output goes to dist/ folder:
# dist/
#   ├── index.html           # Main HTML file
#   ├── assets/
#   │   ├── index-[hash].js  # JavaScript bundle
#   │   ├── index-[hash].css # CSS bundle
#   │   └── [images/fonts]   # Optimized assets

# 2. Preview production build locally
npm run preview
# Opens at http://localhost:4173

# 3. Check dist/ folder size
du -sh dist/
# Should be ~1-2 MB total
```

### Build Configuration Details

**Vite Build Settings (vite.config.js):**
- **Output directory:** `dist/`
- **Minification:** Terser (removes whitespace, shortens variable names)
- **Source maps:** Disabled (reduces bundle size)
- **Code splitting:** Automatic
- **Manual chunks:**
  - `vendor.js` - React, React DOM
  - `router.js` - React Router
  - `three.js` - Three.js, React Three Fiber
  - `motion.js` - Framer Motion

**Build Output:**
```
dist/index.html                  6.17 kB
dist/assets/index-[hash].css    45.23 kB  (gzipped: ~8 kB)
dist/assets/vendor-[hash].js   142.16 kB  (gzipped: ~45 kB)
dist/assets/router-[hash].js    34.52 kB  (gzipped: ~12 kB)
dist/assets/three-[hash].js    456.78 kB  (gzipped: ~145 kB)
dist/assets/index-[hash].js     89.34 kB  (gzipped: ~28 kB)
```

### Deployment Verification Checklist

```bash
# After deployment, check:
# ✅ Site loads at icon-entertainmentz.com
# ✅ All pages accessible (/, /events, /archive, /contact, /newsletter)
# ✅ Images load correctly
# ✅ 3D animations work on homepage
# ✅ Contact form submits successfully
# ✅ Newsletter signup works
# ✅ Eventbrite ticket links work
# ✅ Phone/email links work
# ✅ Social media links work
# ✅ Google Analytics tracks page views (check GA4 dashboard)
# ✅ Mobile responsive design works
# ✅ No console errors (check browser DevTools)
```

### Netlify Configuration

**Netlify Settings (netlify.toml):**
```toml
[build]
  command = "npm run build"      # Build command
  publish = "dist"               # Deploy this folder
  functions = "netlify/functions" # Serverless functions

[[redirects]]
  from = "/*"                    # All routes
  to = "/index.html"            # Go to index (SPA routing)
  status = 200
```

**Environment Variables (Set in Netlify Dashboard):**
1. Go to: Site Settings → Environment Variables
2. Required variables:
   - `DATABASE_URL` - Neon PostgreSQL connection string
   - `NETLIFY_AUTH_TOKEN` - (Auto-configured by Netlify)

**Domain Settings:**
- Primary domain: `icon-entertainmentz.com`
- SSL certificate: Auto-provisioned by Netlify (Let's Encrypt)
- HTTPS: Enabled (force HTTPS redirect)

---

## 🔌 Downstream Services & Integrations

### 1. **Netlify (Hosting & CI/CD)**
- **Purpose:** Hosts website, runs serverless functions, auto-deployment
- **URL:** https://app.netlify.com
- **Setup:**
  - Connected to GitHub repo: `iconentertainmentz2025/icon-showtime`
  - Auto-deploys on push to `main` branch
  - Build command: `npm run build`
  - Publish directory: `dist`
- **Cost:** Free tier (100GB bandwidth/month)
- **Status Check:** https://app.netlify.com/sites/[your-site]/deploys

### 2. **Neon PostgreSQL (Database)**
- **Purpose:** Stores newsletter subscribers and contact form submissions
- **URL:** https://neon.tech
- **Database Tables:**
  - `subscribers` - Newsletter email list
  - `contact_submissions` - Contact form entries
- **Connection:** Via `@netlify/neon` package (uses `DATABASE_URL` env variable)
- **Setup:**
  1. Create Neon account at https://neon.tech
  2. Create database
  3. Copy connection string
  4. Add to Netlify environment variables as `DATABASE_URL`
  5. Run migrations: `npm run migrate`
- **Cost:** Free tier (3GB storage, 100 hours compute/month)
- **Backup:** Neon auto-backs up daily

### 3. **Google Analytics 4 (Analytics)**
- **Purpose:** Track user behavior, page views, custom events
- **Tracking ID:** `G-LPJKBV2E2K`
- **URL:** https://analytics.google.com
- **Tracked Events:**
  - Page views (all pages)
  - Ticket purchase clicks (Events page)
  - Newsletter signups
  - Contact form submissions
  - Phone/email clicks
  - Social media link clicks
  - CTA button clicks
- **Setup:**
  - Already configured in `src/utils/analytics.js`
  - Loaded via Google tag in `src/main.jsx`
- **Reports Location:** Analytics → Reports → Events
- **Cost:** Free

### 4. **Eventbrite (Ticket Sales)**
- **Purpose:** External ticket booking platform
- **Event URL:** https://iconiccountdown2026.eventbrite.com
- **Integration:** Direct links (not embedded due to CORS restrictions)
- **Setup:**
  - Create event on Eventbrite
  - Copy event URL
  - Update link in `src/pages/Events.jsx`
- **Thank You Message:** Copy from DEPLOYMENT.md to Eventbrite confirmation page
- **Cost:** Eventbrite takes 3.7% + $1.79 per ticket

### 5. **GitHub (Version Control)**
- **Purpose:** Source code repository, version control
- **Repository:** https://github.com/iconentertainmentz2025/icon-showtime
- **Branch:** `main` (production)
- **Setup:** Already configured
- **Webhook:** Netlify listens for pushes, auto-deploys
- **Cost:** Free

### 6. **Domain (icon-entertainmentz.com)**
- **Purpose:** Custom domain name
- **Registrar:** Your domain provider
- **DNS Configuration:**
  - Point to Netlify servers
  - Netlify handles SSL certificate
- **Status:** Active, HTTPS enabled

### 7. **Social Media Links**
- **Instagram:** https://www.instagram.com/iconentertainmentz
- **Facebook:** https://www.facebook.com/iconentertainmentz
- **YouTube:** https://www.youtube.com/iconentertainmentz
- **Purpose:** Social media presence, tracked in analytics

### Service Dependency Map
```
GitHub (push) 
  ↓
Netlify (build & deploy)
  ↓
icon-entertainmentz.com (live site)
  ↓
User Visits
  ↓
Google Analytics (tracks behavior)
  ↓
User Actions:
  ├─ Newsletter → Netlify Function → Neon DB
  ├─ Contact Form → Netlify Function → Neon DB
  └─ Buy Tickets → Eventbrite (external)
```

---

## 🗄️ Database Management

### Database Schema

**Table: subscribers**
```sql
CREATE TABLE subscribers (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'active'
);
```

**Table: contact_submissions**
```sql
CREATE TABLE contact_submissions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    event_type VARCHAR(100),
    message TEXT,
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### Running Migrations

```bash
# Run all migrations
npm run migrate

# This executes scripts/run-migrations.js which:
# 1. Connects to Neon database
# 2. Runs SQL files in migrations/ folder in order
# 3. Creates tables if they don't exist
```

### Testing Database Connection

```bash
# Test if database is reachable
node netlify/functions/test-db-connection.cjs

# Should output:
# ✅ Database connection successful
# Tables: subscribers, contact_submissions
```

### Viewing Database Data

**Option 1: Neon Dashboard**
1. Log in to https://neon.tech
2. Go to your project
3. Click "SQL Editor"
4. Run queries:
```sql
-- View all subscribers
SELECT * FROM subscribers ORDER BY subscribed_at DESC;

-- View all contact submissions
SELECT * FROM contact_submissions ORDER BY submitted_at DESC;

-- Count subscribers
SELECT COUNT(*) FROM subscribers WHERE status = 'active';
```

**Option 2: Command Line (psql)**
```bash
# Install psql if needed
brew install postgresql

# Connect to database
psql "YOUR_DATABASE_URL_HERE"

# Run queries
SELECT * FROM subscribers LIMIT 10;
```

### Database Maintenance

**Export subscribers to CSV:**
```sql
COPY (SELECT email, subscribed_at FROM subscribers WHERE status = 'active' ORDER BY subscribed_at DESC) 
TO STDOUT WITH CSV HEADER;
```

**Delete old test data:**
```sql
DELETE FROM contact_submissions WHERE message LIKE '%test%';
DELETE FROM subscribers WHERE email LIKE '%test%';
```

**Backup database:**
- Neon provides automatic daily backups
- Access backups in Neon dashboard → Backups

---

## 📊 Analytics & SEO

### Google Analytics Setup

**Already Configured:**
- Measurement ID: `G-LPJKBV2E2K`
- Tracking script in `src/main.jsx`
- Custom events in `src/utils/analytics.js`

**Viewing Analytics:**
1. Go to https://analytics.google.com
2. Select ICON Entertainmentz property
3. Navigate to Reports:
   - **Realtime** - Live users on site right now
   - **Events** - All tracked interactions
   - **Pages** - Most visited pages
   - **Conversions** - Set up goals (ticket clicks, form submissions)

**Custom Events Tracked:**
- `ticket_purchase_attempt` - User clicks buy tickets
- `newsletter_signup` - Email subscription
- `contact_form_submit` - Contact form submission
- `phone_click` - Phone number clicked
- `email_click` - Email address clicked
- `social_media_click` - Social media link clicked
- `event_inquiry` - CTA button clicked

### SEO Implementation

**Structured Data (Schema.org):**
- **Organization** schema on all pages (company info)
- **Event** schema on Events page (upcoming events)
- **ContactPage** schema on Contact page
- **CollectionPage** schema on Archive page
- **WebPage** schema on About Us page

**Meta Tags:**
- Page titles (unique per page)
- Meta descriptions (< 160 characters)
- Open Graph tags (Facebook/social sharing)
- Twitter cards
- Canonical URLs

**SEO Files:**
- `public/robots.txt` - Crawler instructions
- `public/sitemap.xml` - Site structure for search engines

**SEO Best Practices:**
- Semantic HTML (header, nav, main, footer)
- Alt text on all images
- Fast load times (< 3 seconds)
- Mobile responsive
- HTTPS enabled
- Clean URLs (no query parameters)

### Monitoring Performance

```bash
# Check Lighthouse score (in Chrome DevTools)
# 1. Open site in Chrome
# 2. F12 → Lighthouse tab
# 3. Generate report
# Target scores:
#   - Performance: 90+
#   - Accessibility: 95+
#   - Best Practices: 95+
#   - SEO: 100
```

**Key Metrics:**
- **First Contentful Paint (FCP):** < 1.8s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Time to Interactive (TTI):** < 3.8s
- **Cumulative Layout Shift (CLS):** < 0.1

---

## 🔧 Troubleshooting

### Common Issues & Solutions

**1. "npm install" fails**
```bash
# Clear npm cache and retry
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

**2. Development server won't start**
```bash
# Check if port 3001 is in use
lsof -ti:3001 | xargs kill -9

# Restart dev server
npm run dev
```

**3. Build fails**
```bash
# Check for syntax errors
npm run lint

# Clear dist folder and rebuild
rm -rf dist
npm run build
```

**4. Newsletter/Contact form not working**
```bash
# Test database connection
node netlify/functions/test-db-connection.cjs

# Check Netlify environment variables:
# DATABASE_URL should be set in Netlify dashboard

# Check Netlify function logs:
# Netlify Dashboard → Functions → View logs
```

**5. Analytics not tracking**
```bash
# Open browser DevTools (F12) → Console
# Should see Google Analytics loaded
# Check Network tab for gtag requests

# Verify GA_MEASUREMENT_ID in src/utils/analytics.js
# Should be: G-LPJKBV2E2K
```

**6. Deployment fails on Netlify**
```bash
# Check Netlify deploy logs in dashboard
# Common issues:
# - Missing environment variables (DATABASE_URL)
# - Build command error (check package.json)
# - Dependency version mismatch (update package-lock.json)

# Retry deployment:
# Netlify Dashboard → Deploys → Trigger deploy
```

**7. Site loads but pages are blank**
```bash
# Check browser console for errors (F12)
# Likely causes:
# - JavaScript error (check error message)
# - Failed API calls (check Network tab)
# - Missing environment variables

# Test locally:
npm run build
npm run preview
```

**8. Images not loading**
```bash
# Check image paths in public/images/
# Images should be referenced as:
# /images/filename.jpg (not ./images/ or src/images/)

# Verify images exist:
ls -la public/images/
```

**9. Database connection errors**
```bash
# Verify DATABASE_URL in Netlify:
# Site Settings → Environment Variables → DATABASE_URL

# Test connection:
node netlify/functions/test-db-connection.cjs

# If fails, check Neon dashboard:
# - Database is running
# - Connection string is correct
# - IP restrictions (should be disabled for Netlify)
```

**10. Git push rejected**
```bash
# Pull latest changes first
git pull origin main

# If conflicts, resolve manually then:
git add .
git commit -m "Merge conflicts resolved"
git push origin main
```

### Getting Help

- **Netlify Issues:** https://answers.netlify.com
- **Neon Issues:** https://neon.tech/docs
- **React Issues:** https://react.dev/learn
- **Vite Issues:** https://vitejs.dev/guide/

---

## ✅ Maintenance Checklist

### Daily Tasks
- [ ] Check site is live and loading (icon-entertainmentz.com)
- [ ] Monitor Netlify deploy status
- [ ] Check for new contact form submissions (Neon dashboard)
- [ ] Check for new newsletter subscribers

### Weekly Tasks
- [ ] Review Google Analytics dashboard
  - Page views trend
  - Top pages
  - Conversion rates (ticket clicks)
  - Device breakdown (mobile vs desktop)
- [ ] Check Netlify bandwidth usage (Free tier: 100GB/month)
- [ ] Review Neon database size (Free tier: 3GB)
- [ ] Test contact form and newsletter signup
- [ ] Check for broken links (events, social media)

### Monthly Tasks
- [ ] Update event details for upcoming shows
- [ ] Archive past events to Archive page
- [ ] Review and respond to contact form submissions
- [ ] Export newsletter subscriber list (backup)
- [ ] Update dependencies:
```bash
npm outdated
npm update
npm audit fix
```
- [ ] Run Lighthouse performance audit
- [ ] Check SEO rankings (Google Search Console)
- [ ] Review Google Analytics monthly report

### Quarterly Tasks
- [ ] Database cleanup (remove test data)
- [ ] Image optimization (compress large images)
- [ ] Content refresh (update About Us, policies)
- [ ] Security audit:
```bash
npm audit
npm audit fix --force
```
- [ ] Backup database (export to CSV)
- [ ] Review and renew domain registration
- [ ] Test site on multiple browsers (Chrome, Safari, Firefox)
- [ ] Test mobile responsiveness on real devices

### Before Major Events
- [ ] Update Events page with new event details
- [ ] Update Eventbrite link
- [ ] Test ticket purchase flow end-to-end
- [ ] Increase Netlify bandwidth limit if expecting high traffic
- [ ] Set up Google Analytics goal for ticket conversions
- [ ] Create social media posts with website link
- [ ] Send newsletter to subscribers announcing event

### After Events
- [ ] Move event to Archive page
- [ ] Add event photos/videos to Archive
- [ ] Update event statistics (attendees, ratings)
- [ ] Review analytics for event page performance
- [ ] Send thank you email to attendees (from subscriber list)

---

## 🎭 About ICON Entertainmentz

**Company:** ICON Entertainmentz  
**Mission:** Bringing vibrant Indian culture to audiences across the United States  
**Location:** Austin, Texas  
**Contact:** info@icon-entertainmentz.com | +1 (512) 884-0540

**Current Event:** ICONIC Countdown 2026  
**Date:** December 31, 2025 | 9:00 PM - 1:00 AM CST  
**Venue:** Austin Event Center, Austin, TX  
**Tickets:** https://iconiccountdown2026.eventbrite.com

---

## 📚 Additional Documentation

- **SEO Implementation:** See `SEO_IMPLEMENTATION.md`
- **Analytics Report:** See `ANALYTICS_SEO_REPORT.md`
- **Deployment Guide:** See `DEPLOYMENT.md`
- **SEO Quick Setup:** See `SEO_QUICK_SETUP.md`

---

## 🎨 Design System

### Color Palette
```css
/* Primary Phoenix Colors */
Phoenix Orange: #e67e22
Phoenix Red: #d63031
Coral Accent: #e17055

/* Secondary Teal */
Teal Primary: #00b894
Teal Light: #2dd4bf

/* Gradients */
Phoenix: linear-gradient(135deg, #e67e22, #d63031)
Teal: linear-gradient(135deg, #00b894, #2dd4bf)
```

### Typography
- **Headings:** System fonts (sans-serif)
- **Body:** System fonts optimized for readability
- **Size Scale:** Tailwind default scale

### Responsive Breakpoints
```javascript
sm: 640px   // Mobile landscape
md: 768px   // Tablet
lg: 1024px  // Desktop
xl: 1280px  // Large desktop
2xl: 1536px // Extra large
```

---

**Last Updated:** November 18, 2025  
**Version:** 1.0.0  
**Maintained by:** ICON Entertainmentz Development Team
