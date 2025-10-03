// File: src/components/HeroSection.tsx
import { Calendar } from 'lucide-react';
import { SITE } from '../site.config';

/**
 * Hero Section - Production-Ready, Zero Client Runtime Waste
 * 
 * Design decisions:
 * - Mobile (< md): Static <picture> element only (WebP + PNG fallback)
 * - Desktop (≥ md): Single <video> with poster, hidden on mobile via Tailwind
 * - No useEffect, no useState - pure deterministic render
 * - motion-reduce: hides video, shows static image for accessibility
 */
const HeroSection = () => {
  const handleBookCall = () => {
    window.open(SITE.calendly, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Mobile: Static image only - never renders video element on mobile */}
      <picture className="absolute inset-0 md:hidden">
        <source srcSet={SITE.hero.mobileSrc} type="image/webp" />
        <img
          src={SITE.hero.posterSrc}
          alt="Professional workspace showcasing web development and AI automation"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
        />
      </picture>

      {/* Desktop: Video with motion-reduce support */}
      <video
        className="hidden md:block absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        poster={SITE.hero.posterSrc}
        preload="metadata"
        aria-hidden="true"
      >
        <source src={SITE.hero.videoSrc} type="video/mp4" />
      </video>

      {/* Desktop: Fallback image for motion-reduce users */}
      <picture className="hidden md:block motion-reduce:block absolute inset-0 motion-safe:hidden">
        <source srcSet={SITE.hero.desktopSrc} type="image/webp" />
        <img
          src={SITE.hero.posterSrc}
          alt="Professional workspace showcasing web development and AI automation"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
      </picture>
      
      {/* Dark Overlay - ensures text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-white/20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            {SITE.tagline}
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 font-light max-w-2xl mx-auto">
            {SITE.description}
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button
              onClick={handleBookCall}
              className="bg-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-purple-700 focus:ring-4 focus:ring-purple-500/50 transition-colors font-semibold text-base sm:text-lg flex items-center justify-center gap-2"
              aria-label="Book a call via Calendly"
            >
              <Calendar className="w-5 h-5" aria-hidden="true" />
              BOOK A CALL
            </button>
          </div>

          {/* Secondary Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-white/80 text-sm">
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors focus:text-white"
            >
              LinkedIn
            </a>
            <a
              href={SITE.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors focus:text-white"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
