# IAW FORCE — Authorized Force Motors Dealership Portal

[![Designed by Shine Infosolutions](https://img.shields.io/badge/Designed%20by-Shine%20Infosolutions-DC2626?style=for-the-badge&logo=googlechrome&logoColor=white)](https://www.shineinfosolutions.in/)
[![React](https://img.shields.io/badge/React-19.2.0-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.1.5-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4.2-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15.0-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)

A progressive, ultra-fast commercial and passenger vehicle portal for **IAW Force** (Gorakhpur, Eastern Uttar Pradesh). Built with **React 19**, **GSAP ScrollTrigger Storytelling**, **TanStack Router**, **Tailwind CSS**, and **PWA Offline Caching**.

---

## 🌟 Key Features

### 1. 🏎️ Cinematic Hero with Video & Parallax
- Embedded high-performance background video (`herosection.mp4`) with instant image poster fallback.
- Luxury automotive dark-glass header with dynamic scroll transitions.
- Multi-layered contrast gradients for 100% crisp typography on all viewports.

### 2. 📜 Storytelling GSAP Scroll Experience
- Pinned master vehicle showcase gliding through the complete Force Motors lineup.
- First vehicle (`Traveller N`) smoothly glides in from the left on scroll down from Hero.
- Click-to-Focus Spotlight Zoom with specs card blur on interactive inspection.
- Bidirectional row-by-row scroll animations with section-bound visibility persistence (`toggleActions: "play none none reverse"`).

### 3. 🎯 3D Touch & Spotlight Focus Physics
- **Active Card**: Zooms to 104% with elevated shadow and crystal-clear text/graphics.
- **Neighbor Cards**: Softly blur (`blur-[2.5px]`) and dim (`opacity: 30%`) to focus the user's attention.
- Mobile touch gesture support (`onTouchMove`, `onTouchStart`, `onTouchEnd`).

### 4. 🧠 Intelligent Multi-Dimensional Vehicle Finder
- Real-time recommendation engine covering all permutations of:
  1. Primary Use Case (Passenger, School, Corporate, Luxury Tour, Ambulance, Heavy Duty).
  2. Passenger Seating Capacity (Up to 9, 10-17, 18-26, 28-33+ seats).
  3. Operating Terrain (City & Highway, Rough Roads, All-Terrain 4x4).
- Calculates match score percentage, highlights why recommended, specs, variants, and direct WhatsApp quote dispatch.

### 5. 📱 Multi-Channel WhatsApp Lead Generation (`+91 84295 40902`)
- **Enquiry Form**: One-click form submission formats and sends lead details to WhatsApp.
- **Finance Calculator**: Instant loan and EMI calculation with pre-filled WhatsApp loan assistance dispatch.
- **Catalog Cards**: Instant quotation requests for specific vehicle models.
- **Floating Desk Button**: Persistent floating WhatsApp connect.

### 6. ⚡ Starbucks-Style PWA Offline Support
- Built-in Service Worker (`public/sw.js`) with cache-first and stale-while-revalidate strategies.
- Offline status toast indicator (`OfflineIndicator.tsx`).
- Full web app manifest (`manifest.json`) for homescreen installation.

### 7. 🔍 Complete SEO, AEO & GEO Optimization
- **Google Rich Results**: Valid `AutoDealer`, `LocalBusiness`, and `ItemList` JSON-LD schemas.
- **AEO (Answer Engine Optimization)**: Full `FAQPage` schema optimized for AI assistants (ChatGPT, Perplexity, Gemini, Apple Intelligence).
- **GEO SEO**: Geographic coordinates (`26.7606, 83.3732`), `geo.region: IN-UP`, and locality tags for Gorakhpur & Eastern UP.
- **Crawlers**: Production `robots.txt` allowing search engines and AI crawlers with auto-linked `sitemap.xml`.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Core Framework** | React 19.2, TypeScript 5.8, Vite 8.1 |
| **Routing** | TanStack Router 1.170 |
| **Styling** | Tailwind CSS v4, Vanilla CSS Custom Properties |
| **Animations** | GSAP 3.15 + ScrollTrigger |
| **Icons & UI** | Lucide React, Radix UI Primitives |
| **PWA & Offline** | Service Worker Cache API, Web App Manifest |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun 1.0+
- npm, yarn, or pnpm

### Installation
```bash
# Clone the repository
git clone <repo-url>

# Navigate into project directory
cd force-motion-main

# Install dependencies
npm install
```

### Development Server
```bash
# Start local Vite development server
npm run dev
```
The website will be available at `http://localhost:8080/`.

### Production Build
```bash
# Compile and bundle for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📂 Project Structure

```text
force-motion-main/
├── public/
│   ├── manifest.json         # Web App Manifest
│   ├── robots.txt            # Search & AI crawler directives
│   ├── sitemap.xml           # XML Sitemap
│   └── sw.js                 # PWA Service Worker caching
├── src/
│   ├── animations/
│   │   └── scrollAnimations.ts # GSAP ScrollTrigger timeline helpers
│   ├── assets/               # Vehicle graphics, dealership photo, hero video
│   ├── components/
│   │   ├── ui/               # 3D Card tilt and interactive components
│   │   ├── VehicleScroll/    # Storytelling pinned showcase stage
│   │   ├── Hero.tsx          # Cinematic video hero section
│   │   ├── Navbar.tsx        # Dynamic showroom glass header
│   │   ├── OfflineIndicator.tsx # PWA live network status toast
│   │   ├── Sections.tsx      # Vehicles catalog, Applications, Finder
│   │   └── Sections2.tsx     # Finance, Service, Guide, FAQs, Location, CTA, Footer
│   ├── config/
│   │   ├── finder.ts         # Vehicle recommendation engine
│   │   └── site.ts           # Dealership source of truth & contact details
│   ├── routes/
│   │   ├── __root.tsx        # Root layout, meta tags & router outlet
│   │   └── index.tsx         # Home page composition & JSON-LD schemas
│   └── main.tsx              # Application entry point
├── DESIGN.md                 # Design system specification
└── README.md                 # Project documentation
```

---

## 🏢 Dealership Contact & Credits

- **Dealership**: IAW Force Motors (Gorakhpur, Uttar Pradesh)
- **Toll-Free Helpline**: `1800-889-6927`
- **WhatsApp Support**: `+91 84295 40902`
- **Official Website**: [iawforce.com](https://iawforce.com/)
- **Designed & Engineered by**: [Shine Infosolutions](https://www.shineinfosolutions.in/)

---

© 2026 IAW Force. All rights reserved. Built with precision for commercial & passenger mobility.
