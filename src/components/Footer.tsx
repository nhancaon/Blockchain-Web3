import { Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-black via-neutral-950 to-black text-white overflow-hidden py-16">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05), transparent 45%), radial-gradient(circle at 80% 0%, rgba(245,238,220,0.05), transparent 40%)' }}></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="animate-fade-in-up stagger-1">
            <div className="mb-4">
              <p className="text-white/60 text-sm mb-2">Program Logo</p>
              <p className="text-white/60 text-sm">Organizations Logo</p>
            </div>
          </div>

          <div className="animate-fade-in-up stagger-2">
            <h4 className="text-sm uppercase tracking-[0.4em] text-white/60 mb-4">Navigation</h4>
            <ul className="space-y-2 text-white">
              <li><a href="#program" className="hover:text-blue-400 transition-colors">Program</a></li>
              <li><a href="#tracks" className="hover:text-purple-400 transition-colors">Tracks</a></li>
              <li><a href="#apply" className="hover:text-blue-400 transition-colors">Apply</a></li>
              <li><a href="#partners" className="hover:text-purple-400 transition-colors">Partners</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div className="animate-fade-in-up stagger-3">
            <h4 className="text-sm uppercase tracking-[0.4em] text-white/60 mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-gradient-to-r from-blue-600 to-purple-700 transition-all" aria-label="X (Twitter)">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-gradient-to-r from-blue-600 to-purple-700 transition-all" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-gradient-to-r from-blue-600 to-purple-700 transition-all" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm animate-fade-in-up stagger-4">
          <p>Copyright © 2026 <span className="text-blue-300">APAC Web3 Accelerator</span></p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition-colors mr-4">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}