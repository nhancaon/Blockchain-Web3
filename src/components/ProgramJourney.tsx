import { Rocket, Users, Code, Target, Trophy } from 'lucide-react';
import { useState, useEffect } from 'react';

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

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set the countdown to May 1, 2026 (Demo Day)
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date('2026-05-01') - +new Date();
      let timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }

      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-black via-neutral-950 to-black text-white overflow-hidden py-24">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05), transparent 45%), radial-gradient(circle at 80% 0%, rgba(245,238,220,0.05), transparent 40%)' }}></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-4 text-white animate-fade-in-up">
            Program <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Journey</span>
          </h2>
          <p className="text-xl text-white/70 animate-fade-in-up stagger-1">Jan–May 2026</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
          {/* Countdown Timer Section */}
          <div className="lg:w-1/3 animate-fade-in-up stagger-2">
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full">
              <h3 className="text-2xl font-semibold text-white mb-6">Countdown to Demo Day</h3>
              <p className="text-white/80 mb-8">Join us for the culminating event where top teams showcase their innovations</p>

              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl py-4 mb-2 animate-pulse-gold">
                    <div className="text-2xl font-bold">{timeLeft.days}</div>
                  </div>
                  <div className="text-sm text-white/70">Days</div>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl py-4 mb-2">
                    <div className="text-2xl font-bold">{timeLeft.hours}</div>
                  </div>
                  <div className="text-sm text-white/70">Hours</div>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl py-4 mb-2">
                    <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                  </div>
                  <div className="text-sm text-white/70">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl py-4 mb-2">
                    <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                  </div>
                  <div className="text-sm text-white/70">Seconds</div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Program Highlights</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-text-pop"></div>
                    <span className="text-white/80">50+ Selected Teams</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-text-pop stagger-1"></div>
                    <span className="text-white/80">20+ Live Pilots</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-text-pop stagger-2"></div>
                    <span className="text-white/80">30 Finalist Teams</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-text-pop stagger-3"></div>
                    <span className="text-white/80">$5M+ Capital Access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="lg:w-2/3 animate-fade-in-up stagger-3">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 transform -translate-x-1/2"></div>

              {/* Timeline milestones */}
              <div className="space-y-12 pl-20">
                {phases.map((phase, index) => (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-8 w-6 h-6 rounded-full bg-blue-500 border-4 border-black shadow-lg transform -translate-x-1/2 animate-pulse-gold"></div>

                    {/* Content */}
                    <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
                        <span className="px-3 py-1 text-sm font-semibold text-blue-300 bg-blue-900/30 rounded-full whitespace-nowrap">
                          {phase.period}
                        </span>
                      </div>
                      <p className="text-white/80 mb-4 italic">{phase.tagline}</p>
                      <ul className="space-y-2">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-white/70">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}