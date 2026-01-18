import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Services from './components/Services';
import OperationalAssessment from './components/OperationalAssessment';
import JoinUs from './components/JoinUs';
import BookConsultation from './components/BookConsultation';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Navigation view state
  const [currentView, setCurrentView] = useState<'home' | 'services' | 'join' | 'book'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#services-page') {
        setCurrentView('services');
      } else if (hash === '#join-us') {
        setCurrentView('join');
      } else if (hash === '#book-consultation') {
        setCurrentView('book');
      } else {
        setCurrentView('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view: 'home' | 'services' | 'join' | 'book') => {
    setCurrentView(view);
    if (view === 'home') window.location.hash = '';
    if (view === 'services') window.location.hash = 'services-page';
    if (view === 'join') window.location.hash = 'join-us';
    if (view === 'book') window.location.hash = 'book-consultation';
    window.scrollTo(0, 0);
  };

  return (
    <div className="font-sans text-brand-navy antialiased bg-white">
      <Navbar onNavigate={navigateTo} currentView={currentView} />
      
      <main className="pt-20">
        {currentView === 'home' && (
          <div className="fade-in">
            <Hero onBook={() => navigateTo('book')} />
            
            <Trust />

            {/* Media Recognition Section */}
            <section className="pt-2 pb-12 bg-white border-b border-brand-navy/5">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col items-center justify-center text-center">
                  <span className="text-[10px] uppercase tracking-[0.5em] text-brand-stone font-bold mb-8 opacity-60">As featured in</span>
                  <a 
                    href="https://www.thetimes.com/static/startup-sme-legal-it-ip-eot-accountancy/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12 grayscale hover:grayscale-0 transition-all duration-700"
                    aria-label="Read our feature in The Times"
                  >
                    <span className="text-5xl md:text-8xl font-serif font-black tracking-tighter text-brand-navy border-b-4 border-transparent group-hover:border-brand-gold transition-all duration-500">THE TIMES</span>
                    <div className="flex flex-col items-center md:items-start">
                      <span className="text-[12px] uppercase tracking-widest text-brand-gold font-bold bg-brand-sand px-6 py-2 border border-brand-gold/30 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                        Online Edition
                      </span>
                      <span className="mt-3 text-[10px] text-brand-stone uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 transition-opacity">Read the Article →</span>
                    </div>
                  </a>
                </div>
              </div>
            </section>

            {/* Strategic: Operational Precision Section */}
            <section className="py-16 bg-brand-navy text-white">
              <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="space-y-8">
                  <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                    Operational Precision <br/>
                    <span className="italic text-brand-gold">for Professional Service Leaders.</span>
                  </h2>
                  <p className="text-white/60 text-lg leading-relaxed font-light">
                    Tegemea bridges the gap between high-level ambition and ground-level execution. We provide the architecture for your success.
                  </p>
                  <ul className="space-y-4">
                    {['Strategic Calendar Management', 'Executive Communication', 'Project Oversight', 'Process Documentation'].map(item => (
                      <li key={item} className="flex items-center space-x-3 text-sm tracking-wide">
                        <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-brand-charcoal p-1 border border-white/10 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                    alt="Strategic business architecture and professional growth" 
                    className="w-full h-auto brightness-75 grayscale hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
            </section>

            {/* Editorial: About Section */}
            <section id="about" className="py-16 overflow-hidden bg-white">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200" 
                      alt="Professional UK Virtual Assistant consultant"
                      className="w-full h-[600px] object-cover object-[center_20%] rounded-sm shadow-2xl transition-all duration-700 hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-gold/10 -z-10"></div>
                  </div>
                  <div>
                    <h2 className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-4 block">About Tegemea</h2>
                    <h3 className="text-4xl md:text-5xl font-serif text-brand-navy mb-8 leading-tight">
                      Born from a need for <span className="italic">actual</span> ownership.
                    </h3>
                    <p className="text-lg text-brand-charcoal/70 font-light leading-relaxed mb-8">
                      The virtual assistant marketplace is saturated with task-takers. We built Tegemea for the 1% of founders who don't want a "freelancer" to manage—they want a firm that manages itself.
                    </p>
                    <p className="text-lg text-brand-charcoal/70 font-light leading-relaxed mb-12">
                      Our assistants are selected for their strategic thinking, emotional intelligence, and ability to handle complex confidential environments.
                    </p>
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <span className="block text-3xl font-serif font-bold text-brand-navy">100%</span>
                        <span className="text-[10px] uppercase tracking-widest text-brand-stone opacity-60">UK Based</span>
                      </div>
                      <div className="w-px h-12 bg-brand-navy/10"></div>
                      <div className="text-center">
                        <span className="block text-3xl font-serif font-bold text-brand-navy">8yr+</span>
                        <span className="text-[10px] uppercase tracking-widest text-brand-stone opacity-60">Avg. Experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <OperationalAssessment onBook={() => navigateTo('book')} />

            {/* Book CTA */}
            <section id="book-cta" className="py-20 bg-brand-sand/20">
              <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-5xl font-serif text-brand-navy mb-8">Ready to reclaim your time?</h2>
                <p className="text-xl text-brand-charcoal/70 font-light mb-12 max-w-2xl mx-auto">
                  Our initial consultations are designed to assess fit and strategic alignment. We only take on partners we are certain we can serve exceptionally.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <button 
                    onClick={() => navigateTo('book')}
                    className="px-10 py-5 bg-brand-navy text-white text-lg font-medium hover:bg-brand-charcoal transition-all w-full sm:w-auto shadow-lg shadow-brand-navy/10">
                    Schedule Discovery Call
                  </button>
                  <button 
                    onClick={() => navigateTo('services')}
                    className="px-10 py-5 border border-brand-navy text-brand-navy text-lg font-medium hover:bg-brand-navy hover:text-white transition-all w-full sm:w-auto">
                    View Retainer Options
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentView === 'services' && (
          <div className="fade-in min-h-screen">
            <div className="py-16 bg-brand-navy text-white">
              <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Support Packages</h1>
                <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
                  Elite operational support structures tailored for high-growth founders and professional firms.
                </p>
              </div>
            </div>
            <Services onBook={() => navigateTo('book')} />
          </div>
        )}

        {currentView === 'join' && <JoinUs />}
        {currentView === 'book' && <BookConsultation />}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;