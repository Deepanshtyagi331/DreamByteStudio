import { Sparkles, Shirt, Coffee, Hotel, Mic, Camera } from 'lucide-react'

export default function BrandTicker() {
  const brands = [
    { name: 'AURA JEWELS', icon: Sparkles },
    { name: 'URBAN THREADS', icon: Shirt },
    { name: 'HIMALAYAN ROASTERS', icon: Coffee },
    { name: 'THE VALE RESORT', icon: Hotel },
    { name: 'FOUNDERS UNFILTERED', icon: Mic },
    { name: 'DOON CREATIVE LABS', icon: Camera },
  ]

  return (
    <section className="py-10 border-y border-zinc-800/60 bg-zinc-950/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-[0.3em] font-semibold text-zinc-400 mb-6">
          Trusted By Brands, Creators, Agencies & Couples
        </p>
        <div className="brand-ticker-wrap">
          <div className="brand-ticker">
            {[...brands, ...brands].map((brand, idx) => {
              const Icon = brand.icon
              return (
                <span
                  key={idx}
                  className="inline-flex items-center mx-8 font-syne font-bold text-sm tracking-[0.15em] text-zinc-400 hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4 mr-2 text-amber-400" />
                  {brand.name}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
