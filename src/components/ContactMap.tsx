import { MapPin, Phone, Mail, Navigation, Building2 } from 'lucide-react'
import InstagramIcon from './icons/InstagramIcon'

export default function ContactMap() {
  return (
    <section className="py-20 border-t border-zinc-800 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-obsidian/90 rounded-3xl p-8 border border-zinc-800">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
              <MapPin className="w-3.5 h-3.5" /> Visit Us In Person
            </div>
            <h3 className="font-syne text-2xl sm:text-3xl font-extrabold text-white">
              DREAMBYTE STUDIO DEHRADUN
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              3rd Floor, Above Bank of India, Sahastradhara Road, Near IT Park, Dehradun, Uttarakhand - 248001
            </p>
            
            <div className="pt-2 flex flex-col sm:flex-row gap-4 text-sm text-zinc-300">
              <a href="tel:+918279720490" className="flex items-center gap-2 hover:text-amber-400">
                <Phone className="w-4 h-4 text-amber-400" /> +91 82797 20490
              </a>
              <a href="tel:+919258332639" className="flex items-center gap-2 hover:text-amber-400">
                <Phone className="w-4 h-4 text-amber-400" /> +91 92583 32639
              </a>
            </div>
            <div>
              <a href="mailto:contact@dreambytestudio.in" className="flex items-center gap-2 text-sm text-zinc-300 hover:text-amber-400">
                <Mail className="w-4 h-4 text-amber-400" /> contact@dreambytestudio.in
              </a>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href="https://maps.google.com/?q=Sahastradhara+Road+IT+Park+Dehradun"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-6 py-3 rounded-xl font-bold text-xs text-amber-950 flex items-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5" /> Open in Google Maps
              </a>
              <a
                href="https://www.instagram.com/dreambytestudio.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost px-5 py-3 rounded-xl text-xs font-semibold flex items-center gap-2 text-pink-400 border border-zinc-800 hover:border-pink-500/30"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400" /> @dreambytestudio.in
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-zinc-800 aspect-[16/9] relative group">
            <iframe
              title="DreamByte Studio Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27546.70295112108!2d78.070000!3d30.345000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909299446e55555%3A0x123456789abcdef!2sSahastradhara%20Rd%2C%20Dehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              className="w-full h-full border-0 filter invert contrast-125 opacity-80 group-hover:opacity-100 transition-opacity"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-3 left-3 px-3 py-1 bg-black/80 backdrop-blur-md rounded-md text-xs font-bold text-amber-400 border border-zinc-700 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5" /> Sahastradhara Road Hub
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
