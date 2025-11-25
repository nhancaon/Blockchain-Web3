import { Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white">APAC Web3 Accelerator 2026</h3>
            </div>
            <p className="text-white/60 leading-relaxed text-sm">
              Built in Asia. Visible Globally.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.4em] text-white/60 mb-4">Navigation</h4>
            <ul className="space-y-2 text-white">
              <li><a href="#program" className="hover:text-white/60 transition-colors">Program</a></li>
              <li><a href="#tracks" className="hover:text-white/60 transition-colors">Tracks</a></li>
              <li><a href="#apply" className="hover:text-white/60 transition-colors">Apply</a></li>
              <li><a href="#partners" className="hover:text-white/60 transition-colors">Partners</a></li>
              <li><a href="#faq" className="hover:text-white/60 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.4em] text-white/60 mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.4em] text-white/60 mb-4">Resources</h4>
            <ul className="space-y-2 text-white">
              <li><a href="#" className="hover:text-white/60 transition-colors">Program Deck</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">Partnership Info</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
          <p>&copy; 2026 APAC Web3 Accelerator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
