'use client'

import { ArrowRight, LayoutGrid } from 'lucide-react'

interface HeroProps {
  onOpenShowreel?: () => void
}

export default function Hero({ onOpenShowreel }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-[#070709]">
      
      {/* =========================================================
          BACKGROUND ATMOSPHERE: ARCHITECTURAL LIGHT & SHADOWS + STUDIO GEAR
         ========================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        
        {/* Architectural Stone Columns & Archway with Layered Light & Shadows */}
        <img
          src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=2000&q=85"
          alt="Architectural Stone Archway with Layered Light and Shadows"
          className="w-full h-full object-cover object-center filter brightness-60 contrast-125 saturate-110 scale-105"
        />

        {/* Soft dark vignette overlays ensuring text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070709]/95 via-[#070709]/60 to-[#070709]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-[#070709]/70" />

        {/* Volumetric Warm Golden Sunbeams & Floor Glow */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 right-1/4 h-48 bg-gradient-to-t from-amber-500/10 to-transparent blur-3xl" />

        {/* TOP-CENTER HANGING AMBER DISC FIXTURE (From Option 3 Reference) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-amber-500/40 bg-zinc-950/90 shadow-[0_0_50px_rgba(245,158,11,0.5)] flex items-center justify-center backdrop-blur-md">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 shadow-[0_0_30px_rgba(245,158,11,0.9)] flex items-center justify-center">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-amber-100/90 blur-[1px]" />
            </div>
          </div>
          <div className="w-[1.5px] h-12 sm:h-16 bg-gradient-to-b from-amber-400/80 via-amber-500/40 to-transparent shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
        </div>

        {/* UPPER-LEFT FRESNEL SPOTLIGHT ON C-STAND */}
        <div className="absolute top-12 -left-6 sm:left-2 z-10 pointer-events-none hidden md:block">
          {/* Angled spotlight flare */}
          <div className="absolute top-6 left-12 w-[380px] h-[280px] bg-gradient-to-br from-amber-400/30 via-amber-500/10 to-transparent rounded-full blur-[60px] -rotate-12 pointer-events-none" />
          
          <div className="relative w-24 sm:w-32 h-24 sm:h-32 rounded-full border-4 border-zinc-800 bg-zinc-950/90 flex items-center justify-center shadow-2xl">
            <div className="w-16 sm:w-22 h-16 sm:h-22 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 flex items-center justify-center border-2 border-amber-400 shadow-[0_0_35px_rgba(245,158,11,0.8)]">
              <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-amber-100 blur-[2px]" />
            </div>
          </div>
          <div className="w-2 h-72 bg-gradient-to-b from-zinc-700 via-zinc-800 to-transparent mx-auto mt-1 opacity-70" />
        </div>

        {/* LOWER-LEFT CINEMA CAMERA ON TRIPOD SILHOUETTE */}
        <div className="absolute -bottom-6 left-2 sm:left-6 z-10 pointer-events-none hidden lg:block opacity-75">
          <div className="relative w-44 sm:w-52 h-44 sm:h-52">
            <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=500&q=80"
              alt="Cinema Camera Silhouette"
              className="w-full h-full object-contain filter brightness-40 contrast-150 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* =========================================================
              LEFT COLUMN: EDITORIAL TYPOGRAPHY & VALUE PROPOSITION
             ========================================================= */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            
            {/* Top Option Tag from Reference */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/40 bg-zinc-950/80 backdrop-blur-md">
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] text-amber-300">
                OPTION 3 — LAYERED LIGHT &amp; SHADOWS
              </span>
            </div>

            {/* Subtitle Kicker */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="w-6 sm:w-8 h-[2px] bg-amber-400" />
              <span className="text-[11px] sm:text-xs uppercase font-bold tracking-[0.2em] sm:tracking-[0.25em] text-amber-400/90 font-mono">
                DEHRADUN&apos;S PREMIER STUDIO
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl xl:text-[4.75rem] font-bold tracking-tight text-white leading-[1.08]">
              CRAFTED TO<br />
              BE SEEN.<br />
              <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                MADE TO BE FELT.
              </span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base md:text-lg text-zinc-300/90 max-w-lg font-light leading-relaxed">
              Commercial films, fashion editorials, pre-wedding cinema, and timeless visual storytelling crafted with precision.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <a
                href="#book-slot"
                className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black px-6 sm:px-7 py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-amber-500/20 hover:brightness-110 hover:-translate-y-0.5 transition-all text-center"
              >
                <span>Book Your Session</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#portfolio"
                className="px-6 py-3.5 rounded-full font-medium text-sm text-zinc-200 border border-white/15 bg-white/5 hover:border-amber-400/50 hover:text-white backdrop-blur-md flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all text-center"
              >
                <LayoutGrid className="w-4 h-4 text-amber-400" />
                <span>Explore Portfolio</span>
              </a>
            </div>

            {/* Stats Row with Responsive Vertical Dividers */}
            <div className="pt-6 sm:pt-8 border-t border-zinc-800/80 grid grid-cols-3 gap-2 sm:gap-6 items-center">
              <div>
                <p className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">500+</p>
                <p className="text-[9px] sm:text-[11px] text-zinc-400 uppercase tracking-wider sm:tracking-widest mt-0.5 sm:mt-1 font-medium">
                  SHOOTS DELIVERED
                </p>
              </div>

              <div className="flex items-center gap-2 sm:gap-6">
                <div className="h-8 sm:h-10 w-[1px] bg-zinc-800 shrink-0" />
                <div>
                  <p className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">4K &amp; 8K</p>
                  <p className="text-[9px] sm:text-[11px] text-zinc-400 uppercase tracking-wider sm:tracking-widest mt-0.5 sm:mt-1 font-medium">
                    CINEMA STANDARD
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-6">
                <div className="h-8 sm:h-10 w-[1px] bg-zinc-800 shrink-0" />
                <div>
                  <p className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">4.9/5</p>
                  <p className="text-[9px] sm:text-[11px] text-zinc-400 uppercase tracking-wider sm:tracking-widest mt-0.5 sm:mt-1 font-medium">
                    SATISFACTION
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
              
              {/* MAIN PRIMARY IMAGE (INDIAN BRIDAL EDITORIAL PORTRAIT) */}
              <div className="relative ml-auto w-full lg:w-[92%] aspect-[3/4] rounded-3xl sm:rounded-[2.5rem] overflow-hidden border border-amber-400/40 shadow-2xl z-10 group bg-zinc-950">
                <img
                  src="/images/hero-model-crop.jpg"
                  alt="DreamByte Indian Bridal Luxury Editorial Model"
                  onError={(e) => {
                    // Fallback to high-res traditional Indian bridal portrait if local crop is unavailable
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85'
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                />

                {/* Subtle vignette over main image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                {/* Top Corner Amber Frame Accent */}
                <div className="absolute top-4 right-4 sm:top-5 sm:right-5 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-r-2 border-amber-400/70 rounded-tr-lg sm:rounded-tr-xl pointer-events-none" />
              </div>

              {/* OVERLAPPING SECONDARY INSET CARD: VINTAGE TYPEWRITER PROP */}
              <div className="absolute -bottom-4 -left-2 sm:-bottom-8 sm:-left-6 z-20 w-32 sm:w-44 md:w-50 aspect-square rounded-2xl sm:rounded-[1.8rem] overflow-hidden border-2 border-amber-400/50 shadow-2xl group bg-zinc-950">
                <img
                  src="/images/hero-typewriter-crop.jpg"
                  alt="Vintage Studio Prop"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1526550517342-e086b387edda?auto=format&fit=crop&w=800&q=80'
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 px-1.5 sm:px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-[9px] sm:text-[10px] font-bold text-amber-400 border border-white/10">
                  On Set • Prop
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
