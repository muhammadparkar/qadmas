# Qadmas — Project Context & Session History

Comprehensive architectural reference, design constraints, file map, and complete chronological log of implementations and asset mappings for the Qadmas web application.

---

## 1. Project Overview & Architecture

- **Project**: Qadmas (Digital Agency & Tech Consultancy)
- **Tech Stack**:
  - **Framework**: React 19 + TypeScript + Vite 8
  - **Styling**: Tailwind CSS v4, custom utility classes in `src/index.css`
  - **Animation & Motion**: Framer Motion, Embla Carousel (`embla-carousel-react`, `embla-carousel-auto-scroll`)
  - **Icons**: Lucide React
  - **Deployment**: Vercel (Configured with SPA client-side rewrite in `vercel.json`)
- **Regional Geography**:
  - Exclusively operates across **Qatar, the UAE, and India** (`QA · UAE · IN`).
  - No arbitrary city mentions unless explicitly required.

---

## 2. Core Design System & Aesthetic Directives

1. **Typography**:
   - **Font Stack**: Apple SF Pro / Inter font stack (`font-apple`).
   - **Strict Rule**: **Monospace fonts (`font-mono`) are strictly banned** across the entire UI.
   - **Accent Style**: Apple Blue serif italic accent (`text-apple-blue font-serif-accent font-normal italic`).
   - **Header Hierarchy**: Standardized across showcase, tool stack, and execution timeline sections to `text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-ink leading-[1.12]`.
2. **Surfaces & Layout**:
   - Minimalist Apple-inspired design aesthetic with Gallery White surfaces (`bg-gallery-white`).
   - Deep obsidian dark bento showcase cards (`bg-[#0a0d14]`) for production platforms.
   - Deep ink text (`text-ink`) and subtle borders (`border-black/5` to `border-black/10` / `border-white/10`).
   - Gapless bento grids, curated responsive padding, and high-performance micro-animations.

---

## 3. Chronological Session History & Implementations

### Milestone 1: Custom 404 & Vercel SPA Routing
- Built `src/pages/NotFound.tsx` featuring glowing radial background, distinct Apple-styled typography, and dual return routes.
- Registered catch-all route `*` in `src/App.tsx`.
- Added `vercel.json` with client-side SPA rewrites to eliminate direct refresh 404s.

### Milestone 2: Header Typography Standardization
- Matched responsive typography scales and font weights across all major sections:
  - `src/components/ui/gallery-hover-carousel.tsx`: *"Digital Marketing & Creative Services"*
  - `src/components/ui/logo-cloud-2.tsx`: *"Design tools we build with."*
  - `src/components/ui/timeline-01.tsx`: *"How we execute campaigns."*

### Milestone 3: Digital Marketing Services Carousel (`gallery-hover-carousel.tsx`)
- Reduced to 5 core marketing disciplines (removed "Business Setup").
- Removed floating dark pill tags for an uninterrupted photographic card view.
- Added auto-scroll with hover-pause, touch-pause, and document visibility tab-blur pause.
- Mapped assets into `/public/digital-marketing/` (`online-marketing.jpg`, `branding.jpg`, `social-media-posts.jpg`, `company-profile.jpg`, `influencer-marketing.jpg`).

### Milestone 4: Services Bento Grid (`bento-grid-dark.tsx`)
- Mapped `/services/crm-erp.jpg`, `/services/digital-marketing.jpg`, `/services/website-dev.jpg`, `/services/mobile-app.jpg`.
- Adjusted Mobile App card image position to `objectPosition: "center 26%"`.

### Milestone 5: Digital Marketing Hero Infinite Marquee (`hero-3.tsx`)
- Mapped 6 studio photos (`IMG_2910.JPG` – `IMG_2916.JPG`) into `/public/digital-marketing/hero/`.
- Sped up `.animate-marquee-hero-infinite` in `src/index.css` to `30s` desktop and `45s` mobile.

### Milestone 6: Campaign Execution Timeline (`timeline-01.tsx`)
- Integrated customized crops and focal alignment for all 4 sprint stages in `/public/digital-marketing/` (`research-discover.jpg`, `strategy-creative.jpg`, `launch-amplify.jpg`, `track-optimize.jpg`).
- Extended `TimelineItemProps` with `imageClassName` support.

### Milestone 7: About Page Stats Single-Line Balance (`About.tsx`)
- Fixed stat wrapping on `3 (QA · UAE · IN)` with `whitespace-nowrap`, `tracking-tight`, responsive sizing, and container widening.

### Milestone 8: Products Showcase Layout Redesign (`product-showcase-card.tsx` & `Products.tsx`)
- Standardized to the project's default surface (`bg-gallery-white`) with crisp dark text (`text-ink` / `text-slate`).
- Stripped away all outer wrapper cards/boxes so each product sits plain directly on the page.
- Layout structure matching the reference design:
  - **Left Column**: Clean bold headline (`text-ink`), descriptive narrative (`text-slate`), feature checklist with dark circular pill badges and white checkmarks, subtle horizontal divider (`border-slate-200/80`), 3-avatar social proof stack with bold metric multiplier, and dark action CTA button.
  - **Right Column**: Framed preview card with media slot (with support for custom `rightContent` or `rightImageSrc`) and bottom caption bar with icon + title (e.g. `Users` icon + "Collaboration Preview") and live status indicator.
  - **Separation**: Products separated cleanly with generous spacing (`space-y-20 sm:space-y-28`) and subtle horizontal divider lines (`border-t border-slate-200/80`).
  - **21st.dev Alternating Rows (`features-2`)**: Standardized on a balanced 50/50 two-column grid (`grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16`) where text is naturally left-aligned:
    - **Row 1 (Wantik-X)**: Content on left (50%), Preview on right (50%).
    - **Row 2 (Sila)**: Preview on left (50%), Content on right (50%), with natural left-aligned typography, badge with icon, and clean spacing.
  - Ready for user-specified content on the right for Wantik-X and Sila.

---

## 4. Current File & Directory Structure

```
qadmas/
├── public/
│   ├── digital-marketing/
│   │   ├── hero/ (hero-1.jpg – hero-6.jpg)
│   │   ├── branding.jpg
│   │   ├── company-profile.jpg
│   │   ├── influencer-marketing.jpg
│   │   ├── launch-amplify.jpg
│   │   ├── online-marketing.jpg
│   │   ├── research-discover.jpg
│   │   ├── social-media-posts.jpg
│   │   ├── strategy-creative.jpg
│   │   └── track-optimize.jpg
│   ├── products/
│   │   ├── sila-auth.png
│   │   └── sila-dashboard.png
│   ├── services/
│   │   ├── crm-erp.jpg
│   │   ├── digital-marketing.jpg
│   │   ├── mobile-app.jpg
│   │   └── website-dev.jpg
│   └── logos/tools/
├── src/
│   ├── components/ui/
│   │   ├── bento-grid-dark.tsx
│   │   ├── carousel-08.tsx
│   │   ├── gallery-hover-carousel.tsx
│   │   ├── hero-3.tsx
│   │   ├── logo-cloud-2.tsx
│   │   ├── product-showcase-card.tsx
│   │   ├── timeline-01.tsx
│   │   └── timeline-01-utils/timeline.tsx
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── DigitalMarketing.tsx
│   │   ├── NotFound.tsx
│   │   ├── Products.tsx
│   │   ├── Services.tsx
│   │   └── Sila.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── vercel.json
└── CONTEXT.md
```

---

## 5. Verification & Code Quality

- **TypeScript (`tsc -b`)**: Clean (0 errors).
- **Vite Build (`npm run build`)**: Clean production bundle.
- **ESLint (`npm run lint`)**: Clean (0 warnings, 0 errors).
- **Browser Subagent Rule**: Must ask user permission before executing browser automation.
