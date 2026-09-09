# Barbeitos Group — Design System

Premium multi-sector group based in Braga, Portugal, operating three
complementary divisions under one identity:

1. **Real Estate Development** — promoção imobiliária, land to handover.
2. **Construction Company** — in-house execution, quality/cost/schedule control.
3. **Furniture & Interior Design** — interiors and furniture designed and produced in-house.

Audience: high-net-worth individuals and international investors. The brand
positions itself on structural rigor and architectural excellence rather than
lifestyle warmth — "Mais do que criar espaços, a Barbeitos Group constrói
patrimónios, valor e experiências que perduram no tempo."

Signature: **"Building Value. Creating Legacy."**

## Sources given
| Source | What it provided |
| --- | --- |
| `uploads/Manual_Normas_Barbeitos.pdf` (15 pp, "Brand Guidelines 2026") | Brand values, vision, logo rationale, área de proteção, sistema de cores with CMYK/RGB/HEX, typography, misuse rules, slogan, pattern, stationery |
| `uploads/Doc_Barbeitos.pdf` (3 pp) | Corporate one-pager: palette names, symbol rationale, services line |
| `uploads/Apresentação-Barbeitos.pdf` (2 pp) | Presentation spread — "Building your dreams" headline variant, same palette and symbol copy |
| Brief notes | Foil Gold #C5A059 accent, Nexa/Zapfino type stack, clearspace ratios, PT-PT + EN grid requirement |
| `uploads/Barbeitos Group - UI Mockups.dc.html` | **The approved UI direction and the current source of truth for the digital system**: six screens (group home, real-estate index, property detail, construction, interiors, mobile), Libre Caslon Display + Archivo + mono, warm paper #F4F1EC, visible 1px rule grid, terracotta→navy buttons, "Building your dreams" as the hero line |
| [sothebysrealtypt.com](https://www.sothebysrealtypt.com/) | Secondary reference for premium-real-estate conventions (editorial serif, restrained chrome, property-led index). Not copied — only the register was taken |

No codebase or Figma file was supplied, but the client-approved HTML mock-up
**is** the digital specification: `ui_kits/website/` recreates its six screens,
and the token layer was retuned to match it. Where the mock-up and the print
manual disagree, the mock-up wins for digital and the manual stays authoritative
for print — the two divergences are typography (editorial serif instead of Nexa
Extra Bold) and the accent (terracotta instead of foil gold).

---

## Missing assets — action needed
- **No logo, symbol, pattern or photography could be recovered.** The PDFs embed
  them as raster objects that decoded to corrupted data in this environment. No
  mark was drawn or approximated; wherever the logo belongs, the wordmark is set
  in plain type (`Logotype`) and the gap is flagged in-page. See `assets/README.md`.
- **Fonts follow the approved mock-up, not the print manual.** The digital
  system is **Libre Caslon Display** (all headings, prices, figures — one weight,
  never synthesised bold), **Archivo** 300/400/500 (body, UI, buttons, nav) and
  **system mono** (eyebrows, references, dimensions, prices in lists). Nexa
  Regular / Extra Bold and Zapfino remain the licensed print faces and were not
  supplied; `--font-script` (Italianno substitute) is kept for print collateral
  only. **Open question for the client: does Nexa return for digital, or is
  Libre Caslon + Archivo now the digital standard?**
- **Icons are substituted.** No icon set exists in the sources. **Lucide** is
  linked from CDN through the `Icon` component — see Iconography below.

---

## CONTENT FUNDAMENTALS

**Language.** PT-PT is the primary voice; EN is the investor-facing mirror.
Every surface supports a PT/EN switcher (`Radio` or the header toggle in the UI
kit). Never mix the two inside one block of copy — switch whole surfaces.

**Person.** The brand writes about itself in the **third person** — "a Barbeitos
Group constrói", not "we build". It never addresses the reader as "you" in
marketing copy. Second person appears only in UI microcopy and forms
("Introduza um email válido", "Selecione uma divisão").

**Register.** Declarative, unhurried, structural. Sentences state a fact and
stop. Adjectives are load-bearing and repeat deliberately across the corpus:
*rigor, inovação, atenção ao detalhe, sólida, sofisticada, intemporal,
memorável, versátil, equilibrado, duradouro*. No superlatives ("the best"), no
urgency ("don't miss"), no exclamation marks anywhere.

**Sentence shape.** Two-clause constructions with a pivot — "Uma marca é mais do
que a identidade visual. É uma experiência completa e intencional." /
"Mais do que criar espaços, a Barbeitos Group constrói patrimónios." Set these
at display size; they are the brand's rhetorical signature.

**Casing.** Sentence case for headings and body. UPPERCASE with wide tracking
for kickers, nav, buttons and metadata labels only. Title Case is never used.
The wordmark is uppercase; the descriptor beneath it is uppercase at 0.22em.

**Numbers.** Divisions are numbered `01 / 02 / 03`. Metadata reads
"Braga · 2026 · 24 unidades" — middot separated, no labels. Slide footers read
`04 / 07`. Thousands use a thin space in PT ("3 480 m²").

**Quotation.** The slogan and the closing line always carry curly quotes in
print — "Building Value. Creating Legacy." / "Created with precision. Designed
for timeless impact."

**Emoji: never.** Not in UI, not in decks, not in copy. Unicode is used only for
the middot separator (·), the pipe in the services line (|) and the multiplication
sign in dimensions (240 × 100 cm).

**Button and CTA copy.** Verb-first, two or three words, uppercase:
REQUEST PORTFOLIO · VIEW PROJECTS · ENVIAR PEDIDO · BOOK THE ATELIER.
Never "Click here", "Learn more", "Submit".

**Toast and error copy.** A completed statement plus a fact —
"Enquiry sent · We reply within two working days." Errors name the fix:
"Introduza um email válido."

**Honesty rule.** Where data does not exist in the sources, the surface says so
rather than inventing it ("Address and phone are placeholders — not present in
the supplied sources."). Keep this habit.

---

## VISUAL FOUNDATIONS

**Grounds.** Warm off-white paper (`--paper-050` #F4F1EC) is the page; `--paper-100`
#EAE6DF is the sunken band and hover tint; `--paper-200` #E9E6E0 is the canvas
around a framed screen. Dark grounds are Midnight Navy (the group's own colour —
header and hero on the homepage, footer everywhere), Graphite Grey (the
Construction division and the symbol band) and Terracotta Brown (the Interiors
panel). Flat colour only: no gradients, no washes.

**Division colouring.** **Onyx Black is the group** — the header, the footer,
the homepage hero and the symbol band. Each branch then owns one colour:
**Midnight Navy = Real Estate Development**, **Graphite Grey = Construction
Company**, **Terracotta Brown = Furniture & Interior Design**. The tokens are
`--division-group`, `--division-realestate`, `--division-construction`,
`--division-interiors`; use those rather than the raw primitives so a
re-assignment is one edit.

**Colour hierarchy.** Terracotta is action and accent —
primary buttons, eyebrows, links, selected chips — and it **resolves to navy on
hover**, the brand's signature transition. Terracotta-light #A8724F carries
eyebrows and links on dark grounds. Foil gold is print-only and does not appear
in the web UI. Ink on paper is navy at three opacities (75 / 55 / 45%); ink on
dark is paper at three (100 / 72 / 50%).

**Type.** A three-voice system. **Editorial serif** (Libre Caslon Display, one
weight) for every heading, price, stat figure and the wordmark — 60px display
down to 21px column titles, tracking -0.01em at display sizes and 0.26em on the
wordmark. The homepage carries no display headline at all — the group mark and
the founder's portrait do that work. **Archivo Light** for body at 13–15px on a generous 1.8 line-height,
capped at 66ch. **Mono** for all metadata: eyebrows at 10px/0.22em uppercase,
data lines at 10.5px/0.06em, and every reference, dimension, count and caption.
Never set a sentence in mono; never set data in the serif except a price.

**Geometry.** Zero radius, everywhere, on everything — cards, buttons, fields,
badges, chips, image frames. The only round element in the system is the radio
control. Nothing is softened.

**The rule grid.** Structure comes from 1px rules, not shadows or gaps: a 1px
grid gap over a rule-coloured ground (`RuleGrid`) divides card grids, spec
tables, service columns and steppers; `--rule` rgba(12,25,53,.13) on paper,
`--rule-inverse` rgba(244,241,236,.14) on dark, `--rule-strong`
rgba(12,25,53,.35) for field boxes and outline buttons. Sections are separated
by full-bleed rules; the header sits on one; the footer's legal line sits under
one. This visible framing is what reads as structural rigor.

**Cards.** Square, unshadowed and normally **borderless** — they live inside a
`RuleGrid` which supplies the rules. Structure: media → mono location eyebrow →
serif title → mono spec line → rule-topped footer with the price left and a mono
"Detalhe →" right. Hover tints the ground one paper step and scales the media
1.03 over 420ms. Never a radius, a shadow, or a coloured left border.

**Shadows.** Only two exist: `--shadow-raised` (0 2px 18px rgba(12,25,53,.07))
for a framed screen on the canvas, and `--shadow-overlay` for the Dialog. No
inner shadows, no grey glows, no elevation ladder.

**Transparency and blur.** One use: the Dialog scrim, navy at 52% with an 18px
veil. Type never sits on a translucent plate — badges over media are solid.

**Imagery.** Property and interior photography, full-bleed to at least one edge,
cropped orthogonally, square-cornered, never inset with a border. Cool and
restrained: dusk exteriors, deep shadow, muted stone/oak/graphite, no saturation
push, no grain. Badges (Exclusivo, Arrendamento) sit top-left at 14px inset;
photo counts and tour links sit bottom-right. Every image position in the system
is an `<image-slot>` awaiting real photography.

**Motion.** `cubic-bezier(.22,.61,.36,1)`, no overshoot, no bounce. 140ms for
hover and focus colour, 220ms for card ground tint and overlays, 420ms for media
zoom. `prefers-reduced-motion` collapses everything.

**Hover states.** Colour and border only. Terracotta buttons go navy; outline
buttons take a navy border and a 5% navy ground; inverse outlines take an 8%
paper ground; nav items move from muted to full ink and gain a terracotta
underline; cards tint their ground; media zooms 1.03. No opacity fades, no
scale-up on controls.

**Press states.** No transform — the colour change is the feedback. Selected and
focused fields take a solid navy 1px border.

**Focus.** A 3px terracotta ring offset by a 2px paper gap (`--focus-ring`).

**Layout.** 1280px max container, 840px narrow measure, 12 columns, 24px gap,
40px page gutters, 96px between sections. Screens are asymmetric two-column
splits: content left, a 420–480px rail right (map + off-market panel, visit
form, or hero copy against a photograph). The header is the only fixed element
(sticky, hairline bottom, navy on the homepage and paper on inner pages).

**Clearspace.** Symbol: 1/6 of its own bounding area. Full lockup: the width of
the letter B on all four sides (`--clearspace-symbol`, `--clearspace-lockup`).

**Pattern (Padrão).** The manual specifies a modular interwoven line-work motif
generated from the symbol's own paths. **Not implemented** — it cannot be built
without the symbol artwork, and the approved mock-up does not use it. Do not
substitute a generic geometric pattern.

## ICONOGRAPHY

The brand sources define **no icon system**: the manual covers logo, colour,
type, clearspace, misuse, slogan, pattern and stationery, and contains no glyph
set, icon font or pictogram page. Nothing was available to copy in.

**Substitution (flagged):** **Lucide** via CDN
(`https://unpkg.com/lucide-static@0.544.0/icons/<name>.svg`), consumed through
the `Icon` component, which masks the SVG so the glyph inherits `currentColor`.
Lucide was chosen for its thin, geometric, open-terminal line style — the
closest available match to the brand's structural minimalism. Its default 2px
stroke is slightly heavier than ideal; if you supply a real icon set, swap the
CDN base in `components/icon/Icon.jsx` and nothing else changes.

- **Rules:** line icons only, never filled, never two-tone, never coloured
  independently of their text. Sizes are 16 / 20 / 24 px only. Icons accompany
  labels; icon-only controls must use `IconButton` with a `label`, wrapped in a
  `Tooltip` where the meaning isn't obvious.
- **House glyph set:** arrow-right, arrow-up-right, arrow-left, plus, minus, x,
  check, chevron-down, chevron-right, search, menu, mail, phone, map-pin, ruler,
  building-2, sofa, hard-hat, globe, download, calendar, user, external-link,
  info, circle-alert, triangle-alert.
- **Emoji: never.** **Unicode as iconography:** only the middot separator, the
  services pipe and × in dimensions.
- **No hand-drawn SVG.** Nothing in this system contains an illustration or
  pictogram authored here.

---

## INDEX

**Root**
- `styles.css` — the single entry point consumers link. `@import` list only.
- `readme.md` — this file.
- `SKILL.md` — Agent Skills front-matter for use in Claude Code.
- `thumbnail.html` — homepage tile.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`,
`radius.css`, `elevation.css`, `motion.css`, `base.css`.

**`guidelines/`** — 22 specimen cards feeding the Design System tab:
Colors (brand primitives, foil gold, paper, ink, semantic surfaces, semantic
text, status), Type (display, heading, body, labels, script, substitution
notice), Spacing (scale, layout & grid, section rhythm), Surfaces (radius &
borders, elevation & focus, motion), Brand (área de proteção, signature block,
usos incorretos).

**`components/`** — 21 primitives, each with `.jsx`, `.d.ts`, `.prompt.md` and one
`@dsCard` per directory:
- `brand/` — **Logotype**, **Eyebrow**, **Meta**, **Slogan**
- `icon/` — **Icon**
- `actions/` — **Button**, **IconButton**
- `forms/` — **Field**, **Input**, **Select**, **Checkbox**, **Radio**, **Switch**
- `surfaces/` — **RuleGrid**, **Card**, **Dialog**
- `data/` — **Badge**, **Tag**
- `navigation/` — **Tabs**
- `feedback/` — **Toast**, **Tooltip**

*Intentional additions* — the mock-up defines screens, not a component
inventory, so the families were derived from it: **RuleGrid** encodes the 1px
rule-divided grid used on every screen; **Meta** encodes the mono metadata voice
that appears dozens of times per page; **Logotype**, **Eyebrow** and **Slogan**
encode brand rules that would otherwise be re-derived; **Icon** wraps the
substituted glyph set so it can be swapped in one place; **Field** exists because
the mono label treatment is shared by every control.

**`ui_kits/website/`** — public site kit recreating the approved mock-up:
`index.html` click-through plus `chrome.view.js`, `home.view.js`,
`realestate.view.js`, `property.view.js`, `construction.view.js`,
`interiors.view.js`, `contact.view.js`.

**`slides/`** — seven 1280×720 slide types derived from the presentation:
cover, section divider, statement, three columns, image split, palette, closing.

**`templates/presentation/`** — `Presentation.dc.html`, a seven-slide deck
starting point consuming projects can copy (plus `ds-base.js`, which points at
this system's stylesheet and bundle).

**`assets/`** — `image-slot.js` and a manifest of the brand artwork still needed.

**`uploads/`** — the original source PDFs, kept for reference.
