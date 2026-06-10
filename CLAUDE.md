@AGENTS.md

# Deloitte GPS Vendor Connect — Landing Page Redesign

## Project Overview
Redesign of the Deloitte Government & Public Services Vendor Connect landing page (`vendorconnect.gps.deloitte.com`) using Next.js (App Router) and Tailwind CSS v4.

## Stack
- **Next.js** 16 (preview) — App Router, TypeScript, `src/` layout
- **Tailwind CSS** v4 — configured via `@theme` in `globals.css` (no `tailwind.config.ts`)
- **PostCSS** via `@tailwindcss/postcss`

## Architecture
- `src/app/` — App Router root (layout, page, globals.css)
- `src/components/` — Section components (one file per landing page section)
- Page is composed entirely from section components imported in `src/app/page.tsx`

## Brand Colors (Deloitte)
All colors are registered as Tailwind tokens in `globals.css` under `@theme inline`:

| Token | Hex | Usage |
|---|---|---|
| `deloitte-green` | `#86BC25` | Primary CTA, accents |
| `deloitte-green-dark` | `#00601A` | Hover states |
| `deloitte-green-light` | `#C4D600` | Highlights |
| `deloitte-black` | `#000000` | Headings, body text |
| `deloitte-dark-gray` | `#53565A` | Secondary text |
| `deloitte-mid-gray` | `#97999B` | Placeholders, dividers |
| `deloitte-light-gray` | `#D0D0CE` | Borders, backgrounds |
| `deloitte-off-white` | `#F5F5F5` | Section alternating bg |
| `deloitte-white` | `#FFFFFF` | Base background |

Use `bg-deloitte-green`, `text-deloitte-dark-gray`, etc. as Tailwind utility classes.

## Component Conventions
- Each landing page section gets its own file: `src/components/<SectionName>.tsx`
- Components are React Server Components by default — only add `"use client"` when interactivity is required
- No inline styles; use Tailwind utilities only
- No comments unless the WHY is non-obvious

## Dev Commands
```bash
npm run dev    # start dev server (localhost:3000)
npm run build  # production build
npm run lint   # ESLint
```
