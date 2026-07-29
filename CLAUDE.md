# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Shahrooz Aghili, a Cloud Native Consultant. Built with Next.js 14 using static export for GitHub Pages deployment.

## Commands

```bash
# Development
npm run dev          # Start dev server (localhost:3000)
npm run build        # Build static site (outputs to ./out/)
npm run export       # Alias for build (static export)

# Content
npm run fetch-youtube  # Fetch YouTube video data (requires YOUTUBE_API_KEY in .env.local)

# CV Generation (requires rendercv)
rendercv render cv/Shahrooz_Aghili_CV_EN.yaml  # Generate English CV PDF
rendercv render cv/Shahrooz_Aghili_CV_DE.yaml  # Generate German CV PDF
# Copy resulting PDFs into public/ so the /cv download links resolve.
```

No test or lint scripts are configured. The only CI check is the `build` step in `.github/workflows/deploy.yml`; run `npm run build` locally to validate changes.

## Architecture

### Static Export
The site uses `output: 'export'`, `trailingSlash: true`, and `images.unoptimized: true` in `next.config.js`. Everything must be statically renderable — no server routes, no runtime API handlers, no `next/image` optimization. Anything dynamic must be a client component fetching static assets. Don't introduce server-only Next.js features (Route Handlers, Server Actions, ISR) — they break `output: 'export'`.

### Internationalization
- Translations are JSON files in `public/translations/` (en.json, de.json), fetched at runtime by `LanguageContext` (`src/contexts/LanguageContext.tsx`)
- Uses nested key access: `t('home.hero')`, `t('header.about')`
- `t()` returns the key string itself on a miss, and may return strings, arrays, or objects depending on the key
- Default language is German (`de`); preference stored in localStorage
- Any component calling `useLanguage()` must be a client component (`'use client'`)

### Page Structure
- `src/app/page.tsx` - Homepage with hero, trusted companies, certifications, featured work
- `src/app/about/`, `services/`, `portfolio/`, `content/`, `contact/`, `speaking/` - Section pages
- `src/app/cv/` - CV download page
- `src/app/sitemap.ts`, `src/app/robots.ts` - SEO siblings to `layout.tsx` (which centralizes metadata + JSON-LD)

### Key Components
- `src/components/CompanyLogos.tsx` - SVG logo components for client companies
- `src/components/Icons.tsx` - Technology and social media icons
- `src/components/Header.tsx`, `Footer.tsx` - Layout components
- `src/components/GoogleAnalytics.tsx` - Loaded only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set
- `src/components/LanguageSwitcher.tsx` - Language toggle UI
- `src/styles/globals.css` - Main stylesheet, plus colocated `*.module.css` for `Header`, `Footer`, `LanguageSwitcher`. Prefer extending `globals.css` over adding new module files unless the component already has one.

### Conventions
- New user-facing copy must be added to **both** `public/translations/en.json` and `public/translations/de.json` — never hardcode visible strings in components
- New routes go under `src/app/<route>/page.tsx`; keep them server components unless they need `useLanguage`, browser APIs, or interactivity
- New logos/icons are added as React components in `CompanyLogos.tsx` / `Icons.tsx`, not imported as raw SVGs

### Data Files
- `src/data/youtube-content.json` - Cached YouTube video metadata
- `src/data/killercoda-content.json` - KillerCoda lab metadata

### CV as Code
CVs in `cv/` directory use RenderCV. Edit YAML files, then run `rendercv render` to generate PDFs. Generated PDFs should be copied to `public/` for download.

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:
1. Builds on push to `main`
2. Deploys `./out/` to GitHub Pages

Environment variable `NEXT_PUBLIC_GA_MEASUREMENT_ID` enables Google Analytics.

## Path Alias

`@/*` maps to `./src/*` (configured in tsconfig.json)
