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
    <div className="relative bg-gradient-to-br from-black via-neutral-950 to-black text-white overflow-hidden py-24">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05), transparent 45%), radial-gradient(circle at 80% 0%, rgba(245,238,220,0.05), transparent 40%)' }}></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-white animate-fade-in-up">
            Our Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Partners</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up stagger-1">
            Backed by APAC's strongest enterprise, government, and Web3 infrastructure partners
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 animate-fade-in-up stagger-3"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-purple-700">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></div>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in-up stagger-5">
          <a href="#apply" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-700 text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity animate-pulse-gold">
            <span>Become an Ecosystem Partner</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-sm text-white/60 mt-3">Join our enterprise & innovation network</p>
        </div>
      </div>
    </div>
  );
}