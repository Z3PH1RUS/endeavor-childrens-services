# Endeavor Children's Services — Website Redesign

Modern Next.js redesign of [Endeavor Children's Services](http://www.endeavorchildrensservices.org/) for Paul Web / John Mason.

## Live Preview (GitHub Pages)

**https://z3ph1rus.github.io/endeavor-childrens-services/**

## Clone & Run Locally

```bash
git clone https://github.com/Z3PH1RUS/endeavor-childrens-services.git
cd endeavor-childrens-services
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build (static export)

```bash
npm run build
```

Produces a static site in `out/`. To match the GitHub Pages build (with base path):

```bash
GITHUB_PAGES=true NEXT_PUBLIC_SITE_URL=https://z3ph1rus.github.io/endeavor-childrens-services npm run build
```

Serve locally with any static file server, e.g. `npx serve out`.

## Site Pages

| Page | Route |
|------|-------|
| Home | `/` |
| About | `/about` |
| Programs — I Am Who? | `/programs` |
| Programs — Mission | `/programs/mission` |
| Programs — Book | `/programs/book` |
| Programs — Activities | `/programs/activities` |
| Board of Directors | `/board` |
| Get Involved / Donate | `/get-involved` |
| Contact | `/contact` |

## Research Pack

Crawl inventory and design notes are in `/research/`:

- `sitemap.md` — Full URL list and hierarchy
- `content-inventory.md` — Per-page content summary
- `brand-notes.md` — Colors, tone, audiences
- `image-inventory.md` — Original site images and local asset map
- `reference-notes.md` — Sheltering Arms design inspiration notes

## Design Documentation

See [DESIGN.md](DESIGN.md) for design decisions and old→new page mapping.

See [TECH.md](TECH.md) for technical architecture and stack details.

## Tech Stack

- **Next.js 16** (App Router, static export)
- **TypeScript**
- **Tailwind CSS 4**
- **next/font** — Source Serif 4 + DM Sans
- SEO: metadata API, Open Graph, `sitemap.ts`, `robots.ts`
- **Hosting:** GitHub Pages (static files on `gh-pages` branch)

## Archive

The original static HTML/CSS/JS redesign is preserved in `_archive_static/` for content reference.

## Notes

- **Domain:** The live site is at `endeavorchildrensservices.org` (double "s"). The URL `endeavorchildrenservices.org` (single "s") does not resolve.
- **Donate:** PayPal link preserved from original site (`business=4K8UHJPABKAJL`).
- **Logo:** Official Endeavor banner logo from endeavorchildrensservices.org (`public/images/logo-banner.png`).
- **GitHub Pages:** Built with `GITHUB_PAGES=true npm run build` and deployed to the `gh-pages` branch. The site is served from `/endeavor-childrens-services/` on GitHub Pages.
