# BioNexus Biotech — Next.js

Converted from the original Create React App project to Next.js App Router.

## Stack

- Next.js 14.2.33
- React 18.3.1
- React Icons 5.7.x
- App Router

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production

```bash
npm run build
npm start
```

## Migration changes

- CRA `src/index.js` and `App.js` were replaced with `app/layout.jsx` and `app/page.jsx`.
- `App.css` is now `app/globals.css`.
- Images were moved to `public/images`.
- Browser-dependent components (`Layout` and `Navbar`) use `"use client"`.
- Existing section components and CSS animations were preserved.
- Navigation and responsive behavior were retained.

## Important

The original project uses a custom full-screen scroll animation on desktop and normal document flow on screens below 1200px. That behavior has been preserved.
