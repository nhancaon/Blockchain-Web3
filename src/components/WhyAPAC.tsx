import { Globe, TrendingUp, Shield, Building2, Zap } from 'lucide-react';

export default function WhyAPAC() {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-black mb-6 text-center">
            The World’s Most Active Corridor for Web3 Deployment
          </h2>
          <p className="text-xl md:text-2xl text-black mb-4 text-center">
            APAC isn’t waiting for Web3 —<strong> APAC is deploying Web3.</strong>
          </p>
          <div className="space-y-4 mb-8 max-w-2xl mx-auto align-center justify-center">
            <div className="flex items-start gap-3 bg-[#f6f4ee] rounded-xl p-4 md:p-5 border border-black/5 justify-center">
              <div className="p-2.5 md:p-3 border border-black/10 rounded-full bg-white flex-shrink-0">
                <Globe className="w-5 h-5 text-black" />
              </div>
              <p className="text-base md:text-lg text-black/80 leading-relaxed pt-1 text-center">
                <strong>60% global supply chain flows via APAC</strong>
              </p>
            </div>
            <div className="flex items-start gap-3 bg-[#f6f4ee] rounded-xl p-4 md:p-5 border border-black/5 justify-center">
              <div className="p-2.5 md:p-3 border border-black/10 rounded-full bg-white flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-black" />
              </div>
              <p className="text-base md:text-lg text-black/80 leading-relaxed pt-1 text-center">
                <strong>SEA leads global digital payments growth</strong>
              </p>
            </div>
            <div className="flex items-start gap-3 bg-[#f6f4ee] rounded-xl p-4 md:p-5 border border-black/5 justify-center">
              <div className="p-2.5 md:p-3 border border-black/10 rounded-full bg-white flex-shrink-0">
                <Shield className="w-5 h-5 text-black" />
              </div>
              <p className="text-base md:text-lg text-black/80 leading-relaxed pt-1 text-center">
                <strong>Tokenization & ID frameworks accelerating</strong>
              </p>
            </div>
            <div className="flex items-start gap-3 bg-[#f6f4ee] rounded-xl p-4 md:p-5 border border-black/5 justify-center">
              <div className="p-2.5 md:p-3 border border-black/10 rounded-full bg-white flex-shrink-0">
                <Building2 className="w-5 h-5 text-black" />
              </div>
              <p className="text-base md:text-lg text-black/80 leading-relaxed pt-1 text-center">
                <strong>Enterprise demand &gt; speculator demand</strong>
              </p>
            </div>
            <div className="flex items-start gap-3 bg-[#f6f4ee] rounded-xl p-4 md:p-5 border border-black/5 justify-center">
              <div className="p-2.5 md:p-3 border border-black/10 rounded-full bg-white flex-shrink-0">
                <Zap className="w-5 h-5 text-black" />
              </div>
              <p className="text-base md:text-lg text-black/80 leading-relaxed pt-1 text-center">
                <strong>Faster rollout + market-ready users</strong>
              </p>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-black font-semibold text-center">
            This is where Web3 becomes real.
          </p>
        </div>
      </div>
    </div>
  );
}

