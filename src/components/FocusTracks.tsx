import { Package, DollarSign, Home, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FocusTracks() {
  const [expandedTrack, setExpandedTrack] = useState<number | null>(null);

  const tracks = [
    {
      icon: Package,
      title: 'Track 1 — Supply Chain Transparency',
      items: [
        'On-chain traceability',
        'Tokenized bills of lading',
        'ESG & carbon compliance'
      ]
    },
    {
      icon: DollarSign,
      title: 'Track 2 — Fintech & Payments',
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
    <div id="tracks" className="bg-black text-white py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-4xl md:text-5xl font-display mb-16 text-center">
          Focus Tracks
        </h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="border-gold-gradient bg-neutral-900 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleTrack(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-neutral-800 transition-colors"
                aria-expanded={expandedTrack === index}
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 border border-white/20 rounded-full">
                    <track.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{track.title}</h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${expandedTrack === index ? 'rotate-180' : ''}`}
                />
              </button>

              {expandedTrack === index && (
                <div className="px-6 pb-5 pt-2">
                  <ul className="space-y-3 pl-12">
                    {track.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-white mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
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

