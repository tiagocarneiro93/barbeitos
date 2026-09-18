# Barbeitos Group — website

Demo site for **Barbeitos Group**, a premium multi-sector group in Braga,
Portugal (real estate development, construction, furniture & interior
design). This is the client-facing demo: a click-through prototype of the
public website, built from the group's design system.

**Live demo:** `index.html` at the repo root — deploy with GitHub Pages
(Settings → Pages → Deploy from branch `main`, folder `/root`) or open the
file directly in a browser.

> **Note:** the repo root has a `.nojekyll` file. Without it, GitHub Pages'
> default Jekyll build silently drops `design-system/_ds_bundle.js` (any
> file/folder starting with `_` is excluded by Jekyll), which breaks the
> page — the design system components it defines never load. Keep
> `.nojekyll` in place if you restructure the repo.

## What's here

- **`index.html`** — the demo. A single-page click-through covering the
  group home, real-estate portfolio index, property detail, construction,
  interiors and contact screens. No build step: React and Babel load from
  CDN, JSX is compiled in the browser.
- **`design-system/`** — the full Barbeitos Group design system this demo
  is built from: design tokens, 21 UI components, brand guidelines, and the
  source view files (`ui_kits/website/*.view.js`) that `index.html` loads.
  See `design-system/README.md` for the complete reference.
- **`design-system/HANDOFF.md`** and **`design-system/chats/`** — process
  notes from the original design handoff (Claude Design), kept for context
  on decisions made while building the system.

## Status — known gaps

This is a **prototype for client review**, not production code:

- **Photography and logo are in place**, but several are AI-generated
  placeholders (property photos, the founder portrait, the consultant
  headshot, the maps) rather than real assets — see
  `design-system/assets/README.md` for which is which. A few `<image-slot>`
  placeholders remain empty (e.g. the "Mesa Sal" piece).
- **Icons are substituted** (Lucide, via CDN) — the brand defines no icon
  system of its own.
- **Fonts and prices/copy are placeholders** where noted in-page — see
  `design-system/README.md` → "Missing assets" and "Honesty rule".
- **Responsive down to phone width**, but only spot-checked at common
  breakpoints (390px / 860px) — not exhaustively tested across devices.
- **No backend.** Forms (enquiry, quote, visit booking) are front-end only;
  nothing submits anywhere yet.

## Running locally

No build step — serve the repo root with any static file server and open
`index.html`:

```
python3 -m http.server 8080
# then open http://localhost:8080
```

Fonts (Google Fonts) and icons (Lucide, via unpkg) load from CDN, so an
internet connection is required to see the site fully styled.
