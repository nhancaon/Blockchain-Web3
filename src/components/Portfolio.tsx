import { Wallet, Shield, Network, Blocks, Coins, Database } from 'lucide-react';

export default function Portfolio() {
  const categories = [
    { name: 'DeFi', icon: Coins, count: 78 },
    { name: 'Infrastructure', icon: Database, count: 65 },
    { name: 'NFT & Gaming', icon: Blocks, count: 52 },
    { name: 'Security', icon: Shield, count: 43 },
    { name: 'Wallet & Identity', icon: Wallet, count: 38 },
    { name: 'Social & DAO', icon: Network, count: 34 }
  ];

  const featured = [
    {
      name: 'DeFi Protocol',
      category: 'DeFi',
      stage: 'Series A',
      description: 'Leading decentralized exchange with $2B+ TVL',
      metric: '$2B TVL'
    },
    {
      name: 'Layer 2 Solution',
      category: 'Infrastructure',
      stage: 'Series B',
      description: 'High-performance blockchain scaling solution',
      metric: '10M+ TXs'
    },
    {
      name: 'NFT Marketplace',
      category: 'NFT & Gaming',
      stage: 'Growth',
      description: 'Community-driven NFT trading platform',
      metric: '$500M Vol'
    },
    {
      name: 'Wallet Platform',
      category: 'Wallet & Identity',
      stage: 'Series A',
      description: 'Multi-chain wallet with 5M+ users',
      metric: '5M Users'
    }
  ];

  return (
    <div id="portfolio" className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-[#0b0b0b] mb-4">
            Portfolio Curated Across Europe
          </h2>
          <p className="text-lg text-black/60 max-w-3xl mx-auto">
            Studios from Berlin to Lisbon develop defi, identity, and cultural infrastructure with our resident teams.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-[#f6f4ee] hover:bg-white rounded-xl p-6 text-center transition-all duration-300 border border-black/5 hover:border-black/40"
            >
              <category.icon className="w-6 h-6 text-black mx-auto mb-3" />
              <div className="font-semibold text-[#0b0b0b] mb-1">{category.name}</div>
              <div className="text-2xl font-semibold text-black/70">{category.count}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project, index) => (
            <div
              key={index}
              className="bg-[#0b0b0b] text-white rounded-2xl p-8 border border-white/10 hover:border-white/40 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-1">{project.name}</h3>
                  <div className="flex items-center space-x-3">
                    <span className="text-xs uppercase tracking-[0.3em] text-white/60">{project.category}</span>
                    <span className="text-white/40">•</span>
                    <span className="text-sm text-white/70">{project.stage}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-semibold text-white">{project.metric}</div>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
