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
    <div id="faq" className="bg-[#f6f4ee] py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-black mb-16 text-center">
            Need Clarity
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-black/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#f6f4ee] transition-colors"
                >
                  <span className="text-lg md:text-xl font-semibold text-black pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-black flex-shrink-0 transition-transform ${openIndex === index ? 'transform rotate-180' : ''
                      }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <p className="text-base md:text-lg text-black/70 leading-relaxed">{faq.answer}</p>
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

