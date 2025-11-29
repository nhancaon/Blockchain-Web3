import { Package, DollarSign, Home, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FocusTracks() {
  const [expandedTrack, setExpandedTrack] = useState<number | null>(null);

  const tracks = [
    {
      icon: Package,
      title: 'Track 1 — Supply Chain Transparency',
      description: 'On-chain traceability, tokenized bills of lading, ESG & carbon compliance',
      items: [
        'On-chain traceability',
        'Tokenized bills of lading',
        'ESG & carbon compliance'
      ]
    },
    {
      icon: DollarSign,
      title: 'Track 2 — Fintech & Payments',
      description: 'Stablecoin payroll, remittance rails, on-chain audit, liquidity for SMEs',
      items: [
        'Stablecoin payroll',
        'Remittance rails',
        'On-chain audit',
        'Liquidity for SMEs'
      ]
    },
    {
      icon: Home,
      title: 'Track 3 — Real-World Assets (RWA) & On-Chain Data',
      description: 'Tokenized real estate, tourism assets, on-chain credentials, IP/data vaults',
      items: [
        'Tokenized real estate',
        'Tourism assets',
        'On-chain credentials',
        'IP/data vaults'
      ]
    }
  ];

  const toggleTrack = (index: number) => {
    setExpandedTrack(expandedTrack === index ? null : index);
  };

  return (
    <div className="relative bg-gradient-to-br from-black via-neutral-950 to-black text-white overflow-hidden py-24">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05), transparent 45%), radial-gradient(circle at 80% 0%, rgba(245,238,220,0.05), transparent 40%)' }}></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-white animate-fade-in-up">
            Focus <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Tracks</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up stagger-1">
            Specialized tracks designed to accelerate real-world Web3 deployment across key APAC sectors
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 animate-fade-in-up stagger-2"
            >
              <button
                onClick={() => toggleTrack(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-black/20 transition-colors"
                aria-expanded={expandedTrack === index}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-purple-700">
                    <track.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{track.title}</h3>
                    <p className="text-sm text-white/70 mt-1">{track.description}</p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-white transition-transform ${expandedTrack === index ? 'rotate-180' : ''}`}
                />
              </button>

              {expandedTrack === index && (
                <div className="px-6 pb-6 pt-2">
                  <ul className="space-y-3 pl-16">
                    {track.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                        <span className="text-base text-white/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}