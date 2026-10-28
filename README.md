# ZENITH ATELIER // Digital Architecture & Kinetic Systems

> **Awwwards-Caliber Creative Portfolio & Digital Flagship**  
> Engineered with **Next.js 16**, **React 19**, **GSAP & ScrollTrigger**, and the newly downloaded agent skills for high-craft UI.

---

## 🚀 Quick Start

Run the development server with Turbo:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To produce an optimized production build:

```bash
npm run build
npm start
```

---

## ⚡ Integrated Libraries & Craft Skills

This project was built leveraging the tools and skills you downloaded over the past 2 days:

1. **GSAP + ScrollTrigger (`@gsap/react`, `gsap`)**:
   - **Pinned Horizontal Scrub Track**: Fluidly glides through high-fidelity case studies with sub-frame precision.
   - **Split Kinetic Headlines**: Staggered perspective 3D reveals in the Hero.
   - **Scrubbed Typography**: Interactive manifesto opacity scrub on scroll.

2. **Interface Physics (`make-interfaces-feel-better`)**:
   - **Hardware-Accelerated Magnetic Cursor**: Smooth `quickTo` 120 FPS cursor with interactive scaling and label transitions.
   - **Concentric Border Radius**: Mathematically aligned nested elements (`outer = inner + padding`).
   - **Interruptible Physics**: Elastic spring state changes for cards and buttons.

3. **Neuro-Acoustic Audio (`src/utils/sound.ts`)**:
   - Zero-dependency procedural **Web Audio API** synthesizer.
   - Tactile hover ticks, mechanical button clicks, ambient modal swooshes, and celebratory chords.
   - Global persistence toggle with animated audio visualizer.

4. **Editorial Luxury Direction (`impeccable`)**:
   - Obsidian noir `#08080a` paired with warm kinetic gold `#e2b170` and cold titanium typography.
   - Bilingual Arabic & English editorial subheads.
   - Deep case study inspection modal with technical deliverables, metrics, and multi-angle imagery.
   - Interactive slide-over dispatch drawer with metallic gold confetti celebration.

---

## 📁 Project Architecture

```
skills/
├── src/
│   ├── app/
│   │   ├── globals.css          # Design tokens, tactile card utilities & noise grain
│   │   ├── layout.tsx           # SEO metadata, Next.js 16 viewport configuration
│   │   └── page.tsx             # Master reactive canvas orchestrating all sections
│   ├── components/
│   │   ├── CustomCursor.tsx     # 120 FPS magnetic cursor with context text
│   │   ├── Navbar.tsx           # Glass header, time ticker & Web Audio switch
│   │   ├── Hero.tsx             # Kinetic 3D headline & ambient lighting
│   │   ├── HorizontalGallery.tsx# Pinned GSAP ScrollTrigger case studies track
│   │   ├── AboutManifesto.tsx   # Scrubbed philosophy & animated telemetry stats
│   │   ├── AwardShowcase.tsx    # Interactive jury distinctions with hover preview
│   │   ├── ProjectModal.tsx     # Deep-dive inspect overlay with gallery
│   │   ├── ContactDrawer.tsx    # Slide-over commission brief with confetti
│   │   ├── ReelModal.tsx        # Interactive 4K reel simulation with chapters
│   │   └── Footer.tsx           # Grand architectural footer with global nodes
│   ├── data/
│   │   └── projects.ts          # Curated case studies and jury awards
│   └── utils/
│       └── sound.ts             # Web Audio API procedural sound engine
├── .agents/skills/              # Downloaded GSAP, Impeccable & Transition skills
├── next.config.ts               # Next.js 16 configuration
├── tsconfig.json                # Strict TypeScript configuration
└── package.json                 # Project dependencies & scripts
```

