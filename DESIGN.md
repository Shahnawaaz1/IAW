# IAW FORCE — DESIGN SYSTEM & ARCHITECTURAL SPECIFICATION

> **Author / Agency:** [Shine Infosolutions](https://www.shineinfosolutions.in/)  
> **Brand:** IAW Force Motors (Gorakhpur & Eastern Uttar Pradesh)  
> **Platform:** React 19 + TypeScript + Vite + TailwindCSS + TanStack Router + GSAP  

---

## 1. Visual Identity & Design Philosophy

The IAW Force web experience is crafted to provide a **world-class executive automotive showroom experience** on the web. It moves beyond static vehicle listings into a dynamic, storytelling-driven commercial vehicle portal.

### Core Design Principles:
1. **Executive Automotive Precision**: Clean lines, high-contrast dark-glass headers, razor-sharp typography, and precision badges.
2. **Interactive 3D Depth**: Interactive cards with tilt physics, ground-plane depth lighting, and click-to-focus spotlight inspection.
3. **Frictionless Conversion**: Multi-channel lead capture via direct WhatsApp dispatch to `+91 84295 40902`, dynamic on-road price estimates, and instant EMI calculations.
4. **Resilient Offline Performance**: Progressive Web App (PWA) caching with Service Worker stale-while-revalidate strategy.

---

## 2. Color Palette & Lighting Tokens

| Token | Hex / Value | Application |
| :--- | :--- | :--- |
| **Brand Crimson Red** | `#DC2626` / `#EF4444` | Primary brand call-to-action buttons, logo glyphs, active badges, live indicators. |
| **Dark Cinema Obsidian** | `#070B14` | Hero section background, video gradient backdrop, dark glass navbar. |
| **Executive Slate Navy** | `#0F172A` / `#1E293B` | Section titles, footer background, lead contact form container. |
| **Ultra Pearl White** | `#FFFFFF` | Clean background for vehicle catalogs, pricing specs, cards. |
| **Muted Cool Gray** | `#64748B` / `#94A3B8` | Body typography, subtitle specs, secondary metadata. |
| **Emerald Status** | `#10B981` / `#059669` | Live toll-free indicator, best match recommendation score badge. |

---

## 3. Typography Architecture

- **Display & Headings**: `Archivo` (Weights: 700, 800, 900, Black) — Powerful, high-impact industrial and automotive typography.
- **Body & Specifications**: `Barlow` (Weights: 400, 500, 600) — Clear, clean, and legible at small technical specification sizes.
- **Hierarchical Scale**:
  - `H1 (Hero Headline)`: `text-4xl sm:text-6xl lg:text-7xl` (Tight tracking, leading `0.95`).
  - `H2 (Section Headings)`: `text-3xl sm:text-5xl` (Black weight with crimson accent span).
  - `H3 (Card Titles)`: `text-xl sm:text-2xl` (Bold).
  - `Badges & Kickers`: `text-xs tracking-[0.25em]` (Uppercase bold).

---

## 4. GSAP Scroll Choreography & Storytelling

All scroll animations are orchestrated via GSAP + `ScrollTrigger` in `@/animations/scrollAnimations`:

1. **Hero Video Entrance**:
   - Staggered initial entrance (`timeline`) for headline, subtitle, buttons, and stats.
   - Cinematic background parallax scrub on scroll down (`y: 65, scale: 1.06`).
2. **Master Vehicle Showcase Pin & Glide**:
   - Vehicle 0 (`Traveller N`) enters smoothly from the left when scrolling down from Hero.
   - Pinned sticky track coordinating vehicle stage glide with synchronized specification cards.
   - Click-to-Focus 3D zoom mode on vehicle clicks.
3. **Bidirectional Row-by-Row Cascade**:
   - `toggleActions: "play none none reverse"` across all grid sections.
   - Cards cascade in 3-by-3 row groups.
   - Elements remain 100% visible throughout their section until the user scrolls completely above that section.

---

## 5. Touch & Spotlight Physics

- **Active Card**: On hover or touch, the selected card scales to `104%` with elevated `shadow-2xl` and `hover:!blur-none hover:!opacity-100`.
- **Sibling Cards**: Surrounding cards in the same grid receive a soft cinematic blur (`blur-[2.5px]`) and gentle dim (`opacity: 0.30`) to guide visual attention.
- **Touch Handlers**: Mobile `onTouchStart`, `onTouchMove`, and `onTouchEnd` maintain tilt and elevation physics on smartphone viewports.

---

## 6. Device & Screen Responsiveness

- **Mobile (< 640px)**: Single column fluid layout, full-width touch-friendly buttons (minimum 44px hit target), swipeable filter tabs, sticky floating WhatsApp action.
- **Tablet (640px - 1024px)**: 2-column balanced cards grid, compact spec tables.
- **Desktop (1024px - 1536px)**: 3-column catalog grids, 2-column calculator split, pinned vehicle storytelling stage.
- **Ultrawide (> 1536px)**: Constrained `max-w-7xl` container with balanced edge margins to prevent stretching.

---

## 7. Conversion Architecture & WhatsApp Dispatch

Every interaction point is connected directly to IAW Force WhatsApp desk (`+91 84295 40902`):
- **Contact Form**: Pre-fills customer name, mobile, model, and message into an instant WhatsApp link.
- **Intelligent Vehicle Finder**: Dispatches matched vehicle specs, seating, engine, and ex-showroom price.
- **Finance Calculator**: Dispatches down payment, tenure, interest rate, and calculated monthly EMI.
- **Vehicle Catalog**: One-click model quotation request for each vehicle.
