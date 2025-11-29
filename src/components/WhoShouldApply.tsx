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
    // { icon: Building2, text: 'Ecosystem partners, hubs, and accelerators across APAC' },
    // { icon: Home, text: 'Innovation hubs and public-sector sandboxes across the region' },
    // { icon: DollarSign, text: 'Capital partners backing RWA, infrastructure, and enterprise rails' }
  ];

  const mentorCategories = [
    // { icon: Users, text: 'Operators with deep Web3, AI, and enterprise experience' },
    // { icon: GraduationCap, text: 'Domain experts in regulation, compliance, and token design' },
    // { text: 'Advisors who can support pilot design, GTM, and founder coaching.' }
  ];



  return (
    <div className="relative bg-gradient-to-br from-black via-neutral-950 to-black text-white overflow-hidden py-24">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05), transparent 45%), radial-gradient(circle at 80% 0%, rgba(245,238,220,0.05), transparent 40%)' }}></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-white animate-fade-in-up">
            Who Should <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Apply</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up stagger-1">
            We're looking for visionary teams ready to deploy real Web3 solutions in APAC's most active markets
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Founders Column */}
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 animate-fade-in-up stagger-3">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-purple-700">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Founders</h3>
            </div>
            <p className="text-base md:text-lg text-white/80 mb-6 leading-relaxed">
              Best-fit teams are building in:
            </p>
            <ul className="space-y-4">
              {founderCategories.map((category, index) => (
                <li key={index} className="flex items-start gap-3">
                  {category.icon ? (
                    <category.icon className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                  )}
                  <span className="text-white/90 leading-relaxed">{category.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise Column */}
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 animate-fade-in-up stagger-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-purple-700">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Enterprise</h3>
            </div>
            <ul className="space-y-3">
              {enterpriseCategories.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  {item.icon && (
                    <div className="p-2 rounded-lg bg-black/20 flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <span className="text-white/90 leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners Column */}
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 animate-fade-in-up stagger-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-purple-700">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Partners</h3>
            </div>
            <ul className="space-y-3">
              {partnerCategories.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  {item.icon && (
                    <div className="p-2 rounded-lg bg-black/20 flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <span className="text-white/90 leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mentors Column */}
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 animate-fade-in-up stagger-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-purple-700">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Mentors</h3>
            </div>
            <ul className="space-y-3">
              {mentorCategories.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  {item.icon && (
                    <div className="p-2 rounded-lg bg-black/20 flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <span className="text-white/90 leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in-up stagger-7">
          <a href="#apply" className="inline-block bg-gradient-to-r from-blue-600 to-purple-700 text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity animate-pulse-gold">
            Apply Now
          </a>
          <p className="text-sm text-white/60 mt-3">Applications close March 15, 2026</p>
        </div>
      </div>
    </div>
  );
}