# Deployment Guide for ICON Entertainmentz Website

## Quick Deployment Steps

### Option 1: Netlify (Recommended)
1. Connect this repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Domain: Point icon-entertainmentz.com to Netlify

### Option 2: Vercel
1. Import project from GitHub
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

### Option 3: Squarespace Integration
1. Run `npm run build`
2. Upload contents of `dist` folder to Squarespace
3. Configure domain routing

## Environment Variables

Create `.env` file for production:

```
VITE_FORMSPREE_FORM_ID=your_formspree_form_id
VITE_SITE_URL=https://icon-entertainmentz.com
```

## Build Optimization

The build is already optimized with:
- Code splitting for routes
- Manual vendor chunks
- CSS purging
- Asset optimization

## Domain Configuration

Point your Squarespace domain `icon-entertainmentz.com` to your chosen hosting platform.

## Performance

- Lighthouse Score Target: 90+
- First Contentful Paint: < 2s
- Largest Contentful Paint: < 4s
- Bundle size: < 1MB gzipped

## SEO Configuration

- Meta tags configured
- Open Graph tags set
- Sitemap generation included
- Semantic HTML structure