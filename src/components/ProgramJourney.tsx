import { Rocket, Users, Code, Target, Trophy } from 'lucide-react';

export default function ProgramJourney() {
  const phases = [
    {
      icon: Rocket,
      title: 'Phase 1 — Global Launch & Ecosystem Activation',
      period: 'Late Jan',
      tagline: 'We launch. You accelerate.',
      items: [
        'Global launch in Dubai',
        'SEA ecosystem activation',
        'Applications open'
      ]
    },
    {
      icon: Users,
      title: 'Phase 2 — Screening, Selection & Onboarding',
      period: 'Feb–Mid Mar',
      tagline: 'Top teams rise fast.',
      items: [
        'AI-assisted screening → Top 50',
        'Rapid onboarding',
        'Track assignment + mentor pairing',
        'Selection focuses on technical depth, enterprise-readiness, and real-world feasibility.'
      ]
    },
    {
      icon: Code,
      title: 'Phase 3 — Ideation, Product Architecture & MVP Build',
      period: 'Mar–Apr',
      tagline: 'Build. Ship. Iterate.',
      items: [
        'Token models + architecture deep dives',
        'Enterprise integration workshops',
        'Monthly VC Speed Dating',
        'Target: 20+ MVPs/POCs ready for pilots'
      ]
    },
    {
      icon: Target,
      title: 'Phase 4 — Pilot Design, Testing & Scale Preparation',
      period: 'Apr',
      tagline: 'Your pilot = your strongest traction.',
      items: [
        'User testing + data integration',
        'Narrative & GTM bootcamp',
        'Corporate deep dives',
        'Top 30 shortlisted for Demo Day'
      ]
    },
    {
      icon: Trophy,
      title: 'Phase 5 — Demo Day, Deal-Making & Graduation',
      period: 'May',
      tagline: 'Show. Win. Raise.',
      items: [
        'Demo Day @ Da Nang Convention Center',
        'Investor deals + pilot finalization',
        'Cohort impact report & post-program track'
      ]
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-4xl md:text-5xl font-display text-black mb-16 text-center">
          Program Journey (Jan–May 2026)
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-16 bottom-0 w-px bg-black/10 hidden md:block"></div>
            <div className="space-y-8">
              {phases.map((phase, index) => (
                <div key={index} className="flex gap-6 relative">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-[#f6f4ee] border border-black/10 flex items-center justify-center">
                      <phase.icon className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  <div className="flex-1 pb-12">
                    <div className="bg-[#f6f4ee] rounded-2xl p-8 border border-black/10">
                      <div className="flex items-center justify-between mb-2 flex-col sm:flex-row gap-4">
                        <h3 className="text-2xl md:text-3xl font-semibold text-black">{phase.title}</h3>
                        <span className="text-sm font-semibold tracking-wide text-black/60 bg-white px-4 py-2 rounded-full">
                          {phase.period}
                        </span>
                      </div>
                      {phase.tagline && (
                        <p className="text-lg md:text-xl font-semibold text-black/80 mb-4 italic">
                          "{phase.tagline}"
                        </p>
                      )}
                      <ul className="space-y-3">
                        {phase.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-black mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-base md:text-lg text-black/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

