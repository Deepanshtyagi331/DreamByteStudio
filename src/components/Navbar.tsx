'use client'

import { useState, useEffect } from 'react'
import { Play, Phone, CalendarCheck, Menu, X, MessageSquare } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled
          ? 'bg-zinc-950/90 border-b border-amber-500/20 shadow-2xl py-3'
          : 'bg-zinc-950/60 border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-orange-700 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all">
              <Play className="w-4 h-4 text-black fill-black translate-x-0.5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-dark animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-syne font-extrabold text-xl tracking-tight text-white group-hover:text-amber-400 transition-colors">
                DREAM<span className="text-amber-400 group-hover:text-white">BYTE</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-zinc-400 -mt-1 font-semibold">
                Studio • Cinema
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#color-grading" className="hover:text-white transition-colors">RAW to Cinema</a>
            <a href="#studio-space" className="hover:text-white transition-colors">Studio & Gear</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:+918279720490"
              className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span className="hidden lg:inline">+91 82797 20490</span>
            </a>
            <a
              href="#book-slot"
              className="btn-primary text-sm px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <CalendarCheck className="w-4 h-4 text-amber-950 font-bold" />
              <span className="font-bold text-amber-950">Book a Slot</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-zinc-950/98 border-b border-zinc-800 px-5 sm:px-6 py-6 space-y-4 max-h-[82vh] overflow-y-auto">
          <a
            href="#services"
            onClick={() => setMobileOpen(false)}
            className="block text-base font-semibold text-zinc-200 hover:text-amber-400 py-1"
          >
            Services
          </a>
          <a
            href="#portfolio"
            onClick={() => setMobileOpen(false)}
            className="block text-base font-semibold text-zinc-200 hover:text-amber-400 py-1"
          >
            Portfolio &amp; Films
          </a>
          <a
            href="#color-grading"
            onClick={() => setMobileOpen(false)}
            className="block text-base font-semibold text-zinc-200 hover:text-amber-400 py-1"
          >
            RAW to Cinema (Before/After)
          </a>
          <a
            href="#studio-space"
            onClick={() => setMobileOpen(false)}
            className="block text-base font-semibold text-zinc-200 hover:text-amber-400 py-1"
          >
            Studio Floor &amp; Gear
          </a>
          <a
            href="#about"
            onClick={() => setMobileOpen(false)}
            className="block text-base font-semibold text-zinc-200 hover:text-amber-400 py-1"
          >
            About DreamByte
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileOpen(false)}
            className="block text-base font-semibold text-zinc-200 hover:text-amber-400 py-1"
          >
            Reviews
          </a>
          <a
            href="#faq"
            onClick={() => setMobileOpen(false)}
            className="block text-base font-semibold text-zinc-200 hover:text-amber-400 py-1"
          >
            FAQ
          </a>

          <div className="pt-4 border-t border-zinc-800 flex flex-col gap-3">
            <a
              href="#book-slot"
              onClick={() => setMobileOpen(false)}
              className="btn-primary text-center py-3.5 rounded-xl font-bold text-amber-950"
            >
              Book Studio Slot
            </a>
            <a
              href="https://wa.me/918279720490"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-center py-3 rounded-xl font-medium text-sm text-zinc-300 flex items-center justify-center gap-2 border border-zinc-800"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Direct WhatsApp Desk</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
