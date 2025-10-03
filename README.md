# Steven — Web & AI Automations

A modern, high-performance marketing site for freelance web development and AI automation services.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📁 Required Assets

Before running the site, add these media files to the `/public` directory:

### Hero Media
- `/public/hero-poster.jpg` - Static image used as poster/fallback (optimized, ~200KB max)
- `/public/hero.mp4` - Background video for desktop (optional, MP4 format, ~5MB max)

**Optimization Tips:**
- Poster image: 1920x1080px, WebP or optimized JPG
- Video: H.264 codec, 1080p max, 30fps, compress for web

### Placeholder Generation
If you don't have assets ready, you can:
1. Use a solid color image as poster (e.g., dark gradient)
2. Skip the video entirely (poster will be used on all devices)

## ⚙️ Configuration

Edit your links and branding in `/src/site.config.ts`:

```typescript
export const SITE = {
  brand: "Your Name — Web & AI Automations",
  calendly: "https://calendly.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-username",
  portfolio: "https://your-portfolio-url.com",
  email: "hello@yourdomain.com",
  // ... more config
}
```

## 🎨 Features

- **Single-page design** with smooth scroll navigation
- **Smart video loading** - poster-first approach, no layout shift
- **Mobile optimized** - static poster on mobile, no video load
- **Accessibility-first** - respects `prefers-reduced-motion`, semantic HTML
- **Glass morphism UI** - backdrop blur effects, modern design
- **Performance optimized** - minimal dependencies, fast load times

## 📦 Tech Stack

- **React 18** + TypeScript
- **Vite** - Lightning-fast dev server
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Modern icon set

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navigation.tsx      # Sticky nav with active states
│   ├── HeroSection.tsx     # Video hero with smart loading
│   ├── ServicesSection.tsx # Service cards + process steps
│   ├── ContactSection.tsx  # Contact form + quick links
│   └── FooterSection.tsx   # Simple footer
├── site.config.ts          # Centralized configuration
├── App.tsx                 # Main app with section tracking
└── main.tsx                # Entry point
```

## 🔧 Customization

### Colors
Edit the purple theme in `tailwind.config.js`:

```js
colors: {
  purple: {
    600: '#9333ea', // Primary CTA color
    // ... other shades
  }
}
```

### Services
Update services in `src/site.config.ts`:

```typescript
services: [
  {
    title: "Your Service",
    value: "One-line value prop",
    bullets: ["Feature 1", "Feature 2", ...]
  }
]
```

### Contact Form
The form currently logs to console. To connect a backend:

1. Create an API endpoint at `/api/contact`
2. Update `handleSubmit` in `ContactSection.tsx`
3. Or use a service like Formspree, Web3Forms, etc.

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Netlify
```bash
netlify deploy --prod
```

### Build for any static host
```bash
pnpm build
# Upload the /dist folder
```

## 📝 SEO & Meta Tags

Update meta tags in `/index.html`:
- Title and description
- Open Graph tags for social previews
- Twitter card metadata
- Update domain URLs to your actual domain

## ♿ Accessibility

- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Respects reduced motion preferences
- Color contrast meets WCAG AA standards

## 📄 License

MIT License - feel free to use this as a template for your own site!

---

Built with ❤️ using React, TypeScript, and Tailwind CSS

