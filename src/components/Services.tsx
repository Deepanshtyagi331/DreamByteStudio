import { Video, Camera, Mic, Heart, Package, Music, ArrowRight, Check } from 'lucide-react'

const services = [
  {
    icon: Video,
    category: 'Commercial Video',
    title: 'Commercial & Brand Films',
    desc: 'High-converting product commercials, corporate films, and social video ads shot in 4K/8K with cinema lenses, fluid gimbal moves, and licensed sound design.',
    features: [
      'Scripting, Storyboard & Direction',
      'Cinema Lighting & 4K Drone Aerials',
      'Hollywood DaVinci Resolve Color Grade'
    ],
    price: 'From ₹15,000 / project',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Camera,
    category: 'Photography',
    title: 'Fashion & Editorial Shoots',
    desc: 'Stunning model portfolios, apparel lookbooks, jewelry campaigns, and magazine-ready editorials in our cyclorama studio or scenic Himalayan outdoors.',
    features: [
      'Creative Styling & Moodboard Curation',
      'Professional High-End Skin Retouching',
      'In-House Vanity & Wardrobe Changing Room'
    ],
    price: 'From ₹8,000 / lookbook',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Mic,
    category: 'Studio Rental',
    title: 'Podcast & Talk Show Studio',
    desc: 'Plug-and-play acoustic studio in Dehradun with 3-camera 4K live switching, broadcast Shure SM7B mics, custom RGB neon ambiance, and instant raw exports.',
    features: [
      '4x Shure SM7B Mics + Rodecaster Pro II',
      '3-Angle 4K Multi-Cam Synchronization',
      'Short-form Reels/Shorts Cut Package'
    ],
    price: 'From ₹2,500 / hour',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Heart,
    category: 'Cinema & Film',
    title: 'Pre-Wedding & Wedding Cinema',
    desc: 'Poetic, cinematic films that immortalize love stories. We shoot in scenic Rishikesh, Mussoorie, Dehradun hills, and exotic destination venues with cinematic grace.',
    features: [
      'Conceptual Narrative Teasers',
      '4K Drone & Slow-Motion Cinema',
      'Same-Day Edit for Reception Night'
    ],
    price: 'From ₹35,000 / package',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Package,
    category: 'E-Commerce',
    title: 'Product & E-Commerce Shoots',
    desc: 'Clean Amazon/Shopify white-background product photography, 360-degree interactive spins, and creative lifestyle setups that skyrocket your conversion rates.',
    features: [
      'Pure White 100% RGB Cutouts',
      'Lifestyle Prop & Tabletop Styling',
      'High-Resolution Macro Lens Detail'
    ],
    price: 'From ₹300 / SKU',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Music,
    category: 'Music & Art',
    title: 'Music Videos & Visual Arts',
    desc: 'Indie artists, hip-hop music videos, and conceptual visual art. Dramatic lighting, anamorphic flares, stylized smoke, and energetic editing rhythms.',
    features: [
      'RGB Ambiance & Haze Machine Effects',
      'Speed Ramping & VFX Transitions',
      'YouTube 4K & Vertical Cut Mastery'
    ],
    price: 'Custom Quotes',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
              <span className="w-2 h-0.5 bg-amber-400" />
              What We Create
            </div>
            <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              MASTERFUL SERVICES FOR <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400">
                EVERY SCREEN & FRAME
              </span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md">
            Whether you need a full-scale TV commercial, high-fashion campaign, wedding cinema, or a ready-to-record podcast studio in Dehradun, we provide end-to-end production.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => {
            const Icon = svc.icon
            return (
              <div
                key={idx}
                className="bg-obsidian/75 border border-white/5 hover:border-amber-500/30 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 group backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide text-amber-400">
                      {svc.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-black transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="font-syne text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {svc.title}
                    </h3>

                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {svc.desc}
                    </p>

                    <ul className="text-xs text-zinc-300 space-y-2 pt-2 border-t border-zinc-800">
                      {svc.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-amber-400" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-zinc-800/60 mt-4">
                  <span className="text-xs text-amber-400/90 font-mono font-medium">{svc.price}</span>
                  <a
                    href="#book-slot"
                    className="text-xs font-bold text-white hover:text-amber-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Book This</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
