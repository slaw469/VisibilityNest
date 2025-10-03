# Assets Guide

## 🖼️ Required Media Files

### Hero Poster Image
**Location:** `/public/hero-poster.jpg`

**Specifications:**
- Format: JPG or WebP
- Dimensions: 1920x1080px (16:9 ratio)
- File size: < 200KB (optimized)
- Content: Dark/moody background that works with white text overlay

**Quick Options:**
1. **Free Stock Photos:**
   - [Unsplash](https://unsplash.com) - Search: "dark workspace", "minimal desk", "tech background"
   - [Pexels](https://pexels.com) - Search: "modern office", "coding", "minimalist"
   
2. **Simple Gradient:**
   Use a tool like [CSS Gradient](https://cssgradient.io/) to create a gradient, screenshot it, or use:
   - Dark purple to black gradient
   - Navy to black gradient
   - Solid dark gray (#1a1a1a)

3. **Your Own Photo:**
   - Photo of your desk/workspace
   - Blurred cityscape
   - Abstract tech/code imagery

### Hero Video (Optional)
**Location:** `/public/hero.mp4`

**Specifications:**
- Format: MP4 (H.264 codec)
- Dimensions: 1920x1080px max
- Frame rate: 30fps
- File size: < 5MB (highly compressed)
- Length: 10-30 seconds, loopable

**Quick Options:**
1. **Free Stock Videos:**
   - [Pexels Videos](https://www.pexels.com/videos/)
   - [Pixabay Videos](https://pixabay.com/videos/)
   - Search: "coding", "typing", "workspace", "tech"

2. **Skip It:**
   - Video is optional
   - Poster image will be used on all devices if video is missing
   - No performance penalty

### Video Compression
If your video is > 5MB, compress it:

```bash
# Using ffmpeg (install via: brew install ffmpeg)
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -b:v 1M -crf 28 hero.mp4
```

Or use online tools:
- [HandBrake](https://handbrake.fr/) (desktop app)
- [Clipchamp](https://clipchamp.com) (online)
- [CloudConvert](https://cloudconvert.com/mp4-converter)

## 🎨 Design Tips

### Poster Image Overlay
The site applies this gradient over your image:
```css
bg-gradient-to-b from-black/60 via-black/50 to-black/70
```

**This means:**
- Image should be fairly dark or mid-tone
- White text needs to be readable
- High contrast areas work best
- Test with the overlay to ensure legibility

### Mobile Considerations
- Poster displays on mobile (video doesn't load)
- Ensure key visual elements are centered
- Works in both portrait and landscape
- Text overlay is responsive

## 📏 Image Optimization Checklist

- [ ] Image dimensions are 1920x1080px
- [ ] File size is under 200KB
- [ ] Format is JPG or WebP
- [ ] White text is readable with overlay
- [ ] Image looks good on mobile
- [ ] No important details in extreme corners (may be cropped)

## 🔧 Quick Setup (No Assets)

If you want to launch immediately without custom assets:

1. **Solid Color Fallback:**
   Create a 1920x1080px solid color image:
   - Background: #1a1a2e (dark blue-gray)
   - Or: #1a1a1a (near black)
   
2. **CSS-Only Background:**
   Remove poster/video references and use CSS gradient:
   ```tsx
   // In HeroSection.tsx, replace media section with:
   <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-black" />
   ```

## 🚀 Advanced: Using Your Own Branding

### Custom Hero Background
1. Create a branded graphic (Figma/Canva)
2. Include subtle logo or pattern
3. Keep it minimal (supports text overlay)
4. Export at 2x resolution (3840x2160) and compress

### Video Loops
- Ensure first and last frames match for seamless loop
- Avoid sudden movements
- Subtle motion works best (typing, particles, slow pans)

## 📦 File Placement

```
/public/
├── hero-poster.jpg   ← Add this
├── hero.mp4          ← Add this (optional)
└── vite.svg          (keep existing)
```

## ✅ Testing

After adding assets:
1. `pnpm dev`
2. Check hero loads without flash
3. Test on mobile (should show poster only)
4. Verify text readability
5. Check page load speed

---

**Need Help?** Drop your chosen image/video in `/public/` and the site will automatically use it!

