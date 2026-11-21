'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Where is DreamByte Studio located and how do I visit?',
    a: 'Our production studio is located at 3rd Floor, Above Bank of India, Sahastradhara Road, Near IT Park, Dehradun, Uttarakhand - 248001. You are welcome to visit for studio walkthroughs or consultations; we recommend booking a slot or calling ahead at +91 82797 20490 so our creative director is available for you.'
  },
  {
    q: 'What is the turnaround time for receiving our final photos and videos?',
    a: 'For standard photography and lookbooks, initial color-corrected proofs are delivered within 48 to 72 hours, with final retouching delivered within 5 to 7 business days. For video commercial projects, the first director’s cut is ready within 5-7 days. We also offer 24-Hour Express Delivery as an add-on option.'
  },
  {
    q: 'Can we rent just the podcast studio or shooting bay with our own equipment?',
    a: 'Yes! We offer hourly and day-rate studio rentals for photographers, podcasters, and filmmakers who wish to bring their own gear or use our in-house lighting grids and sound-treated podcast suite. Our studio assistant is always on hand to assist with lighting adjustments.'
  },
  {
    q: 'Do you provide raw footage / RAW photos?',
    a: 'Yes. Upon request, unedited high-resolution RAW camera stills (CR3/ARW) and S-Log video files can be transferred to your portable SSD drive or uploaded via private secure cloud link without additional compression.'
  },
  {
    q: 'What is the advance booking and cancellation policy?',
    a: 'To lock your date and crew, a 30% advance is required upon booking confirmation. Date reschedules are allowed free of charge with at least 48 hours prior notice.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 bg-zinc-950/60 border-t border-zinc-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
            <span className="w-2 h-0.5 bg-amber-400" />
            Got Questions?
            <span className="w-2 h-0.5 bg-amber-400" />
          </div>
          <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-zinc-400 text-sm">
            Everything you need to know about booking, deliverables, and production policies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="bg-obsidian/70 border border-white/5 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between text-white font-syne font-bold text-base hover:text-amber-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-amber-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
