# Setup Guide

## 📋 Prerequisites

- Node.js 18+ installed
- pnpm package manager (`npm install -g pnpm`)

## 🚀 Initial Setup

1. **Install Dependencies**
   ```bash
   pnpm install
   ```

2. **Configure Your Site**
   
   Edit `/src/site.config.ts` and update:
   ```typescript
   export const SITE = {
     brand: "Your Name — Web & AI Automations",
     calendly: "https://calendly.com/YOUR_USERNAME",
     linkedin: "https://www.linkedin.com/in/YOUR_USERNAME",
     portfolio: "https://YOUR_PORTFOLIO_URL",
     email: "YOUR_EMAIL@domain.com",
     // ...
   }
   ```

3. **Add Media Assets**
   
   Place these files in `/public/`:
   - `hero-poster.jpg` - Background image (1920x1080px, optimized)
   - `hero.mp4` - Background video (optional, H.264, 1080p max)

   **Quick Placeholder Options:**
   - Use any dark/gradient image as poster
   - Video is optional (poster will be used if missing)
   - Or download free stock from Pexels/Unsplash

4. **Run Development Server**
   ```bash
   pnpm dev
   ```
   
   Open http://localhost:5173

## 🎨 Customization

### Update Brand Colors
Edit `tailwind.config.js`:
```js
colors: {
  purple: {
    600: '#YOUR_COLOR', // Main CTA color
  }
}
```

### Update Services
Edit the `services` array in `/src/site.config.ts`

### Update Meta Tags
Edit `/index.html` - update title, description, and OG tags

## 🚢 Deployment

### Build for Production
```bash
pnpm build
```

### Deploy to Vercel
```bash
npx vercel
```

### Deploy to Netlify
```bash
npx netlify-cli deploy --prod
```

## 📝 Environment Variables (Optional)

If you want to use environment variables instead of hardcoding in config:

Create `.env`:
```bash
VITE_CALENDLY_URL=https://calendly.com/your-username
VITE_LINKEDIN_URL=https://www.linkedin.com/in/your-username
VITE_PORTFOLIO_URL=https://your-portfolio.com
VITE_EMAIL=hello@yourdomain.com
```

Then update `site.config.ts` to use:
```typescript
calendly: import.meta.env.VITE_CALENDLY_URL || "fallback-url",
```

## ✅ Checklist

- [ ] Install dependencies
- [ ] Update site.config.ts with your info
- [ ] Add hero-poster.jpg to /public
- [ ] (Optional) Add hero.mp4 to /public
- [ ] Update meta tags in index.html
- [ ] Test on mobile and desktop
- [ ] Run `pnpm build` to verify production build
- [ ] Deploy!

## 🆘 Troubleshooting

**Video not loading?**
- Ensure hero.mp4 is in /public
- Check browser console for errors
- Video must be H.264 MP4 format

**Styles not applying?**
- Run `pnpm dev` to restart dev server
- Check Tailwind config syntax

**Build errors?**
- Run `pnpm lint` to check for issues
- Ensure all TypeScript types are correct

