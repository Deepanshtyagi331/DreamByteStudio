import { Play, Globe, Phone, Mail, Clock } from 'lucide-react'
import InstagramIcon from './icons/InstagramIcon'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 py-16 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center text-black font-extrabold text-sm">
                <Play className="w-4 h-4 fill-current translate-x-0.5" />
              </div>
              <span className="font-syne font-extrabold text-lg text-white">
                DREAMBYTE <span className="text-amber-400">STUDIO</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Cinema-grade visual production house and sound-isolated podcast studio based in Dehradun, Uttarakhand.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/dreambytestudio.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-pink-400 hover:border-pink-500/50 transition-colors"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://dreambytesolution.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-amber-400 hover:border-amber-500/50 transition-colors"
                title="DreamByte Solution"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Capabilities */}
          <div className="space-y-3">
            <h4 className="font-syne font-bold text-white text-xs uppercase tracking-widest">Capabilities</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Commercial & Brand Films</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Fashion & Lookbooks</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Podcast Multi-Cam Rental</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Pre-Wedding Cinema</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Product & E-Commerce Shoots</a></li>
              <li><a href="#color-grading" className="hover:text-amber-400 transition-colors">DaVinci Color Grading</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="font-syne font-bold text-white text-xs uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-amber-400 transition-colors">Home Top</a></li>
              <li><a href="#portfolio" className="hover:text-amber-400 transition-colors">Selected Portfolio</a></li>
              <li><a href="#studio-space" className="hover:text-amber-400 transition-colors">Studio Floor & Gear</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Our Crew</a></li>
              <li><a href="#book-slot" className="hover:text-amber-400 transition-colors">Book a Shoot Slot</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">FAQ & Policies</a></li>
            </ul>
          </div>

          {/* Direct Desk */}
          <div className="space-y-3">
            <h4 className="font-syne font-bold text-white text-xs uppercase tracking-widest">Direct Desk</h4>
            <div className="space-y-1.5 text-xs">
              <p className="text-white font-medium flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" /> +91 82797 20490
              </p>
              <p className="text-white font-medium flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" /> +91 92583 32639
              </p>
              <p className="text-zinc-400 flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" /> info@dreambytesolution.com
              </p>
              <p className="text-zinc-400 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400" /> Mon - Sun: 09:00 AM - 09:00 PM
              </p>
            </div>
            <div className="pt-2">
              <a
                href="#book-slot"
                className="btn-primary block text-center py-2 px-4 rounded-lg font-bold text-xs text-amber-950"
              >
                Schedule Studio Slot Now
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <p>© 2026 DreamByte Studio (DreamByte Solutions). All rights reserved.</p>
          <p>
            Crafted with <span className="text-amber-400">♦</span> for Cinema & Artistry in Dehradun
          </p>
        </div>
      </div>
    </footer>
  )
}
