
import React from 'react';
import { PACKAGES } from '../constants';

interface ServicesProps {
  onBook: () => void;
}

const Services: React.FC<ServicesProps> = ({ onBook }) => {
  return (
    <section id="services" className="py-16 bg-brand-sand/30">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-12">
          <span className="text-brand-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-6 block">Engagement Models</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-navy mb-8 leading-tight">
            Structured retainer-based <br/>virtual assistant support.
          </h2>
          <p className="text-lg text-brand-charcoal/70 font-light leading-relaxed">
            At Tegemea, support is delivered through <strong className="text-brand-navy font-medium">retainer engagements</strong>, designed to provide consistency, clarity, and dependable execution. All support is UK-based and delivered by experienced professionals working within defined standards and ways of working.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PACKAGES.map((pkg) => (
            <div key={pkg.id} className="p-8 border border-brand-navy/5 bg-white shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group">
              <div className="flex-1">
                <div className="mb-6">
                  <h3 className="text-xl font-serif font-medium text-brand-navy mb-2">{pkg.name}</h3>
                  <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-brand-gold">
                    <span>Min term: {pkg.minTerm}</span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-baseline border-b border-brand-sand pb-3">
                    <span className="text-[9px] uppercase tracking-widest text-brand-stone">Allocation</span>
                    <span className="text-xs text-brand-navy font-medium">{pkg.hoursPerMonth}</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-brand-sand pb-3">
                    <span className="text-[9px] uppercase tracking-widest text-brand-stone">Rate</span>
                    <span className="text-base text-brand-navy font-serif font-bold">{pkg.rate}</span>
                  </div>
                </div>

                <p className="text-brand-charcoal text-xs leading-relaxed mb-6">
                  {pkg.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-[9px] uppercase tracking-[0.2em] font-bold text-brand-navy mb-3">Best suited for:</h4>
                  <ul className="space-y-2">
                    {pkg.bestFor.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-[11px] text-brand-charcoal/70 leading-relaxed">
                        <span className="w-1 h-1 bg-brand-gold rounded-full mt-1.5 shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-brand-sand/50 rounded-sm italic text-[11px] text-brand-navy/80 leading-relaxed border-l-2 border-brand-gold">
                  <span className="font-bold uppercase tracking-tighter block mb-1">Strategic Fit:</span>
                  {pkg.whyWorks}
                </div>
              </div>
              
              <button 
                onClick={onBook} 
                className="mt-8 text-center py-3.5 text-[10px] uppercase tracking-widest font-bold transition-all duration-300 bg-brand-navy text-white hover:bg-brand-charcoal shadow-md shadow-brand-navy/10"
              >
                Inquire for {pkg.name}
              </button>
            </div>
          ))}
        </div>

        {/* Inclusion & Exclusion Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-brand-navy/10 pt-12">
          {/* Inclusion Box with Gold Border */}
          <div className="border border-brand-gold/40 bg-white p-10 lg:p-12 relative overflow-hidden flex flex-col min-h-[400px]">
            <div className="absolute top-0 left-0 w-24 h-24 bg-brand-gold/5 -ml-12 -mt-12 rounded-full"></div>
            
            <h3 className="text-2xl font-serif text-brand-navy mb-8 relative z-10">
              What all retainers include
            </h3>
            
            <div className="flex-grow">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 relative z-10">
                {[
                  'UK-based virtual assistant support',
                  'Defined communication standards',
                  'Structured onboarding',
                  'Clear scope and expectations',
                  'Professional, discreet delivery',
                  'Long-term partnership mindset',
                  'Holiday cover',
                  'Governance and visibility of work'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-sm text-brand-charcoal/70">
                    <svg className="w-4 h-4 text-brand-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 pt-8 border-t border-brand-gold/20 relative z-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold">
                Standard Professional Commitments
              </p>
            </div>
          </div>
          
          {/* Exclusion Box (Navy) */}
          <div className="bg-brand-navy text-white p-10 lg:p-12 relative overflow-hidden flex flex-col min-h-[400px]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -mr-16 -mt-16 rotate-45"></div>
            
            <h3 className="text-2xl font-serif mb-8 text-white relative z-10">
              What this is not
            </h3>
            
            <div className="flex-grow">
              <p className="text-white/60 text-sm mb-6 leading-relaxed relative z-10 max-w-sm">
                To protect quality and delivery standards, Tegemea is not suited to engagements that do not value structure.
              </p>
              <ul className="space-y-4 relative z-10">
                {[
                  'One-off, low-cost task outsourcing',
                  'Short-term or casual arrangements',
                  'Clients seeking ad-hoc support without structure'
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm text-white/80">
                    <span className="text-brand-gold font-bold text-lg leading-none">×</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold">
                Built for precision, trust, and continuity
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white border border-brand-navy/5 p-12 text-center max-w-4xl mx-auto shadow-sm">
          <h3 className="text-3xl font-serif text-brand-navy mb-4">Book a free consultation</h3>
          <p className="text-brand-charcoal/60 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            This is a structured conversation to assess fit, priorities, and the appropriate retainer level for your business. No pressure. No sales tactics. Just clarity.
          </p>
          <button 
            onClick={onBook}
            className="inline-block px-12 py-5 bg-brand-gold text-brand-navy font-bold text-sm uppercase tracking-widest hover:bg-opacity-90 transition-all"
          >
            Book a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
