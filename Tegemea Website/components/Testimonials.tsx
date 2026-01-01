
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-brand-sand/20 border-y border-brand-navy/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <span className="text-brand-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Client Perspectives</span>
          <h2 className="text-4xl font-serif text-brand-navy">Trusted by Founders & Leaders</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="relative group p-10 bg-white border border-brand-navy/5 shadow-sm hover:shadow-md transition-all duration-500">
              <div className="absolute top-6 left-6 text-6xl font-serif text-brand-gold opacity-10 group-hover:opacity-20 transition-opacity">“</div>
              <div className="relative z-10">
                <p className="text-lg md:text-xl font-serif text-brand-navy mb-8 italic leading-relaxed">
                  {t.quote}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-px bg-brand-gold"></div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-brand-navy">{t.author}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-brand-stone mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
