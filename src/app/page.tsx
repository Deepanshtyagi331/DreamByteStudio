'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import BrandTicker from '@/components/BrandTicker'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import ColorGradingSlider from '@/components/ColorGradingSlider'
import StudioTour from '@/components/StudioTour'
import BookingSection from '@/components/BookingSection'
import About from '@/components/About'
import Reviews from '@/components/Reviews'
import FAQ from '@/components/FAQ'
import ContactMap from '@/components/ContactMap'
import Footer from '@/components/Footer'
import ShowreelModal from '@/components/ShowreelModal'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  const [showreelOpen, setShowreelOpen] = useState(false)

  return (
    <main className="relative z-10">
      <Navbar />
      <Hero onOpenShowreel={() => setShowreelOpen(true)} />
      <BrandTicker />
      <Services />
      <Portfolio />
      <ColorGradingSlider />
      <StudioTour />
      <BookingSection />
      <About />
      <Reviews />
      <FAQ />
      <ContactMap />
      <Footer />

      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
      />
      <FloatingWhatsApp />
    </main>
  )
}
