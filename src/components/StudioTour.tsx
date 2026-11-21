import { Square, Lightbulb, Headphones, DoorOpen } from 'lucide-react'

export default function StudioTour() {
  return (
    <section id="studio-space" className="py-24 bg-zinc-950/60 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
              <span className="w-2 h-0.5 bg-amber-400" />
              Studio Floor & Production Gear
            </div>
            <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              STATE-OF-THE-ART GEAR FOR UNCOMPROMISED ART
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Located on Sahastradhara Road, Dehradun, DreamByte Studio features a sound-treated shooting bay, motorized backdrop setups, professional makeup vanities, and cinema-grade lighting grids.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                  <Square className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-syne font-bold text-white text-base">Cyclorama Infinity Cove & Motorized Backdrops</h3>
                  <p className="text-xs text-zinc-400 mt-1">Seamless white, black, chroma green, and 12+ vibrant Savage paper backdrops.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-syne font-bold text-white text-base">Aputure & Nanlite Cinema Lighting Grid</h3>
                  <p className="text-xs text-zinc-400 mt-1">Aputure 600d Pro, 300x, motorized softboxes, and Nanlite Pavotube II RGB tubes with Sidus Link control.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-syne font-bold text-white text-base">Sound-Isolated Podcast & Talk Show Lounge</h3>
                  <p className="text-xs text-zinc-400 mt-1">Studio acoustic panels, Shure SM7B broadcast microphones, and 4K multi-cam live-switching consoles.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a href="#book-slot" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-amber-950">
                <DoorOpen className="w-4 h-4" /> Reserve Studio Space
              </a>
            </div>

          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-zinc-800 aspect-[4/5] relative group">
                  <img src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800&q=80" alt="Studio Lighting Rig" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/70 backdrop-blur-md rounded-lg text-[11px] font-bold text-amber-400">Lighting Grid</div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-zinc-800 aspect-square relative group">
                  <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80" alt="Cinema Camera Line" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/70 backdrop-blur-md rounded-lg text-[11px] font-bold text-amber-400">Sony Cinema Line</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden border border-zinc-800 aspect-square relative group">
                  <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80" alt="Podcast Lounge" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/70 backdrop-blur-md rounded-lg text-[11px] font-bold text-amber-400">Podcast Desk</div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-zinc-800 aspect-[4/5] relative group">
                  <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80" alt="Outdoor Location Scouting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/70 backdrop-blur-md rounded-lg text-[11px] font-bold text-amber-400">Himalayan Outdoor Unit</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
