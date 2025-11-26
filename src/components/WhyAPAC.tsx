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
            The World's Most Active Corridor for Web3 Deployment
          </h2>
          <p className="text-xl md:text-2xl text-black font-semibold mb-4 text-center">
            APAC isn't waiting for Web3.
          </p>
          <p className="text-xl md:text-2xl text-black font-semibold mb-8 text-center">
            APAC is using Web3.
          </p>
          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4 bg-[#f6f4ee] rounded-xl p-6 border border-black/5">
              <div className="p-3 border border-black/10 rounded-full bg-white flex-shrink-0">
                <Globe className="w-5 h-5 text-black" />
              </div>
              <p className="text-base md:text-lg text-black/80 leading-relaxed pt-1">
                <strong>60% of global supply chain flows</strong> run through APAC (World Bank)
              </p>
            </div>
            <div className="flex items-start gap-4 bg-[#f6f4ee] rounded-xl p-6 border border-black/5">
              <div className="p-3 border border-black/10 rounded-full bg-white flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-black" />
              </div>
              <p className="text-base md:text-lg text-black/80 leading-relaxed pt-1">
                <strong>SEA is the #1 digital payments adopter</strong> globally (McKinsey)
              </p>
            </div>
            <div className="flex items-start gap-4 bg-[#f6f4ee] rounded-xl p-6 border border-black/5">
              <div className="p-3 border border-black/10 rounded-full bg-white flex-shrink-0">
                <Shield className="w-5 h-5 text-black" />
              </div>
              <p className="text-base md:text-lg text-black/80 leading-relaxed pt-1">
                <strong>Governments are enabling</strong> RWA, digital ID, sandboxes, tokenization
              </p>
            </div>
            <div className="flex items-start gap-4 bg-[#f6f4ee] rounded-xl p-6 border border-black/5">
              <div className="p-3 border border-black/10 rounded-full bg-white flex-shrink-0">
                <Building2 className="w-5 h-5 text-black" />
              </div>
              <p className="text-base md:text-lg text-black/80 leading-relaxed pt-1">
                <strong>Enterprises demand solutions</strong> — not speculation
              </p>
            </div>
            <div className="flex items-start gap-4 bg-[#f6f4ee] rounded-xl p-6 border border-black/5">
              <div className="p-3 border border-black/10 rounded-full bg-white flex-shrink-0">
                <Zap className="w-5 h-5 text-black" />
              </div>
              <p className="text-base md:text-lg text-black/80 leading-relaxed pt-1">
                <strong>Startups find</strong> lower regulatory barriers + faster rollout + real user demand
              </p>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-black font-semibold text-center">
            APAC is where real-world Web3 demand actually exists.
          </p>
        </div>
      </div>
    </div>
  );
}

