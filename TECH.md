# Technical Architecture — Endeavor Children's Services

## Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Fonts | `next/font/google` — Source Serif 4 (display), DM Sans (body) |
| Deployment target | Static/SSR via `next build` (not deployed in this repo) |

## Project Structure

```
endeavor-website/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── layout.tsx          # Root layout, fonts, metadata
│   │   ├── page.tsx            # Home
│   │   ├── about/
│   │   ├── board/
│   │   ├── contact/
│   │   ├── get-involved/
│   │   ├── programs/
│   │   │   ├── page.tsx        # I Am Who? hub
│   │   │   ├── mission/
│   │   │   ├── book/
│   │   │   └── activities/
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── Header.tsx          # Sticky nav + mobile menu + Programs dropdown
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx            # Full-width hero + PageHero variant
│   │   ├── ProgramCards.tsx    # Reusable card grid
│   │   ├── CTA.tsx             # Bottom call-to-action bands
│   │   ├── StatsBand.tsx       # Impact statistics section
│   │   └── SkipLink.tsx        # a11y skip-to-content
│   └── lib/
│       └── site.ts             # Config, nav links, content data
├── public/                     # Static assets
├── research/                   # Crawl research pack (preserved)
├── _archive_static/            # Original static HTML redesign
├── DESIGN.md
├── TECH.md
└── README.md
```

## Shared Components

| Component | Purpose |
|-----------|---------|
| `Header` | Sticky header with backdrop blur, Programs dropdown, Donate CTA, mobile hamburger |
| `Footer` | Four-column footer with explore/programs/connect links |
| `Hero` | Full-width gradient hero with eyebrow, CTAs, optional quote |
| `PageHero` | Interior page header with breadcrumbs |
| `ProgramCards` | Card grid for programs and support options |
| `CTA` | Gradient CTA band at page bottoms |
| `StatsBand` | Dark stats section for I Am Who evaluation data |
| `SkipLink` | Keyboard-accessible skip to `#main` |

## SEO

- **Metadata API** — Per-page `metadata` exports with title template
- **Open Graph** — Configured in root layout
- **`sitemap.ts`** — Auto-generated `/sitemap.xml` for all 9 routes
- **`robots.ts`** — Allows all crawlers, references sitemap

## Accessibility

- Skip-to-content link (visible on focus)
- Semantic HTML (`header`, `nav`, `main`, `footer`, `article`)
- ARIA labels on navigation and dropdowns
- `aria-current="page"` on active nav links
- `:focus-visible` outline styles
- Color contrast meets WCAG AA (teal/gold on white/dark backgrounds)
- Mobile menu with keyboard-accessible toggle

## Content Source

All page content is ported from:

1. `_archive_static/` — Static HTML redesign (primary content source)
2. `research/` — Crawl inventory and brand notes

No programs, contact details, or statistics were invented.

## Commands

```bash
npm install     # Install dependencies
npm run dev     # Development server (http://localhost:3000)
npm run build   # Production build
npm start       # Serve production build
npm run lint    # ESLint
```

## Known Gaps

See [DESIGN.md](DESIGN.md#known-gaps) for content and asset gaps (email, address, logo, etc.).
