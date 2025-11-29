import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-black via-neutral-950 to-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 45%), radial-gradient(circle at 80% 0%, rgba(245,238,220,0.1), transparent 40%)' }}></div>

      <nav className="relative z-10 container mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-2 uppercase tracking-[0.3em] text-xs text-white/70">
          <span>APAC Web3 Accelerator</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm tracking-wide">
          <a href="#program" className="hover:text-blue-400 transition-colors">Program</a>
          <a href="#tracks" className="hover:text-purple-400 transition-colors">Tracks</a>
          <a href="#apply" className="hover:text-blue-400 transition-colors">Apply</a>
          <a href="#partners" className="hover:text-purple-400 transition-colors">Partners</a>
          <a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a>
        </div>
        <a href="#apply" className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-2 rounded-full text-xs font-semibold tracking-wide hover:opacity-90 transition-all animate-pulse-gold">
          Apply Now
        </a>
      </nav>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 md:py-28">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          <div className="order-2 lg:order-1 w-full max-w-4xl text-center lg:text-left">
            <div className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.5em] text-white/60 mb-8 mx-auto lg:mx-0 animate-fade-in-up">
              <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-purple-600" />
              <span>Built in Asia. Visible Globally.</span>
              <div className="h-px w-12 bg-gradient-to-l from-blue-500 to-purple-600" />
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl leading-tight mb-6 font-display animate-fade-in-up stagger-1">
              APAC <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-text-glow">Web3</span> Accelerator
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-4 font-semibold animate-fade-in-up stagger-2">
              Real <span className="text-blue-300">Pilots</span>. Real <span className="text-purple-300">Partners</span>. Real <span className="text-blue-300 animate-text-pop">Adoption</span>.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-3xl mx-auto lg:mx-0 animate-fade-in-up stagger-3">
              The APAC accelerator enabling real pilots, enterprise integration, and regulated Web3 deployment. <span className="text-blue-300">APAC sandboxes</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up stagger-4">
              <a href="#apply" className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-base transition-all hover:opacity-90 hover:scale-105 flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/20 animate-pulse-gold">
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-xs text-white/60">Fast-track your eligibility check.</p>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up stagger-5">
              <button className="border border-white/40 text-white px-8 py-4 rounded-full font-semibold text-base transition-all hover:bg-gradient-to-r from-blue-600/20 to-purple-700/20 flex items-center justify-center space-x-2 group">
                <Download className="w-5 h-5 group-hover:text-blue-300 transition-colors" />
                <span>Download Program Deck</span>
              </button>
              <p className="text-xs text-white/60">Get the full program overview (PDF).</p>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-center text-center lg:text-right space-y-6 lg:ml-auto lg:mr-10">
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

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}