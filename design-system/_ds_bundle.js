/* @ds-bundle: {"format":4,"namespace":"BarbeitosGroupDesignSystem_b431cc","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"Logotype","sourcePath":"components/brand/Logotype.jsx"},{"name":"Meta","sourcePath":"components/brand/Meta.jsx"},{"name":"Slogan","sourcePath":"components/brand/Slogan.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"Tag","sourcePath":"components/data/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Icon","sourcePath":"components/icon/Icon.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Dialog","sourcePath":"components/surfaces/Dialog.jsx"},{"name":"RuleGrid","sourcePath":"components/surfaces/RuleGrid.jsx"}],"sourceHashes":{"assets/image-slot.js":"fff26d081c8d","components/actions/Button.jsx":"cee1bf49c74d","components/actions/IconButton.jsx":"84c388355401","components/brand/Eyebrow.jsx":"fbb4e4741900","components/brand/Logotype.jsx":"1e3ad8766192","components/brand/Meta.jsx":"e86cfb1a77ff","components/brand/Slogan.jsx":"372c498b6aaa","components/data/Badge.jsx":"89ea38d94d93","components/data/Tag.jsx":"3a2ee1e32fff","components/feedback/Toast.jsx":"111cb19b75de","components/feedback/Tooltip.jsx":"97a35f885541","components/forms/Checkbox.jsx":"8b104cb45ccd","components/forms/Field.jsx":"02573941ad1a","components/forms/Input.jsx":"c84238511d55","components/forms/Radio.jsx":"92a64ff7c5a1","components/forms/Select.jsx":"93dac0d99dae","components/forms/Switch.jsx":"542101009151","components/icon/Icon.jsx":"6e85d9ba7db8","components/navigation/Tabs.jsx":"991cdc706c6e","components/surfaces/Card.jsx":"383ef634cd13","components/surfaces/Dialog.jsx":"cc14b6772f75","components/surfaces/RuleGrid.jsx":"4b56ac32760b","ui_kits/website/chrome.view.js":"9d4ecd30e34f","ui_kits/website/construction.view.js":"2ec69cdf6dec","ui_kits/website/contact.view.js":"83c185ad1689","ui_kits/website/home.view.js":"986b538e91fe","ui_kits/website/interiors.view.js":"7bbaef27b78d","ui_kits/website/property.view.js":"f8f1914225b0","ui_kits/website/realestate.view.js":"dfb7b3cb008e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BarbeitosGroupDesignSystem_b431cc = window.BarbeitosGroupDesignSystem_b431cc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/image-slot.js", error: String((e && e.message) || e) }); }

// components/brand/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  tone = 'accent',
  tick = false,
  as: Tag = 'span',
  ...rest
}) {
  const ink = {
    accent: 'var(--text-accent)',
    light: 'var(--text-accent-light)',
    muted: 'var(--text-muted)',
    inverse: 'var(--text-inverse-faint)',
    gold: 'var(--text-gold)'
  }[tone] || 'var(--text-accent)';
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: ink,
      ...rest.style
    }
  }), tick && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '18px',
      height: '1px',
      background: 'currentColor',
      opacity: .6
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logotype.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The client supplied the real lockup as a white PNG (assets/logo-white.png)
   drawn for dark grounds only — no separate ink/navy file exists. On light
   (navy-tone) grounds the same asset is rendered through a CSS invert
   filter (white -> near-black) so the header stays visually consistent
   across every page instead of flipping back to the code-drawn mock. */
function Logotype({
  size = 15,
  tone = 'navy',
  division,
  symbol = true,
  descriptor = true,
  clearspace = false,
  as: Tag = 'div',
  ...rest
}) {
  const inverse = tone === 'inverse';
  const ink = inverse ? 'var(--text-inverse)' : 'var(--midnight-navy)';
  const faint = inverse ? 'var(--text-inverse-faint)' : 'var(--text-faint)';
  const rule = inverse ? 'var(--rule-inverse-strong)' : 'var(--rule-strong)';
  const box = Math.round(size * 2.1);
  if ((inverse || tone === 'navy') && symbol && descriptor && !division) {
    return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        padding: clearspace ? size * 1.6 + 'px' : 0,
        outline: clearspace ? '1px dashed ' + (inverse ? 'var(--rule-inverse)' : 'var(--rule)') : 'none',
        ...rest.style
      }
    }), /*#__PURE__*/React.createElement("img", {
      src: 'design-system/assets/logo-white.png',
      alt: 'Barbeitos Group',
      style: { height: Math.round(size * 2.3) + 'px', width: 'auto', display: 'block', filter: inverse ? undefined : 'invert(1)' }
    }));
  }
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: Math.round(size * 0.95) + 'px',
      padding: clearspace ? size * 1.6 + 'px' : 0,
      outline: clearspace ? '1px dashed var(--rule)' : 'none',
      ...rest.style
    }
  }), symbol && /*#__PURE__*/React.createElement("span", {
    style: {
      width: box + 'px',
      height: box + 'px',
      flex: '0 0 auto',
      border: '1px solid ' + rule,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--weight-regular) ' + Math.round(size * 0.66) + 'px/1 var(--font-mono)',
      color: faint
    }
  }, "B"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: Math.max(3, Math.round(size * 0.26)) + 'px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-display) ' + size + 'px/1 var(--font-display)',
      letterSpacing: 'var(--tracking-wordmark)',
      color: ink,
      whiteSpace: 'nowrap'
    }
  }, "BARBEITOS"), descriptor && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-regular) ' + Math.max(8, Math.round(size * 0.6)) + 'px/1 var(--font-mono)',
      letterSpacing: '.3em',
      color: faint,
      whiteSpace: 'nowrap',
      textTransform: 'uppercase'
    }
  }, division || 'G R O U P')));
}
Object.assign(__ds_scope, { Logotype });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logotype.jsx", error: String((e && e.message) || e) }); }

// components/brand/Meta.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The mono metadata voice: references, dimensions, prices in lists, counts,
   image captions, footer lines. Never used for sentences. */
function Meta({
  tone = 'muted',
  items,
  children,
  as: Tag = 'span',
  ...rest
}) {
  const ink = {
    muted: 'var(--text-muted)',
    faint: 'var(--text-faint)',
    strong: 'var(--midnight-navy)',
    accent: 'var(--text-accent)',
    light: 'var(--text-accent-light)',
    inverse: 'var(--text-inverse-faint)'
  }[tone] || 'var(--text-muted)';
  const style = {
    font: 'var(--type-mono)',
    letterSpacing: 'var(--tracking-mono)',
    color: ink,
    ...rest.style
  };
  if (items) {
    return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--space-5)',
        ...style
      }
    }), items.map((it, i) => /*#__PURE__*/React.createElement("span", {
      key: i
    }, it)));
  }
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    style: style
  }), children);
}
Object.assign(__ds_scope, { Meta });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Meta.jsx", error: String((e && e.message) || e) }); }

// components/brand/Slogan.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Zapfino is licensed exclusively to the slogan (Manual de Normas p.10, p.12).
   --font-script carries the Italianno substitute until Zapfino is supplied. */
function Slogan({
  text = 'Building Value. Creating Legacy.',
  size = 44,
  tone = 'onyx',
  align = 'left',
  rule = false,
  ...rest
}) {
  const ink = tone === 'inverse' ? 'var(--paper-050)' : tone === 'gold' ? 'var(--foil-gold)' : tone === 'navy' ? 'var(--midnight-navy)' : 'var(--onyx-black)';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      textAlign: align,
      ...rest.style
    }
  }), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: '56px',
      height: '1px',
      background: tone === 'inverse' ? 'var(--border-inverse)' : 'var(--foil-gold)',
      margin: align === 'center' ? '0 auto var(--space-6)' : '0 0 var(--space-6)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-script)',
      fontSize: size + 'px',
      lineHeight: 1.15,
      color: ink
    }
  }, text));
}
Object.assign(__ds_scope, { Slogan });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Slogan.jsx", error: String((e && e.message) || e) }); }

// components/data/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  exclusive: {
    bg: 'var(--terracotta-brown)',
    fg: 'var(--text-on-accent)'
  },
  navy: {
    bg: 'var(--midnight-navy)',
    fg: 'var(--text-inverse)'
  },
  neutral: {
    bg: 'var(--paper-100)',
    fg: 'var(--midnight-navy)'
  },
  outline: {
    bg: 'var(--paper-000)',
    fg: 'var(--midnight-navy)',
    bd: 'var(--rule-strong)'
  },
  success: {
    bg: 'var(--status-success-tint)',
    fg: 'var(--status-success)'
  },
  warning: {
    bg: 'var(--status-warning-tint)',
    fg: 'var(--status-warning)'
  },
  danger: {
    bg: 'var(--status-danger-tint)',
    fg: 'var(--status-danger)'
  }
};
function Badge({
  tone = 'neutral',
  dot = false,
  children,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: '6px 10px',
      background: t.bg,
      color: t.fg,
      border: '1px solid ' + (t.bd || 'transparent'),
      borderRadius: 0,
      font: 'var(--type-mono)',
      letterSpacing: 'var(--tracking-mono)',
      ...rest.style
    }
  }), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '5px',
      height: '5px',
      background: 'currentColor',
      borderRadius: '999px'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  placement = 'top',
  children,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%,-8px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%,8px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-8px,-50%)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(8px,-50%)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest, {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...rest.style
    }
  }), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 60,
      padding: '6px var(--space-3)',
      whiteSpace: 'nowrap',
      background: 'var(--onyx-black)',
      color: 'var(--paper-050)',
      font: 'var(--type-caption)',
      letterSpacing: '0.02em',
      opacity: open ? 1 : 0,
      pointerEvents: 'none',
      transition: 'opacity var(--duration-fast) var(--ease-standard)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  hint,
  error,
  required,
  htmlFor,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...rest.style
    }
  }), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      font: 'var(--type-mono)',
      letterSpacing: 'var(--tracking-mono)',
      color: 'var(--text-muted)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-accent)'
    }
  }, " *")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      letterSpacing: 'var(--tracking-mono)',
      color: error ? 'var(--status-danger)' : 'var(--text-faint)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const shell = (invalid, focused) => ({
  width: '100%',
  padding: '13px 14px',
  background: 'var(--paper-000)',
  border: '1px solid ' + (invalid ? 'var(--status-danger)' : focused ? 'var(--midnight-navy)' : 'var(--rule-strong)'),
  borderRadius: 0,
  font: 'var(--weight-light) var(--size-body) /1.5 var(--font-core)',
  color: 'var(--midnight-navy)',
  outline: 'none',
  transition: 'var(--transition-control)'
});
function Input({
  invalid = false,
  multiline = false,
  rows = 4,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    rows: multiline ? rows : undefined,
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest, {
    style: {
      ...shell(invalid, focused),
      resize: multiline ? 'vertical' : undefined,
      ...rest.style
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  direction = 'column',
  disabled,
  ...rest
}) {
  const [inner, setInner] = React.useState(defaultValue);
  const current = value === undefined ? inner : value;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup"
  }, rest, {
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 'var(--space-6)' : 'var(--space-3)',
      ...rest.style
    }
  }), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    const on = current === v;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        font: 'var(--type-body-sm)',
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      value: v,
      checked: on,
      disabled: disabled,
      onChange: e => {
        if (value === undefined) setInner(v);
        onChange && onChange(e);
      },
      style: {
        position: 'absolute',
        opacity: 0,
        width: 0,
        height: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: '18px',
        height: '18px',
        flex: '0 0 auto',
        borderRadius: '999px',
        border: 'var(--border-width-hairline) solid ' + (on ? 'var(--onyx-black)' : 'var(--border-strong)'),
        boxShadow: on ? 'inset 0 0 0 4px var(--surface-raised), inset 0 0 0 10px var(--onyx-black)' : 'none',
        transition: 'var(--transition-control)'
      }
    }), /*#__PURE__*/React.createElement("span", null, l));
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  defaultChecked,
  disabled,
  onChange,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked === undefined ? inner : checked;
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)',
      ...rest.style
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (checked === undefined) setInner(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: '40px',
      height: '20px',
      flex: '0 0 auto',
      background: on ? 'var(--midnight-navy)' : 'var(--paper-300)',
      border: 'var(--border-width-hairline) solid ' + (on ? 'var(--midnight-navy)' : 'var(--paper-400)'),
      transition: 'var(--transition-control)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '2px',
      left: on ? '22px' : '2px',
      width: '14px',
      height: '14px',
      background: 'var(--paper-000)',
      transition: 'left var(--duration-fast) var(--ease-standard)'
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/icon/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide (CDN) stands in for the brand's icon set — no icon assets were
   supplied in the sources. Glyphs are masked so they inherit currentColor. */
const CDN = 'https://unpkg.com/lucide-static@0.544.0/icons/';
function Icon({
  name,
  size = 20,
  stroke,
  label,
  ...rest
}) {
  const url = CDN + name + '.svg';
  return /*#__PURE__*/React.createElement("span", _extends({
    role: label ? 'img' : 'presentation',
    "aria-label": label,
    "aria-hidden": label ? undefined : true
  }, rest, {
    style: {
      display: 'inline-block',
      width: size + 'px',
      height: size + 'px',
      flex: '0 0 auto',
      background: stroke || 'currentColor',
      WebkitMaskImage: 'url(' + url + ')',
      maskImage: 'url(' + url + ')',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      ...rest.style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icon/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    py: 13,
    px: 22,
    font: '10.5px',
    icon: 13
  },
  md: {
    py: 15,
    px: 26,
    font: '11px',
    icon: 14
  },
  lg: {
    py: 18,
    px: 32,
    font: '11.5px',
    icon: 15
  }
};
const VARIANTS = {
  primary: {
    bg: 'var(--terracotta-brown)',
    fg: 'var(--text-on-accent)',
    bd: 'transparent',
    hbg: 'var(--midnight-navy)',
    hbd: 'transparent'
  },
  navy: {
    bg: 'var(--midnight-navy)',
    fg: 'var(--text-inverse)',
    bd: 'transparent',
    hbg: 'var(--navy-hover)',
    hbd: 'transparent'
  },
  secondary: {
    bg: 'transparent',
    fg: 'var(--midnight-navy)',
    bd: 'var(--rule-strong)',
    hbg: 'rgba(12,25,53,.05)',
    hbd: 'var(--midnight-navy)'
  },
  ghost: {
    bg: 'transparent',
    fg: 'var(--text-body)',
    bd: 'transparent',
    hbg: 'var(--surface-sunken)',
    hbd: 'transparent'
  },
  inverse: {
    bg: 'var(--paper-050)',
    fg: 'var(--midnight-navy)',
    bd: 'transparent',
    hbg: 'var(--terracotta-light)',
    hbd: 'transparent',
    hfg: 'var(--paper-050)'
  },
  'outline-inverse': {
    bg: 'transparent',
    fg: 'var(--text-inverse)',
    bd: 'var(--rule-inverse-strong)',
    hbg: 'rgba(244,241,236,.08)',
    hbd: 'var(--paper-050)',
    hfg: 'var(--text-inverse)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  disabled = false,
  as: Tag = 'button',
  children,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const [hover, setHover] = React.useState(false);
  const on = hover && !disabled;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    type: Tag === 'button' ? 'button' : undefined,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-3)',
      padding: s.py + 'px ' + s.px + 'px',
      border: '1px solid ' + (on ? v.hbd : v.bd),
      borderRadius: 0,
      background: on ? v.hbg : v.bg,
      color: on ? v.hfg || v.fg : v.fg,
      font: 'var(--weight-medium) ' + s.font + '/1 var(--font-core)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.38 : 1,
      transition: 'var(--transition-control)',
      textDecoration: 'none',
      ...rest.style
    }
  }), icon && iconPosition === 'left' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }), /*#__PURE__*/React.createElement("span", null, children), icon && iconPosition === 'right' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    box: 36,
    glyph: 15
  },
  md: {
    box: 44,
    glyph: 18
  },
  lg: {
    box: 52,
    glyph: 21
  }
};
function IconButton({
  icon,
  label,
  size = 'md',
  variant = 'ghost',
  disabled = false,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const on = hover && !disabled;
  const skin = {
    ghost: {
      bg: on ? 'var(--surface-sunken)' : 'transparent',
      fg: 'var(--text-body)',
      bd: 'transparent'
    },
    outline: {
      bg: on ? 'rgba(12,25,53,.05)' : 'transparent',
      fg: 'var(--midnight-navy)',
      bd: on ? 'var(--midnight-navy)' : 'var(--rule-strong)'
    },
    solid: {
      bg: on ? 'var(--midnight-navy)' : 'var(--terracotta-brown)',
      fg: 'var(--text-on-accent)',
      bd: 'transparent'
    },
    inverse: {
      bg: on ? 'rgba(244,241,236,.08)' : 'transparent',
      fg: 'var(--text-inverse)',
      bd: 'var(--rule-inverse-strong)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: s.box + 'px',
      height: s.box + 'px',
      border: '1px solid ' + skin.bd,
      borderRadius: 0,
      background: skin.bg,
      color: skin.fg,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.38 : 1,
      transition: 'var(--transition-control)',
      ...rest.style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.glyph
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  selected = false,
  onRemove,
  onClick,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const clickable = !!onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: '9px 14px',
      borderRadius: 0,
      border: '1px solid ' + (selected ? 'var(--terracotta-brown)' : 'var(--rule-strong)'),
      background: selected ? 'var(--terracotta-brown)' : clickable && hover ? 'rgba(12,25,53,.05)' : 'transparent',
      color: selected ? 'var(--text-on-accent)' : 'var(--text-muted)',
      font: 'var(--type-mono)',
      letterSpacing: 'var(--tracking-mono)',
      cursor: clickable ? 'pointer' : 'default',
      transition: 'var(--transition-control)',
      ...rest.style
    }
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: 'flex',
      border: 'none',
      background: 'none',
      padding: 0,
      color: 'inherit',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 11
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const GLYPH = {
  info: 'info',
  success: 'check',
  warning: 'triangle-alert',
  danger: 'circle-alert'
};
const ACCENT = {
  info: 'var(--midnight-navy)',
  success: 'var(--status-success)',
  warning: 'var(--status-warning)',
  danger: 'var(--status-danger)'
};
function Toast({
  tone = 'info',
  title,
  description,
  onDismiss,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status"
  }, rest, {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)',
      minWidth: '320px',
      maxWidth: '440px',
      padding: 'var(--space-4) var(--space-5)',
      background: 'var(--surface-raised)',
      borderLeft: 'var(--border-width-strong) solid ' + ACCENT[tone],
      border: 'var(--border-width-hairline) solid var(--border-hairline)',
      borderLeftWidth: 'var(--border-width-strong)',
      borderLeftColor: ACCENT[tone],
      boxShadow: 'var(--shadow-menu)',
      ...rest.style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: ACCENT[tone],
      display: 'flex',
      marginTop: '2px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: GLYPH[tone],
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-medium) var(--size-body-sm)/1.35 var(--font-core)',
      color: 'var(--text-strong)'
    }
  }, title), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, description)), onDismiss && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Dismiss",
    size: "sm",
    onClick: onDismiss
  }));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled,
  onChange,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const isOn = checked === undefined ? inner : checked;
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)',
      ...rest.style
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: isOn,
    disabled: disabled,
    onChange: e => {
      if (checked === undefined) setInner(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '18px',
      height: '18px',
      marginTop: '2px',
      flex: '0 0 auto',
      border: 'var(--border-width-hairline) solid ' + (isOn ? 'var(--onyx-black)' : 'var(--border-strong)'),
      background: isOn ? 'var(--onyx-black)' : 'transparent',
      color: 'var(--paper-050)',
      transition: 'var(--transition-control)'
    }
  }, isOn && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 12
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  placeholder,
  invalid = false,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest, {
    style: {
      width: '100%',
      padding: '13px 38px 13px 14px',
      appearance: 'none',
      background: 'var(--paper-000)',
      border: '1px solid ' + (invalid ? 'var(--status-danger)' : focused ? 'var(--midnight-navy)' : 'var(--rule-strong)'),
      borderRadius: 0,
      font: 'var(--weight-light) var(--size-body)/1.5 var(--font-core)',
      color: 'var(--midnight-navy)',
      outline: 'none',
      transition: 'var(--transition-control)',
      ...rest.style
    }
  }), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '14px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--text-faint)',
      pointerEvents: 'none',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 14
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  tone = 'default',
  variant = 'underline',
  ...rest
}) {
  const first = typeof items[0] === 'string' ? items[0] : items[0] && items[0].value;
  const [inner, setInner] = React.useState(defaultValue ?? first);
  const current = value === undefined ? inner : value;
  const inverse = tone === 'inverse';
  const bare = variant === 'bare';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist"
  }, rest, {
    style: {
      display: 'flex',
      gap: bare ? 'var(--space-5)' : 'var(--space-8)',
      borderBottom: bare ? 'none' : '1px solid ' + (inverse ? 'var(--rule-inverse)' : 'var(--rule)'),
      ...rest.style
    }
  }), items.map(it => {
    const v = typeof it === 'string' ? it : it.value;
    const l = typeof it === 'string' ? it : it.label;
    const on = current === v;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      type: "button",
      onClick: () => {
        if (value === undefined) setInner(v);
        onChange && onChange(v);
      },
      style: {
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        padding: bare ? '0 0 3px' : '0 0 var(--space-4)',
        font: 'var(--type-mono)',
        letterSpacing: 'var(--tracking-mono)',
        color: on ? inverse ? 'var(--text-inverse)' : 'var(--midnight-navy)' : inverse ? 'var(--text-inverse-faint)' : 'var(--text-faint)',
        borderBottom: on ? '1px solid ' + (inverse ? 'var(--terracotta-light)' : 'var(--terracotta-brown)') : '1px solid transparent',
        transition: 'var(--transition-control)'
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  paper: {
    bg: 'var(--surface-card)',
    head: 'var(--text-display)',
    body: 'var(--text-body)',
    rule: 'var(--rule)',
    hover: 'var(--paper-100)'
  },
  raised: {
    bg: 'var(--paper-000)',
    head: 'var(--text-display)',
    body: 'var(--text-body)',
    rule: 'var(--rule)',
    hover: 'var(--paper-050)'
  },
  sunken: {
    bg: 'var(--surface-sunken)',
    head: 'var(--text-display)',
    body: 'var(--text-body)',
    rule: 'var(--rule)',
    hover: 'var(--paper-200)'
  },
  navy: {
    bg: 'var(--midnight-navy)',
    head: 'var(--text-inverse)',
    body: 'var(--text-inverse-muted)',
    rule: 'var(--rule-inverse)',
    hover: '#16244a'
  },
  graphite: {
    bg: 'var(--surface-graphite)',
    head: 'var(--text-inverse)',
    body: 'var(--text-inverse-muted)',
    rule: 'var(--rule-inverse)',
    hover: '#3e3e3e'
  },
  terracotta: {
    bg: 'var(--terracotta-brown)',
    head: 'var(--text-inverse)',
    body: 'rgba(244,241,236,.78)',
    rule: 'var(--rule-inverse)',
    hover: '#5a3532'
  }
};
function Card({
  eyebrow,
  title,
  meta,
  media,
  tone = 'paper',
  interactive = false,
  bordered = false,
  padding = 'var(--space-6) var(--space-6) var(--space-7)',
  footer,
  children,
  as: Tag = 'div',
  ...rest
}) {
  const t = TONES[tone] || TONES.paper;
  const [hover, setHover] = React.useState(false);
  const lift = interactive && hover;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: interactive ? () => setHover(true) : undefined,
    onMouseLeave: interactive ? () => setHover(false) : undefined
  }, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: lift ? t.hover : t.bg,
      border: bordered ? '1px solid ' + t.rule : 'none',
      borderRadius: 0,
      boxShadow: 'none',
      cursor: interactive ? 'pointer' : undefined,
      transition: 'background-color var(--duration-base) var(--ease-standard)',
      textDecoration: 'none',
      ...rest.style
    }
  }), media && /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: lift ? 'scale(1.03)' : 'scale(1)',
      transition: 'transform var(--duration-slow) var(--ease-standard)'
    }
  }, media)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      flex: 1
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: tone === 'paper' || tone === 'raised' || tone === 'sunken' ? 'accent' : 'inverse',
    style: {
      marginBottom: 'var(--space-2)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-heading-2)',
      color: t.head,
      margin: 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: t.body,
      marginTop: 'var(--space-2)'
    }
  }, children), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Meta, {
    tone: tone === 'paper' || tone === 'raised' || tone === 'sunken' ? 'muted' : 'inverse'
  }, meta))), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4) var(--space-6) var(--space-5)',
      borderTop: '1px solid ' + t.rule,
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--space-4)'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Dialog.jsx
try { (() => {
function Dialog({
  open = false,
  title,
  description,
  onClose,
  footer,
  width = 520,
  children
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 90,
      background: 'var(--scrim-overlay)',
      backdropFilter: 'var(--blur-veil)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)',
      animation: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width + 'px',
      background: 'var(--surface-raised)',
      border: 'var(--border-width-hairline) solid var(--border-hairline)',
      borderRadius: 'var(--radius-none)',
      boxShadow: 'var(--shadow-overlay)',
      padding: 'var(--space-10)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-heading-1)',
      margin: 0
    }
  }, title), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    size: "sm",
    onClick: onClose
  })), description && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      maxWidth: '52ch'
    }
  }, description), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      justifyContent: 'flex-end',
      paddingTop: 'var(--space-2)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/RuleGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The signature layout device: cells separated by 1px rules rather than gaps,
   achieved with a 1px grid gap over a rule-coloured ground. */
function RuleGrid({
  columns = 3,
  template,
  tone = 'paper',
  bordered = true,
  children,
  ...rest
}) {
  const cellBg = {
    paper: 'var(--surface-card)',
    raised: 'var(--paper-000)',
    sunken: 'var(--surface-sunken)',
    navy: 'var(--midnight-navy)',
    graphite: 'var(--surface-graphite)'
  }[tone] || 'var(--surface-card)';
  const ruleColor = tone === 'navy' || tone === 'graphite' ? 'var(--rule-inverse)' : 'var(--rule)';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'grid',
      gridTemplateColumns: template || 'repeat(' + columns + ',minmax(0,1fr))',
      gap: '1px',
      background: ruleColor,
      border: bordered ? '1px solid ' + ruleColor : 'none',
      ...rest.style
    }
  }), React.Children.map(children, (child, i) => child ? /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: cellBg,
      minWidth: 0
    }
  }, child) : null));
}
Object.assign(__ds_scope, { RuleGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/RuleGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/chrome.view.js
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Logotype,
  Eyebrow,
  Meta,
  Button,
  Icon,
  RuleGrid
} = window.BarbeitosGroupDesignSystem_b431cc;
const NAV = [{
  id: 'realestate',
  label: 'Imobiliário'
}, {
  id: 'construction',
  label: 'Construção'
}, {
  id: 'interiors',
  label: 'Interiores'
}, {
  id: 'home',
  label: 'Grupo'
}];
function Slot({
  id,
  label,
  height,
  ratio,
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: height ? height : undefined,
      aspectRatio: ratio,
      width: '100%',
      background: dark ? 'rgba(244,241,236,.045)' : 'var(--paper-100)'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: id,
    shape: "rect",
    fit: "cover",
    placeholder: label
  }));
}
function Header({
  route,
  onNavigate,
  lang,
  onLang,
  tone = 'dark'
}) {
  const inverse = tone !== 'paper';
  const active = id => route === id || id === 'realestate' && route === 'property';
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: inverse ? 'var(--division-group)' : 'var(--surface-page)',
      borderBottom: '1px solid ' + (inverse ? 'var(--rule-inverse)' : 'var(--rule)'),
      position: 'sticky',
      top: 0,
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-8)',
      padding: '20px var(--gutter-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onNavigate('home'),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Logotype, {
    size: 16,
    tone: inverse ? 'inverse' : 'navy'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-8)'
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    type: "button",
    onClick: () => onNavigate(n.id),
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: '0 0 3px',
      font: 'var(--type-label)',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: active(n.id) ? inverse ? 'var(--text-inverse)' : 'var(--midnight-navy)' : inverse ? 'var(--text-inverse-muted)' : 'var(--text-muted)',
      borderBottom: '1px solid ' + (active(n.id) ? 'var(--terracotta-light)' : 'transparent'),
      transition: 'var(--transition-control)'
    }
  }, n.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '1px',
      height: '14px',
      background: inverse ? 'var(--rule-inverse-strong)' : 'var(--rule)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '6px'
    }
  }, ['PT', 'EN'].map((l, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: l
  }, i === 1 && /*#__PURE__*/React.createElement(Meta, {
    tone: inverse ? 'inverse' : 'faint'
  }, "/"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onLang(l),
    style: {
      border: 'none',
      background: 'none',
      padding: 0,
      cursor: 'pointer',
      font: 'var(--type-mono)',
      letterSpacing: 'var(--tracking-mono)',
      color: lang === l ? inverse ? 'var(--text-inverse)' : 'var(--midnight-navy)' : inverse ? 'var(--text-inverse-faint)' : 'var(--text-faint)'
    }
  }, l)))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: inverse ? 'primary' : 'navy',
    onClick: () => onNavigate('contact')
  }, "Contacto privado"))));
}
function Footer({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--division-group)',
      color: 'var(--text-inverse-muted)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      gap: 'var(--space-12)',
      padding: 'var(--space-16) var(--gutter-page) var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Logotype, {
    size: 17,
    tone: "inverse"
  }), /*#__PURE__*/React.createElement(Meta, {
    tone: "inverse"
  }, "Braga \xB7 Lisboa \xB7 Cascais")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "\xC1reas"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-4)'
    }
  }, NAV.slice(0, 3).map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    type: "button",
    onClick: () => onNavigate(n.id),
    style: {
      border: 'none',
      background: 'none',
      padding: 0,
      textAlign: 'left',
      cursor: 'pointer',
      font: 'var(--type-body-sm)',
      color: 'var(--text-inverse-muted)'
    }
  }, n.label)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "Contacto"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-4)',
      font: 'var(--type-body-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 13
  }), " info@barbeitosgroup.pt"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 13
  }), " +351 21 000 0000"), /*#__PURE__*/React.createElement(Meta, {
    tone: "inverse"
  }, "Contactos indicativos"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "Acesso reservado"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      marginTop: 'var(--space-4)',
      marginBottom: 'var(--space-5)'
    }
  }, "Seis propriedades off-market, partilhadas por contacto direto."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-inverse",
    size: "sm",
    onClick: () => onNavigate('contact')
  }, "Pedir acesso"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: 'var(--space-6) var(--gutter-page)',
      borderTop: '1px solid var(--rule-inverse)'
    }
  }, /*#__PURE__*/React.createElement(Meta, {
    tone: "inverse"
  }, "\xA9 2026 Barbeitos Group"), /*#__PURE__*/React.createElement(Meta, {
    tone: "inverse"
  }, "Building your dreams")));
}
function Section({
  eyebrow,
  title,
  lead,
  tone = 'paper',
  action,
  children,
  ...rest
}) {
  const dark = tone === 'onyx' || tone === 'navy' || tone === 'graphite' || tone === 'terracotta';
  const bg = {
    paper: 'var(--surface-page)',
    sunken: 'var(--surface-sunken)',
    onyx: 'var(--division-group)',
    navy: 'var(--division-realestate)',
    graphite: 'var(--division-construction)',
    terracotta: 'var(--division-interiors)'
  }[tone];
  return /*#__PURE__*/React.createElement("section", _extends({}, rest, {
    style: {
      background: bg,
      color: dark ? 'var(--text-inverse-muted)' : 'var(--text-body)',
      padding: 'var(--section-y) var(--gutter-page)',
      ...rest.style
    }
  }), (eyebrow || title) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-10)',
      marginBottom: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-narrow)'
    }
  }, eyebrow && /*#__PURE__*/React.createElement(Eyebrow, {
    tone: dark ? 'light' : 'accent'
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-display-3)',
      color: dark ? 'var(--text-inverse)' : 'var(--text-display)',
      margin: 'var(--space-4) 0 0'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: dark ? 'var(--text-inverse-muted)' : 'var(--text-body)',
      maxWidth: '58ch',
      marginTop: 'var(--space-4)'
    }
  }, lead)), action), children);
}
Object.assign(window, {
  Header,
  Footer,
  Section,
  Slot,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/chrome.view.js", error: String((e && e.message) || e) }); }

// ui_kits/website/construction.view.js
try { (() => {
const {
  Eyebrow,
  Meta,
  Button,
  Tag,
  RuleGrid,
  Field,
  Input,
  Select
} = window.BarbeitosGroupDesignSystem_b431cc;
const SERVICES = [['01', 'Pintura', 'Interior e fachada, preparação de superfícies, tintas técnicas.', 'desde €9 / m²'], ['02', 'Isolamento', 'Térmico e acústico, ETICS, correção de pontes térmicas.', 'desde €34 / m²'], ['03', 'Eletricidade', 'Quadros, remodelação de rede, iluminação e domótica.', 'orçamento por visita'], ['04', 'Canalização', 'Redes de água e esgoto, louças, deteção de fugas.', 'orçamento por visita']];
const RECENT = [['Apartamento Estoril', 'Pintura integral · 6 dias · 2026'], ['Moradia Birre', 'Isolamento ETICS · 3 semanas · 2025'], ['Loja Chiado', 'Rede elétrica e iluminação · 2025']];
const STEPS = ['1 Serviço', '2 Detalhes', '3 Contacto'];
function Construction({
  onNavigate
}) {
  const [step, setStep] = React.useState(2);
  const [picked, setPicked] = React.useState(['Pintura interior']);
  const [start, setStart] = React.useState('1–3 meses');
  const toggle = s => setPicked(p => p.includes(s) ? p.filter(x => x !== s) : [...p, s]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      background: 'var(--surface-graphite)',
      color: 'var(--text-inverse-muted)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-16) var(--gutter-page)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "light"
  }, "Construction Company"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-display-2)',
      color: 'var(--text-inverse)',
      margin: 'var(--space-5) 0 var(--space-5)'
    }
  }, "A mesma exig\xEAncia", /*#__PURE__*/React.createElement("br", null), "em obras pequenas"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-inverse-muted)',
      maxWidth: '46ch',
      marginBottom: 'var(--space-8)'
    }
  }, "Pintura, isolamento, eletricidade e canaliza\xE7\xE3o executados pelas equipas que constroem os nossos empreendimentos. Or\xE7amento fixo em 48 horas, obra com acompanhamento e garantia escrita."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Pedir or\xE7amento"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-inverse"
  }, "Ver trabalhos"))), /*#__PURE__*/React.createElement(Slot, {
    id: "con-hero",
    label: "fotografia \u2014 equipa em obra",
    height: "100%",
    dark: true
  })), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Servi\xE7os"
  }, /*#__PURE__*/React.createElement(RuleGrid, {
    columns: 4
  }, SERVICES.map(([n, t, b, p]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      padding: 'var(--space-7) var(--space-6) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Meta, {
    tone: "accent"
  }, n), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-heading-3)',
      color: 'var(--text-display)',
      margin: 'var(--space-3) 0'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)'
    }
  }, b), /*#__PURE__*/React.createElement(Meta, {
    tone: "strong",
    style: {
      display: 'block',
      marginTop: 'var(--space-4)'
    }
  }, p))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.15fr) minmax(0,1fr)',
      gap: 'var(--space-12)',
      padding: '0 var(--gutter-page) var(--section-y)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Pedido de or\xE7amento \xB7 passo ", step, " de 3"), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--rule-strong)',
      background: 'var(--paper-000)',
      padding: 'var(--space-8)',
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(RuleGrid, {
    columns: 3,
    style: {
      marginBottom: 'var(--space-7)'
    }
  }, STEPS.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s,
    type: "button",
    onClick: () => setStep(i + 1),
    style: {
      border: 'none',
      cursor: 'pointer',
      padding: '12px 0',
      width: '100%',
      background: i + 1 <= step ? 'var(--midnight-navy)' : 'var(--surface-card)',
      color: i + 1 <= step ? 'var(--text-inverse)' : 'var(--text-faint)',
      font: 'var(--type-mono)',
      letterSpacing: 'var(--tracking-mono)'
    }
  }, s))), /*#__PURE__*/React.createElement(Meta, {
    style: {
      display: 'block',
      marginBottom: 'var(--space-3)'
    }
  }, "Servi\xE7o selecionado"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      marginBottom: 'var(--space-6)'
    }
  }, ['Pintura interior', 'Isolamento', 'Eletricidade', 'Canalização'].map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s,
    selected: picked.includes(s),
    onClick: () => toggle(s)
  }, picked.includes(s) ? s : '+ ' + s))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 'var(--space-4)',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "\xC1rea aproximada",
    htmlFor: "c-a"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-a",
    defaultValue: "85 m\xB2"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "C\xF3digo postal",
    htmlFor: "c-cp"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-cp",
    placeholder: "2750-000"
  }))), /*#__PURE__*/React.createElement(Meta, {
    style: {
      display: 'block',
      marginBottom: 'var(--space-2)'
    }
  }, "Quando pretende come\xE7ar"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      marginBottom: 'var(--space-6)'
    }
  }, ['Urgente', '1–3 meses', 'Sem data'].map(o => /*#__PURE__*/React.createElement("button", {
    key: o,
    type: "button",
    onClick: () => setStart(o),
    style: {
      flex: 1,
      padding: '12px 0',
      cursor: 'pointer',
      background: 'transparent',
      border: '1px solid ' + (start === o ? 'var(--midnight-navy)' : 'var(--rule-strong)'),
      font: 'var(--type-mono)',
      letterSpacing: 'var(--tracking-mono)',
      color: start === o ? 'var(--midnight-navy)' : 'var(--text-faint)'
    }
  }, o))), /*#__PURE__*/React.createElement(Meta, {
    style: {
      display: 'block',
      marginBottom: 'var(--space-2)'
    }
  }, "Fotografias do espa\xE7o (opcional)"), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px dashed var(--rule-strong)',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Slot, {
    id: "con-upload",
    label: "arraste imagens \xB7 at\xE9 6",
    height: "96px"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setStep(Math.min(3, step + 1))
  }, "Continuar"), /*#__PURE__*/React.createElement(Meta, null, "Estimativa indicativa: \u20AC760 \u2013 \u20AC1.020")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Trabalhos recentes"), /*#__PURE__*/React.createElement(RuleGrid, {
    columns: 1,
    style: {
      marginTop: 'var(--space-5)'
    }
  }, RECENT.map(([t, m]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      padding: 'var(--space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '110px',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Slot, {
    id: 'con-' + t.slice(0, 6),
    label: "obra",
    ratio: "4 / 3"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-heading-3)',
      color: 'var(--text-display)'
    }
  }, t), /*#__PURE__*/React.createElement(Meta, {
    style: {
      display: 'block',
      marginTop: 'var(--space-2)'
    }
  }, m))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--midnight-navy)',
      color: 'var(--text-inverse-muted)',
      padding: 'var(--space-7)',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-heading-3)',
      color: 'var(--text-inverse)',
      marginBottom: 'var(--space-3)'
    }
  }, "Obra grande em vista?"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      marginBottom: 'var(--space-5)'
    }
  }, "Remodela\xE7\xF5es completas e promo\xE7\xE3o passam pela equipa de empreendimentos."), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onNavigate('home'),
    style: {
      border: 'none',
      background: 'none',
      padding: 0,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Meta, {
    tone: "light"
  }, "Falar com o grupo \u2192"))))));
}
Object.assign(window, {
  Construction
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/construction.view.js", error: String((e && e.message) || e) }); }

// ui_kits/website/contact.view.js
try { (() => {
const {
  Eyebrow,
  Meta,
  Field,
  Input,
  Select,
  Checkbox,
  Radio,
  Button,
  Toast,
  Icon,
  RuleGrid
} = window.BarbeitosGroupDesignSystem_b431cc;
function Contact() {
  const [sent, setSent] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [touched, setTouched] = React.useState(false);
  const invalid = touched && !/.+@.+\..+/.test(email);
  return /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Contacto privado",
    title: "Falemos do seu projeto",
    lead: "Responda a algumas perguntas e a equipa certa do grupo entra em contacto."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr)',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setTouched(true);
      if (!invalid && email) setSent(true);
    },
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nome",
    htmlFor: "c-name"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-name",
    placeholder: "Nome completo"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Empresa",
    htmlFor: "c-co",
    hint: "Opcional"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-co",
    placeholder: "Family office, fundo, particular"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    htmlFor: "c-mail",
    required: true,
    error: invalid ? 'Introduza um email válido.' : undefined
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-mail",
    type: "email",
    value: email,
    invalid: invalid,
    onBlur: () => setTouched(true),
    onChange: e => setEmail(e.target.value),
    placeholder: "nome@empresa.com"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\xC1rea",
    htmlFor: "c-div"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "c-div",
    placeholder: "Selecione uma \xE1rea",
    options: ['Real Estate', 'Construction', 'Furniture & Interiors']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Projeto",
    htmlFor: "c-brief"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-brief",
    multiline: true,
    rows: 4,
    placeholder: "Localiza\xE7\xE3o, dimens\xE3o e calend\xE1rio previsto"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Idioma preferido"
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "c-lang",
    direction: "row",
    defaultValue: "PT-PT",
    options: ['PT-PT', 'EN']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Autorizo o contacto sobre este pedido.",
    defaultChecked: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit"
  }, "Enviar pedido"), /*#__PURE__*/React.createElement(Meta, null, "Resposta em 24 h.")), sent && /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Pedido enviado",
    description: "A equipa entra em contacto em 24 horas.",
    onDismiss: () => setSent(false)
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RuleGrid, {
    columns: 1
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Sede"), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-heading-2)',
      color: 'var(--text-display)',
      margin: 'var(--space-3) 0 var(--space-4)'
    }
  }, "Braga, Portugal"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      font: 'var(--type-body-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 14
  }), " info@barbeitosgroup.pt"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 14
  }), " +351 21 000 0000")), /*#__PURE__*/React.createElement(Meta, {
    style: {
      display: 'block',
      marginTop: 'var(--space-4)'
    }
  }, "Contactos indicativos \u2014 n\xE3o constam das fontes fornecidas.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\xC1reas"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-4)',
      font: 'var(--type-body-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Real Estate Development"), /*#__PURE__*/React.createElement("span", null, "Construction Company"), /*#__PURE__*/React.createElement("span", null, "Furniture & Interior Design")))))));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/contact.view.js", error: String((e && e.message) || e) }); }

// ui_kits/website/home.view.js
try { (() => {
const {
  Logotype,
  Eyebrow,
  Meta,
  Button,
  Card,
  Badge,
  RuleGrid,
  Icon
} = window.BarbeitosGroupDesignSystem_b431cc;
const BRANCHES = [{
  n: '01',
  route: 'realestate',
  title: 'Real Estate',
  body: 'Empreendimentos em exclusivo, arrendamento e imobiliário premium.',
  colour: 'var(--division-realestate)'
}, {
  n: '02',
  route: 'construction',
  title: 'Construction',
  body: 'Pinturas, isolamentos, eletricidade, canalização e remodelação parcial.',
  colour: 'var(--division-construction)'
}, {
  n: '03',
  route: 'interiors',
  title: 'Furniture & Interiors',
  body: 'Mobiliário desenhado à medida e projeto de interiores chave-na-mão.',
  colour: 'var(--division-interiors)'
}];
const PORTFOLIO_A = [{
  place: 'Cascais · Em exclusivo',
  name: 'Quinta da Marinha 14',
  meta: '4 suítes · 420 m² · piscina',
  price: '€3.850.000',
  badge: 'Exclusivo',
  tone: 'exclusive',
  h: 330
}, {
  place: 'Lisboa · Príncipe Real',
  name: 'Palacete Ferreira',
  meta: '3 suítes · 280 m² · pátio',
  price: '€2.140.000',
  h: 200
}, {
  place: 'Comporta · Arrendamento',
  name: 'Casa Sal',
  meta: '5 quartos · 310 m² · mobilada',
  price: '€6.500 / mês',
  badge: 'Arrendamento',
  tone: 'navy',
  h: 200
}];
const PORTFOLIO_B = [{
  place: 'Sintra · Penha Longa',
  name: 'Casa das Faias',
  meta: '4 quartos · 365 m² · jardim',
  price: '€1.690.000',
  h: 200
}, {
  place: 'Braga · Centro histórico',
  name: 'Edifício Sé',
  meta: '12 unidades · T1 a T3',
  price: 'desde €410.000',
  badge: 'Em construção',
  tone: 'neutral',
  h: 200
}, {
  place: 'Cascais · Birre',
  name: 'Villa Birre 6',
  meta: '5 suítes · 510 m² · court',
  price: '€4.600.000',
  badge: 'Exclusivo',
  tone: 'exclusive',
  h: 330
}];
const SERVICES = [['01', 'Pintura', 'Interior e fachada, preparação de superfícies, tintas técnicas.', 'desde €9 / m²'], ['02', 'Isolamento', 'Térmico e acústico, ETICS, correção de pontes térmicas.', 'desde €34 / m²'], ['03', 'Eletricidade', 'Quadros, remodelação de rede, iluminação e domótica.', 'orçamento por visita'], ['04', 'Canalização', 'Redes de água e esgoto, louças, deteção de fugas.', 'orçamento por visita']];
const ATELIER = [['01', 'Mobiliário à medida', 'Marcenaria própria em carvalho, nogueira, freixo e lacados.'], ['02', 'Projeto de interiores', 'Conceito, plantas, materiais e styling do espaço completo.'], ['03', 'Iluminação', 'Desenho de luz e peças em latão escurecido e vidro.'], ['04', 'Exterior', 'Teca, pedra e têxteis técnicos para pátios e terraços.']];
function Home({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--division-group)',
      color: 'var(--text-inverse)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 520px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '620px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-20)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: '460px',
      aspectRatio: '1 / 1'
    }
  }, /*#__PURE__*/React.createElement(Slot, {
    id: "home-mark",
    label: "log\xF3tipo do grupo \u2014 enviar SVG, vers\xE3o a branco",
    height: "100%",
    dark: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '1px solid var(--rule-inverse)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '300px'
    }
  }, /*#__PURE__*/React.createElement(Slot, {
    id: "home-founder",
    label: "retrato do fundador \u2014 enviar fotografia",
    height: "100%",
    dark: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-12) var(--gutter-page)',
      borderTop: '1px solid var(--rule-inverse)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      flex: 1,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "light"
  }, "Fundador \xB7 Barbeitos Group"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-inverse-muted)',
      maxWidth: '44ch'
    }
  }, "[Nome do fundador] construiu o grupo a partir da obra: primeiro a executar, depois a promover, hoje a assinar cada projeto do terreno ao \xFAltimo detalhe de interiores. \xC9 esse percurso \u2014 e a exig\xEAncia que dele resulta \u2014 que responde por cada empreendimento que leva o nome Barbeitos."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNavigate('realestate')
  }, "Ver empreendimentos"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-inverse",
    onClick: () => onNavigate('contact')
  }, "Falar com o fundador")), /*#__PURE__*/React.createElement(Meta, {
    tone: "inverse"
  }, "Nome e biografia por confirmar \u2014 texto indicativo.")))), /*#__PURE__*/React.createElement(RuleGrid, {
    columns: 3,
    bordered: false,
    style: {
      borderBottom: '1px solid var(--rule)'
    }
  }, BRANCHES.map(b => /*#__PURE__*/React.createElement("a", {
    key: b.n,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate(b.route);
    },
    style: {
      display: 'block',
      padding: 'var(--space-10) var(--space-10) var(--space-8)',
      textDecoration: 'none',
      borderTop: '2px solid ' + b.colour
    }
  }, /*#__PURE__*/React.createElement(Meta, {
    tone: "accent"
  }, b.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-heading-2)',
      color: 'var(--text-display)',
      margin: 'var(--space-4) 0 var(--space-3)'
    }
  }, b.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)',
      maxWidth: '34ch'
    }
  }, b.body)))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "01 \u2014 Portf\xF3lio em exclusivo",
    title: "Empreendimentos selecionados",
    action: /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => onNavigate('realestate'),
      style: {
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        padding: 0
      }
    }, /*#__PURE__*/React.createElement(Meta, {
      tone: "accent"
    }, "Ver todos (18) \u2192"))
  }, /*#__PURE__*/React.createElement(RuleGrid, {
    template: "2fr 1fr 1fr"
  }, PORTFOLIO_A.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    interactive: true,
    onClick: () => onNavigate('property'),
    media: /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(Slot, {
      id: 'home-' + p.name.slice(0, 6),
      label: "render \xB7 fachada principal",
      height: p.h + 'px'
    }), p.badge && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: '14px',
        left: '14px'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: p.tone
    }, p.badge))),
    eyebrow: p.place,
    title: p.name,
    meta: p.meta,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-heading-3)',
        color: 'var(--text-display)'
      }
    }, p.price), /*#__PURE__*/React.createElement(Meta, {
      tone: "accent"
    }, "Detalhe \u2192"))
  }))), /*#__PURE__*/React.createElement(RuleGrid, {
    template: "1fr 1fr 2fr",
    style: {
      borderTop: 'none'
    }
  }, PORTFOLIO_B.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    interactive: true,
    onClick: () => onNavigate('property'),
    media: /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(Slot, {
      id: 'home-' + p.name.slice(0, 6),
      label: "render \xB7 fachada principal",
      height: p.h + 'px'
    }), p.badge && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: '14px',
        left: '14px'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: p.tone
    }, p.badge))),
    eyebrow: p.place,
    title: p.name,
    meta: p.meta,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-heading-3)',
        color: 'var(--text-display)'
      }
    }, p.price), /*#__PURE__*/React.createElement(Meta, {
      tone: "accent"
    }, "Detalhe \u2192"))
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "graphite",
    eyebrow: "02 \u2014 Construction Company",
    title: "A mesma exig\xEAncia em obras pequenas",
    lead: "Pintura, isolamento, eletricidade e canaliza\xE7\xE3o executados pelas equipas que constroem os nossos empreendimentos. Or\xE7amento fixo em 48 horas.",
    action: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: () => onNavigate('construction')
    }, "Pedir or\xE7amento"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline-inverse",
      onClick: () => onNavigate('construction')
    }, "Ver trabalhos"))
  }, /*#__PURE__*/React.createElement(RuleGrid, {
    columns: 4,
    tone: "graphite"
  }, SERVICES.map(([n, t, b, p]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      padding: 'var(--space-7) var(--space-6) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Meta, {
    tone: "light"
  }, n), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-heading-3)',
      color: 'var(--text-inverse)',
      margin: 'var(--space-3) 0 var(--space-3)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-inverse-muted)'
    }
  }, b), /*#__PURE__*/React.createElement(Meta, {
    tone: "inverse",
    style: {
      display: 'block',
      marginTop: 'var(--space-4)'
    }
  }, p))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Slot, {
    id: "home-interiors",
    label: "fotografia \u2014 interior assinado pelo atelier",
    height: "440px"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--gutter-page)',
      bottom: '-56px',
      width: '520px',
      background: 'var(--terracotta-brown)',
      color: 'var(--text-inverse)',
      padding: 'var(--space-10) var(--space-10) var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "03 \u2014 Furniture & Interior Design"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-display-3)',
      color: 'var(--text-inverse)',
      margin: 'var(--space-4) 0 var(--space-4)'
    }
  }, "Pe\xE7as desenhadas", /*#__PURE__*/React.createElement("br", null), "para um s\xF3 lugar"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'rgba(244,241,236,.78)'
    }
  }, "Do levantamento ao assentamento, mobili\xE1rio produzido \xE0 medida e projeto de interiores completo, coordenado com a obra."))), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 'var(--space-32)'
    },
    action: /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => onNavigate('interiors'),
      style: {
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        padding: 0
      }
    }, /*#__PURE__*/React.createElement(Meta, {
      tone: "accent"
    }, "Ver o atelier \u2192")),
    title: "O que o atelier faz"
  }, /*#__PURE__*/React.createElement(RuleGrid, {
    columns: 4
  }, ATELIER.map(([n, t, b]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    onClick: () => onNavigate('interiors'),
    style: {
      padding: 'var(--space-7) var(--space-6) var(--space-8)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Meta, {
    tone: "accent"
  }, n), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-heading-3)',
      color: 'var(--text-display)',
      margin: 'var(--space-3) 0'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)'
    }
  }, b)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--division-group)',
      color: 'var(--text-inverse-muted)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 'var(--space-16)',
      alignItems: 'center',
      padding: 'var(--space-20) var(--gutter-page)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "O s\xEDmbolo"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-heading-1)',
      color: 'var(--text-inverse)',
      margin: 'var(--space-4) 0 var(--space-5)'
    }
  }, "Tr\xEAs \u201CB\u201D interligados,", /*#__PURE__*/React.createElement("br", null), "tr\xEAs \xE1reas, um ecossistema"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-inverse-muted)',
      maxWidth: '48ch'
    }
  }, "A composi\xE7\xE3o do s\xEDmbolo \xE9 formada pela repeti\xE7\xE3o e interliga\xE7\xE3o de tr\xEAs letras \u201CB\u201D, representando a uni\xE3o e a complementaridade das tr\xEAs \xE1reas que integram o grupo.")), /*#__PURE__*/React.createElement(Slot, {
    id: "home-symbol",
    label: "s\xEDmbolo em vetor \u2014 enviar SVG",
    height: "230px",
    dark: true
  })));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/home.view.js", error: String((e && e.message) || e) }); }

// ui_kits/website/interiors.view.js
try { (() => {
const {
  Eyebrow,
  Meta,
  Button,
  Tabs,
  RuleGrid
} = window.BarbeitosGroupDesignSystem_b431cc;
const PIECES = [['Mesa Sal', 'carvalho maciço · 240 cm', 'Sala'], ['Cadeira Birre', 'nogueira e couro', 'Sala'], ['Sala Marinha', 'projeto completo · 92 m²', 'Sala'], ['Candeeiro Onyx', 'latão escurecido', 'Iluminação'], ['Suite Faias', 'freixo e linho · projeto completo', 'Quarto'], ['Terraço Comporta', 'teca e pedra · 40 m²', 'Exterior']];
const PROCESS = [['01', 'Levantamento e briefing', 'visita ao espaço, medições, orçamento-quadro'], ['02', 'Conceito e materiais', 'moodboard, plantas, amostras físicas'], ['03', 'Produção à medida', 'marcenaria própria, 6 a 10 semanas'], ['04', 'Montagem e entrega', 'coordenação com a obra, styling final']];
function Interiors({
  onNavigate
}) {
  const [filter, setFilter] = React.useState('Todas');
  const list = PIECES.filter(p => filter === 'Todas' || p[2] === filter);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(Slot, {
    id: "int-hero",
    label: "fotografia \u2014 interior assinado pelo atelier",
    height: "460px"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--gutter-page)',
      bottom: '-64px',
      width: '520px',
      background: 'var(--terracotta-brown)',
      color: 'var(--text-inverse)',
      padding: 'var(--space-10) var(--space-10) var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "Furniture & Interior Design"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-display-3)',
      color: 'var(--text-inverse)',
      margin: 'var(--space-4) 0 var(--space-4)'
    }
  }, "Pe\xE7as desenhadas", /*#__PURE__*/React.createElement("br", null), "para um s\xF3 lugar"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'rgba(244,241,236,.78)'
    }
  }, "Do levantamento ao assentamento, mobili\xE1rio produzido \xE0 medida e projeto de interiores completo, coordenado com a obra."))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-32) var(--gutter-page) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-display-3)'
    }
  }, "Pe\xE7as e espa\xE7os"), /*#__PURE__*/React.createElement(Tabs, {
    variant: "bare",
    items: ['Todas', 'Sala', 'Quarto', 'Exterior', 'Iluminação'],
    value: filter,
    onChange: setFilter
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gap: 'var(--space-6)'
    }
  }, list.map(([n, d]) => /*#__PURE__*/React.createElement("div", {
    key: n
  }, /*#__PURE__*/React.createElement(Slot, {
    id: 'int-' + n.slice(0, 6),
    label: "pe\xE7a ou espa\xE7o \xB7 atelier",
    ratio: "4 / 5"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-heading-3)',
      color: 'var(--text-display)',
      margin: 'var(--space-4) 0 var(--space-2)'
    }
  }, n), /*#__PURE__*/React.createElement(Meta, null, d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--gutter-page) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement(RuleGrid, {
    columns: 2
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Projeto de interiores"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, PROCESS.map(([n, t, b], i) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      padding: 'var(--space-4) 0',
      borderBottom: i < 3 ? '1px solid var(--rule)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(Meta, {
    tone: "accent",
    style: {
      width: '26px',
      flex: '0 0 auto'
    }
  }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-medium) var(--size-body) /1.4 var(--font-core)',
      color: 'var(--text-display)'
    }
  }, t), /*#__PURE__*/React.createElement(Meta, {
    style: {
      display: 'block',
      marginTop: '6px'
    }
  }, b))))), /*#__PURE__*/React.createElement(Button, {
    style: {
      marginTop: 'var(--space-7)'
    },
    onClick: () => onNavigate('contact')
  }, "Marcar reuni\xE3o no atelier")), /*#__PURE__*/React.createElement(Slot, {
    id: "int-materials",
    label: "amostras de materiais \u2014 madeira, pedra, tecido",
    height: "100%"
  }))));
}
Object.assign(window, {
  Interiors
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/interiors.view.js", error: String((e && e.message) || e) }); }

// ui_kits/website/property.view.js
try { (() => {
const {
  Eyebrow,
  Meta,
  Button,
  Badge,
  RuleGrid,
  Field,
  Input,
  Icon,
  Tabs
} = window.BarbeitosGroupDesignSystem_b431cc;
const SPECS = [['Área bruta', '420 m²'], ['Lote', '1.100 m²'], ['Suítes', '4'], ['Energia', 'A+']];
const BY_GROUP = [['01 Real Estate', 'Promoção e mediação em exclusivo'], ['02 Construction', 'Execução integral, garantia de 10 anos'], ['03 Interiors', 'Mobiliário à medida, entrega chave-na-mão']];
const DATES = ['8 set', '9 set', '11 set'];
function Property({
  onNavigate
}) {
  const [date, setDate] = React.useState('8 set');
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--space-4) var(--gutter-page)',
      background: 'var(--surface-page)',
      borderBottom: '1px solid var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onNavigate('realestate'),
    style: {
      border: 'none',
      background: 'none',
      padding: 0,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Meta, {
    tone: "strong"
  }, "\u2190 Portf\xF3lio")), /*#__PURE__*/React.createElement(Meta, null, "Ref. BG-1042")), /*#__PURE__*/React.createElement(RuleGrid, {
    template: "2fr 1fr"
  }, /*#__PURE__*/React.createElement(Slot, {
    id: "pd-hero",
    label: "galeria principal \u2014 sala com vista",
    height: "520px"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: '1fr 1fr',
      gap: '1px',
      background: 'var(--rule)',
      height: '520px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement(Slot, {
    id: "pd-2",
    label: "cozinha",
    height: "100%"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Slot, {
    id: "pd-3",
    label: "piscina",
    height: "100%"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '16px',
      bottom: '16px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, "+ 24 fotografias \xB7 tour 3D"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 420px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-12) var(--gutter-page) var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Cascais \xB7 Quinta da Marinha \xB7 Em exclusivo"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-display-2)',
      margin: 'var(--space-4) 0 var(--space-2)'
    }
  }, "Villa Marinha 14"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-heading-1)',
      color: 'var(--text-accent)',
      marginBottom: 'var(--space-8)'
    }
  }, "\u20AC3.850.000"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      maxWidth: '62ch',
      marginBottom: 'var(--space-10)'
    }
  }, "Moradia isolada em lote de 1.100 m\xB2, a quatro minutos do mar. Constru\xE7\xE3o de 2024 executada pela Barbeitos Construction, com interiores e mobili\xE1rio desenhados pelo atelier do grupo. Sistema de climatiza\xE7\xE3o geot\xE9rmica, certifica\xE7\xE3o energ\xE9tica A+."), /*#__PURE__*/React.createElement(RuleGrid, {
    columns: 4,
    style: {
      marginBottom: 'var(--space-12)'
    }
  }, SPECS.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      padding: 'var(--space-6) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Meta, null, k), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-heading-2)',
      color: 'var(--text-display)',
      marginTop: 'var(--space-2)'
    }
  }, v)))), /*#__PURE__*/React.createElement(Eyebrow, null, "Planta"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'var(--space-5) 0 var(--space-12)',
      border: '1px solid var(--rule)'
    }
  }, /*#__PURE__*/React.createElement(Slot, {
    id: "pd-plan",
    label: "planta dos dois pisos \xB7 vetor",
    height: "250px"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--rule)',
      paddingTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Feito pelo grupo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-5)'
    }
  }, BY_GROUP.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      border: '1px solid var(--rule)',
      padding: 'var(--space-5) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Meta, null, k), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-strong)',
      marginTop: 'var(--space-3)'
    }
  }, v)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '1px solid var(--rule)',
      background: 'var(--surface-sunken)',
      padding: 'var(--space-10) var(--space-8) var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--rule-strong)',
      background: 'var(--paper-000)',
      padding: 'var(--space-8) var(--space-7) var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Visita privada"), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-heading-2)',
      color: 'var(--text-display)',
      margin: 'var(--space-4) 0 var(--space-6)'
    }
  }, "Agendar com o consultor"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nome",
    htmlFor: "pv-n"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "pv-n",
    placeholder: "Nome completo"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    htmlFor: "pv-e"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "pv-e",
    type: "email",
    placeholder: "nome@empresa.com"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Telefone",
    htmlFor: "pv-t"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "pv-t",
    placeholder: "+351"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Meta, {
    style: {
      display: 'block',
      marginBottom: 'var(--space-2)'
    }
  }, "Data preferida"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, DATES.map(d => /*#__PURE__*/React.createElement("button", {
    key: d,
    type: "button",
    onClick: () => setDate(d),
    style: {
      flex: 1,
      padding: '12px 0',
      cursor: 'pointer',
      background: 'transparent',
      border: '1px solid ' + (date === d ? 'var(--midnight-navy)' : 'var(--rule-strong)'),
      font: 'var(--type-mono)',
      letterSpacing: 'var(--tracking-mono)',
      color: date === d ? 'var(--midnight-navy)' : 'var(--text-faint)',
      transition: 'var(--transition-control)'
    }
  }, d))))), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: () => setSent(true)
  }, sent ? 'Pedido enviado' : 'Confirmar pedido'), /*#__PURE__*/React.createElement(Meta, {
    style: {
      display: 'block',
      marginTop: 'var(--space-4)',
      lineHeight: 1.7
    }
  }, "Resposta em 24 h. Visitas acompanhadas, sem partilha de dados com terceiros.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-8)',
      paddingTop: 'var(--space-6)',
      borderTop: '1px solid var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '56px',
      height: '56px',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Slot, {
    id: "pd-agent",
    label: "retrato",
    height: "56px"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-medium) var(--size-body-sm)/1.4 var(--font-core)',
      color: 'var(--text-display)'
    }
  }, "Consultor dedicado"), /*#__PURE__*/React.createElement(Meta, {
    style: {
      display: 'block',
      marginTop: '5px'
    }
  }, "+351 21 000 0000"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    icon: "download",
    iconPosition: "left"
  }, "Descarregar dossier"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true
  }, "Simular financiamento")))));
}
Object.assign(window, {
  Property
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/property.view.js", error: String((e && e.message) || e) }); }

// ui_kits/website/realestate.view.js
try { (() => {
const {
  Eyebrow,
  Meta,
  Button,
  Card,
  Badge,
  Tag,
  Tabs,
  Select,
  Switch,
  RuleGrid
} = window.BarbeitosGroupDesignSystem_b431cc;
const LISTINGS = [{
  place: 'Cascais · Quinta da Marinha',
  name: 'Villa Marinha 14',
  meta: '4 suítes · 420 m² · piscina',
  price: '€3.850.000',
  badge: 'Exclusivo',
  tone: 'exclusive',
  kind: 'Venda',
  region: 'Cascais'
}, {
  place: 'Lisboa · Príncipe Real',
  name: 'Palacete Ferreira',
  meta: '3 suítes · 280 m² · pátio',
  price: '€2.140.000',
  kind: 'Venda',
  region: 'Lisboa'
}, {
  place: 'Comporta · Carvalhal',
  name: 'Casa Sal',
  meta: '5 quartos · 310 m² · mobilada',
  price: '€6.500 / mês',
  badge: 'Arrendamento',
  tone: 'navy',
  kind: 'Arrendamento',
  region: 'Comporta'
}, {
  place: 'Sintra · Penha Longa',
  name: 'Casa das Faias',
  meta: '4 quartos · 365 m² · jardim',
  price: '€1.690.000',
  badge: 'Exclusivo',
  tone: 'exclusive',
  kind: 'Venda',
  region: 'Sintra'
}];
function RealEstate({
  onNavigate
}) {
  const [view, setView] = React.useState('Grelha');
  const [exclusive, setExclusive] = React.useState(true);
  const [region, setRegion] = React.useState('');
  const [kind, setKind] = React.useState('');
  let list = LISTINGS.filter(l => (!exclusive || l.badge === 'Exclusivo') && (!region || l.region === region) && (!kind || l.kind === kind));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-12) var(--gutter-page) var(--space-10)',
      background: 'var(--division-realestate)',
      color: 'var(--text-inverse-muted)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "light"
  }, "01 \u2014 Real Estate Development"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-display-2)',
      color: 'var(--text-inverse)',
      margin: 'var(--space-4) 0 var(--space-3)'
    }
  }, "Portf\xF3lio residencial"), /*#__PURE__*/React.createElement(Meta, {
    tone: "inverse"
  }, "18 propriedades \xB7 6 em exclusivo \xB7 atualizado a 8 set 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      flexWrap: 'wrap',
      padding: 'var(--space-4) var(--gutter-page)',
      background: 'var(--surface-sunken)',
      borderBottom: '1px solid var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: '210px'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    value: region,
    onChange: e => setRegion(e.target.value),
    placeholder: "Localiza\xE7\xE3o",
    options: ['Cascais', 'Lisboa', 'Comporta', 'Sintra']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: '170px'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    value: kind,
    onChange: e => setKind(e.target.value),
    placeholder: "Venda ou arrendamento",
    options: ['Venda', 'Arrendamento']
  })), /*#__PURE__*/React.createElement(Tag, {
    selected: exclusive,
    onRemove: exclusive ? () => setExclusive(false) : undefined,
    onClick: exclusive ? undefined : () => setExclusive(true)
  }, "Em exclusivo"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "bare",
    items: ['Grelha', 'Lista', 'Mapa'],
    value: view,
    onChange: setView
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 420px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-8) var(--space-8) var(--space-12) var(--gutter-page)'
    }
  }, view === 'Lista' ? /*#__PURE__*/React.createElement(RuleGrid, {
    columns: 1
  }, list.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.name,
    onClick: () => onNavigate('property'),
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      padding: 'var(--space-4)',
      cursor: 'pointer',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '150px',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Slot, {
    id: 'list-' + l.name.slice(0, 6),
    label: "fotografia",
    ratio: "4 / 3"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Meta, null, l.place), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-heading-3)',
      color: 'var(--text-display)',
      margin: '6px 0'
    }
  }, l.name), /*#__PURE__*/React.createElement(Meta, null, l.meta)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-heading-3)',
      color: 'var(--text-display)'
    }
  }, l.price)))) : view === 'Mapa' ? /*#__PURE__*/React.createElement(Slot, {
    id: "re-map-full",
    label: "mapa em ecr\xE3 inteiro \u2014 pins das propriedades",
    height: "560px"
  }) : /*#__PURE__*/React.createElement(RuleGrid, {
    columns: 2
  }, list.map(l => /*#__PURE__*/React.createElement(Card, {
    key: l.name,
    interactive: true,
    onClick: () => onNavigate('property'),
    media: /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(Slot, {
      id: 're-' + l.name.slice(0, 6),
      label: "fotografia \xB7 900\xD7700",
      height: "236px"
    }), l.badge && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: '14px',
        left: '14px'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: l.tone
    }, l.badge))),
    eyebrow: l.place,
    title: l.name,
    meta: l.meta,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-heading-3)',
        color: 'var(--text-display)'
      }
    }, l.price), /*#__PURE__*/React.createElement(Meta, {
      tone: "accent"
    }, "Detalhe \u2192"))
  }))), list.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-16) 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Sem resultados"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      marginTop: 'var(--space-4)'
    }
  }, "Nenhuma propriedade corresponde a esta combina\xE7\xE3o de filtros."))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '1px solid var(--rule)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: '420px'
    }
  }, /*#__PURE__*/React.createElement(Slot, {
    id: "re-map",
    label: "mapa \u2014 pins das propriedades",
    height: "100%"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-8) var(--space-8) var(--space-10)',
      borderTop: '1px solid var(--rule)',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Acesso reservado"), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-heading-2)',
      color: 'var(--text-display)',
      margin: 'var(--space-3) 0'
    }
  }, "Oportunidades off-market"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      marginBottom: 'var(--space-5)'
    }
  }, "Seis propriedades n\xE3o listadas publicamente. Partilhadas apenas por contacto direto com o consultor."), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: () => onNavigate('contact')
  }, "Pedir acesso")))));
}
Object.assign(window, {
  RealEstate
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/realestate.view.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Logotype = __ds_scope.Logotype;

__ds_ns.Meta = __ds_scope.Meta;

__ds_ns.Slogan = __ds_scope.Slogan;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.RuleGrid = __ds_scope.RuleGrid;

})();
