# DreamByte Studio — Next.js & TypeScript Landing Page

A production-grade, responsive website and interactive portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS** for **DreamByte Studio** ([@dreambytestudio.in](https://www.instagram.com/dreambytestudio.in)), Dehradun's premier cinema and photo production house.

---

## ⚡ Tech Stack & Architecture

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (`strict: true`)
- **Styling**: Tailwind CSS with custom editorial dark theme (`#0a0a0d`, `#121318`, `#f59e0b`)
- **Icons**: Lucide React + custom SVGs
- **Typography**: Syne (Headings) + Plus Jakarta Sans (Body)

---

## 📁 Project Structure

```
Studio/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with fonts, SEO & ambient glows
│   │   ├── page.tsx           # Home page aggregating all sections
│   │   └── globals.css        # Tailwind directives, animations & glassmorphism
│   ├── components/
│   │   ├── Navbar.tsx         # Glassmorphism header, mobile drawer & CTA
│   │   ├── Hero.tsx           # Cinema HUD (REC 24FPS), stats & headline
│   │   ├── BrandTicker.tsx    # Infinite scrolling brand marquee
│   │   ├── Services.tsx       # 6 production services with pricing & deliverables
│   │   ├── Portfolio.tsx      # Filterable bento grid with Lightbox modal
│   │   ├── ColorGradingSlider.tsx # Interactive touch/mouse RAW vs Graded slider
│   │   ├── StudioTour.tsx     # Cyclorama, Lighting grid & Podcast desk
│   │   ├── BookingSection.tsx # Interactive stepped slot reservation engine
│   │   ├── About.tsx          # Team philosophy & scenic Himalayan permits
│   │   ├── Reviews.tsx        # Client testimonials with star ratings
│   │   ├── FAQ.tsx            # Interactive policy accordions
│   │   ├── ContactMap.tsx     # Dehradun studio desk, call CTAs & Google Map
│   │   ├── Footer.tsx         # Footer with quick links & social icons
│   │   ├── ShowreelModal.tsx  # Video player modal for studio showreel
│   │   ├── FloatingWhatsApp.tsx # Quick-chat floating action button
│   │   └── icons/
│   │       └── InstagramIcon.tsx # Clean SVG Instagram brand icon
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.mjs
```

---

## 🚀 Getting Started

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
npm run start
```

---

## 🌟 Interactive Features Built

1. **Step-by-Step Slot Booking Engine**:
   - Choose from 6 production categories (Commercial, Fashion, Podcast Studio, Pre-Wedding, Product, Studio Space).
   - Real-time date selector (disables past dates).
   - 4 selectable time windows (*Morning, Afternoon, Golden Hour, Night Studio*).
   - Add-on toggles (Drone pilot, 24-hr express delivery, MUA stylist, Instagram reels package).
   - Dynamic real-time Indian Rupee (₹) price calculator.
   - Generates a formatted reservation summary sent directly to WhatsApp (`+91 82797 20490`).

2. **Touch & Mouse S-Log RAW vs. Cinema Grade Slider**:
   - Compares flat Sony S-Log3 sensor footage with final Hollywood DaVinci Resolve color master.

3. **Filterable Portfolio Showcase**:
   - Filter by *All Works, Commercial, Fashion, Pre-Wedding, Podcast, Product*.
   - Lightbox inspection modal displaying camera and lens metadata.

4. **Director's 2026 Showreel Modal**:
   - Interactive modal video player previewing 4K cinematic showreel footage.

5. **Direct Studio Desk Integration**:
   - Direct phone call links: `+91 82797 20490` and `+91 92583 32639`.
   - Studio address: 3rd Floor, Above Bank of India, Sahastradhara Road, Near IT Park, Dehradun, Uttarakhand - 248001.
