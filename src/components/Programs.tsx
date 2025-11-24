import { Zap, Layers, Rocket } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      icon: Rocket,
      title: 'Base Camp',
      duration: '12 Weeks',
      description: 'For early-stage blockchain projects. Get validation, mentorship, and your first funding round.',
      features: [
        'Product-market fit validation',
        'Technical architecture review',
        'Go-to-market strategy',
        'Investor pitch preparation'
      ],
      investment: '$200K'
    },
    {
      icon: Layers,
      title: 'Accelerate',
      duration: '16 Weeks',
      description: 'For growth-stage Web3 companies ready to scale globally with institutional backing.',
      features: [
        'Token economics design',
        'Community growth tactics',
        'Strategic partnerships',
        'Series A preparation'
      ],
      investment: '$500K'
    },
    {
      icon: Zap,
      title: 'Scale Up',
      duration: '20 Weeks',
      description: 'For established protocols seeking expansion, ecosystem development, and strategic growth.',
      features: [
        'Ecosystem development',
        'Global market expansion',
        'Enterprise partnerships',
        'Regulatory compliance'
      ],
      investment: '$1M+'
    }
  ];

  return (
    <div id="programs" className="bg-[#f6f4ee] py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-[#0b0b0b] mb-4">
            Tailored Residencies
          </h2>
          <p className="text-lg text-black/60 max-w-3xl mx-auto">
            From atelier sessions for emerging founders to institutional scale-up support, each residency
            channels European rigor with global connectivity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-black/10 hover:border-black/70 transition-all duration-300 shadow-sm"
            >
              <div className="p-3 border border-black/10 rounded-full inline-block mb-6">
                <program.icon className="w-6 h-6 text-black" />
              </div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-[#0b0b0b]">{program.title}</h3>
                <span className="text-xs font-semibold tracking-wide text-black bg-[#f6f4ee] px-3 py-1 rounded-full">
                  {program.duration}
                </span>
              </div>
              <p className="text-black/60 mb-6 leading-relaxed">{program.description}</p>
              <div className="mb-6">
                <div className="text-3xl font-semibold text-[#0b0b0b] mb-1">{program.investment}</div>
                <div className="text-xs uppercase tracking-[0.3em] text-black/40">Capital on entry</div>
              </div>
              <ul className="space-y-3 mb-8">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-4 h-4 text-black mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-black/70">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-black hover:bg-neutral-900 text-white py-3 rounded-full font-semibold transition-colors">
                Enter the Program
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
