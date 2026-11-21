import { Clapperboard, Mountain } from 'lucide-react'
import InstagramIcon from './icons/InstagramIcon'

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950/70 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl blur-xl opacity-30" />
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
                  alt="DreamByte Studio Team & Creative Directors"
                  className="w-full h-full object-cover filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10">
                  <p className="font-syne font-bold text-white text-base">&quot;Every frame should evoke emotion, every story must leave an imprint.&quot;</p>
                  <p className="text-xs text-amber-400 mt-1">— The DreamByte Creative Vision</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
              <span className="w-2 h-0.5 bg-amber-400" />
              Behind the Lens
            </div>
            <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              WHERE PASSION MEETS CINEMATIC RIGOR
            </h2>
            <p className="text-zinc-300 text-base leading-relaxed">
              Founded under the creative umbrella of <strong>DreamByte Solutions</strong> in Dehradun, <strong>DreamByte Studio</strong> was established with a singular mission: to eliminate mediocre visuals and deliver world-class cinema standards to regional and international brands alike.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              From our flagship studio space on Sahastradhara Road to rugged on-location shoots across Uttarakhand&apos;s most stunning ridges and rivers, our crew of cinematographers, lighting technicians, sound engineers, and colorists bring relentless dedication to each frame.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
              <div className="space-y-1">
                <h4 className="font-syne font-bold text-white text-lg flex items-center gap-2">
                  <Clapperboard className="w-4 h-4 text-amber-400" /> In-House Post
                </h4>
                <p className="text-xs text-zinc-400">Dedicated editing suites with DaVinci Resolve color calibration & Dolby sound mixing.</p>
              </div>

              <div className="space-y-1">
                <h4 className="font-syne font-bold text-white text-lg flex items-center gap-2">
                  <Mountain className="w-4 h-4 text-amber-400" /> Scenic Production
                </h4>
                <p className="text-xs text-zinc-400">Direct permits & location expertise across Mussoorie, Dhanaulti, Rishikesh & Doon valley.</p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a href="#services" className="btn-secondary px-6 py-3 rounded-full text-sm font-semibold">
                Explore Studio Capabilities
              </a>
              <a
                href="https://www.instagram.com/dreambytestudio.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-amber-400 hover:text-white flex items-center gap-2"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400" /> View Instagram Journey
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
