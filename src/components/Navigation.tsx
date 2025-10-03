// File: src/components/Navigation.tsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE } from '../site.config';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-white" style={{ fontFamily: 'Georgia, serif' }}>
              <div className="text-2xl font-light italic">Steven</div>
              <div className="text-xs font-normal tracking-wider uppercase">
                WEB & AI AUTOMATIONS
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('home')}
              className="text-white hover:text-purple-300 font-medium transition-colors cursor-pointer text-sm tracking-wide"
            >
              HOME
            </button>
            <button 
              onClick={() => handleNavigation('services')}
              className="text-white hover:text-purple-300 font-medium transition-colors cursor-pointer text-sm tracking-wide"
            >
              SERVICES
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className="text-white hover:text-purple-300 font-medium transition-colors cursor-pointer text-sm tracking-wide"
            >
              CONTACT
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={() => window.open(SITE.calendly, '_blank', 'noopener,noreferrer')}
              className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-6 py-2 rounded-full hover:bg-white/20 transition-all font-light text-sm tracking-widest"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              BOOK A CALL
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 bg-black/80 backdrop-blur-sm rounded-lg">
            <nav className="flex flex-col space-y-4 px-4">
              <button 
                onClick={() => handleNavigation('home')}
                className="text-white hover:text-purple-300 font-medium text-left"
              >
                HOME
              </button>
              <button 
                onClick={() => handleNavigation('services')}
                className="text-white hover:text-purple-300 font-medium text-left"
              >
                SERVICES
              </button>
              <button 
                onClick={() => handleNavigation('contact')}
                className="text-white hover:text-purple-300 font-medium text-left"
              >
                CONTACT
              </button>
              <button 
                onClick={() => window.open(SITE.calendly, '_blank', 'noopener,noreferrer')}
                className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-6 py-2 rounded-full hover:bg-white/20 transition-all font-light tracking-widest"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                BOOK A CALL
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;

