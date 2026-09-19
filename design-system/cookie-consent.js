/* Cookie consent store — the single source of truth for what the visitor
 * has agreed to, read by cookie-consent.view.js (the banner/settings UI)
 * and by anything that wants to gate itself on consent (e.g. a future
 * analytics or ad-pixel <script> tag: `if (CookieConsent.get()?.analytics) { ... }`).
 * Split out from the banner component itself so it's plain JS (no JSX,
 * loaded as an ordinary <script>, same as router.js/listings.js) — the
 * decision of what's been consented to shouldn't depend on React/Babel
 * having loaded.
 *
 * Legal basis: EU ePrivacy Directive (2002/58/EC, as amended) + GDPR,
 * transposed in Portugal via Lei n.º 41/2004 (as amended by Lei n.º
 * 46/2012) — non-essential cookies require prior, freely-given, granular
 * opt-in consent; "necessary" cookies (the site can't function without
 * them, e.g. remembering this very choice) are exempt. CNPD (Portugal's
 * DPA) hasn't published cookie-specific guidance of its own beyond this
 * and generally follows the EDPB's: reject must be as easy as accept, no
 * pre-ticked boxes, consent withdrawable at any time — see
 * cookie-consent.view.js for how that's implemented.
 *
 * CATEGORIES describes what this site actually uses today: no analytics
 * or marketing scripts are wired up yet (see cookie-consent.view.js's
 * header comment), so accepting those categories currently has no
 * effect — the mechanism exists so that whoever adds real tracking later
 * has a compliant gate to check first, instead of bolting one on after
 * the fact.
 */
window.COOKIE_CONSENT_CATEGORIES = [
  {
    key: 'necessary',
    label: 'Necessários',
    locked: true,
    description: 'Essenciais para o funcionamento do site — por exemplo, guardar esta escolha para não voltar a perguntar em cada visita. Não podem ser desativados.',
  },
  {
    key: 'preferences',
    label: 'Preferências',
    locked: false,
    description: 'Guardam escolhas como o idioma selecionado, para as lembrar nas próximas visitas.',
  },
  {
    key: 'analytics',
    label: 'Analítica',
    locked: false,
    description: 'Ajudam a perceber como o site é utilizado (páginas visitadas, tempo de permanência), para o podermos melhorar.',
  },
  {
    key: 'marketing',
    label: 'Marketing',
    locked: false,
    description: 'Usadas para apresentar conteúdos e anúncios mais relevantes fora deste site.',
  },
];

(function () {
  var STORAGE_KEY = 'bg_cookie_consent';
  var listeners = [];

  function defaults(value) {
    var prefs = { necessary: true };
    window.COOKIE_CONSENT_CATEGORIES.forEach(function (c) { prefs[c.key] = c.locked ? true : !!value; });
    return prefs;
  }

  function read() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null; // Private browsing / storage disabled — treat as undecided every visit.
    }
  }

  function write(prefs) {
    var value = Object.assign(defaults(false), prefs, { necessary: true, decidedAt: new Date().toISOString() });
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(value)); } catch (e) { /* see read() */ }
    listeners.forEach(function (fn) { fn(value); });
    return value;
  }

  window.CookieConsent = {
    STORAGE_KEY: STORAGE_KEY,
    // null means "not yet decided" — distinct from a real decision that
    // happens to reject everything, since the two require different UI
    // (show the banner vs. don't).
    get: read,
    acceptAll: function () { return write(defaults(true)); },
    rejectAll: function () { return write(defaults(false)); },
    set: write,
    onChange: function (fn) {
      listeners.push(fn);
      return function () { listeners = listeners.filter(function (f) { return f !== fn; }); };
    },
    openSettings: function () { window.dispatchEvent(new CustomEvent('cookie-consent:open-settings')); },
  };
})();
