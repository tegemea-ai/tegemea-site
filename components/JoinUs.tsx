
import React from 'react';

const JoinUs: React.FC = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-brand-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-6 block">Careers at Tegemea</span>
          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Join the Tegemea Team</h1>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Professional virtual assistant roles for people who value excellence, trust, and impact.
          </p>
        </div>
      </section>

      {/* Intro Context - Reduced bottom padding */}
      <section className="pt-12 pb-4 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-brand-charcoal/80 font-light leading-relaxed mb-10">
              Tegemea works with leaders and professional service businesses who expect a high standard of operational support. To meet that standard, we are intentional about the people we bring into our team.
            </p>
            <p className="text-brand-charcoal/70 leading-relaxed mb-0">
              We are currently seeking experienced, values-led Virtual Assistants to support a portfolio of clients across professional services and mission-driven organisations. This role is suited to individuals who take pride in their work, value discretion, and enjoy delivering consistent, high-quality support.
            </p>
          </div>
        </div>
      </section>

      {/* The Role & Responsibilities - Reduced top padding */}
      <section className="py-12 bg-brand-sand/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2 className="text-3xl font-serif text-brand-navy mb-8">The Role</h2>
              <p className="text-brand-charcoal/70 mb-8 leading-relaxed font-light">
                As a Tegemea Virtual Assistant, you will work closely with senior leaders and decision-makers, providing structured, dependable support that protects their time and enables focus.
              </p>
              <div className="space-y-6">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">Key Responsibilities</h4>
                <ul className="space-y-4">
                  {[
                    'Diary and inbox management',
                    'Client and stakeholder communication',
                    'Research, documentation, and coordination',
                    'Supporting projects and recurring operational tasks'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3 text-brand-navy text-sm border-b border-brand-navy/5 pb-4">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-brand-navy text-white p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -mr-16 -mt-16 rotate-45"></div>
              <h3 className="text-2xl font-serif mb-6 relative z-10">Our Model</h3>
              <p className="text-white/80 mb-10 leading-relaxed italic font-light relative z-10">
                "This is not task-by-task freelancing. It is long-term, retainer-based support delivered within defined standards and ways of working."
              </p>
              <div className="space-y-8 relative z-10">
                <div>
                  <h4 className="text-brand-gold font-bold text-[10px] uppercase tracking-widest mb-4">Who This Suits</h4>
                  <ul className="space-y-3 text-sm text-white/70 font-light">
                    {[
                      'Experience in corporate or regulated environments',
                      'Experience supporting senior executive leadership',
                      'Comfortable with high confidentiality standards',
                      'Seeking a sustainable, professional remote career'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <span className="text-brand-gold font-bold text-lg leading-none shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Updated with lighter background color */}
      <section className="py-16 bg-brand-sand/40 border-y border-brand-navy/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-brand-navy mb-8">Our Philosophy</h2>
          <div className="inline-block px-4 py-1 border border-brand-gold text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-10">
            Human Intelligence is Irreplaceable
          </div>
          <p className="text-lg text-brand-charcoal/70 font-light leading-relaxed mb-12">
            At Tegemea, we do not believe AI replaces people. We believe people who use modern tools well are better equipped to deliver excellent work.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Emotional Intelligence', 'Sound Judgement', 'Strategic Thinking', 'Clear Communication'].map((attr, i) => (
              <div key={i} className="p-6 border border-brand-navy/5 bg-white text-center shadow-sm">
                <p className="text-xs font-serif text-brand-navy font-bold">{attr}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-sm text-brand-stone italic">
            We equip our team with a modern operational technology stack that enhances expertise rather than replacing it.
          </p>
        </div>
      </section>

      {/* Values & Culture */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-3xl font-serif text-brand-navy mb-8">Standards and Values</h2>
            <div className="space-y-8">
              {[
                { t: 'Integrity and Professionalism', d: 'Operating with unwavering ethics and discreet standards.' },
                { t: 'Excellence in Delivery', d: 'Getting it right the first time, every time.' },
                { t: 'Growth through Learning', d: 'Continuous improvement through feedback and shared wisdom.' },
                { t: 'People-First Approach', d: 'For both our clients and our valued team members.' }
              ].map((v, i) => (
                <div key={i}>
                  <h4 className="font-serif text-lg text-brand-navy mb-2">{v.t}</h4>
                  <p className="text-sm text-brand-charcoal/60 font-light">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border-l border-brand-gold/30 pl-8 lg:pl-12 flex flex-col justify-center">
            <h2 className="text-3xl font-serif text-brand-navy mb-8">Support & Culture</h2>
            <p className="text-brand-charcoal/70 mb-8 font-light leading-relaxed">
              We believe high standards and supportive environments can and should coexist. You will receive structured onboarding, clear expectations, and access to a collaborative professional team.
            </p>
            <p className="text-brand-gold font-bold text-xs uppercase tracking-widest">
              Built on Trust and Mutual Respect.
            </p>
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="py-16 bg-brand-navy text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border border-white rotate-12"></div>
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif mb-4">Our Recruitment Process</h2>
            <p className="text-white/50 font-light">We are intentional about who joins Tegemea because fit matters on both sides.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { s: '01', t: 'Initial Screening', d: 'Aligning experience and background with our firm standards.' },
              { s: '02', t: 'Skills-Based Assessment', d: 'Demonstrating the practical capability to handle high-level operational tasks.' },
              { s: '03', t: 'Interview Presentation', d: 'A structured conversation ensuring alignment with our working style and culture.' }
            ].map((step, i) => (
              <div key={i} className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm">
                <span className="text-brand-gold font-bold text-xs mb-4 block tracking-widest">{step.s}</span>
                <h4 className="text-xl font-serif mb-4">{step.t}</h4>
                <p className="text-sm text-white/50 leading-relaxed font-light">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-brand-navy mb-8">Interested in Joining?</h2>
          <p className="text-lg text-brand-charcoal/70 font-light mb-12 leading-relaxed">
            If you are an experienced Virtual Assistant who values professionalism, discretion, and meaningful work, we would welcome your application.
          </p>
          <a 
            href="mailto:careers@tegemea.co.uk"
            className="inline-block px-12 py-5 bg-brand-gold text-brand-navy font-bold text-sm uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-xl shadow-brand-gold/10"
          >
            Apply to Join the Tegemea Team
          </a>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
