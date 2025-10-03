# ⚡ Quick Start - 5 Minutes to Launch

## Step 1: Install (30 seconds)
```bash
cd /Users/steven/web-funnel-1
pnpm install
```

## Step 2: Configure (2 minutes)

### Edit `src/site.config.ts`:
```typescript
export const SITE = {
  brand: "Your Name — Web & AI Automations",
  calendly: "https://calendly.com/YOUR-USERNAME",      // ← Update this
  linkedin: "https://www.linkedin.com/in/YOUR-USERNAME", // ← Update this
  portfolio: "https://YOUR-PORTFOLIO.com",              // ← Update this
  email: "YOUR-EMAIL@domain.com",                       // ← Update this
  // ...
}
```

## Step 3: Add Assets (1 minute)

### Required: Hero Poster
Download any dark image (1920x1080) and save as:
```
/public/hero-poster.jpg
```

**Quick options:**
- [Unsplash Dark Workspace](https://unsplash.com/s/photos/dark-workspace)
- [Pexels Minimal](https://www.pexels.com/search/minimal/)
- Or use a solid dark gradient

### Optional: Hero Video
```
/public/hero.mp4  (optional - poster used if missing)
```

## Step 4: Update Meta Tags (1 minute)

### Edit `index.html` - Update these:
```html
<title>Your Name — Web & AI Automations</title>
<meta property="og:url" content="https://YOUR-DOMAIN.com/" />
<meta property="twitter:url" content="https://YOUR-DOMAIN.com/" />
```

## Step 5: Run & Deploy (30 seconds)

### Local Development:
```bash
pnpm dev
# Open http://localhost:5173
```

### Deploy to Production:
```bash
pnpm build
npx vercel
# or
npx netlify-cli deploy --prod --dir=dist
```

---

## ✅ Checklist

- [ ] `pnpm install` completed
- [ ] Updated `site.config.ts` with your URLs
- [ ] Added `/public/hero-poster.jpg`
- [ ] Updated meta tags in `index.html`
- [ ] Tested locally with `pnpm dev`
- [ ] Deployed with `npx vercel`

---

## 🎨 Current Setup

### Navigation (3 items only)
- Home
- Services  
- Contact

### Sections
1. **Hero** - Big headline + CTA
2. **Services** - 3 service cards + process
3. **Contact** - Form + quick links

### CTAs
- "Book a Call" → Calendly
- LinkedIn → Profile
- Portfolio → Your site

---

## 🚨 Troubleshooting

**Build fails?**
```bash
chmod +x node_modules/.bin/vite
pnpm build
```

**Video not loading?**
- Make sure it's `/public/hero.mp4` (not in `/public/assets/`)
- Or skip it - poster will be used

**Can't deploy?**
```bash
npm i -g vercel
vercel login
vercel --prod
```

---

## 📚 Full Docs

- `README.md` - Overview
- `SETUP.md` - Detailed setup
- `ASSETS_GUIDE.md` - Image/video specs
- `DEPLOYMENT.md` - Deploy options
- `PROJECT_SUMMARY.md` - What was built

---

## 🎉 You're Ready!

Your site will be live in under 5 minutes. Just update config, add poster, and deploy. 

**Go ship it! 🚀**

