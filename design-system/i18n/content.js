/* External i18n content for the site's shared chrome (header nav,
 * language switcher, footer) — separate from design-system/seo/content.js,
 * which covers <head> metadata rather than on-page copy.
 *
 * Scope, deliberately: this covers the header/footer/nav only. The body
 * copy of every page (headings, paragraphs, listings, forms) is still
 * pt-PT only — translating all of that is a much larger follow-up, not
 * attempted here. EN/ES/FR below are real translations (not placeholders)
 * specifically because this vocabulary is small and bounded enough to get
 * right directly, unlike the page-body copy in design-system/seo/content.js.
 *
 * Every locale must have the same keys — chrome.view.js falls back to
 * pt-PT for anything missing, but that fallback shouldn't be relied on.
 */
window.I18N = {
  'pt-PT': {
    nav: { realestate: 'Imobiliário', construction: 'Construção', interiors: 'Interiores', home: 'Grupo' },
    contactCta: 'Contacto privado',
    footer: {
      cities: 'Braga · Lisboa · Cascais',
      areas: 'Áreas',
      contact: 'Contacto',
      indicativeContacts: 'Contactos indicativos',
      reserved: 'Acesso reservado',
      reservedText: 'Seis propriedades off-market, partilhadas por contacto direto.',
      reservedCta: 'Pedir acesso',
      copyright: '© 2026 Barbeitos Group',
      tagline: 'Building your dreams',
    },
  },
  en: {
    nav: { realestate: 'Real Estate', construction: 'Construction', interiors: 'Interiors', home: 'Group' },
    contactCta: 'Private contact',
    footer: {
      cities: 'Braga · Lisbon · Cascais',
      areas: 'Areas',
      contact: 'Contact',
      indicativeContacts: 'Indicative contact details',
      reserved: 'Private access',
      reservedText: 'Six off-market properties, shared by direct contact only.',
      reservedCta: 'Request access',
      copyright: '© 2026 Barbeitos Group',
      tagline: 'Building your dreams',
    },
  },
  es: {
    nav: { realestate: 'Inmobiliaria', construction: 'Construcción', interiors: 'Interiores', home: 'Grupo' },
    contactCta: 'Contacto privado',
    footer: {
      cities: 'Braga · Lisboa · Cascais',
      areas: 'Áreas',
      contact: 'Contacto',
      indicativeContacts: 'Datos de contacto indicativos',
      reserved: 'Acceso reservado',
      reservedText: 'Seis propiedades off-market, compartidas solo por contacto directo.',
      reservedCta: 'Solicitar acceso',
      copyright: '© 2026 Barbeitos Group',
      tagline: 'Building your dreams',
    },
  },
  fr: {
    nav: { realestate: 'Immobilier', construction: 'Construction', interiors: 'Intérieurs', home: 'Groupe' },
    contactCta: 'Contact privé',
    footer: {
      cities: 'Braga · Lisbonne · Cascais',
      areas: 'Domaines',
      contact: 'Contact',
      indicativeContacts: 'Coordonnées indicatives',
      reserved: 'Accès réservé',
      reservedText: 'Six propriétés hors marché, partagées uniquement sur contact direct.',
      reservedCta: 'Demander l’accès',
      copyright: '© 2026 Barbeitos Group',
      tagline: 'Building your dreams',
    },
  },
};

window.I18N_LOCALE_KEY = { PT: 'pt-PT', EN: 'en', ES: 'es', FR: 'fr' };
window.LANGUAGES = [
  { code: 'PT', flag: '🇵🇹', name: 'Português' },
  { code: 'EN', flag: '🇬🇧', name: 'English' },
  { code: 'ES', flag: '🇪🇸', name: 'Español' },
  { code: 'FR', flag: '🇫🇷', name: 'Français' },
];
