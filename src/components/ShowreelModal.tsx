'use client'

import { X } from 'lucide-react'

interface ShowreelModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ShowreelModal({ isOpen, onClose }: ShowreelModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="relative max-w-4xl w-full bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 text-white hover:bg-amber-400 hover:text-black flex items-center justify-center transition-colors"
          aria-label="Close showreel"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black relative">
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted
            loop
            poster="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=1600&q=80"
          >
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>

        <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-syne font-bold text-white text-lg">DreamByte Studio • 2026 Director&apos;s Showreel</h4>
            <p className="text-xs text-zinc-400">Captured on Sony FX3, FX6 & RED Cinema Systems in Dehradun & Uttarakhand.</p>
          </div>
          <a
            href="#book-slot"
            onClick={onClose}
            className="btn-primary text-xs px-5 py-2.5 rounded-full font-bold text-amber-950 whitespace-nowrap"
          >
            Book a Production Slot
          </a>
        </div>
      </div>
    </div>
  )
}
