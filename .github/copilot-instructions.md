# Copilot Instructions

Personal portfolio for Shahrooz Aghili (Cloud Native Consultant). Next.js 14 App Router with static export to GitHub Pages.

## Commands

```bash
npm run dev            # Dev server on localhost:3000
npm run build          # Static export to ./out/ (also: npm run export)
npm run fetch-youtube  # Refresh src/data/youtube-content.json (needs YOUTUBE_API_KEY in .env.local)
```

No test or lint scripts are configured. The only CI check is the `build` step in `.github/workflows/deploy.yml`; run `npm run build` locally to validate changes.

CV PDFs are generated outside of npm with [RenderCV](https://rendercv.com):

```bash
rendercv render cv/Shahrooz_Aghili_CV_EN.yaml
rendercv render cv/Shahrooz_Aghili_CV_DE.yaml
# Copy resulting PDFs into public/ so the /cv download links resolve.
```

## Architecture

- **Static export.** `next.config.js` sets `output: 'export'` and `trailingSlash: true`. Everything must be statically renderable — no server routes, no runtime API handlers, no `next/image` optimization (`images.unoptimized: true`). Anything dynamic must be a client component fetching static assets.
- **Routing.** App Router under `src/app/`. Each section (`about`, `services`, `portfolio`, `content`, `contact`, `speaking`, `cv`) is its own route folder. SEO is centralized in `src/app/layout.tsx` (metadata + JSON-LD), with `sitemap.ts` and `robots.ts` siblings.
- **i18n.** Custom, no library. `src/contexts/LanguageContext.tsx` fetches `/translations/{en,de}.json` at runtime from `public/translations/`, persists choice in `localStorage`, and **defaults to `de`**. Use the `t('section.key')` helper (dot-separated nested lookup; returns the key string on miss and may return strings, arrays, or objects). Any component calling `useLanguage()` must be a client component (`'use client'`).
- **Styling.** Single global stylesheet at `src/styles/globals.css` plus a few colocated CSS modules (`*.module.css`) for `Header`, `Footer`, `LanguageSwitcher`. Prefer extending `globals.css` over adding new module files unless the component already has one.
- **Data.** Static JSON in `src/data/` (`youtube-content.json`, `killercoda-content.json`) is imported directly — refresh via the fetch script rather than hand-editing.
- **Path alias.** `@/*` → `./src/*` (see `tsconfig.json`).
- **Analytics.** Loaded only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set (build-time env var, also wired through the GitHub Actions workflow).

## Conventions

- When adding a new piece of user-facing copy, add the key to **both** `public/translations/en.json` and `public/translations/de.json`; never hardcode visible strings in components.
- New routes go under `src/app/<route>/page.tsx`. Keep them server components unless they need `useLanguage`, browser APIs, or interactivity — then add `'use client'` at the top.
- Client SVG/logo assets are exported as React components from `src/components/CompanyLogos.tsx` and `src/components/Icons.tsx`. Add new logos there instead of importing raw SVGs.
- Don't introduce server-only Next.js features (Route Handlers, Server Actions, ISR, `next/image` loaders). They break `output: 'export'`.
- Deployment is automatic on push to `main` via `.github/workflows/deploy.yml`; the workflow uploads `./out/` to GitHub Pages.
