import { Globe, TrendingUp, Shield, Building2, Zap } from 'lucide-react';

export default function WhyAPAC() {
  const points = [
    {
      icon: Globe,
      text: 'APAC holds 60% of global supply chains, enabling real-world Web3 × AI integration.'
    },
    {
      icon: TrendingUp,
      text: 'Digital finance & cross-border payments scale fastest in SEA and East Asia.'
    },
    {
      icon: Shield,
      text: 'Governments support sandboxes, digital credentials, and RWA-oriented policy.'
    },
    {
      icon: Building2,
      text: 'Enterprises want deployment, not pitch decks.'
    },
    {
      icon: Zap,
      text: 'APAC is the most cost-efficient & adoption-ready ecosystem.'
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-black mb-6 text-center">
            Why APAC, Why Now?
          </h2>
          <p className="text-lg md:text-xl text-black/70 mb-12 text-center leading-relaxed">
            APAC is becoming the world's most dynamic corridor for Web3 × AI adoption — driven by enterprise demand, regulatory openness, and massive real-world data flows.
          </p>
          <div className="space-y-6">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-4 bg-[#f6f4ee] rounded-xl p-6 border border-black/5">
                <div className="p-3 border border-black/10 rounded-full bg-white flex-shrink-0">
                  <point.icon className="w-5 h-5 text-black" />
                </div>
                <p className="text-base md:text-lg text-black/80 leading-relaxed pt-1">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

