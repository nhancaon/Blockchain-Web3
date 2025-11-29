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
    <div className="relative bg-gradient-to-br from-black via-neutral-950 to-black text-white overflow-hidden py-24">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05), transparent 45%), radial-gradient(circle at 80% 0%, rgba(245,238,220,0.05), transparent 40%)' }}></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-white animate-fade-in-up">
            A Pilot-Driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Web3 Accelerator</span> for APAC
          </h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 animate-fade-in-up stagger-1">
            Focused on Web3 × AI × Data, the program helps teams deploy where adoption is already happening across supply chains, financial rails, and real-world assets.
          </p>

        </div>

        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-white animate-fade-in-up stagger-3">
            What Makes APAC Web3 Accelerator Unmissable
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl animate-fade-in-up stagger-4"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-purple-700 inline-block mb-4">
                <highlight.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{highlight.title}</h3>
              <p className="text-white/80 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}