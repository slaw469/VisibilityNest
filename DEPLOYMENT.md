# Production Deployment Guide

## 🚀 Pre-Deployment Checklist

### 1. Configuration
- [ ] Update all URLs in `src/site.config.ts`
  - Calendly link
  - LinkedIn profile
  - Portfolio URL
  - Email address
- [ ] Update meta tags in `index.html` with your domain
- [ ] Add hero assets to `/public/` (hero-poster.jpg required)

### 2. Build & Test
```bash
# Install dependencies
pnpm install

# Run linter
pnpm lint

# Build for production
pnpm build

# Preview production build locally
pnpm preview
```

### 3. Performance Check
- [ ] Run Lighthouse audit (target: 90+ on all metrics)
- [ ] Test on mobile device (responsive check)
- [ ] Verify video loads properly on desktop
- [ ] Check all links open correctly
- [ ] Test contact form submission

---

## 📦 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**One-Command Deploy:**
```bash
npx vercel
```

**Steps:**
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project root
3. Follow prompts (link to GitHub recommended)
4. Production URL provided instantly
5. Auto-deploys on git push (if linked)

**Custom Domain:**
```bash
vercel --prod
vercel domains add yourdomain.com
```

---

### Option 2: Netlify

**Using Netlify CLI:**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
pnpm build

# Deploy
netlify deploy --prod --dir=dist
```

**Using Netlify UI:**
1. Go to [netlify.com](https://netlify.com)
2. Drag & drop the `/dist` folder
3. Or connect GitHub repo for auto-deploy

**Configuration:**
- Build command: `pnpm build`
- Publish directory: `dist`
- Node version: `18`

---

### Option 3: GitHub Pages

**Setup:**
```bash
# Install gh-pages
pnpm add -D gh-pages

# Add to package.json scripts:
"deploy": "pnpm build && gh-pages -d dist"

# Deploy
pnpm deploy
```

**Configure:**
1. Go to repo Settings → Pages
2. Source: `gh-pages` branch
3. URL: `https://username.github.io/repo-name`

**Update `vite.config.ts`:**
```ts
export default defineConfig({
  base: '/repo-name/', // Add this
  plugins: [react()],
})
```

---

### Option 4: Custom VPS/Server

**Build Locally:**
```bash
pnpm build
# Upload /dist folder to your server
```

**Nginx Config Example:**
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    root /var/www/your-site/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|mp4)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## 🔐 Environment Variables (Production)

If using environment variables, set them in your hosting platform:

**Vercel:**
```bash
vercel env add VITE_CALENDLY_URL production
```

**Netlify:**
Settings → Build & Deploy → Environment Variables

**Values to set:**
- `VITE_CALENDLY_URL`
- `VITE_LINKEDIN_URL`
- `VITE_PORTFOLIO_URL`
- `VITE_EMAIL`

---

## 📊 Post-Deployment

### Analytics Setup (Optional)
Add to `index.html` before `</head>`:

**Google Analytics:**
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Plausible (Privacy-friendly):**
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

### Custom Domain Setup

**Vercel:**
1. Dashboard → Settings → Domains
2. Add domain
3. Update DNS (A record or CNAME)

**Netlify:**
1. Site Settings → Domain Management
2. Add custom domain
3. Netlify provides DNS records

**DNS Records:**
```
Type: A
Name: @
Value: [Platform IP - see docs]

Type: CNAME
Name: www
Value: yourdomain.com
```

---

## 🔧 Optimization Checklist

### Images
- [ ] Hero poster optimized (< 200KB)
- [ ] Video compressed (< 5MB)
- [ ] Use WebP format where possible

### Code
- [ ] Remove console.logs (or use import.meta.env.PROD guards)
- [ ] Enable Gzip/Brotli compression on server
- [ ] Set proper cache headers

### Performance
```bash
# Analyze bundle size
pnpm build
npx vite-bundle-visualizer
```

Target bundle sizes:
- Main JS: < 200KB
- CSS: < 50KB
- Total initial load: < 500KB

---

## 🐛 Troubleshooting

**Build fails:**
- Check Node version (18+)
- Clear cache: `rm -rf node_modules pnpm-lock.yaml && pnpm install`

**Video not loading:**
- Ensure hero.mp4 is in `/public` (not `/public/assets`)
- Check video format (H.264 MP4)
- Verify URL in site.config.ts

**404 on refresh:**
- Add redirect rule: `/*  /index.html  200` (Netlify)
- Or configure server (Nginx/Apache)

**Slow load times:**
- Compress video further
- Optimize poster image
- Enable CDN caching

---

## ✅ Go-Live Checklist

- [ ] All personal links updated
- [ ] Meta tags updated with real domain
- [ ] Assets uploaded to `/public`
- [ ] Production build successful
- [ ] Lighthouse score > 90
- [ ] Mobile tested
- [ ] Contact form tested
- [ ] Analytics installed (optional)
- [ ] Custom domain configured
- [ ] SSL certificate active (auto on Vercel/Netlify)

---

## 🚀 Quick Deploy Commands

**Vercel:**
```bash
vercel --prod
```

**Netlify:**
```bash
netlify deploy --prod --dir=dist
```

**GitHub Pages:**
```bash
pnpm deploy
```

---

**Need help?** Check platform-specific docs:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Vite Deployment](https://vitejs.dev/guide/static-deploy.html)

