
import React from 'react';

const BookConsultation: React.FC = () => {
  return (
    <div className="fade-in min-h-screen bg-white">
      {/* Header */}
      <section className="pt-24 pb-12 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-brand-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-6 block">Strategic Alignment</span>
          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Book a Consultation</h1>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            A structured conversation to assess fit and support needs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-brand-charcoal/80 font-light leading-relaxed mb-8">
              Tegemea works with leaders and professional service businesses who value clarity, discretion, and dependable delivery. This free consultation is designed to determine whether our retainer-based support is the right fit for your business.
            </p>
            <div className="p-8 bg-brand-sand/40 border-l-4 border-brand-gold italic text-brand-navy">
              <p className="m-0 font-medium">This is not a sales call. It is a focused discussion grounded in your workload, priorities, and expectations.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-12">
            <div>
              <h2 className="text-2xl font-serif text-brand-navy mb-8">What to Expect</h2>
              <ul className="space-y-6">
                {[
                  'Discuss your current operational challenges',
                  'Explore the type and volume of support required',
                  'Explain how Tegemea works and our retainer model',
                  'Recommend a suitable next step if there is alignment'
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-4 text-brand-charcoal/70 text-sm leading-relaxed">
                    <span className="text-brand-gold font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-xs text-brand-stone italic font-light">There is no obligation to proceed.</p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-brand-navy mb-8">Who This Is For</h2>
              <ul className="space-y-6">
                {[
                  'Founders and consultants',
                  'Professional service businesses',
                  'Leaders managing growing workloads',
                  'Organisations seeking reliable, UK-based support'
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-4 text-brand-charcoal/70 text-sm leading-relaxed">
                    <svg className="w-5 h-5 text-brand-gold/50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-xs text-brand-navy font-bold uppercase tracking-widest">
                Not designed for ad-hoc or short-term task support.
              </p>
            </div>
          </div>

          {/* Approach */}
          <div className="border-t border-brand-navy/10 pt-12 mb-12">
            <h2 className="text-2xl font-serif text-brand-navy mb-6">Our Approach</h2>
            <p className="text-brand-charcoal/70 leading-relaxed font-light mb-6">
              Support at Tegemea is delivered through structured retainers rather than hourly, one-off work. This allows for consistency, accountability, and a high standard of service.
            </p>
            <p className="text-brand-navy font-medium italic">We are intentional about fit on both sides.</p>
          </div>

          {/* Form/CTA Section */}
          <div className="bg-brand-navy text-white p-12 text-center shadow-2xl">
            <h2 className="text-3xl font-serif mb-8 text-white">Book Your Consultation</h2>
            <p className="text-white/60 mb-10 max-w-xl mx-auto text-sm font-light">
              Please be ready to share a brief overview of your business, the support you are seeking, and any immediate priorities.
            </p>
            
            <a 
              href="mailto:inquiries@tegemea.co.uk?subject=Consultation Request"
              className="inline-block px-12 py-5 bg-brand-gold text-brand-navy font-bold text-sm uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-xl shadow-brand-gold/20"
            >
              Request a Free Consultation
            </a>
            
            <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-white/40">
              Response typically within 24 business hours
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookConsultation;
