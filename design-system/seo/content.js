/* External SEO content, kept separate from the view files so titles,
 * descriptions and (eventually) translations can be edited without
 * touching component code.
 *
 * Only pt-PT is real content — the site's actual copy is Portuguese
 * everywhere right now, so EN/ES/FR entries below are placeholders
 * (marked "[EN]" etc.) for whoever does the real translation pass.
 * They exist so the file's shape is ready, but index.html only emits
 * hreflang/sitemap entries for pt-PT until real translated page
 * content lands — advertising an English page to search engines when
 * the page is still 100% Portuguese would be actively misleading.
 *
 * `title` is used as-is; `description` maps to <meta name="description">
 * and to the Open Graph / Twitter description fields.
 */
window.SEO_CONTENT = {
  siteName: 'Barbeitos Group',
  // Used to build absolute canonical/OG URLs and the sitemap. Update if
  // the site is ever deployed under a different domain or repo name.
  productionOrigin: 'https://tiagocarneiro93.github.io',

  locales: {
    'pt-PT': {
      ogLocale: 'pt_PT',
      routes: {
        home: {
          title: 'Barbeitos Group — Real Estate, Construção e Interiores',
          description: 'Barbeitos Group — promoção imobiliária, construção e interiores sob uma identidade, em Braga, Portugal.',
        },
        realestate: {
          title: 'Imobiliário — Barbeitos Group',
          description: 'Portfólio residencial Barbeitos Group: propriedades em exclusivo, venda e arrendamento em Cascais, Lisboa, Comporta e Sintra.',
        },
        property: {
          title: 'Villa Marinha 14 — Barbeitos Group',
          description: 'Villa Marinha 14, Cascais · Quinta da Marinha — 4 suítes, 420 m², piscina. Moradia em exclusivo pela Barbeitos Group.',
        },
        construction: {
          title: 'Construction — Barbeitos Group',
          description: 'Pintura, isolamento, eletricidade e canalização executados pelas equipas que constroem os empreendimentos Barbeitos Group. Orçamento fixo em 48 horas.',
        },
        interiors: {
          title: 'Furniture & Interior Design — Barbeitos Group',
          description: 'Mobiliário desenhado à medida e projeto de interiores completo pelo atelier Barbeitos Group, coordenado com a obra.',
        },
        contact: {
          title: 'Contacto — Barbeitos Group',
          description: 'Fale com a equipa Barbeitos Group sobre o seu projeto de real estate, construção ou interiores.',
        },
        cookies: {
          title: 'Política de Cookies — Barbeitos Group',
          description: 'Como o site barbeitosgroup.pt utiliza cookies e como pode gerir as suas preferências.',
        },
      },
    },

    // Placeholders only — see file header. Structure mirrors pt-PT so a
    // translator can fill these in route by route.
    en: {
      ogLocale: 'en',
      routes: {
        home: { title: '[EN] Barbeitos Group — Real Estate, Construction & Interiors', description: '[EN] Barbeitos Group — real estate development, construction and interiors under one identity, in Braga, Portugal.' },
        realestate: { title: '[EN] Real Estate — Barbeitos Group', description: '[EN] Barbeitos Group residential portfolio.' },
        property: { title: '[EN] Villa Marinha 14 — Barbeitos Group', description: '[EN] Villa Marinha 14, Cascais.' },
        construction: { title: '[EN] Construction — Barbeitos Group', description: '[EN] Painting, insulation, electrical and plumbing work.' },
        interiors: { title: '[EN] Furniture & Interior Design — Barbeitos Group', description: '[EN] Bespoke furniture and full interior design projects.' },
        contact: { title: '[EN] Contact — Barbeitos Group', description: '[EN] Get in touch with the Barbeitos Group team.' },
        cookies: { title: '[EN] Cookie Policy — Barbeitos Group', description: '[EN] How barbeitosgroup.pt uses cookies.' },
      },
    },
    es: {
      ogLocale: 'es',
      routes: {
        home: { title: '[ES] Barbeitos Group — Inmobiliaria, Construcción e Interiores', description: '[ES] Barbeitos Group — promoción inmobiliaria, construcción e interiores bajo una identidad, en Braga, Portugal.' },
        realestate: { title: '[ES] Inmobiliaria — Barbeitos Group', description: '[ES] Cartera residencial de Barbeitos Group.' },
        property: { title: '[ES] Villa Marinha 14 — Barbeitos Group', description: '[ES] Villa Marinha 14, Cascais.' },
        construction: { title: '[ES] Construcción — Barbeitos Group', description: '[ES] Pintura, aislamiento, electricidad y fontanería.' },
        interiors: { title: '[ES] Mobiliario y Diseño de Interiores — Barbeitos Group', description: '[ES] Mobiliario a medida y proyectos de interiorismo completos.' },
        contact: { title: '[ES] Contacto — Barbeitos Group', description: '[ES] Hable con el equipo de Barbeitos Group.' },
        cookies: { title: '[ES] Política de Cookies — Barbeitos Group', description: '[ES] Cómo barbeitosgroup.pt utiliza cookies.' },
      },
    },
    fr: {
      ogLocale: 'fr',
      routes: {
        home: { title: '[FR] Barbeitos Group — Immobilier, Construction et Intérieurs', description: '[FR] Barbeitos Group — promotion immobilière, construction et intérieurs sous une identité, à Braga, Portugal.' },
        realestate: { title: '[FR] Immobilier — Barbeitos Group', description: '[FR] Portefeuille résidentiel Barbeitos Group.' },
        property: { title: '[FR] Villa Marinha 14 — Barbeitos Group', description: '[FR] Villa Marinha 14, Cascais.' },
        construction: { title: '[FR] Construction — Barbeitos Group', description: '[FR] Peinture, isolation, électricité et plomberie.' },
        interiors: { title: '[FR] Mobilier & Design d’Intérieur — Barbeitos Group', description: '[FR] Mobilier sur mesure et projets d’intérieur complets.' },
        contact: { title: '[FR] Contact — Barbeitos Group', description: '[FR] Contactez l’équipe Barbeitos Group.' },
        cookies: { title: '[FR] Politique de Cookies — Barbeitos Group', description: '[FR] Comment barbeitosgroup.pt utilise les cookies.' },
      },
    },
  },
};
