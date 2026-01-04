
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'services' | 'join' | 'book') => void;
  currentView: 'home' | 'services' | 'join' | 'book';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || currentView !== 'home' ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('home')}>
          <span className="text-2xl font-serif font-bold tracking-tight text-brand-navy">TEGEMEA</span>
        </div>
        
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
          <a 
            href="#how-it-works"
            className="text-[11px] uppercase tracking-widest font-bold text-brand-navy/70 hover:text-brand-gold transition-colors duration-200"
            onClick={(e) => {
              if (currentView !== 'home') {
                e.preventDefault();
                onNavigate('home');
                // Small delay to allow home to render before scrolling
                setTimeout(() => {
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
          >
            How It Works
          </a>
          <button 
            onClick={() => onNavigate('book')}
            className={`px-6 py-2.5 bg-brand-navy text-white text-[10px] uppercase tracking-widest font-bold hover:bg-brand-charcoal transition-all duration-300 ${currentView === 'book' ? 'ring-2 ring-brand-gold ring-offset-2' : ''}`}
          >
            Book a Consultation
          </button>
        </div>

        <button className="md:hidden text-brand-navy">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
