import { Users, Building2, Package, DollarSign, Home, GraduationCap } from 'lucide-react';

export default function WhoShouldApply() {
  const founderCategories = [
    { text: 'Early-stage Web3 (idea → Series A) solving real problems' },
    { icon: Package, text: 'Supply chain, logistics, trade finance' },
    { icon: DollarSign, text: 'Stablecoin rails, cross-border payments, SME finance' },
    { icon: Home, text: 'RWA: real estate, tourism, commodities, IP' },
    { text: 'On-chain ID, credentials, data provenance' },
    { text: 'Compliance, auditability, tokenization tools' }
  ];

  const enterpriseCategories = [
    { icon: DollarSign, text: 'Banks, fintechs, payment processors' },
    { icon: Package, text: 'Exporters, manufacturers, logistics groups' },
    { icon: Home, text: 'Real estate, tourism, cultural IP owners' },
    { icon: GraduationCap, text: 'Universities & innovation hubs exploring on-chain credentials and data monetization' },
    { text: 'Partners seeking safe, low-risk sandbox pilots without operational disruption.' }
  ];

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-4xl md:text-5xl font-display text-black mb-16 text-center">
          Who Should Apply
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Founders Column */}
          <div className="bg-[#f6f4ee] rounded-2xl p-8 border border-black/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 border border-black/10 rounded-full bg-white">
                <Users className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-semibold text-black">For Founders</h3>
            </div>
            <p className="text-base md:text-lg text-black/70 mb-6 leading-relaxed">
              Best-fit teams include:
            </p>
            <ul className="space-y-4">
              {founderCategories.map((category, index) => (
                <li key={index} className="flex items-start gap-3">
                  {category.icon ? (
                    <category.icon className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  ) : (
                    <svg className="w-5 h-5 text-black mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                  <span className="text-base md:text-lg text-black/80">{category.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise Column */}
          <div className="bg-[#f6f4ee] rounded-2xl p-8 border border-black/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 border border-black/10 rounded-full bg-white">
                <Building2 className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-semibold text-black">For Enterprise & Institutional Partners</h3>
            </div>
            <ul className="space-y-4">
              {enterpriseCategories.map((category, index) => (
                <li key={index} className="flex items-start gap-3">
                  {category.icon ? (
                    <category.icon className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  ) : (
                    <svg className="w-5 h-5 text-black mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                  <span className="text-base md:text-lg text-black/80">{category.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

