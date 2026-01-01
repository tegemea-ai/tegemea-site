
import React from 'react';
import { TRUST_POINTS } from '../constants';

const Trust: React.FC = () => {
  return (
    <section className="py-12 bg-white border-t border-brand-navy/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {TRUST_POINTS.map((point, i) => (
            <div key={i} className="text-center md:text-left">
              <h3 className="text-xl font-serif font-medium text-brand-navy mb-4">{point.title}</h3>
              <p className="text-brand-charcoal/60 leading-relaxed text-sm">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
