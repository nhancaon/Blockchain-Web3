import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The accelerator program was a game-changer for our protocol. The mentorship and network opened doors we didn't know existed.",
      author: "Sarah Chen",
      role: "Founder & CEO",
      company: "DeFi Protocol",
      funding: "Raised $15M Series A"
    },
    {
      quote: "From technical guidance to investor intros, every aspect of the program was designed to accelerate our growth. We scaled from 10K to 5M users.",
      author: "Marcus Rodriguez",
      role: "Co-Founder",
      company: "NFT Marketplace",
      funding: "Raised $8M Seed"
    },
    {
      quote: "The Web3 accelerator gave us the validation and resources to take our infrastructure project from concept to production in 12 weeks.",
      author: "Emily Zhang",
      role: "CTO",
      company: "Layer 2 Solution",
      funding: "Raised $25M Series B"
    }
  ];

  return (
    <div className="bg-[#f2f0eb] py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-[#0b0b0b] mb-4">
            Founders in Residence
          </h2>
          <p className="text-lg text-black/60 max-w-3xl mx-auto">
            Perspectives from European-led ventures scaling defi, infrastructure, and culture.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-black/10 hover:border-black/50 transition-all duration-300 shadow-sm"
            >
              <Quote className="w-10 h-10 text-black mb-6" />
              <p className="text-black/70 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-200 pt-6">
                <div className="font-semibold text-[#0b0b0b] text-lg">{testimonial.author}</div>
                <div className="text-black/50 text-sm mb-2">{testimonial.role}, {testimonial.company}</div>
                <div className="inline-block px-3 py-1 border border-black/10 text-xs uppercase tracking-[0.3em] rounded-full text-black/70">
                  {testimonial.funding}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
