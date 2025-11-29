import { Building2, DollarSign, Layers, Brain, Globe, Network } from 'lucide-react';

export default function WhatTeamsGet() {
  const benefits = [
    {
      icon: Building2,
      title: 'Enterprise-Grade Pilots',
      description: 'Real pilots with real users — beyond theoretical POCs.'
    },
    {
      icon: DollarSign,
      title: 'Capital Access',
      description: 'Warm intros to VCs, family offices & institutional investors.'
    },
    {
      icon: Layers,
      title: 'Protocol & Infra Partners',
      description: 'L1/L2s, oracles, tooling, custody & compliance partners.'
    },
    {
      icon: Brain,
      title: 'Web3 & AI Mentorship',
      description: 'Token design, AI pipelines, data strategy, security reviews.'
    },
    {
      icon: Globe,
      title: 'APAC Market Access',
      description: 'Vietnam → SEA → East Asia → Global.'
    },
    {
      icon: Network,
      title: 'Lifelong Alumni Network',
      description: 'Continuous support, events, investors & ecosystem programs.'
    }
  ];

  return (
    <div className="bg-black py-24 relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <h2 className="text-4xl md:text-5xl font-display mb-16 text-center text-white">
          What Teams Get
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-black/10 hover:border-black/30 transition-all duration-300 shadow-sm"
            >
              <div className="p-3 border border-black/10 rounded-full inline-block mb-6">
                <benefit.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">{benefit.title}</h3>
              <p className="text-black/70 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

