# Gradient Blind Hero Section

An animated hero-section component that renders a stunning animated "gradient blinds" WebGL background — a grid of vertical blinds filled with flowing multi-stop gradients, rendered on a full-screen shader canvas using [OGL](https://oframe.github.io/ogl/). Built with Next.js 14, React 18, Tailwind CSS, and shadcn/ui. Originally generated with [v0.app](https://v0.app).

## What It Does

The `GradientBlinds` component draws a full-viewport animated gradient texture (custom GLSL fragment shader) and slices it into vertical "blinds" that distort, shimmer, and react to the mouse. Drop it behind any headline content to get an eye-catching, performant landing-page hero — no video files, no heavy images, just one lightweight WebGL canvas.

## Features

- **WebGL gradient blinds** — custom GLSL shader renders smooth animated multi-stop gradients
- **Mouse-reactive** — spotlight follows the cursor with adjustable radius, softness, opacity, and dampening
- **Fully configurable** — colors (up to 8 stops), blind count/width, angle, noise, distort amount, shine direction, mix-blend mode
- **Performance-friendly** — single OGL canvas, device-pixel-ratio control, optional `paused` prop
- **Dark hero layout** — headline, CTA buttons, and navbar scaffolded with Tailwind + shadcn/ui
- **Theming support** — `next-themes` theme provider included
- Fully static-exportable — no API routes, no server actions; deploys as plain HTML/CSS/JS

## Tech Stack

- [Next.js](https://nextjs.org/) 14 (App Router)
- [React](https://react.dev/) 18
- [OGL](https://oframe.github.io/ogl/) — minimal WebGL library (shader canvas)
- [Tailwind CSS](https://tailwindcss.com/) + `tailwindcss-animate`
- [shadcn/ui](https://ui.shadcn.com/) component scaffolding
- [Lucide](https://lucide.dev/) icons
- TypeScript

## Quick Start

```bash
# install
npm install        # or: pnpm install

# dev
npm run dev        # → http://localhost:3000

# production build
npm run build

# static export preview
npx serve out
```

## Project Structure

```
app/
  page.tsx          # hero page using <GradientBlinds />
  layout.tsx        # root layout + theme provider
  globals.css
components/
  GradientBlinds.tsx  # WebGL blinds shader component (all props here)
  Navbar.tsx          # top navigation
  theme-provider.tsx
lib/utils.ts        # clsx + tailwind-merge helper
public/             # placeholder assets
next.config.mjs     # `output: 'export'` + basePath for GitHub Pages
styles/globals.css
tailwind.config.ts
```

## Component Props

| Prop | Default | Description |
|---|---|---|
| `gradientColors` | blue palette | Up to 8 hex color stops |
| `blindCount` | — | Number of vertical blinds |
| `angle` | — | Gradient rotation angle |
| `noise` | — | Film-grain noise amount |
| `mouseDampening` | — | Spotlight follow smoothing |
| `spotlightRadius` / `spotlightSoftness` / `spotlightOpacity` | — | Mouse spotlight tuning |
| `distortAmount` | — | Blind edge distortion |
| `shineDirection` | `"left"` | Light sweep direction |
| `mixBlendMode` | — | CSS blend mode of the canvas |
| `dpr` | device | Pixel ratio cap for perf |
| `paused` | `false` | Freeze the animation |

## Environment Variables

None required.

## Deployment

The app is fully static (`output: 'export'` in `next.config.mjs`) and can be hosted anywhere that serves static files. It is currently live on **GitHub Pages**: https://girishlade111.github.io/gradient-blind-hero-section/

> **Note:** `next.config.mjs` sets `basePath: '/gradient-blind-hero-section'` so assets resolve under the GitHub Pages subpath. If you deploy to a root domain (Vercel, Cloudflare Pages, Netlify), remove the `basePath` line.

Other options:
- **Vercel** — `vercel deploy` (zero config; this project originated on v0/Vercel)
- **Cloudflare Pages** — point at the repo, build command `npm run build`, output dir `out`

---

Built by Girish Lade — https://ladestack.in
