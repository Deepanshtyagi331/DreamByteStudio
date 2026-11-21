'use client'

import { useState, useMemo, useRef, useEffect } from 'react'
import { Video, Camera, Mic, Heart, Package, DoorOpen, Sun, Moon, CloudSun, ShieldCheck, CheckCircle2, Calendar, ChevronLeft, ChevronRight, ChevronDown, Sparkles } from 'lucide-react'

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

  // Custom Slide-Down Calendar State
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [calendarMonth, setCalendarMonth] = useState(new Date())
  const calendarRef = useRef<HTMLDivElement>(null)

  // Close calendar when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setIsCalendarOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

  const calYear = calendarMonth.getFullYear()
  const calMonthIdx = calendarMonth.getMonth()
  const daysInCurrentMonth = new Date(calYear, calMonthIdx + 1, 0).getDate()
  const firstDayOfMonthIndex = new Date(calYear, calMonthIdx, 1).getDay()

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation()
    const today = new Date()
    if (calYear === today.getFullYear() && calMonthIdx <= today.getMonth()) return
    setCalendarMonth(new Date(calYear, calMonthIdx - 1, 1))
  }

  const handleNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCalendarMonth(new Date(calYear, calMonthIdx + 1, 1))
  }

  const handleDateClick = (day: number) => {
    const m = String(calMonthIdx + 1).padStart(2, '0')
    const d = String(day).padStart(2, '0')
    setShootDate(`${calYear}-${m}-${d}`)
    setIsCalendarOpen(false)
  }

  const handleQuickPreset = (daysOffset: number) => {
    const target = new Date()
    target.setDate(target.getDate() + daysOffset)
    const y = target.getFullYear()
    const m = String(target.getMonth() + 1).padStart(2, '0')
    const d = String(target.getDate()).padStart(2, '0')
    setShootDate(`${y}-${m}-${d}`)
    setCalendarMonth(target)
    setIsCalendarOpen(false)
  }

  const formattedDateDisplay = useMemo(() => {
    if (!shootDate) return 'Select Shoot Date'
    try {
      const [y, m, d] = shootDate.split('-').map(Number)
      const dateObj = new Date(y, m - 1, d)
      return dateObj.toLocaleDateString('en-IN', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    } catch {
      return shootDate
    }
  }, [shootDate])

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
                <div className="md:col-span-5 relative" ref={calendarRef}>
                  <label className="block text-xs font-semibold uppercase text-zinc-400 mb-2">Shoot Date *</label>
                  
                  {/* Clickable Trigger Button */}
                  <button
                    type="button"
                    onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                    className={`w-full bg-zinc-950 border rounded-xl px-4 py-3 text-left flex items-center justify-between text-sm transition-all group ${
                      isCalendarOpen
                        ? 'border-amber-400 shadow-xl shadow-amber-400/15 ring-1 ring-amber-400'
                        : 'border-zinc-700 hover:border-zinc-500'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                        shootDate ? 'bg-amber-400 text-black' : 'bg-amber-400/10 text-amber-400 group-hover:bg-amber-400/20'
                      }`}>
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <span className={`block font-medium text-sm leading-tight ${shootDate ? 'text-white font-bold' : 'text-zinc-400'}`}>
                          {formattedDateDisplay}
                        </span>
                        <span className="text-[10px] text-zinc-500 font-mono">
                          {shootDate ? 'Selected Slot Day' : 'Click to open calendar'}
                        </span>
                      </div>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform duration-300 ${isCalendarOpen ? 'rotate-180 text-amber-400' : ''}`} />
                  </button>

                  {/* Hidden form required validation input */}
                  <input
                    type="text"
                    required
                    value={shootDate}
                    onChange={() => {}}
                    className="sr-only"
                    tabIndex={-1}
                    aria-hidden="true"
                  />

                  {/* Slide-Down Calendar Dropdown Container */}
                  <div
                    className={`transition-all duration-300 ease-out origin-top ${
                      isCalendarOpen
                        ? 'opacity-100 scale-y-100 translate-y-0 max-h-[500px] pointer-events-auto visible mt-2'
                        : 'opacity-0 scale-y-95 -translate-y-2 max-h-0 pointer-events-none invisible overflow-hidden'
                    } absolute z-50 top-full left-0 right-0 sm:w-[340px] bg-zinc-950/98 border border-amber-500/40 rounded-2xl p-4 shadow-2xl backdrop-blur-2xl`}
                  >
                    {/* Header: Month & Year Nav */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800">
                      <button
                        type="button"
                        onClick={handlePrevMonth}
                        className="w-7 h-7 rounded-lg bg-white/5 hover:bg-amber-400/20 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
                        aria-label="Previous Month"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      <div className="font-syne font-bold text-sm text-white">
                        {monthNames[calMonthIdx]} <span className="text-amber-400">{calYear}</span>
                      </div>

                      <button
                        type="button"
                        onClick={handleNextMonth}
                        className="w-7 h-7 rounded-lg bg-white/5 hover:bg-amber-400/20 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
                        aria-label="Next Month"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Weekday Labels */}
                    <div className="grid grid-cols-7 gap-1 text-center mb-2">
                      {weekDays.map((wd, i) => (
                        <span key={i} className="text-[10px] font-bold text-zinc-500 uppercase font-mono">
                          {wd}
                        </span>
                      ))}
                    </div>

                    {/* Days Grid */}
                    <div className="grid grid-cols-7 gap-1">
                      {/* Leading Empty Cells */}
                      {Array.from({ length: firstDayOfMonthIndex }).map((_, idx) => (
                        <div key={`empty-${idx}`} className="w-8 h-8" />
                      ))}

                      {/* Day Number Buttons */}
                      {Array.from({ length: daysInCurrentMonth }).map((_, idx) => {
                        const day = idx + 1
                        const today = new Date()
                        today.setHours(0, 0, 0, 0)
                        const thisDate = new Date(calYear, calMonthIdx, day)
                        const isPast = thisDate < today
                        const isToday = thisDate.getTime() === today.getTime()
                        const dayStr = `${calYear}-${String(calMonthIdx + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
                        const isSelected = shootDate === dayStr

                        return (
                          <button
                            type="button"
                            key={`day-${day}`}
                            disabled={isPast}
                            onClick={() => handleDateClick(day)}
                            className={`w-8 h-8 rounded-lg text-xs font-semibold flex flex-col items-center justify-center relative transition-all ${
                              isPast
                                ? 'text-zinc-600 opacity-30 cursor-not-allowed'
                                : isSelected
                                ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-extrabold shadow-md shadow-amber-400/40 scale-105'
                                : isToday
                                ? 'border border-amber-400/60 text-amber-400 hover:bg-amber-400/20 font-bold'
                                : 'text-zinc-300 hover:bg-white/10 hover:text-white'
                            }`}
                          >
                            <span>{day}</span>
                            {!isPast && !isSelected && (
                              <span className="w-1 h-1 rounded-full bg-emerald-400/80 -mt-0.5" />
                            )}
                          </button>
                        )
                      })}
                    </div>

                    {/* Quick Presets Row */}
                    <div className="mt-3 pt-3 border-t border-zinc-800 flex items-center justify-between text-[11px]">
                      <span className="text-zinc-500 font-mono">Quick:</span>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => handleQuickPreset(0)}
                          className="px-2 py-0.5 rounded-md bg-white/5 hover:bg-amber-400/20 text-zinc-300 hover:text-amber-400 text-[10px] font-semibold"
                        >
                          Today
                        </button>
                        <button
                          type="button"
                          onClick={() => handleQuickPreset(1)}
                          className="px-2 py-0.5 rounded-md bg-white/5 hover:bg-amber-400/20 text-zinc-300 hover:text-amber-400 text-[10px] font-semibold"
                        >
                          Tomorrow
                        </button>
                        <button
                          type="button"
                          onClick={() => handleQuickPreset(3)}
                          className="px-2 py-0.5 rounded-md bg-white/5 hover:bg-amber-400/20 text-zinc-300 hover:text-amber-400 text-[10px] font-semibold"
                        >
                          +3 Days
                        </button>
                      </div>
                    </div>

                  </div>

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
