import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Apply() {
  const benefits = [
    'Funding from $200K to $1M+',
    'Access to 500+ Web3 investors',
    'Expert mentorship from industry leaders',
    'Technical & business development support',
    'Global network & partnerships',
    'Token economics & go-to-market strategy'
  ];

  return (
    <div id="apply" className="bg-[#0c0c0c] py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-display mb-6">
            Applications for the Winter Studio
          </h2>
          <p className="text-lg md:text-xl mb-12 text-white/70 leading-relaxed">
            Residencies run from Paris, Milan, and Tallinn with hybrid participation for global teams.
            Limited seats per cohort to preserve intimacy and craft.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-12 text-left">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/5 rounded-xl p-4 border border-white/10">
                <CheckCircle className="w-5 h-5 flex-shrink-0 text-white" />
                <span className="font-medium text-white/80">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-left">
            <h3 className="text-sm uppercase tracking-[0.4em] text-white/60 mb-8 text-center">Application cadence</h3>
            <div className="grid md:grid-cols-4 gap-6 mb-8 text-center">
              {['Apply', 'Review', 'Dialogue', 'Invite'].map((stage, idx) => (
                <div key={stage}>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full border border-white/30 flex items-center justify-center text-white">
                    {idx + 1}
                  </div>
                  <div className="font-semibold text-white">{stage}</div>
                  <div className="text-xs text-white/50 mt-1">
                    {idx === 0 && '5 min dossier'}
                    {idx === 1 && '48h screening'}
                    {idx === 2 && 'Partner session'}
                    {idx === 3 && 'Europe & remote'}
                  </div>
                </div>
              ))}
            </div>
            <button className="bg-white text-black px-10 py-4 rounded-full font-semibold text-base transition-all hover:bg-[#f6f4ee] flex items-center justify-center space-x-2 mx-auto">
              <span>Submit Portfolio</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
