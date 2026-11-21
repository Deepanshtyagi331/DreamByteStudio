'use client'

import { ArrowRight, LayoutGrid } from 'lucide-react'

interface HeroProps {
  onOpenShowreel?: () => void
}

export default function Hero({ onOpenShowreel }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#070709]">

      {/* Background Atmosphere & Ambient Stage Spotlight */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft dark vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#070709]/80 to-[#070709] z-10" />

        {/* Studio spotlight stand glow in center background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px]" />

        {/* Ambient Studio Lighting Backdrop with Fresnel Spotlight on C-Stand */}
        <img
          src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=2000&q=80"
          alt="Studio Background Lighting"
          className="w-full h-full object-cover scale-105 opacity-20 filter brightness-50 contrast-125"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* =========================================================
              LEFT COLUMN: EDITORIAL TYPOGRAPHY & VALUE PROPOSITION
             ========================================================= */}
          <div className="lg:col-span-6 space-y-7">

            {/* Top Subtitle Kicker */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-amber-400" />
              <span className="text-xs uppercase font-bold tracking-[0.25em] text-amber-400/90 font-mono">
                DEHRADUN&apos;S PREMIER STUDIO
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-editorial text-5xl sm:text-6xl xl:text-[4.75rem] font-bold tracking-tight text-white leading-[1.08]">
              CRAFTED TO<br />
              BE SEEN.<br />
              <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                MADE TO BE FELT.
              </span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-zinc-300/90 max-w-lg font-light leading-relaxed">
              Commercial films, fashion editorials, pre-wedding cinema, and timeless visual storytelling crafted with precision.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#book-slot"
                className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black px-7 py-3.5 rounded-full font-bold text-sm flex items-center gap-2.5 shadow-xl shadow-amber-500/20 hover:brightness-110 hover:-translate-y-0.5 transition-all"
              >
                <span>Book Your Session</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#portfolio"
                className="px-6 py-3.5 rounded-full font-medium text-sm text-zinc-200 border border-white/15 bg-white/5 hover:border-amber-400/50 hover:text-white backdrop-blur-md flex items-center gap-2 hover:-translate-y-0.5 transition-all"
              >
                <LayoutGrid className="w-4 h-4 text-amber-400" />
                <span>Explore Portfolio</span>
              </a>
            </div>

            {/* Stats Row with Vertical Dividers */}
            <div className="pt-8 border-t border-zinc-800/80 flex items-center gap-6 sm:gap-10">
              <div>
                <p className="font-editorial text-3xl sm:text-4xl font-bold text-white tracking-tight">500+</p>
                <p className="text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-widest mt-1">
                  SHOOTS DELIVERED
                </p>
              </div>

              <div className="h-10 w-[1px] bg-zinc-800" />

              <div>
                <p className="font-editorial text-3xl sm:text-4xl font-bold text-white tracking-tight">4K &amp; 8K</p>
                <p className="text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-widest mt-1">
                  CINEMA STANDARD
                </p>
              </div>

              <div className="h-10 w-[1px] bg-zinc-800" />

              <div>
                <p className="font-editorial text-3xl sm:text-4xl font-bold text-white tracking-tight">4.9/5</p>
                <p className="text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-widest mt-1">
                  CLIENT SATISFACTION
                </p>
              </div>
            </div>

          </div>

          {/* =========================================================
              RIGHT COLUMN: OVERLAPPING CURVED EDITORIAL PHOTO COMPOSITION
             ========================================================= */}
          <div className="lg:col-span-6 relative pt-6 lg:pt-0">
            <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">

              {/* Studio Stage Spotlight Background Element */}
              <div className="absolute -top-12 -left-8 sm:-left-12 z-0 hidden sm:block pointer-events-none">
                <div className="w-32 h-32 rounded-full bg-amber-400/20 blur-xl absolute -top-4 -left-4" />
                <div className="relative w-28 h-28 rounded-full border-4 border-zinc-800/80 bg-zinc-950/80 flex items-center justify-center shadow-2xl">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600/30 flex items-center justify-center border border-amber-400/50">
                    <div className="w-12 h-12 rounded-full bg-amber-200/90 shadow-[0_0_40px_rgba(245,158,11,0.8)]" />
                  </div>
                </div>
                {/* Stand Pole */}
                <div className="w-1.5 h-72 bg-gradient-to-b from-zinc-700 via-zinc-800 to-transparent mx-auto mt-2 opacity-60" />
              </div>

              {/* MAIN PRIMARY IMAGE (ELEGANT EDITORIAL PORTRAIT) */}
              <div className="relative ml-auto w-full lg:w-[92%] aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-amber-400/35 shadow-2xl z-10 group">
                <img
                  src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=85"
                  alt="DreamByte Editorial Portrait Model"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                />

                {/* Subtle vignette over main image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                {/* Top Corner Amber Frame Accent */}
                <div className="absolute top-5 right-5 w-8 h-8 border-t-2 border-r-2 border-amber-400/60 rounded-tr-xl pointer-events-none" />
              </div>

              {/* OVERLAPPING SECONDARY INSET CARD: CINEMATOGRAPHER RIG */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 z-20 w-44 sm:w-56 aspect-square rounded-[1.8rem] overflow-hidden border-2 border-amber-400/50 shadow-2xl group bg-zinc-950">
                <img
                  src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80"
                  alt="Cinema Camera Rig on Set"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-bold text-amber-400 border border-white/10">
                  On Set • Cinema Rig
                </div>
              </div>

              {/* OVERLAPPING LOWER-RIGHT INSET BADGE: FEATURED WORK */}
              <div className="absolute bottom-6 right-6 z-20 bg-zinc-950/90 backdrop-blur-xl border border-amber-400/35 rounded-2xl p-4 sm:p-5 max-w-[260px] shadow-2xl flex items-center justify-between gap-3 group">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-[1.5px] bg-amber-400" />
                    <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400">
                      FEATURED WORK
                    </span>
                  </div>
                  <h4 className="font-editorial text-sm sm:text-base font-bold text-white leading-tight">
                    Vogue Luminescence Collection
                  </h4>
                  <p className="text-[11px] text-zinc-400">
                    Commercial / Fashion
                  </p>
                </div>

                <a
                  href="#portfolio"
                  aria-label="View featured portfolio item"
                  className="w-8 h-8 rounded-full border border-amber-400/40 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all shrink-0"
                >
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
