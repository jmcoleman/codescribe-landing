# CodeScribe AI Landing Page

Marketing landing page for CodeScribe AI, hosted at `codescribeai.com`.

## Tech Stack

- **Framework:** Astro 5.x (static site generation)
- **Styling:** Tailwind CSS 4.x
- **React:** React 19.x for interactive components
- **Sitemap:** @astrojs/sitemap (auto-generated at `/sitemap-index.xml`)
- **Deployment:** Vercel

## Project Structure

```
codescribe-landing/
├── src/
│   ├── assets/
│   │   └── screenshots/        # App screenshot PNGs (optimized via Astro Image)
│   ├── components/       # Astro components
│   │   ├── Nav.astro           # Navigation bar
│   │   ├── Hero.astro          # Hero section
│   │   ├── ProductShowcase.astro  # Product showcase screenshot
│   │   ├── Features.astro      # Features grid
│   │   ├── Screenshots.astro   # App screenshots carousel
│   │   ├── SocialProof.astro   # Testimonials / social proof
│   │   ├── Pricing.astro       # Pricing tiers
│   │   ├── FAQ.astro           # FAQ with FAQPage JSON-LD
│   │   └── Footer.astro        # Footer with links
│   ├── data/            # TypeScript data files
│   │   ├── features.ts         # Feature descriptions
│   │   └── pricing.ts          # Pricing tier data
│   ├── layouts/         # Page layouts
│   │   └── BaseLayout.astro    # Base HTML + SEO meta + JSON-LD schemas
│   ├── pages/           # Routes
│   │   └── index.astro         # Homepage
│   └── styles/          # Global styles
│       └── global.css          # Tailwind + CSS variables
├── public/              # Static assets
│   ├── logo.svg                # Brand logo
│   ├── favicon.svg / favicon.ico
│   ├── og-image.png            # Social preview image (1200x630)
│   ├── linkedin-logo.png       # LinkedIn company logo (400x400, transparent)
│   ├── robots.txt              # Crawler directives
│   └── python-demo-short.mp4  # Product demo video
├── vercel.json          # Security headers (HSTS, CSP, COOP, XFO)
└── astro.config.mjs     # Astro configuration with redirects and sitemap
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Design System

Colors and styles are synchronized with the main CodeScribe AI app:
- Primary purple: `#9333ea` (light) / `#a855f7` (dark)
- CSS variables defined in `src/styles/global.css`
- Matches main app's brand palette

## Deployment

Deployed to Vercel as a separate project:
- **Production:** `codescribeai.com`
- **Preview:** Auto-generated for each branch

### Redirects

Common app routes redirect to the subdomain:
- `/signup` → `app.codescribeai.com/signup`
- `/login` → `app.codescribeai.com/login`
- `/app` → `app.codescribeai.com`

## Assets

The `public/` directory contains:
- **logo.svg** - CodeScribe AI logo
- **favicon.svg / favicon.ico** - Site favicons
- **og-image.png** - Social preview image (1200x630, used by og:image / twitter:image)
- **linkedin-logo.png** - LinkedIn company page logo (400x400, transparent background)
- **robots.txt** - Crawler directives with sitemap reference
- **python-demo-short.mp4** - Product demo video (hero modal)

App screenshots live in `src/assets/screenshots/` and are served via Astro's `<Image>` component for automatic WebP conversion and dimension optimization.

## Content Updates

### Pricing

Edit `src/data/pricing.ts` to update pricing tiers. **Must match** the pricing in the main app (`client/src/components/PricingPage.jsx`).

### Features

Edit `src/data/features.ts` to update feature descriptions. **Only include validated features** from the main codebase.

### Demo Video

The demo video (`public/python-demo-short.mp4`) is displayed in the hero modal. Replace the `.mp4` file to update it.

## Related Documentation

- [Landing Page MVP Plan](../codescribe-ai/docs/planning/LANDING-PAGE-MVP-PLAN.md)
- [Domain Migration Guide](../codescribe-ai/docs/deployment/DOMAIN-MIGRATION-GUIDE.md)
- [Domain Migration Files Checklist](../codescribe-ai/docs/deployment/DOMAIN-MIGRATION-FILES-CHECKLIST.md)

## Notes

- This is a **separate project** from the main app (`codescribe-ai`)
- Design tokens are copied from the main app for consistency
- Keep content in sync with main app features (no aspirational features)
- Zero code retention messaging on all pages
- No HIPAA compliance claims without audit
