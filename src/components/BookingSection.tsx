'use client'

import { useState, useMemo } from 'react'
import { Video, Camera, Mic, Heart, Package, DoorOpen, Sun, Moon, CloudSun, ShieldCheck, CheckCircle2 } from 'lucide-react'

interface ServiceOption {
  id: string
  label: string
  rate: number
  priceLabel: string
  icon: any
}

const servicesList: ServiceOption[] = [
  { id: 'commercial', label: 'Commercial Video', rate: 15000, priceLabel: 'Est. ₹15,000+', icon: Video },
  { id: 'fashion', label: 'Fashion / Editorial', rate: 8000, priceLabel: 'Est. ₹8,000+', icon: Camera },
  { id: 'podcast', label: 'Podcast Studio', rate: 2500, priceLabel: '₹2,500 / hr', icon: Mic },
  { id: 'wedding', label: 'Pre-Wedding Cinema', rate: 35000, priceLabel: 'Est. ₹35,000+', icon: Heart },
  { id: 'product', label: 'Product Shoot', rate: 5000, priceLabel: 'Est. ₹5,000+', icon: Package },
  { id: 'rental', label: 'Studio Space Only', rate: 2000, priceLabel: '₹2,000 / hr', icon: DoorOpen },
]

const timeSlots = [
  { id: 'morning', label: 'Morning (09:00 AM - 01:00 PM)', icon: Sun },
  { id: 'afternoon', label: 'Afternoon (01:30 PM - 05:30 PM)', icon: Sun },
  { id: 'golden', label: 'Golden Hour (04:30 PM - 08:30 PM)', icon: CloudSun },
  { id: 'night', label: 'Night Studio (08:30 PM+)', icon: Moon },
]

const addOnOptions = [
  { id: 'drone', label: '4K Drone Pilot', price: 4000 },
  { id: 'express', label: '24-Hr Express Edit', price: 3000 },
  { id: 'mua', label: 'Pro MUA / Hair Stylist', price: 4500 },
  { id: 'reels', label: '3x IG Reels Cut', price: 2500 },
]

export default function BookingSection() {
  const [selectedService, setSelectedService] = useState<string>('commercial')
  const [selectedSlot, setSelectedSlot] = useState<string>('Morning (09:00 AM - 01:00 PM)')
  const [selectedAddons, setSelectedAddons] = useState<string[]>([])
  const [clientName, setClientName] = useState('')
  const [clientPhone, setClientPhone] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [shootDate, setShootDate] = useState('')
  const [clientNotes, setClientNotes] = useState('')
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const currentService = servicesList.find(s => s.id === selectedService) || servicesList[0]

  const totalEstimate = useMemo(() => {
    let sum = currentService.rate
    selectedAddons.forEach(addonId => {
      const match = addOnOptions.find(a => a.id === addonId)
      if (match) sum += match.price
    })
    return sum
  }, [currentService, selectedAddons])

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const chosenAddonTitles = selectedAddons
      .map(id => addOnOptions.find(a => a.id === id)?.label)
      .filter(Boolean)
      .join(', ') || 'None'

    const formattedMessage = 
`🎬 *NEW STUDIO SLOT RESERVATION REQUEST* 🎬
*DreamByte Studio (Dehradun)*
-----------------------------------------
👤 *Client Name:* ${clientName}
📞 *Phone / WhatsApp:* ${clientPhone}
📧 *Email:* ${clientEmail || 'Not specified'}

📽 *Service:* ${currentService.label}
📅 *Preferred Date:* ${shootDate || 'Next Available'}
⏰ *Time Window:* ${selectedSlot}
⚡ *Add-ons Selected:* ${chosenAddonTitles}
💰 *Est. Total:* ₹${totalEstimate.toLocaleString('en-IN')}

📝 *Project Notes / Vision:*
${clientNotes || 'None'}
-----------------------------------------
Please confirm crew and stage availability for this slot!`

    setToastMessage('Slot details submitted! Redirecting to WhatsApp...')

    setTimeout(() => {
      const encoded = encodeURIComponent(formattedMessage)
      window.open(`https://wa.me/918279720490?text=${encoded}`, '_blank')
    }, 600)

    setTimeout(() => setToastMessage(null), 4000)
  }

  return (
    <section id="book-slot" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
            <span className="w-2 h-0.5 bg-amber-400" />
            Seamless Online Reservation
            <span className="w-2 h-0.5 bg-amber-400" />
          </div>
          <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            BOOK YOUR STUDIO SLOT
          </h2>
          <p className="text-zinc-400 text-sm">
            Select your preferred shoot type, pick an available calendar slot, customize your add-ons, and get immediate booking confirmation via WhatsApp or phone.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto bg-obsidian border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Step 1: Service */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-amber-400 text-black text-xs font-bold flex items-center justify-center">1</span>
                <h3 className="font-syne text-lg font-bold text-white">Select Production Service</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {servicesList.map(s => {
                  const Icon = s.icon
                  const active = selectedService === s.id
                  return (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => setSelectedService(s.id)}
                      className={`p-4 rounded-xl border flex flex-col items-center text-center transition-all ${
                        active
                          ? 'bg-amber-400/10 border-amber-400 shadow-lg shadow-amber-500/10'
                          : 'bg-white/5 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <Icon className="w-6 h-6 text-amber-400 mb-2" />
                      <span className="font-bold text-sm text-white">{s.label}</span>
                      <span className="text-[11px] text-zinc-400 mt-0.5">{s.priceLabel}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 2: Date & Slot */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-amber-400 text-black text-xs font-bold flex items-center justify-center">2</span>
                <h3 className="font-syne text-lg font-bold text-white">Choose Date & Preferred Time Slot</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-5">
                  <label className="block text-xs font-semibold uppercase text-zinc-400 mb-2">Shoot Date</label>
                  <input
                    type="date"
                    required
                    value={shootDate}
                    onChange={e => setShootDate(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-amber-400 text-sm"
                  />
                  <span className="text-[11px] text-zinc-400 mt-1 block">Live availability sync enabled</span>
                </div>

                <div className="md:col-span-7">
                  <label className="block text-xs font-semibold uppercase text-zinc-400 mb-2">Select Time Window</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {timeSlots.map(slot => {
                      const Icon = slot.icon
                      const active = selectedSlot === slot.label
                      return (
                        <button
                          type="button"
                          key={slot.id}
                          onClick={() => setSelectedSlot(slot.label)}
                          className={`p-3 rounded-xl border flex items-center gap-2 text-xs font-medium transition-all ${
                            active
                              ? 'bg-amber-400/15 border-amber-400 text-white font-bold shadow-md shadow-amber-400/10'
                              : 'bg-zinc-950 border-white/10 text-zinc-300 hover:border-white/20'
                          }`}
                        >
                          <Icon className="w-4 h-4 text-amber-400 shrink-0" />
                          <span className="truncate">{slot.label.split('(')[0]}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Addons */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-amber-400 text-black text-xs font-bold flex items-center justify-center">3</span>
                <h3 className="font-syne text-lg font-bold text-white">Customize Add-Ons</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {addOnOptions.map(addon => {
                  const checked = selectedAddons.includes(addon.id)
                  return (
                    <button
                      type="button"
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border flex items-center justify-between text-left transition-all ${
                        checked
                          ? 'bg-amber-400/10 border-amber-400 shadow-md'
                          : 'bg-white/5 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div>
                        <span className="font-bold text-xs text-white block">{addon.label}</span>
                        <span className="text-[11px] text-zinc-400">+ ₹{addon.price.toLocaleString('en-IN')}</span>
                      </div>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center ${checked ? 'bg-amber-400 border-amber-400 text-black' : 'border-zinc-600'}`}>
                        {checked && <CheckCircle2 className="w-3.5 h-3.5 fill-black text-amber-400" />}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 4: Contact */}
            <div className="space-y-4 pt-4 border-t border-zinc-800">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-amber-400 text-black text-xs font-bold flex items-center justify-center">4</span>
                <h3 className="font-syne text-lg font-bold text-white">Your Contact Details</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-zinc-400 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={e => setClientName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-zinc-400 mb-2">WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={e => setClientPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-zinc-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={clientEmail}
                    onChange={e => setClientEmail(e.target.value)}
                    placeholder="e.g. rahul@example.com"
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-zinc-400 mb-2">Project Brief / Notes</label>
                <textarea
                  rows={2}
                  value={clientNotes}
                  onChange={e => setClientNotes(e.target.value)}
                  placeholder="Tell us about your brand, vibe, preferred references, or shoot questions..."
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-4 text-white focus:outline-none focus:border-amber-400 text-sm"
                />
              </div>
            </div>

            {/* Price & Submit */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950 border border-amber-500/30 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-400">Estimated Total (Before Custom Adjustments)</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-syne text-2xl sm:text-3xl font-extrabold text-amber-400">
                    ₹{totalEstimate.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-zinc-400">+ GST as applicable</span>
                </div>
                <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> 100% Date Reservation Guarantee
                </p>
              </div>

              <button
                type="submit"
                className="btn-primary w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-xl font-bold text-amber-950 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 text-center"
              >
                Confirm Slot via WhatsApp
              </button>
            </div>

          </form>
        </div>

      </div>

      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-zinc-900 border border-amber-400 px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 text-sm text-white">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </section>
  )
}
