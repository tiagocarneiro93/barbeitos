# UI kit — Barbeitos Group public site

Recreation of the client-approved mock-up
(`uploads/Barbeitos Group - UI Mockups.dc.html`), with
[sothebysrealtypt.com](https://www.sothebysrealtypt.com/) as a secondary
register reference. The premium real-estate portfolio leads; the other two
divisions are branches of the same ecosystem.

## Screens
| File | Screen | Notes |
| --- | --- | --- |
| `home.view.js` | Group home | **Onyx hero**: the group mark left, the founder's portrait and a short personal intro right, with the two CTAs (no headline, no stats) · three-branch rule grid, each cell topped by its division colour · **section per branch**: 01 Real Estate portfolio, 02 Construction on graphite with the four services, 03 Interiors with the terracotta overlap panel and a single-line "what the atelier does" rule grid · onyx symbol band. Real Estate carries **two rows** — big cell left on the first, big cell right on the second |
| `realestate.view.js` | Premium portfolio index | Navy division header · filter bar (location, venda/arrendamento, "Em exclusivo" chip), Grelha / Lista / Mapa views, map rail with the off-market panel, empty state |
| `property.view.js` | Property detail | Rule-grid gallery, price in serif terracotta, four-cell spec grid, floor plan, "Feito pelo grupo" trio, sticky private-visit form with date picker |
| `construction.view.js` | Construction | Graphite division hero, four services with indicative prices, three-step quote form (step 2 of 3) with chips, area, start window and upload, recent works, cross-sell to the group |
| `interiors.view.js` | Furniture & Interiors | Full-bleed interior with the overlapping terracotta panel, filterable "Peças e espaços" grid (**no prices** — entries range from a single piece to a whole space), four-step process beside the materials frame |
| `contact.view.js` | Contacto privado | Validated enquiry form with success toast; contact rail |
| `chrome.view.js` | Header, Footer, Section, Slot | Header is navy on the homepage and paper on inner pages; PT/EN switcher; footer signs off "Building your dreams" |

`index.html` wires them into a click-through: navigate the header, filter the
portfolio, switch Grelha/Lista/Mapa, open a property, pick a visit date, step
through the quote form, filter the collection.

## Composition rules
- Every primitive comes from the design-system bundle — nothing re-implemented locally.
- Every image is an `<image-slot>`: drop real photography in and it persists. No stock, no invented renders.
- Copy is PT-PT, lifted from the mock-up and the brand documents.
- Prices, references, counts and contact details are the mock-up's indicative figures — label them as such before any client-facing use.
- The founder's name is confirmed (João Barbeitos Oliveira); the biography text is still a placeholder, flagged in-page.

## Not built
- **Mobile screens** (mock-up 1f). The kit is desktop-only so far; say the word and the home + property mobile views follow.
