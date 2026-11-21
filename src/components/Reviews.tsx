import { Star } from 'lucide-react'

const testimonials = [
  {
    initials: 'AK',
    name: 'Aman Kapoor',
    role: 'Founder, Urban Threads Apparel',
    text: 'We booked DreamByte for our luxury apparel ad campaign in Dehradun. The lighting setups, camera movement, and final color grade were leagues ahead of anything we’ve experienced in the region. Incredible team!'
  },
  {
    initials: 'PS',
    name: 'Priya Sharma',
    role: 'Host, Founders Unfiltered Show',
    text: 'Their podcast studio setup is truly world class. We walked in with just our topic notes, and they had four broadcast mics and 3-angle 4K cameras synchronized ready to record. Handed us polished clips in 48 hours.'
  },
  {
    initials: 'RN',
    name: 'Rohan & Naina',
    role: 'Pre-Wedding Cinema Clients',
    text: 'Our pre-wedding shoot in Dhanaulti and Rishikesh felt like a Bollywood cinema production. The drone shots, poetic pacing, and the cinematic song edit made our entire family cry happy tears. Highly recommend!'
  }
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
            <span className="w-2 h-0.5 bg-amber-400" />
            Real Stories, Real Trust
            <span className="w-2 h-0.5 bg-amber-400" />
          </div>
          <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            WORDS FROM OUR CLIENTS
          </h2>
          <p className="text-zinc-400 text-sm">
            Read what brands, entrepreneurs, and newlyweds say about working with DreamByte Studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-obsidian/75 border border-white/5 hover:border-amber-500/30 rounded-3xl p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 text-sm mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                <div className="w-10 h-10 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold font-syne text-sm">
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">{t.name}</h4>
                  <p className="text-xs text-zinc-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
