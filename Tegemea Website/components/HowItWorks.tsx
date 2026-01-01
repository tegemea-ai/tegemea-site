
import React from 'react';

const steps = [
  {
    n: "01",
    title: "Initial Consultation",
    desc: "A focused discussion to map your current workflows and identify where high-leverage support will have the greatest impact."
  },
  {
    n: "02",
    title: "Strategic Matching",
    desc: "We pair you with a UK-based partner who possesses the specific sector expertise and temperament your operations demand."
  },
  {
    n: "03",
    title: "Structured Onboarding",
    desc: "A seamless transition of responsibilities through documented processes, ensuring zero disruption to your firm."
  },
  {
    n: "04",
    title: "Ongoing Optimisation",
    desc: "Continuous refinement of systems as your business scales, moving from task delivery to proactive operational ownership."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-10">
          <div className="max-w-xl">
            <span className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-4 block">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-navy leading-tight">
              A calm, consistent approach to operational <span className="italic">excellence</span>.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-brand-navy/10">
          {steps.map((step) => (
            <div key={step.n} className="relative border-r border-b border-brand-navy/10 last:border-r-0 md:last:border-r-0 lg:odd:border-r lg:even:border-r lg:last:border-r-0 p-10 lg:p-12 hover:bg-brand-navy hover:text-white transition-all duration-500 group bg-white">
              <div className="relative z-10">
                <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em] mb-6 block group-hover:text-white transition-colors">
                  {step.n} — PHASE
                </span>
                <h3 className="text-xl font-serif font-medium mb-4 text-brand-navy group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-charcoal/60 group-hover:text-white/60 transition-colors">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
