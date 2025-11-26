import { ArrowRight, Building2, Layers, DollarSign, Globe } from 'lucide-react';

export default function Partners() {
  const categories = [
    {
      icon: Globe,
      title: 'Government & Ecosystem Enablers',
      items: ['NIC', 'Da Nang Innovation Hub', 'National blockchain associations']
    },
    {
      icon: Layers,
      title: 'Blockchain Foundations & Infra Partners',
      items: ['Solana', 'Aptos', 'APAC-friendly ecosystems']
    },
    {
      icon: DollarSign,
      title: 'Financial Institutions',
      items: ['Banks', 'Digital banks', 'Payments & remittance networks']
    },
    {
      icon: Building2,
      title: 'Enterprises & Corporates',
      items: ['Exporters', 'Manufacturers', 'Real estate & tourism groups']
    }
  ];

  return (
    <div id="partners" className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-black mb-6">
            Our Global Partners
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-[#f6f4ee] rounded-2xl p-8 border border-black/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 border border-black/10 rounded-full bg-white">
                  <category.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-black">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-black flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base md:text-lg text-black/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg md:text-xl text-black/70 leading-relaxed mb-8">
            Backed by APAC's strongest enterprise, government, and Web3 infrastructure partners.
          </p>
        </div>

        <div className="text-center mb-12">
          <a href="#apply" className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-neutral-900 transition-colors">
            <span>Become an Ecosystem Partner</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-sm text-black/60 mt-3">Join our enterprise & innovation network.</p>
        </div>
      </div>
    </div>
  );
}
