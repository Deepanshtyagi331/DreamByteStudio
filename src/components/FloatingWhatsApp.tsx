import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918279720490?text=Hi%20DreamByte%20Studio,%20I'm%20looking%20to%20book%20a%20photoshoot%20or%20video%20production%20session."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25d366] text-white flex items-center justify-center shadow-2xl shadow-emerald-500/30 hover:scale-110 hover:rotate-6 transition-all group"
      aria-label="Direct WhatsApp Chat"
    >
      <div className="whatsapp-pulse" />
      <MessageCircle className="w-7 h-7 fill-white" />
      <span className="absolute right-16 bg-zinc-900 border border-zinc-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
        Chat with Studio Desk
      </span>
    </a>
  )
}
