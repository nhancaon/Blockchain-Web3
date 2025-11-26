import { Package, DollarSign, Home } from 'lucide-react';

export default function FocusTracks() {
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

  return (
    <div id="tracks" className="bg-black text-white py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-4xl md:text-5xl font-display mb-16 text-center">
          Focus Tracks
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              <div className="p-4 border border-white/20 rounded-full inline-block mb-6">
                <track.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">{track.title}</h3>
              <ul className="space-y-4">
                {track.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base md:text-lg text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

