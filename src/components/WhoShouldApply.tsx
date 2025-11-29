import { Users, Building2, Package, DollarSign, Home, GraduationCap } from 'lucide-react';

export default function WhoShouldApply() {
  const founderCategories = [
    { text: 'Early-stage Web3 (idea → Series A) solving real market problems' },
    { icon: Package, text: 'Supply chain, logistics, trade finance' },
    { icon: DollarSign, text: 'Stablecoin rails, cross-border payments, SME liquidity' },
    { icon: Home, text: 'RWA: real estate, tourism, commodities, IP' },
    { text: 'On-chain ID, credentials, data provenance' },
    { text: 'Compliance, auditability & tokenization tooling' }
  ];

  const enterpriseCategories = [
    { icon: DollarSign, text: 'Banks, fintechs, payment processors' },
    { icon: Package, text: 'Exporters, manufacturers, logistics & supply chain groups' },
    { icon: Home, text: 'Real estate, tourism, cultural/IP holders' },
    { icon: GraduationCap, text: 'Universities & innovation hubs exploring on-chain credentials, data, RWA' },
    { text: 'Partners seeking safe, low-risk sandbox pilots without operational disruption.' }
  ];

  const partnerCategories = [
    { icon: Building2, text: 'Ecosystem partners, hubs, and accelerators across APAC' },
    { icon: Home, text: 'Innovation hubs and public-sector sandboxes across the region' },
    { icon: DollarSign, text: 'Capital partners backing RWA, infrastructure, and enterprise rails' }
  ];

  const mentorCategories = [
    { icon: Users, text: 'Operators with deep Web3, AI, and enterprise experience' },
    { icon: GraduationCap, text: 'Domain experts in regulation, compliance, and token design' },
    { text: 'Advisors who can support pilot design, GTM, and founder coaching.' }
  ];

  return (
    <div className="bg-black py-24 relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <h2 className="text-4xl md:text-5xl font-display mb-16 text-center text-white">
          Who Should Apply
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Founders Column */}
          <div className="bg-white rounded-2xl p-8 border border-black/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 border border-black/10 rounded-full bg-white">
                <Users className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-semibold text-black">Founders</h3>
            </div>
            <p className="text-base md:text-lg text-black/70 mb-6 leading-relaxed">
              Best-fit teams are building in:
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
                  <span className="text-black/80 leading-relaxed">{category.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise Column */}
          <div className="bg-white rounded-2xl p-8 border border-black/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 border border-black/10 rounded-full bg-white">
                <Building2 className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-semibold text-black">Enterprise</h3>
            </div>
            <ul className="space-y-3">
              {enterpriseCategories.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  {item.icon && (
                    <div className="p-2 border border-black/10 rounded-full bg-white flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-black" />
                    </div>
                  )}
                  <span className="text-black/80 leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners Column */}
          <div className="bg-white rounded-2xl p-8 border border-black/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 border border-black/10 rounded-full bg-white">
                <DollarSign className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-semibold text-black">Partners</h3>
            </div>
            <ul className="space-y-3">
              {partnerCategories.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  {item.icon && (
                    <div className="p-2 border border-black/10 rounded-full bg-white flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-black" />
                    </div>
                  )}
                  <span className="text-black/80 leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mentors Column */}
          <div className="bg-white rounded-2xl p-8 border border-black/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 border border-black/10 rounded-full bg-white">
                <GraduationCap className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-semibold text-black">Mentors</h3>
            </div>
            <ul className="space-y-3">
              {mentorCategories.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  {item.icon && (
                    <div className="p-2 border border-black/10 rounded-full bg-white flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-black" />
                    </div>
                  )}
                  <span className="text-black/80 leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

