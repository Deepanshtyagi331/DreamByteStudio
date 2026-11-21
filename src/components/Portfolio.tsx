'use client'

import { useState } from 'react'
import { Expand, ArrowUpRight, Camera, X } from 'lucide-react'
import InstagramIcon from './icons/InstagramIcon'

interface PortfolioItem {
  id: number
  category: 'commercial' | 'fashion' | 'wedding' | 'podcast' | 'product'
  categoryLabel: string
  title: string
  gear: string
  image: string
}

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    category: 'fashion',
    categoryLabel: 'Fashion',
    title: 'Elysian Noir Editorial',
    gear: 'Sony A7S III • 85mm GM',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 2,
    category: 'commercial',
    categoryLabel: 'Commercial',
    title: 'Midnight Espresso Brand Film',
    gear: 'RED Komodo 6K • Cooke Anamorphic',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 3,
    category: 'wedding',
    categoryLabel: 'Pre-Wedding',
    title: 'Himalayan Sunset Vows',
    gear: 'Sony FX3 • DJI Ronin RS3 Pro',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 4,
    category: 'podcast',
    categoryLabel: 'Podcast',
    title: 'The Visionary Hour Podcast',
    gear: '3x Sony FX30 • Shure SM7B',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 5,
    category: 'product',
    categoryLabel: 'Product',
    title: 'Chronos Luxury Timepiece',
    gear: 'Macro 100mm • E-Commerce',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 6,
    category: 'fashion',
    categoryLabel: 'Creative / Fashion',
    title: 'Neon Odyssey Concept',
    gear: 'Nanlite Pavotube RGB • FX3',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=80'
  }
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'commercial' | 'fashion' | 'wedding' | 'podcast' | 'product'>('all')
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  const filtered = activeFilter === 'all'
    ? portfolioData
    : portfolioData.filter(item => item.category === activeFilter)

  return (
    <section id="portfolio" className="py-24 bg-zinc-950/70 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
              <span className="w-2 h-0.5 bg-amber-400" />
              Selected Works
            </div>
            <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              VISUAL REEL & PORTFOLIO
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap no-scrollbar">
            {[
              { key: 'all', label: 'All Works' },
              { key: 'commercial', label: 'Commercial' },
              { key: 'fashion', label: 'Fashion' },
              { key: 'wedding', label: 'Pre-Wedding' },
              { key: 'podcast', label: 'Podcast' },
              { key: 'product', label: 'Product' }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                  activeFilter === tab.key
                    ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20'
                    : 'bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(item => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-amber-400/30 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl aspect-[4/5] cursor-pointer group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-6">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 mb-1">
                  {item.categoryLabel}
                </span>
                <h3 className="font-syne text-xl font-bold text-white leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-amber-400" />
                  {item.gear}
                </p>
              </div>

              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Expand className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Profile Callout */}
        <div className="mt-14 sm:mt-16 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-amber-950/40 border border-zinc-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-pink-500/20 shrink-0">
              <InstagramIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <div>
              <h3 className="font-syne text-lg sm:text-xl font-bold text-white">Follow Our Daily BTS on Instagram</h3>
              <p className="text-xs sm:text-sm text-zinc-400">Join our creative journey: lighting setups, camera rigs &amp; fresh drops @dreambytestudio.in</p>
            </div>
          </div>
          <a
            href="https://www.instagram.com/dreambytestudio.in"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost border border-amber-500/30 hover:border-amber-400 px-6 py-3 rounded-full font-semibold text-xs sm:text-sm text-white flex items-center justify-center gap-2 group whitespace-nowrap w-full sm:w-auto text-center"
          >
            <span>Explore Instagram Profile</span>
            <ArrowUpRight className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md">
          <div className="relative max-w-4xl w-full max-h-[92vh] overflow-y-auto bg-obsidian border border-amber-500/30 rounded-2xl sm:rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-12">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/75 text-white hover:bg-amber-400 hover:text-black flex items-center justify-center transition-colors"
              aria-label="Close details"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="md:col-span-7 bg-black flex items-center justify-center max-h-[300px] sm:max-h-[420px] md:max-h-[500px] overflow-hidden">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:col-span-5 p-5 sm:p-8 flex flex-col justify-center space-y-3 sm:space-y-4">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-amber-400 font-bold">
                {selectedItem.categoryLabel}
              </span>
              <h3 className="font-syne text-xl sm:text-2xl font-bold text-white leading-tight">
                {selectedItem.title}
              </h3>
              <p className="text-xs text-zinc-400 flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5 text-amber-400" />
                {selectedItem.gear}
              </p>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-1 sm:pt-2">
                Shot &amp; produced at DreamByte Studio. Color graded and master finished for digital and commercial broadcast distribution.
              </p>
              <div className="pt-2 sm:pt-4 flex items-center gap-3">
                <a
                  href="#book-slot"
                  onClick={() => setSelectedItem(null)}
                  className="btn-primary text-xs px-5 py-2.5 rounded-full font-bold text-amber-950 w-full sm:w-auto text-center"
                >
                  Inquire Similar Shoot
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
