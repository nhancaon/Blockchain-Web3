import { Rocket, Zap, Target, Globe, Users } from 'lucide-react';

export default function AboutProgram() {
  const highlights = [
    {
      icon: Rocket,
      title: 'Real Pilots with Enterprise Data',
      description: 'Deploy real-world pilots with enterprise partners — not theoretical POCs.'
    },
    {
      icon: Zap,
      title: 'End-to-End Web3 × AI Build Support',
      description: 'Architecture, token design, AI/data pipelines, and integration support to accelerate deployment.'
    },
    {
      icon: Target,
      title: 'Built for Compliance, Integration & Scale',
      description: 'Designed for real-world use cases that plug into existing enterprise infrastructure and meet regulatory expectations.'
    },
    {
      icon: Globe,
      title: 'Built in Asia. Visible Globally.',
      description: 'Launch from APAC’s most adoption-ready markets with global visibility and investor access.'
    },
    {
      icon: Users,
      title: 'Investor Access Powered by Pilots',
      description: 'Warm introductions to VCs and institutions based on the traction and results of real pilots — not hype.'
    }
  ];

  return (
    <div id="program" className="bg-black py-24 relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-center text-white">
            A Pilot-Driven Web3 Accelerator for APAC
          </h2>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-4">
            Focused on Web3 × AI × Data, the program helps teams deploy where adoption is already happening across supply chains, financial rails, and real-world assets.
          </p>

        </div>

        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-white/80">
            What Makes APAC Web3 Accelerator Unmissable
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-black/10 hover:border-black/30 transition-all duration-300 shadow-sm"
            >
              <div className="p-3 border border-black/10 rounded-full inline-block mb-6">
                <highlight.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">{highlight.title}</h3>
              <p className="text-black/70 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

