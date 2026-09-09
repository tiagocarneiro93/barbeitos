# Assets

**This folder contains no brand artwork, and that is deliberate.**

The three supplied PDFs (`uploads/Manual_Normas_Barbeitos.pdf`,
`uploads/Doc_Barbeitos.pdf`, `uploads/Apresentação-Barbeitos.pdf`) embed the
logo, the interlocking-B pattern, the stationery mock-ups and all project
photography as raster objects. Every attempt to decode those objects in this
environment returned corrupted pixel data, so nothing usable could be
recovered. Per the brand-system rules, no logo was drawn, traced or
approximated from memory.

## What is needed from you
| Asset | Where the system already expects it |
| --- | --- |
| Symbol (three interlocking B's), SVG | `assets/logo.svg` → `Logotype`, `thumbnail.html`, slide footers |
| Primary horizontal + vertical lockups, SVG | `Logotype` (`orientation` prop) |
| Three secondary division lockups, SVG | `Logotype` (`division` prop) |
| Interwoven line-work pattern (`Padrão`), SVG or PNG tile | Background motif — currently unimplemented |
| Nexa Regular + Nexa Extra Bold webfonts | `tokens/fonts.css` (`--font-core`, `--font-display`) |
| Zapfino webfont | `tokens/fonts.css` (`--font-script`) |
| Project photography | Every `<image-slot>` in `ui_kits/website/` and `slides/` |

## What is here
- `image-slot.js` — the drag-and-drop image placeholder used across the UI kit
  and slides. Drop a real photograph onto any slot and it persists.
