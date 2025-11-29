import { Globe, TrendingUp, Shield, Building2, Zap } from 'lucide-react';

export default function WhyAPAC() {
  const stats = [
    { value: '60%', label: 'Global Supply Chain', icon: Globe },
    { value: '1B+', label: 'Digital Payments Users', icon: TrendingUp },
    { value: '15+', label: 'Live Pilots', icon: Shield },
    { value: '50+', label: 'Enterprise Partners', icon: Building2 },
    { value: '3x', label: 'Faster Deployment', icon: Zap }
  ];

  return (
    <div className="relative bg-gradient-to-br from-black via-neutral-950 to-black text-white overflow-hidden py-24">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05), transparent 45%), radial-gradient(circle at 80% 0%, rgba(245,238,220,0.05), transparent 40%)' }}></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6 text-white animate-fade-in-up">
              The World’s Most Active Corridor for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Web3 Deployment</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-4 animate-fade-in-up stagger-1">
              APAC isn’t waiting for Web3 —<strong className="text-white"> APAC is deploying Web3.</strong>
            </p>
          </div>

          {/* Infographic Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:border-white/20 transition-all duration-300 animate-fade-in-up stagger-2">
                <div className="flex justify-center mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-600 to-purple-700">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1 animate-text-pop">{stat.value}</div>
                <div className="text-xs text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Key Points */}
          <div className="space-y-4 mb-12 max-w-4xl mx-auto">
            <div className="flex items-start gap-4 bg-black/30 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300 animate-fade-in-up stagger-3">
              <div className="p-3 rounded-full bg-gradient-to-br from-blue-600 to-purple-700 flex-shrink-0 mt-1">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <p className="text-lg text-white/90 leading-relaxed">
                <strong className="text-white">60% global supply chain flows via APAC</strong>
              </p>
            </div>
            <div className="flex items-start gap-4 bg-black/30 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300 animate-fade-in-up stagger-4">
              <div className="p-3 rounded-full bg-gradient-to-br from-blue-600 to-purple-700 flex-shrink-0 mt-1">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <p className="text-lg text-white/90 leading-relaxed">
                <strong className="text-white">SEA leads global digital payments growth</strong>
              </p>
            </div>
            <div className="flex items-start gap-4 bg-black/30 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300 animate-fade-in-up stagger-5">
              <div className="p-3 rounded-full bg-gradient-to-br from-blue-600 to-purple-700 flex-shrink-0 mt-1">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <p className="text-lg text-white/90 leading-relaxed">
                <strong className="text-white">Tokenization & ID frameworks accelerating</strong>
              </p>
            </div>
            <div className="flex items-start gap-4 bg-black/30 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300 animate-fade-in-up stagger-6">
              <div className="p-3 rounded-full bg-gradient-to-br from-blue-600 to-purple-700 flex-shrink-0 mt-1">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <p className="text-lg text-white/90 leading-relaxed">
                <strong className="text-white">Enterprise demand &gt; speculator demand</strong>
              </p>
            </div>
            <div className="flex items-start gap-4 bg-black/30 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300 animate-fade-in-up stagger-7">
              <div className="p-3 rounded-full bg-gradient-to-br from-blue-600 to-purple-700 flex-shrink-0 mt-1">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <p className="text-lg text-white/90 leading-relaxed">
                <strong className="text-white">Faster rollout + market-ready users</strong>
              </p>
            </div>
          </div>

          <div className="text-center animate-fade-in-up stagger-8">
            <p className="text-2xl md:text-3xl text-white font-display">
              This is where Web3 becomes real.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}