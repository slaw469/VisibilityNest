// File: src/components/HeroSection.tsx
import { useState, useEffect } from 'react';
import { Linkedin, Github } from 'lucide-react';
import { SITE } from '../site.config';

const HeroSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videosLoaded, setVideosLoaded] = useState(false);

  const videos = [
    'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4',
    'https://videos.pexels.com/video-files/2098989/2098989-uhd_2560_1440_30fps.mp4',
    'https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4',
    'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [videos.length]);

  const handleBookCall = () => {
    window.open(SITE.calendly, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Static Background Image - Shows First */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
          videosLoaded ? 'opacity-0' : 'opacity-100'
        }`} 
        style={{ 
          zIndex: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop")'
        }} 
      />

      {/* Multiple Background Videos */}
      {videos.map((video, index) => (
        <video
          key={index}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedData={() => index === 0 && setVideosLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ zIndex: index === currentVideoIndex ? 1 : 0 }}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            {SITE.tagline}
          </h1>
          
          <p className="text-lg text-white/90 mb-8 font-light">
            {SITE.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button
              onClick={handleBookCall}
              className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-10 py-4 rounded-full hover:bg-white/20 transition-all font-light text-base tracking-widest"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              BOOK A CALL
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <button
              onClick={() => window.open(SITE.linkedin, '_blank', 'noopener,noreferrer')}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </button>
            <button
              onClick={() => window.open(SITE.portfolio, '_blank', 'noopener,noreferrer')}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Portfolio</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

