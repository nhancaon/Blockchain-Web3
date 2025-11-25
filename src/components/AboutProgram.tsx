import { Rocket, Zap, Target, Globe, Users } from 'lucide-react';

export default function AboutProgram() {
  const highlights = [
    {
      icon: Rocket,
      title: 'Deploy with Real Enterprises — Not Just POCs',
      description: 'Work directly with enterprise partners on real-world deployments, not theoretical proof-of-concepts.'
    },
    {
      icon: Zap,
      title: 'Web3 × AI Execution Support — End-to-End',
      description: 'Comprehensive support from token design to AI pipeline integration and data strategy.'
    },
    {
      icon: Target,
      title: 'Designed for Integration, Not Speculation',
      description: 'Focus on real-world use cases that integrate seamlessly with existing enterprise infrastructure.'
    },
    {
      icon: Globe,
      title: 'Built in Asia. Visible Globally.',
      description: 'Launch from APAC with global visibility and access to international markets and investors.'
    },
    {
      icon: Users,
      title: 'Investor Access, Triggered by Traction',
      description: 'Connect with VCs, family offices, and institutional investors based on real pilot results.'
    }
  ];

  return (
    <div id="program" className="bg-[#f6f4ee] py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-black mb-6 text-center">
            A Pilot-Driven Web3 Accelerator Built for APAC
          </h2>
          <p className="text-lg md:text-xl text-black/70 leading-relaxed mb-4">
            APAC Web3 Accelerator 2026 isn't just another startup program — it's a launchpad for real-world deployment.
          </p>
          <p className="text-lg md:text-xl text-black/70 leading-relaxed">
            Designed for Web3 × AI × Data founders solving enterprise-grade problems, the program helps teams go beyond the pitch deck and build where adoption is happening: across supply chains, financial rails, and real-world assets throughout Asia Pacific.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-black mb-8 text-center">
            What Makes APAC Web3 Accelerator Unmissable
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-black/10 hover:border-black/30 transition-all duration-300 shadow-sm"
            >
              <div className="p-3 border border-black/10 rounded-full inline-block mb-6">
                <highlight.icon className="w-6 h-6 text-black" />
              </div>
              <h4 className="text-xl md:text-2xl font-semibold text-black mb-4">{highlight.title}</h4>
              <p className="text-base md:text-lg text-black/70 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

