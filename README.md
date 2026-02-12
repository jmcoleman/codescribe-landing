# CodeScribe AI Landing Page

Marketing landing page for CodeScribe AI, hosted at `codescribeai.com`.

## Tech Stack

- **Framework:** Astro 5.x (static site generation)
- **Styling:** Tailwind CSS 4.x
- **React:** React 19.x for interactive components
- **Deployment:** Vercel

## Project Structure

```
codescribe-landing/
├── src/
│   ├── components/       # Astro components
│   │   ├── Nav.astro           # Navigation bar
│   │   ├── Hero.astro          # Hero section
│   │   ├── ProductShowcase.astro  # Product demo/showcase
│   │   ├── Features.astro      # Features grid
│   │   ├── Screenshots.astro   # App screenshots section
│   │   ├── Pricing.astro       # Pricing tiers
│   │   └── Footer.astro        # Footer with links
│   ├── data/            # TypeScript data files
│   │   ├── features.ts         # Feature descriptions
│   │   └── pricing.ts          # Pricing tier data
│   ├── layouts/         # Page layouts
│   │   └── BaseLayout.astro    # Base HTML structure
│   ├── pages/           # Routes
│   │   ├── index.astro         # Homepage
│   │   └── legal/
│   │       ├── privacy.astro   # Privacy policy
│   │       └── terms.astro     # Terms of service
│   └── styles/          # Global styles
│       └── global.css          # Tailwind + CSS variables
├── public/              # Static assets (logo, demo videos, screenshots)
└── astro.config.mjs     # Astro configuration with redirects
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
- **sample-demo-{100,200}.mp4** - Product demo videos (optimized for web)
- **github-load-reactfiles.png** - Feature screenshot

## Content Updates

### Pricing

Edit `src/data/pricing.ts` to update pricing tiers. **Must match** the pricing in the main app (`client/src/components/PricingPage.jsx`).

### Features

Edit `src/data/features.ts` to update feature descriptions. **Only include validated features** from the main codebase.

### Demo Videos

Demo videos are located in `public/` and displayed in the ProductShowcase component. Update videos by replacing the `.mp4` files (keep original `.mov` files as source if needed).

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
