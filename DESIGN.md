# Design Decisions — Endeavor Children's Services Redesign

## Overview

This redesign modernizes Endeavor Children's Services' public website while preserving all real content, programs, and contact information from the source crawl. Visual inspiration comes from Sheltering Arms' layout patterns (hero, cards, whitespace, CTAs) — not their copy, brand, or imagery.

**Tech stack:** Next.js 16 (App Router) + TypeScript + Tailwind CSS 4.

---

## Page Mapping: Old → New

| Original URL (endeavorchildrensservices.org) | New Route | Notes |
|----------------------------------------------|-----------|-------|
| `/` | `/` | Expanded with hero, program cards, impact stats |
| `/about/` | `/about` | Janice Neilson bio preserved in full |
| `/i-am-who/` | `/programs` | Hub page expanded with program overview |
| `/i-am-who/i-am-who-mission/` | `/programs/mission` | Direct content mapping |
| `/i-am-who/i-am-who-book/` | `/programs/book` | Direct content mapping |
| `/i-am-who/i-am-who-activities/` | `/programs/activities` | Activity list as visual grid |
| `/board-of-directors/` | `/board` | Board bios in card layout |
| `/how-can-you-help/` | `/get-involved` | Donate CTA + PayPal link preserved |
| *(none)* | `/contact` | **New page** — consolidates phone/Facebook from footer; email/address marked unknown |

### Navigation Changes

| Old Nav | New Nav | Rationale |
|---------|---------|-----------|
| Home | Home | — |
| About | About | — |
| I Am Who? (dropdown) | Programs (dropdown) | Clearer label for external audiences |
| Board of Directors | Board | Shorter for mobile nav |
| How Can You Help? | Get Involved | Modern nonprofit convention |
| *(none)* | Contact | Dedicated page for reachability |
| *(none)* | Donate (button) | Persistent CTA inspired by Sheltering Arms |

---

## Visual Design

### Color Palette

Retained Endeavor's existing brand colors from the WordPress theme, refined for modern contrast:

| Token | Value | Usage |
|-------|-------|-------|
| Primary teal | `#1a9aaa` | Buttons, links, accents |
| Primary dark | `#147a87` | Hover states |
| Primary light | `#e8f6f8` | Card backgrounds, nav hover |
| Accent gold | `#c9a84c` | CTA buttons, stat numbers |
| Dark slate | `#1e3a40` | Footer, stats band |
| Text | `#2d3436` | Body copy |

Sheltering Arms uses warm orange; we deliberately kept Endeavor's teal/gold to maintain brand continuity.

### Typography

| Role | Font | Rationale |
|------|------|-----------|
| Display/headings | Source Serif 4 | Warm serif similar to Sheltering Arms' Century — adds authority without copying |
| Body | DM Sans | Clean, accessible sans-serif for readability |

### Layout Patterns (from Sheltering Arms inspiration)

1. **Full-width hero** with gradient background, eyebrow label, H1, lead text, and dual CTAs
2. **Card grid** for programs and support options — hover lift with shadow
3. **Stats band** with dark background for I Am Who evaluation data
4. **Alternating section backgrounds** (white / light gray) for visual rhythm
5. **Sticky header** with backdrop blur and prominent Donate button
6. **CTA bands** at page bottoms with gradient backgrounds
7. **Multi-column footer** with quick links, programs, and contact

### Accessibility

- Skip-to-content link
- Semantic HTML (`header`, `nav`, `main`, `footer`, `article`)
- ARIA labels on navigation and dropdowns
- Color contrast meets WCAG AA for text on backgrounds
- Focus-visible states on interactive elements
- Mobile hamburger menu with keyboard-accessible toggle

### Mobile-First

- Responsive grid collapses to single column below 768px
- Touch-friendly nav and button sizes
- Hero text scales with `clamp()`
- Footer stacks vertically on small screens

---

## Content Integrity

### Preserved from crawl
- All body copy from 8 source pages
- Board member bios (complete)
- I Am Who evaluation statistics (89%→5%, 9%→90%, 400+ children)
- PayPal donate link (business ID: 4K8UHJPABKAJL)
- Phone: 360-888-3910
- Facebook: IAMWHOCHILDREN
- 501(c)(3) status and private foundation tax note

### Not invented
- No fake programs, stats, or team members
- No fabricated email or address (marked unknown on Contact page)
- No stock photography — CSS gradients and SVG patterns only
- Logo is a typographic placeholder ("E" mark) — replace with official Endeavor logo asset when available

### Added (structural only)
- Contact page consolidating known channels
- Impact stats section on homepage (data from existing Mission page)
- "Other Ways to Support" cards on Get Involved page

---

## Known Gaps

| Gap | Status |
|-----|--------|
| Source URL typo (`endeavorchildrenservices.org` vs `endeavorchildrensservices.org`) | Documented in research/sitemap.md |
| No email address on original site | Contact page notes this |
| No physical address on original site | Contact page notes this |
| No volunteer application form | Volunteer model described; no form existed to migrate |
| Original logo/images broken on some paths | Placeholder logo used; recommend providing assets |
| `/i-am-who/` hub had minimal content | Expanded into full program overview |

---

## File Structure

```
endeavor-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Home
│   │   ├── about/
│   │   ├── board/
│   │   ├── contact/
│   │   ├── get-involved/
│   │   ├── programs/
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/             # Shared UI components
│   └── lib/site.ts             # Site config and content data
├── public/
├── _archive_static/            # Original static HTML redesign (archived)
├── research/                   # Crawl research pack
├── DESIGN.md
├── TECH.md
└── README.md
```
