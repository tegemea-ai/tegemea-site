
import React, { useState } from 'react';
import { getOperationalAssessment } from '../services/geminiService';
import { AssessmentResult } from '../types';

interface OperationalAssessmentProps {
  onBook: () => void;
}

const OperationalAssessment: React.FC<OperationalAssessmentProps> = ({ onBook }) => {
  const [needs, setNeeds] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);

  const handleAssess = async () => {
    if (!needs.trim()) return;
    setLoading(true);
    try {
      const res = await getOperationalAssessment(needs);
      setResult(res);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="assessment" className="py-16 bg-brand-charcoal text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Strategic Assessment</h2>
          <p className="text-brand-stone text-lg">Describe your current operational bottlenecks, and let our consultants suggest an engagement model.</p>
        </div>

        <div className="bg-white/5 p-8 border border-white/10 rounded-sm">
          {!result ? (
            <>
              <textarea 
                className="w-full bg-transparent border-b border-white/20 py-4 text-xl font-light focus:outline-none focus:border-brand-gold transition-colors resize-none h-32"
                placeholder="E.g., 'I am a consultant spending 15 hours a week on admin and email. I need someone to own the process entirely...'"
                value={needs}
                onChange={(e) => setNeeds(e.target.value)}
              />
              <div className="mt-8 flex justify-center">
                <button 
                  onClick={handleAssess}
                  disabled={loading || !needs}
                  className="px-10 py-4 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? 'Analyzing...' : 'Identify Fit'}
                </button>
              </div>
            </>
          ) : (
            <div className="fade-in">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-brand-gold uppercase tracking-widest text-xs font-bold">Recommended Retainer</span>
                <div className="h-px flex-1 bg-white/10"></div>
              </div>
              <h3 className="text-4xl font-serif mb-4">{result.packageId.toUpperCase()} RETAINER</h3>
              <p className="text-xl text-white/80 mb-8 font-light italic">"{result.reasoning}"</p>
              
              <div className="bg-brand-gold/10 border-l-2 border-brand-gold p-6 mb-8">
                <p className="text-sm font-bold uppercase text-brand-gold mb-2">Strategic Insight</p>
                <p className="text-lg text-white/90">{result.strategicInsight}</p>
              </div>

              <div className="flex space-x-4">
                <button 
                  onClick={() => setResult(null)}
                  className="px-6 py-3 border border-white/20 text-white hover:bg-white/10 transition-all"
                >
                  Refine Needs
                </button>
                <button 
                  onClick={onBook}
                  className="px-6 py-3 bg-brand-gold text-brand-navy font-medium hover:bg-opacity-90 transition-all"
                >
                  Confirm Assessment in Consultation
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OperationalAssessment;
