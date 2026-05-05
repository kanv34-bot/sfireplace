# 🔥 Fireplace Master — sfireplace.com

> Premium Fireplace Supplier Website — Built with Astro + Decap CMS

## Tech Stack

- **Astro** — Static Site Generator (SSG)
- **Tailwind CSS v4** — Styling
- **Decap CMS** — Git-based Content Management
- **Vercel** — Deployment (auto HTTPS, global CDN)

## Quick Start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # Build to ./dist/
npm run preview    # Preview build
```

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Hero.astro
│   ├── ProductCard.astro
│   ├── ProductFilter.astro
│   └── ProjectCard.astro
├── layouts/
│   └── BaseLayout.astro    # Main layout (SEO meta, header, footer)
├── pages/          # Route pages
│   ├── index.astro         # Homepage
│   ├── about.astro
│   ├── contact.astro
│   ├── products/
│   │   ├── index.astro     # Product listing with filters
│   │   └── [...slug].astro # Product detail pages
│   ├── projects/
│   │   └── index.astro
│   └── blog/
│       ├── index.astro
│       └── [...slug].astro
├── styles/
│   └── global.css          # Tailwind + custom theme
└── content/                # CMS-managed content
    ├── products/
    ├── projects/
    ├── blog/
    └── pages/
```

## SEO Features

- ✅ SSG static HTML (Core Web Vitals optimized)
- ✅ Meta title/description per page
- ✅ Open Graph & Twitter Card tags
- ✅ JSON-LD structured data (Organization, Product)
- ✅ Auto-generated sitemap.xml
- ✅ Semantic URL slugs
- ✅ Canonical URLs

## CMS

Access the content manager at `/admin/` after deployment. Add/edit products, projects, and blog posts through a clean UI.

## Deployment

Push to GitHub → Vercel auto-deploys.

```bash
git push origin main
```

## License

Private — Fireplace Master
