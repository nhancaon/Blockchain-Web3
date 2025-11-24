export default function Partners() {
  const investors = [
    'Sequoia Capital',
    'Andreessen Horowitz',
    'Paradigm',
    'Coinbase Ventures',
    'Binance Labs',
    'Pantera Capital',
    'Digital Currency Group',
    'Polychain Capital',
    'Framework Ventures',
    'Dragonfly Capital',
    'Alameda Research',
    'Three Arrows Capital'
  ];

  const partners = [
    'Ethereum Foundation',
    'Polygon',
    'Solana Foundation',
    'Avalanche',
    'Near Protocol',
    'Cosmos',
    'Polkadot',
    'Chainlink'
  ];

  return (
    <div id="partners" className="bg-[#111111] py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-white mb-4">
            Backed by Continental Institutions
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Private offices, venture houses, and protocol foundations across Europe, Asia, and the US.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-sm uppercase tracking-[0.4em] text-white/60 mb-8 text-center">Investor Network</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {investors.map((investor, index) => (
              <div
                key={index}
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 text-center transition-all duration-300"
              >
                <div className="text-white font-medium">{investor}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[0.4em] text-white/60 mb-8 text-center">Ecosystem Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 text-center transition-all duration-300"
              >
                <div className="text-white font-medium">{partner}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
