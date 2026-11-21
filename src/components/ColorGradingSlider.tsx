'use client'

import { useState, useRef, useCallback } from 'react'
import { Palette, Camera, Check, MoveHorizontal } from 'lucide-react'

export default function ColorGradingSlider() {
  const [sliderPos, setSliderPos] = useState(50)
  const isDragging = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    let offset = clientX - rect.left
    if (offset < 0) offset = 0
    if (offset > rect.width) offset = rect.width
    setSliderPos((offset / rect.width) * 100)
  }, [])

  const handleMouseDown = () => {
    isDragging.current = true
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX)
    }
  }

  return (
    <section id="color-grading" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
            <span className="w-2 h-0.5 bg-amber-400" />
            Post-Production Artistry
            <span className="w-2 h-0.5 bg-amber-400" />
          </div>
          <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            FROM FLAT S-LOG RAW <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400">
              TO CINEMA MASTERPIECE
            </span>
          </h2>
          <p className="text-zinc-400 text-sm">
            Drag the slider to reveal how our DaVinci Resolve colorists transform flat camera profiles into rich, emotive cinematic color palettes.
          </p>
        </div>

        {/* Interactive Comparison Slider */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative max-w-4xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl select-none cursor-ew-resize"
        >
          {/* Graded Frame (Full Background) */}
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=80"
            alt="Final Graded Frame"
            className="absolute inset-0 w-full h-full object-cover filter contrast-115 saturate-125 pointer-events-none"
          />

          <div className="absolute top-6 right-6 px-3.5 py-1.5 rounded-full bg-amber-400 text-black text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5 z-10">
            <Palette className="w-3.5 h-3.5" /> Final Cinema Grade
          </div>

          {/* S-Log RAW Frame (Clipped) */}
          <div
            style={{ width: `${sliderPos}%` }}
            className="absolute top-0 left-0 bottom-0 overflow-hidden z-10 border-r-2 border-amber-400"
          >
            <div className="relative w-full h-full" style={{ width: containerRef.current?.clientWidth || '100%' }}>
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=80"
                alt="Flat S-LOG RAW Profile"
                className="absolute inset-0 w-full h-full object-cover filter brightness-110 contrast-50 grayscale-40 pointer-events-none max-w-none"
              />
            </div>
            <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700 text-zinc-300 text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5 z-10">
              <Camera className="w-3.5 h-3.5 text-zinc-400" /> Sony S-Log3 RAW
            </div>
          </div>

          {/* Handle */}
          <div
            style={{ left: `${sliderPos}%` }}
            className="absolute top-0 bottom-0 -translate-x-1/2 w-10 flex flex-col items-center pointer-events-none z-20"
          >
            <div className="flex-1 w-0.5 bg-amber-400" />
            <div className="w-9 h-9 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-xl shadow-amber-500/70 pointer-events-auto cursor-grab active:cursor-grabbing">
              <MoveHorizontal className="w-4 h-4" />
            </div>
            <div className="flex-1 w-0.5 bg-amber-400" />
          </div>

        </div>

        {/* Feature Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-zinc-400">
          <span className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> ACES Color Managed Workflow</span>
          <span className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> Natural Skin Tone Preservation</span>
          <span className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> Custom LUT Deliverables</span>
        </div>

      </div>
    </section>
  )
}
