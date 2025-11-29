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
    <div id="faq" className="bg-black py-24 relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display mb-16 text-center text-white">
            Q&A
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-black/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[#f9f9f9] transition-colors"
                >
                  <h3 className="text-lg font-semibold text-black">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-black transition-transform ${openIndex === index ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <p className="text-black/70 leading-relaxed">{faq.answer}</p>
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

