import { TrendingUp, Users, DollarSign, Globe } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: DollarSign,
      value: '$200K',
      label: 'Investment on Admission'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Investor Network'
    },
    {
      icon: TrendingUp,
      value: '300+',
      label: 'Portfolio Projects'
    },
    {
      icon: Globe,
      value: '50+',
      label: 'Countries Represented'
    }
  ];

  return (
    <div className="bg-[#f0efea] py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/70 rounded-2xl p-6 border border-black/5 shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="p-4 border border-black/10 rounded-full">
                  <stat.icon className="w-6 h-6 text-black" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0b0b0b] mb-2 tracking-tight">{stat.value}</div>
              <div className="text-xs sm:text-sm uppercase tracking-[0.2em] text-black/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
