import { Rocket, Twitter, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4 uppercase tracking-[0.3em] text-xs text-white/60">
              <Rocket className="w-6 h-6 text-white" />
              <span>Web3 Accelerator</span>
            </div>
            <p className="text-white/60 leading-relaxed">
              A monochrome residency for blockchain ventures anchored in Europe and scaling globally.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.4em] text-white/60 mb-4">Programs</h4>
            <ul className="space-y-2 text-white">
              <li><a href="#programs" className="hover:text-white/60 transition-colors">Base Camp</a></li>
              <li><a href="#programs" className="hover:text-white/60 transition-colors">Accelerate</a></li>
              <li><a href="#programs" className="hover:text-white/60 transition-colors">Scale Up</a></li>
              <li><a href="#apply" className="hover:text-white/60 transition-colors">Apply</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.4em] text-white/60 mb-4">Resources</h4>
            <ul className="space-y-2 text-white">
              <li><a href="#portfolio" className="hover:text-white/60 transition-colors">Portfolio</a></li>
              <li><a href="#partners" className="hover:text-white/60 transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">Events</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.4em] text-white/60 mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-white/60 text-sm">
              hello@web3accelerator.io
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
          <p>&copy; 2024 Web3 Accelerator. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white/80 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/80 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/80 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
