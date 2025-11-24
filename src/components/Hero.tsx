import { Rocket, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-black via-neutral-950 to-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 45%), radial-gradient(circle at 80% 0%, rgba(245,238,220,0.1), transparent 40%)' }}></div>

      <nav className="relative z-10 container mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-2 uppercase tracking-[0.3em] text-xs text-white/70">
          <Rocket className="w-6 h-6 text-white" />
          <span>Web3 Accelerator</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm tracking-wide">
          <a href="#programs" className="hover:text-white transition-colors">Programs</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#partners" className="hover:text-white transition-colors">Partners</a>
          <a href="#apply" className="hover:text-white transition-colors">Apply</a>
        </div>
        <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-semibold tracking-wide hover:bg-[#f5f3ee] transition-colors">
          Apply Now
        </button>
      </nav>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 md:py-28">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          <div className="order-2 lg:order-1 w-full max-w-4xl text-center lg:text-left">
            <div className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.5em] text-white/60 mb-8 mx-auto lg:mx-0">
              <div className="h-px w-12 bg-white/40" />
              <span>European Web3 House</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl leading-tight mb-8">
              <span className="block text-white/80 font-light">Crafting the</span>
              <span className="block font-display text-white">
                Future of Decentralised Finance
              </span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-white/70 mb-10 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              A monochrome, design-led accelerator for European blockchain founders. We blend capital,
              cultural insight, and an international investor syndicate to launch enduring ventures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-base transition-all hover:translate-y-0.5 flex items-center justify-center space-x-2">
                <span>Start Your Residency</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white/40 text-white px-8 py-4 rounded-full font-semibold text-base transition-all hover:bg-white/5">
                Explore the Studio
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-center text-center lg:text-right space-y-6 lg:ml-auto">
            <div className="hero-cube-scene">
              <div className="hero-cube-glow" />
              <div className="hero-cube-orbit hero-cube-orbit--outer" />
              <div className="hero-cube-orbit hero-cube-orbit--inner" />
              <div className="hero-cube">
                <div className="hero-cube-face hero-cube-face--front"></div>
                <div className="hero-cube-face hero-cube-face--back"></div>
                <div className="hero-cube-face hero-cube-face--right"></div>
                <div className="hero-cube-face hero-cube-face--left"></div>
                <div className="hero-cube-face hero-cube-face--top"></div>
                <div className="hero-cube-face hero-cube-face--bottom"></div>
              </div>
              <div className="hero-cube-node hero-cube-node--one" />
              <div className="hero-cube-node hero-cube-node--two" />
              <div className="hero-cube-node hero-cube-node--three" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f6f4ee] to-transparent"></div>
    </div>
  );
}
