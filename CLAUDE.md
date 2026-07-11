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
```

## Architecture

### Static Export
The site uses `output: 'export'` in `next.config.js` for static HTML generation. All pages are pre-rendered to the `./out/` directory for GitHub Pages.

### Internationalization
- Translations are JSON files in `public/translations/` (en.json, de.json)
- `LanguageContext` (`src/contexts/LanguageContext.tsx`) provides `t()` function for translations
- Uses nested key access: `t('home.hero')`, `t('header.about')`
- Default language is German (`de`)
- Language preference stored in localStorage

### Page Structure
- `src/app/page.tsx` - Homepage with hero, trusted companies, certifications, featured work
- `src/app/about/`, `services/`, `portfolio/`, `content/`, `contact/`, `speaking/` - Section pages
- `src/app/cv/` - CV download page

### Key Components
- `src/components/CompanyLogos.tsx` - SVG logo components for client companies
- `src/components/Icons.tsx` - Technology and social media icons
- `src/components/Header.tsx`, `Footer.tsx` - Layout components
- `src/styles/globals.css` - All styling (single CSS file)

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
