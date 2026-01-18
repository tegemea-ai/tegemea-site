import React from 'react';

interface FooterProps {
  onNavigate: (view: 'home' | 'services' | 'join' | 'book') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="text-3xl font-serif font-bold mb-8 block cursor-pointer" onClick={() => onNavigate('home')}>TEGEMEA</span>
            <p className="text-white/60 max-w-sm font-light leading-relaxed">
              Elite virtual assistant and operational management for leaders scaling high-trust professional service businesses across the UK.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-6 uppercase tracking-widest text-xs text-brand-gold">Navigation</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => onNavigate('join')} className="hover:text-white transition-colors">Join Us</button></li>
              <li><button onClick={() => onNavigate('book')} className="hover:text-white transition-colors">Book a Consultation</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-6 uppercase tracking-widest text-xs text-brand-gold">Contact</h4>
            <ul className="space-y-4 text-white/50 text-sm font-light">
              <li>London, United Kingdom</li>
              <li><a href="mailto:info@tegemea.com" className="hover:text-white transition-colors">info@tegemea.com</a></li>
              <li>+44 (0) 20 8123 4567</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 tracking-widest uppercase">
          <p>© 2024 Tegemea Operations Ltd. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Engagement</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;