import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DreamByte Studio | Luxury Photo & Video Production Dehradun',
  description: 'Premier photo and video production studio in Dehradun. Commercial films, fashion lookbooks, pre-wedding cinema, and sound-isolated multi-cam podcast studio.',
  keywords: [
    'photo studio',
    'video production Dehradun',
    'commercial shoot',
    'fashion photography',
    'pre wedding cinema',
    'podcast studio rental',
    'DreamByte Studio'
  ],
  openGraph: {
    title: 'DreamByte Studio | Frames That Speak, Stories That Breathe',
    description: 'Premier photo and cinema production studio based in Dehradun. Book your studio slot or production team today.',
    url: 'https://dreambytestudio.in',
    siteName: 'DreamByte Studio',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Syne:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-dark text-slate-100 antialiased selection:bg-amber-500 selection:text-black">
        {/* Ambient Glow Orbs */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="ambient-glow glow-1" />
          <div className="ambient-glow glow-2" />
          <div className="ambient-glow glow-3" />
        </div>

        {children}
      </body>
    </html>
  )
}
