import React, { useEffect } from 'react';

const BookConsultation: React.FC = () => {
  useEffect(() => {
    // Dynamically load the external script for the booking widget
    const script = document.createElement('script');
    script.src = 'https://tegemea.tegemea.uk/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script if necessary
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-16">
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
                  'Directors',
                  'Founders',
                  'Consultants',
                  'HR/Ops Managers'
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

          {/* Booking Widget Section */}
          <div className="bg-white border border-brand-navy/5 shadow-2xl rounded-sm overflow-hidden p-1 md:p-4">
            <div className="text-center mb-8 pt-6">
              <h2 className="text-3xl font-serif text-brand-navy mb-4">Select a Time</h2>
              <p className="text-brand-stone text-sm uppercase tracking-widest">Discovery Call Scheduling</p>
            </div>
            
            <div className="min-h-[700px] w-full bg-brand-sand/10">
              <iframe 
                src="https://tegemea.tegemea.uk/widget/booking/zCGeTLk5LRhbvZkFctFh" 
                style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '700px' }} 
                scrolling="no" 
                id="zCGeTLk5LRhbvZkFctFh_1762437269895"
                title="Tegemea Booking Widget"
              ></iframe>
            </div>

            <div className="text-center py-6 bg-brand-navy text-white/40 text-[10px] uppercase tracking-[0.3em]">
              Encrypted & Secure Scheduling
            </div>
          </div>
          
          <div className="mt-12 text-center">
             <p className="text-brand-stone text-xs font-light">
               Problems with the widget? Email us directly at <a href="mailto:inquiries@tegemea.co.uk" className="text-brand-gold font-medium hover:underline">inquiries@tegemea.co.uk</a>
             </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookConsultation;