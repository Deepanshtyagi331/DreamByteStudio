'use client'

import { ArrowRight, LayoutGrid } from 'lucide-react'

interface HeroProps {
  onOpenShowreel?: () => void
}

export default function Hero({ onOpenShowreel }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-[#070709]">
      
      {/* Background Atmosphere & Ambient Stage Spotlight */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft dark vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#070709]/80 to-[#070709] z-10" />

        {/* Studio spotlight stand glow in center background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/15 rounded-full blur-[100px] sm:blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-orange-500/10 rounded-full blur-[80px] sm:blur-[100px]" />

        {/* Ambient Studio Lighting Backdrop */}
        <img
          src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=2000&q=80"
          alt="Studio Background Lighting"
          className="w-full h-full object-cover scale-105 opacity-20 filter brightness-50 contrast-125"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* =========================================================
              LEFT COLUMN: EDITORIAL TYPOGRAPHY & VALUE PROPOSITION
             ========================================================= */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            
            {/* Eyebrow Kicker */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-amber-400" />
              <span className="text-[12px] sm:text-[13px] uppercase font-semibold tracking-[0.22em] text-amber-400 font-mono">
                DEHRADUN&apos;S PREMIER STUDIO
              </span>
            </div>

            {/* Editorial Headline with Subtle Curved Underline */}
            <div className="space-y-1.5">
              <h1 className="font-editorial text-[clamp(2.5rem,5.2vw,5.15rem)] font-bold italic tracking-[-0.035em] text-white leading-[0.98] sm:leading-[1.02]">
                <span className="block drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
                  CRAFTED TO
                </span>
                <span className="block drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
                  BE SEEN.
                </span>
                <span className="block pt-1.5 sm:pt-2.5 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 font-semibold tracking-[-0.02em] whitespace-normal sm:whitespace-nowrap drop-shadow-[0_2px_12px_rgba(245,158,11,0.25)]">
                  Made To Be Felt.
                </span>
              </h1>

              {/* Decorative Curved Gold Underline */}
              <div className="pt-0.5">
                <svg
                  className="w-56 sm:w-72 lg:w-80 h-3 sm:h-3.5 text-amber-400 pointer-events-none"
                  viewBox="0 0 320 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M3 10.5C75 2.5 220 2.5 317 8C235 4 105 4.5 3 10.5Z"
                    fill="url(#goldCurveGrad)"
                  />
                  <defs>
                    <linearGradient id="goldCurveGrad" x1="3" y1="6" x2="317" y2="6" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FDE68A" />
                      <stop offset="0.5" stopColor="#F59E0B" />
                      <stop offset="1" stopColor="#D97706" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg lg:text-[1.125rem] text-zinc-300/90 max-w-xl font-light leading-relaxed">
              Commercial films, fashion editorials, pre-wedding cinema, and timeless visual storytelling crafted with precision.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <a
                href="#book-slot"
                className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black px-7 py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-amber-500/20 hover:brightness-110 hover:-translate-y-0.5 transition-all text-center"
              >
                <span>Book Your Session</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#portfolio"
                className="px-7 py-3.5 rounded-full font-medium text-sm text-zinc-200 border border-white/15 bg-white/5 hover:border-amber-400/50 hover:text-white backdrop-blur-md flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all text-center"
              >
                <LayoutGrid className="w-4 h-4 text-amber-400" />
                <span>Explore Portfolio</span>
              </a>
            </div>

            {/* Stats Row with Responsive Vertical Dividers */}
            <div className="pt-6 sm:pt-8 border-t border-zinc-800/80 grid grid-cols-3 gap-2 sm:gap-6 items-center">
              <div>
                <p className="font-editorial text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-white tracking-tight">500+</p>
                <p className="text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-widest mt-1 font-medium">
                  SHOOTS DELIVERED
                </p>
              </div>

              <div className="flex items-center gap-2 sm:gap-6">
                <div className="h-8 sm:h-10 w-[1px] bg-zinc-800 shrink-0" />
                <div>
                  <p className="font-editorial text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-amber-400 tracking-tight">4K &amp; 8K</p>
                  <p className="text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-widest mt-1 font-medium">
                    CINEMA STANDARD
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-6">
                <div className="h-8 sm:h-10 w-[1px] bg-zinc-800 shrink-0" />
                <div>
                  <p className="font-editorial text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-white tracking-tight">4.9/5</p>
                  <p className="text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-widest mt-1 font-medium">
                    CLIENT SATISFACTION
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* =========================================================
              RIGHT COLUMN: OVERLAPPING CURVED EDITORIAL PHOTO COMPOSITION
             ========================================================= */}
          <div className="lg:col-span-6 relative pt-4 sm:pt-8 lg:pt-0 pb-6 sm:pb-8 lg:pb-0">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Studio Stage Spotlight Background Element (visible on tablet/desktop) */}
              <div className="absolute -top-10 -left-6 sm:-left-10 z-0 hidden md:block pointer-events-none">
                <div className="w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-amber-400/20 blur-xl absolute -top-4 -left-4" />
                <div className="relative w-20 sm:w-28 h-20 sm:h-28 rounded-full border-4 border-zinc-800/80 bg-zinc-950/80 flex items-center justify-center shadow-2xl">
                  <div className="w-14 sm:w-20 h-14 sm:h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600/30 flex items-center justify-center border border-amber-400/50">
                    <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-amber-200/90 shadow-[0_0_30px_rgba(245,158,11,0.8)]" />
                  </div>
                </div>
                <div className="w-1.5 h-64 bg-gradient-to-b from-zinc-700 via-zinc-800 to-transparent mx-auto mt-2 opacity-60" />
              </div>

              {/* MAIN PRIMARY IMAGE (ELEGANT EDITORIAL PORTRAIT) */}
              <div className="relative ml-auto w-full lg:w-[92%] aspect-[3/4] rounded-3xl sm:rounded-[2.5rem] overflow-hidden border border-amber-400/35 shadow-2xl z-10 group">
                <img
                  src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=85"
                  alt="DreamByte Editorial Portrait Model"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                />

                {/* Subtle vignette over main image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                {/* Top Corner Amber Frame Accent */}
                <div className="absolute top-4 right-4 sm:top-5 sm:right-5 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-r-2 border-amber-400/60 rounded-tr-lg sm:rounded-tr-xl pointer-events-none" />
              </div>

              {/* OVERLAPPING SECONDARY INSET CARD: CINEMATOGRAPHER RIG */}
              <div className="absolute -bottom-4 -left-2 sm:-bottom-8 sm:-left-6 z-20 w-32 sm:w-44 md:w-52 aspect-square rounded-2xl sm:rounded-[1.8rem] overflow-hidden border-2 border-amber-400/50 shadow-2xl group bg-zinc-950">
                <img
                  src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80"
                  alt="Cinema Camera Rig on Set"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 px-1.5 sm:px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-[9px] sm:text-[10px] font-bold text-amber-400 border border-white/10">
                  On Set • Cinema
                </div>
              </div>

              {/* OVERLAPPING LOWER-RIGHT INSET BADGE: FEATURED WORK */}
              <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 z-20 bg-zinc-950/90 backdrop-blur-xl border border-amber-400/35 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 md:p-5 max-w-[170px] sm:max-w-[240px] md:max-w-[260px] shadow-2xl flex items-center justify-between gap-2 sm:gap-3 group">
                <div className="space-y-0.5 sm:space-y-1">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-2 sm:w-3 h-[1.5px] bg-amber-400" />
                    <span className="text-[8px] sm:text-[10px] uppercase font-bold tracking-wider sm:tracking-widest text-amber-400">
                      FEATURED WORK
                    </span>
                  </div>
                  <h4 className="font-editorial text-xs sm:text-sm md:text-base font-bold text-white leading-tight truncate">
                    Vogue Luminescence
                  </h4>
                  <p className="text-[9px] sm:text-[11px] text-zinc-400">
                    Commercial / Fashion
                  </p>
                </div>

                <a
                  href="#portfolio"
                  aria-label="View featured portfolio item"
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-amber-400/40 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all shrink-0"
                >
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
