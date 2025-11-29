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
    <div className="relative bg-gradient-to-br from-black via-neutral-950 to-black text-white overflow-hidden py-24">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05), transparent 45%), radial-gradient(circle at 80% 0%, rgba(245,238,220,0.05), transparent 40%)' }}></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-white animate-fade-in-up">
            What Teams <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Get</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up stagger-1">
            Comprehensive support to accelerate your Web3 journey from pilot to production
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl animate-fade-in-up stagger-2"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-purple-700 inline-block mb-4">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
              <p className="text-white/80 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}