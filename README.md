# Glass Shine Unisex Salon & Academy

A luxury editorial website for a premium unisex salon and beauty academy based in Barasat, Kolkata. Built with React 19, TypeScript, and Vite, featuring cinematic animations and a sophisticated dark-themed design language.

**Live preview:** `npm run dev`

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Language | TypeScript 5 |
| Bundler | Vite 6 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion 12, GSAP 3 |
| Smooth Scroll | Lenis |
| Linting | ESLint 9 |

---

## Getting Started

```bash
npm install
npm run dev       # Start dev server
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

---

## Project Structure

```
src/
├── App.tsx                        # Root component — loading screen → site
├── main.tsx                       # Entry point
├── index.css                      # Tailwind config, theme tokens, utilities
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx             # Fixed top navigation, 7 links, phone, CTA
│   │   └── Footer.tsx             # Main footer wrapper (GSAP animations)
│   │
│   ├── footer/
│   │   ├── FooterBrand.tsx        # "STAY IN THE MIRROR" label + editorial logo
│   │   ├── SocialIcons.tsx        # Instagram / Facebook / YouTube buttons
│   │   ├── FooterLinks.tsx        # EXPLORE navigation column
│   │   ├── FooterVisit.tsx        # VISIT address/phone/hours column
│   │   └── Newsletter.tsx         # NEWSLETTER email signup column
│   │
│   ├── sections/                  # One component per page section
│   │   ├── LoadingScreen.tsx      # 3.5s intro animation
│   │   ├── Hero.tsx               # Full-screen hero with line-by-line reveal
│   │   ├── ServicesMarquee.tsx    # Scrolling service badges
│   │   ├── About.tsx              # Brand story + stats cards
│   │   ├── Services.tsx           # Service cards grid
│   │   ├── Portfolio.tsx          # Image gallery
│   │   ├── Process.tsx            # 4-step timeline explainer
│   │   ├── Reservation.tsx        # Booking form with calendar
│   │   ├── Testimonials.tsx       # Client review carousel
│   │   ├── Team.tsx               # Staff profile cards
│   │   ├── Pricing.tsx            # Tiered pricing table
│   │   ├── FAQ.tsx                # Accordion questions
│   │   ├── Contact.tsx            # Contact form + info panel
│   │   └── ...                    # Sub-components (Calendar, BookingInput, etc.)
│   │
│   └── ui/                        # Reusable primitives
│       ├── ParticleField.tsx       # Floating particle canvas
│       ├── PremiumCursor.tsx       # Custom cursor follower
│       ├── MagneticButton.tsx      # Magnet-reveal button
│       ├── ScrollReveal.tsx        # Scroll-triggered fade-up
│       ├── TextReveal.tsx          # Line-by-line text reveal
│       ├── ImageReveal.tsx         # Image clip reveal
│       ├── SectionLabel.tsx        # Gold eyebrow label pattern
│       ├── ServiceCard.tsx         # Service grid card
│       ├── StatsCard.tsx           # Animated stat counter
│       ├── AnimatedCounter.tsx     # Number counter animation
│       ├── Marquee.tsx             # Scrolling text bar
│       └── ...                     # (17 total)
│
└── lib/                           # Data layer
    ├── constants.ts               # Business info, nav, services, team, pricing
    ├── services.ts                 # Service data helpers
    ├── serviceData.ts              # Extended service metadata
    ├── portfolioData.ts            # Gallery items
    ├── processData.ts              # Timeline content
    ├── timeSlots.ts                # Booking slot generation
    └── utils.ts                    # cn() classname utility
```

---

## Sections (in order)

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Full-screen cinematic hero with zooming background, line-by-line headline reveal ("Where every strand, every stroke — shines by design."), rating bar, and CTA. |
| 2 | **ServicesMarquee** | Infinite horizontal scroll showing service category badges. |
| 3 | **About** | Brand origin story, feature badges (Cruelty-Free, Ammonia-Free Colour, Sanitised Tools), and animated stat counters. |
| 4 | **Services** | 6 service cards (Hair, Skin, Nails, Bridal, Waxing, Academy) with image, features list, and detail modal. |
| 5 | **Portfolio** | Masonry / grid gallery of salon work images. |
| 6 | **Process** | 4-step customer journey: Consultation → Personalization → The Experience → The Reveal. |
| 7 | **Reservation** | Full booking flow with date/time calendar, service selection, and input form. |
| 8 | **Testimonials** | Client review cards with star ratings and service tags. |
| 9 | **Team** | 6 staff profiles with name, role, bio, and social link. |
| 10 | **Pricing** | 3-tier pricing table (Essential / Premium / Luxury) with feature lists and highlight card. |
| 11 | **FAQ** | Expandable accordion of common questions. |
| 12 | **Contact** | Contact form + info sidebar (address, phone, hours, map embed). |
| 13 | **Footer** | 4-column layout — brand logo + description, EXPLORE nav, VISIT info, NEWSLETTER signup. |

---

## Design System

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#0c0c10` (dark), `#fdfbf7` (light) | Page background |
| `--color-primary` | `#c8a566` | Gold accent |
| `--color-primary-light` | `#e5d4aa` | Gold highlight |
| `--color-primary-dark` | `#a68644` | Gold deep |
| `--color-champagne` | `#f7e7ce` | Warm off-white |
| `--color-rose-gold` | `#e8b4a0` | Rose accent |
| `--color-ink` | `#15151c` | Dark card bg |
| `--color-charcoal` | `#1e1e26` | Secondary dark |
| `--color-slate` | `#2d2d3a` | Border dark |
| `#C9A227` | — | Eyebrow labels, italic logo, hover gold |
| `#FDFBF7` | — | Off-white text |
| `#0B0B0B` | — | Footer background |

### Typography

| Face | Weight | Usage |
|------|--------|-------|
| **Playfair Display** | 400–900 | Section headings (serif) |
| **Cormorant Garamond** | 300–700, italic | Hero headline, logo wordmark (editorial serif) |
| **Inter** | 100–700 | Body text, nav links, labels (sans-serif) |
| **Manrope** | 200–800 | Footer body, descriptions (sans-serif) |

### Animations

| Engine | Usage |
|--------|-------|
| **GSAP + ScrollTrigger** | Page-section reveal animations, stat counters, scroll-driven sequences, footer stagger |
| **Framer Motion** | Hover states, mobile menu transitions, service cards, micro-interactions |
| **CSS keyframes** | Shimmer, float, glow, marquee, fade-in, slide-up |

---

## Key Features

- **Cinematic hero** — Full-screen video/image background with smooth zoom and per-line text reveal
- **Smooth scrolling** — Lenis-powered with GSAP ScrollTrigger integration
- **Luxury dark theme** — Consistent `#0c0c10` black with gold editorial accents
- **Booking system** — Interactive date picker, time slots, service selection, and reservation form
- **Particle field** — Ambient floating particle layer behind all content
- **Custom cursor** — Premium cursor follower with magnetic hover effect
- **Service modals** — Click-to-expand detail views for each service
- **Animated counters** — Stats that count up on scroll into view
- **Responsive** — Mobile-first with tablet and desktop breakpoints
- **Performance** — Lazy-loaded loading screen, code-split chunks

---

## Business Information

| Detail | Value |
|--------|-------|
| Name | Glass Shine Unisex Salon & Academy |
| Address | 1, 41/A/8, Mitra Para Rd, near Dukbanglow, Barasat, Kolkata 700124 |
| Phone | +91 87770 25057 |
| Email | hello@glassshinesalon.com |
| Hours | Mon–Sat 10:30 AM – 9:00 PM, Sun 10:30 AM – 8:00 PM |
| Rating | 4.9 / 5 (379 reviews) |
| Services | Hair Styling & Color, Skin & Facial Care, Nail Art & Care, Bridal & Makeup, Body Waxing & Grooming, Academy & Training |

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | TypeScript check + production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint across the project |
