import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What stage of startups do you accept?',
      answer: 'From validated idea/MVP to early growth with strong technical capacity.'
    },
    {
      question: 'Do I need to be based in Vietnam?',
      answer: 'No — hybrid program, open to APAC & global teams.'
    },
    {
      question: 'Are DeFi-only projects accepted?',
      answer: 'Not the focus—we prioritize enterprise-aligned Web3 use cases.'
    },
    {
      question: 'What do corporate partners need to commit?',
      answer: 'Clear problem statements, pilot collaboration, access to sandbox data.'
    },
    {
      question: 'What differentiates this accelerator?',
      answer: 'Pilot-first, enterprise-backed, Web3 × AI × APAC specialized.'
    }
  ];


  return (
    <div className="relative bg-gradient-to-br from-black via-neutral-950 to-black text-white overflow-hidden py-24">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05), transparent 45%), radial-gradient(circle at 80% 0%, rgba(245,238,220,0.05), transparent 40%)' }}></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6 text-white animate-fade-in-up">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Q&A</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up stagger-1">
              Everything you need to know about the <span className="text-blue-300">APAC Web3 Accelerator</span> program
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-purple-500/30 transition-all duration-300 animate-fade-in-up stagger-3"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-black/20 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-400 transition-transform ${openIndex === index ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}