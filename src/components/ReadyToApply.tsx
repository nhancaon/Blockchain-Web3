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
    <div id="apply" className="bg-black text-white py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-6">
            Ready to Apply
          </h2>
          <p className="text-lg md:text-xl mb-12 text-white/70 leading-relaxed">
            Begin your journey to the 2026 cohort
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-neutral-900 rounded-2xl p-8 border border-white/10 text-left"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 border border-white/20 rounded-full bg-white/5">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white font-semibold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-base md:text-lg text-white/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-flex items-center justify-center space-x-2 bg-white text-black px-10 py-4 rounded-full font-semibold text-base transition-all hover:bg-[#f6f4ee]"
          >
            <span>Start Your Application</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

