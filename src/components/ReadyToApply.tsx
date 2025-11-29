import { ArrowRight, CheckCircle, FileText, Users, Rocket } from 'lucide-react';

export default function ReadyToApply() {
  const steps = [
    {
      icon: CheckCircle,
      title: 'Step 1 — Check Your Fit',
      description: 'Web3/AI/Data project aligned with one of three tracks.'
    },
    {
      icon: FileText,
      title: 'Step 2 — Submit Application',
      description: 'Upload deck, project details, team profile, traction.'
    },
    {
      icon: Users,
      title: 'Step 3 — Interview & Selection',
      description: 'Structured interviews + problem-framing workshop.'
    },
    {
      icon: Rocket,
      title: 'Step 4 — Join the Cohort',
      description: 'Receive onboarding, track assignment, and partner introductions.'
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-black via-neutral-950 to-black text-white overflow-hidden py-24">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05), transparent 45%), radial-gradient(circle at 80% 0%, rgba(245,238,220,0.05), transparent 40%)' }}></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-white animate-fade-in-up">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Apply</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed animate-fade-in-up stagger-1">
            Begin your journey to the 2026 cohort.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-700 p-[1px] hover:from-blue-500 hover:to-purple-600 transition-all duration-300 animate-fade-in-up stagger-3"
              >
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-left">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-purple-700">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white font-semibold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-base md:text-lg text-white/80 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-700 text-white px-10 py-4 rounded-full font-semibold text-base transition-all hover:opacity-90 animate-pulse-gold"
          >
            <span>Start Your Application</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-sm text-white/60 mt-4">(Typeform Integration)</p>
        </div>
      </div>
    </div>
  );
}