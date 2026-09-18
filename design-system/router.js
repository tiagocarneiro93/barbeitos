/* Minimal client-side path router for the site's single index.html.
 *
 * Route slugs are the same across every language for now (PT-PT is the
 * only language with real content — see design-system/i18n/), so the
 * segment names below stay in Portuguese even under /en/, /es/, /fr/.
 * Revisit once per-language slugs are worth the added routing table.
 *
 * basePath is derived from this script's own resolved <script src>,
 * not hardcoded, so the same file works from a GitHub Pages project
 * path (/barbeitos/...) and from a plain local static server (/...).
 */
(function () {
  var scriptEl = document.currentScript;
  var scriptUrl = new URL(scriptEl.src, window.location.href);
  var basePath = scriptUrl.pathname.replace(/\/design-system\/router\.js$/, '');

  // Every relative asset path in the view files (design-system/assets/...)
  // is written assuming the page's own URL never moves. Once we start
  // pushState-ing to real routes, the document's URL does move, and any
  // element created afterward (an <img> React renders after navigating)
  // would resolve those relative paths against the new route's path
  // instead of the site root. A root-relative <base> tag pins resolution
  // to the real site root regardless of what pushState does to the URL.
  var baseEl = document.createElement('base');
  baseEl.href = (basePath || '') + '/';
  document.head.appendChild(baseEl);

  // 404.html (GitHub Pages has no server-side routing) redirects a deep
  // link like /barbeitos/en/imobiliario here as /barbeitos/?__redirect=...
  // before this ever runs. Restore the real URL first so parse() below
  // sees the path the visitor actually asked for.
  var params = new URLSearchParams(window.location.search);
  var redirect = params.get('__redirect');
  if (redirect) {
    history.replaceState(null, '', redirect);
  }

  var ROUTES = {
    home: '',
    realestate: 'imobiliario',
    property: 'imobiliario/villa-marinha-14',
    construction: 'construcao',
    interiors: 'interiores',
    contact: 'contacto',
  };
  var SLUG_TO_ROUTE = {};
  Object.keys(ROUTES).forEach(function (id) { SLUG_TO_ROUTE[ROUTES[id]] = id; });
  var LANGS = ['en', 'es', 'fr']; // pt-pt is the unprefixed default

  function stripBase(pathname) {
    var p = pathname;
    if (basePath && p.indexOf(basePath) === 0) p = p.slice(basePath.length);
    return p.replace(/^\/+|\/+$/g, '');
  }

  function parse() {
    var segments = stripBase(window.location.pathname);
    segments = segments ? segments.split('/') : [];
    var lang = 'PT';
    if (segments.length && LANGS.indexOf(segments[0]) !== -1) {
      lang = segments[0].toUpperCase();
      segments = segments.slice(1);
    }
    var slug = segments.join('/');
    var route = SLUG_TO_ROUTE.hasOwnProperty(slug) ? SLUG_TO_ROUTE[slug] : 'home';
    return { route: route, lang: lang };
  }

  function buildPath(route, lang) {
    var slug = ROUTES.hasOwnProperty(route) ? ROUTES[route] : '';
    var prefix = lang && lang !== 'PT' ? '/' + lang.toLowerCase() : '';
    var path = basePath + prefix + (slug ? '/' + slug : '/');
    return path || '/';
  }

  function navigate(route, lang, replace) {
    var path = buildPath(route, lang);
    var current = window.location.pathname;
    if (current !== path) {
      history[replace ? 'replaceState' : 'pushState']({ route: route, lang: lang }, '', path);
    }
  }

  window.Router = { basePath: basePath, routes: ROUTES, parse: parse, buildPath: buildPath, navigate: navigate };
})();
