# AGENTS.md

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project Overview

IronBuild Construction Group — a single-page Next.js 16 website for a construction company. Static site, no backend, no database, no auth.

## Critical Stack Versions

- **Next.js 16.2.9** (App Router) — breaking changes from v15; check `node_modules/next/dist/docs/` before writing code
- **React 19.2.4**
- **Tailwind CSS v4** — uses `@tailwindcss/postcss` plugin, NOT the v3 `tailwindcss` PostCSS plugin
- **shadcn/ui** — style: `base-nova`, RSC: true, icon library: lucide
- **TypeScript 5** with strict mode

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint (no typecheck script exists)
```

No test suite. No typecheck command. If you need type checking, run `npx tsc --noEmit` manually.

## Architecture

Single-page app. No routing beyond the root.

```
src/
  app/
    layout.tsx     — Root layout, fonts (Space Grotesk + Playfair Display), metadata
    page.tsx       — Home page, composes all section components
    globals.css    — Theme variables, Tailwind v4 config, custom utilities
  components/      — Section components (one per page section)
    ui/            — shadcn/ui components (button, card, input, etc.)
  lib/
    constants.ts   — All content data (services, projects, testimonials, contact info)
    utils.ts       — cn() helper (clsx + tailwind-merge)
```

## Key Patterns

- **Path alias**: `@/*` maps to `./src/*`
- **Content lives in `src/lib/constants.ts`** — all services, projects, testimonials, stats, contact info, nav links, form options
- **Theme colors**: defined as CSS variables in `globals.css` under `:root` — copper accent is `#c9844c` (use `--color-copper` class or the primary/accent vars)
- **Custom CSS utilities**: `.noise-overlay`, `.arch-grid`, `.diagonal-accent` — use these before inventing new ones
- **Images**: all from Unsplash; remote pattern configured for `images.unsplash.com` in `next.config.ts`
- **Framer Motion**: used for scroll-triggered and hover animations across section components
- **shadcn/ui components**: installed in `src/components/ui/` — add new ones via `npx shadcn@latest add <component>`

## Style Conventions

- Dark theme only — background `#131110`, text `#f5f0eb`
- Copper/bronze accent color palette: `#c9844c`, `#d4a574`, `#a66b3a`
- Tailwind classes use the `copper` custom color (e.g., `text-copper`, `bg-copper`)
- Components are functional, use `"use client"` only when needed (animations, interactivity)
- No comments in code unless user requests them

## Deployment

Vercel (static export, no special config needed). Push to GitHub → import on Vercel → auto-deploy.
