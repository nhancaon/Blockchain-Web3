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
    <div className="bg-black py-24 relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <h2 className="text-4xl md:text-5xl font-display mb-16 text-center text-white">
          Program Journey (Jan–May 2026)
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-16 bottom-0 w-px bg-white/10 hidden md:block"></div>
            <div className="space-y-8">
              {phases.map((phase, index) => (
                <div key={index} className="flex gap-6 relative">
                  <div className="hidden md:flex flex-col items-center">
                    <div className="p-3 border border-white/20 rounded-full bg-white/10">
                      <phase.icon className="w-6 h-6 text-white" />
                    </div>
                    {index < phases.length - 1 && (
                      <div className="flex-1 w-px bg-white/10 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-12">
                    <div className="bg-white rounded-2xl p-8 border border-black/10">
                      <div className="flex items-center justify-between mb-2 flex-col sm:flex-row gap-4">
                        <h3 className="text-2xl md:text-3xl font-semibold text-black">{phase.title}</h3>
                        <span className="text-sm font-semibold tracking-wide text-black/60 bg-white px-4 py-2 rounded-full">
                          {phase.period}
                        </span>
                      </div>
                      <p className="text-lg text-black/70 mb-4">{phase.tagline}</p>
                      <ul className="space-y-2">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center gap-2 text-black/80">
                            <div className="w-1.5 h-1.5 bg-black/40 rounded-full flex-shrink-0"></div>
                            {item}
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

