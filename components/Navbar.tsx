import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'services' | 'join' | 'book') => void;
  currentView: 'home' | 'services' | 'join' | 'book';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleMobileNav = (view: 'home' | 'services' | 'join' | 'book') => {
    onNavigate(view);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          isScrolled || currentView !== 'home' || isMenuOpen 
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo Section */}
          <div 
            className="flex items-center space-x-2 cursor-pointer relative z-[70]" 
            onClick={() => handleMobileNav('home')}
          >
            <span className={`text-2xl font-serif font-bold tracking-tight transition-colors duration-300 text-brand-navy uppercase`}>
              Tegemea
            </span>
          </div>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-10">
            <button 
              onClick={() => onNavigate('home')}
              className={`text-[11px] uppercase tracking-widest font-bold transition-colors duration-200 ${currentView === 'home' ? 'text-brand-gold' : 'text-brand-navy/70 hover:text-brand-gold'}`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('services')}
              className={`text-[11px] uppercase tracking-widest font-bold transition-colors duration-200 ${currentView === 'services' ? 'text-brand-gold' : 'text-brand-navy/70 hover:text-brand-gold'}`}
            >
              Services
            </button>
            <button 
              onClick={() => onNavigate('join')}
              className={`text-[11px] uppercase tracking-widest font-bold transition-colors duration-200 ${currentView === 'join' ? 'text-brand-gold' : 'text-brand-navy/70 hover:text-brand-gold'}`}
            >
              Join Us
            </button>
            <button 
              onClick={() => onNavigate('book')}
              className={`px-6 py-2.5 bg-brand-navy text-white text-[10px] uppercase tracking-widest font-bold hover:bg-brand-charcoal transition-all duration-300 ${currentView === 'book' ? 'ring-2 ring-brand-gold ring-offset-2' : ''}`}
            >
              Book a Consultation
            </button>
          </div>

          {/* Mobile Menu Button - Fixed z-index and click area */}
          <button 
            className="md:hidden text-brand-navy relative z-[70] p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Full screen, fixed visibility logic */}
      <div 
        className={`fixed inset-0 bg-white z-[55] transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen 
            ? 'translate-y-0 opacity-100 pointer-events-auto' 
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6 text-center">
          <nav className="flex flex-col items-center space-y-6">
            <button 
              onClick={() => handleMobileNav('home')}
              className={`text-2xl font-serif tracking-tight ${currentView === 'home' ? 'text-brand-gold' : 'text-brand-navy'}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleMobileNav('services')}
              className={`text-2xl font-serif tracking-tight ${currentView === 'services' ? 'text-brand-gold' : 'text-brand-navy'}`}
            >
              Services
            </button>
            <button 
              onClick={() => handleMobileNav('join')}
              className={`text-2xl font-serif tracking-tight ${currentView === 'join' ? 'text-brand-gold' : 'text-brand-navy'}`}
            >
              Join Us
            </button>
            <div className="pt-6 w-full max-w-xs">
              <button 
                onClick={() => handleMobileNav('book')}
                className="w-full py-5 bg-brand-navy text-white text-xs uppercase tracking-widest font-bold shadow-xl"
              >
                Book a Consultation
              </button>
            </div>
          </nav>
          
          <div className="pt-12 border-t border-brand-navy/5 w-full max-w-[200px]">
            <p className="text-[10px] uppercase tracking-[0.3em] text-brand-stone mb-4">Contact</p>
            <a 
              href="mailto:info@tegemea.com" 
              className="text-sm text-brand-navy hover:text-brand-gold transition-colors font-medium"
            >
              info@tegemea.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;