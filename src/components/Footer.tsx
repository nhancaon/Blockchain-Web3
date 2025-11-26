import { Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <p className="text-white/60 text-sm mb-2">Program Logo</p>
              <p className="text-white/60 text-sm">Organizations Logo</p>
            </div>
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
            <h4 className="text-sm uppercase tracking-[0.4em] text-white/60 mb-4">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors" aria-label="X (Twitter)">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
          <p>Copyright © 2026</p>
        </div>
      </div>
    </footer>
  );
}
