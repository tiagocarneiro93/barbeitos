/* Real-estate listings — the single source of truth for both the portfolio
 * grid (realestate.view.js) and the detail page (property.view.js), keyed
 * by `slug` (matches the imobiliario/:slug route).
 *
 * There is no listings API/feed from the client — this is a plain data file
 * maintained by hand, same pattern as seo/content.js and i18n/content.js.
 * Photos still use the drag-and-drop <image-slot> convention: entries below
 * without a `src` are empty slots waiting for a real photo.
 *
 * type: 'apartment' — a single unit. specs + plan describe that one unit.
 * type: 'empreendimento' — a whole building. specs/plan don't apply to a
 *   single unit; `fracoes` lists each unit in the building instead, one row
 *   per fração (tipologia, área, piso, estado, and its own floor plan).
 *
 * consultant — OPTIONAL per listing: { name, email, phone, photo }. When
 * present, the detail page shows a "Consultor dedicado" card and the visit
 * request is addressed to that consultant (with the group's general inbox
 * cc'd); when absent, that card is hidden entirely and the request goes to
 * the general inbox alone. See GLOBAL_CONTACT_EMAIL below and the recipient
 * computation in property.view.js.
 *
 * priceValue/areaValue/bedrooms — plain numbers alongside the display
 * strings (price/meta), parsed once by hand since those are otherwise just
 * text like "€3.850.000" or "4 suítes · 420 m² · piscina". Used by the
 * portfolio's price/area/bedroom filters (realestate.view.js) and the
 * per-listing JSON-LD Offer price (index.html). priceValue mixes sale
 * totals and Casa Sal's monthly rent on the same numeric scale — the
 * portfolio's price filter doesn't split by kind, so treat it as a rough
 * band, not an apples-to-apples comparison, for a rental. For the
 * empreendimento (no single unit to describe), areaValue/bedrooms describe
 * its smallest/cheapest fração, matching the "Desde €245.000" starting-price
 * convention already used for price.
 *
 * lat/lng — approximate coordinates for the listing's neighbourhood (not
 * the exact address, same indicative-location approach as `place`), used
 * to drop a pin on the portfolio map (realestate.view.js / PortfolioMapView).
 */
window.GLOBAL_CONTACT_EMAIL = 'info@barbeitosgroup.pt';

window.LISTINGS = [
  {
    slug: 'villa-marinha-14',
    type: 'apartment',
    ref: 'BG-1042',
    place: 'Cascais · Quinta da Marinha',
    name: 'Villa Marinha 14',
    meta: '4 suítes · 420 m² · piscina',
    price: '€3.850.000',
    priceValue: 3850000,
    areaValue: 420,
    bedrooms: 4,
    lat: 38.7248,
    lng: -9.4534,
    badge: 'Exclusivo',
    tone: 'exclusive',
    kind: 'Venda',
    region: 'Cascais',
    img: 'design-system/assets/properties/villa-marinha-14.jpg',
    eyebrow: 'Cascais · Quinta da Marinha · Em exclusivo',
    description: 'Moradia isolada em lote de 1.100 m², a quatro minutos do mar. Construção de 2024 executada pela Barbeitos Construction, com interiores e mobiliário desenhados pelo atelier do grupo. Sistema de climatização geotérmica, certificação energética A+.',
    consultant: { name: 'Rui Barbeitos', email: 'rui.barbeitos@barbeitosgroup.pt', phone: '+351 21 000 0001', photo: 'design-system/assets/property-detail/pd-agent.jpg' },
    specs: [['Área bruta', '420 m²'], ['Lote', '1.100 m²'], ['Suítes', '4'], ['Energia', 'A+']],
    plan: { id: 'pd-plan', label: 'planta dos dois pisos · vetor', src: 'design-system/assets/property-detail/pd-plan.jpg' },
    gallery: [
      { id: 'pd-hero', label: 'sala com vista', src: 'design-system/assets/property-detail/pd-hero.jpg' },
      { id: 'pd-2', label: 'cozinha', src: 'design-system/assets/property-detail/pd-cozinha.jpg' },
      { id: 'pd-3', label: 'piscina', src: 'design-system/assets/property-detail/pd-piscina.jpg' },
      { id: 'pd-gallery-fachada', label: 'fachada principal' },
      { id: 'pd-gallery-jardim', label: 'jardim e exterior' },
      { id: 'pd-gallery-suite', label: 'suíte principal' },
      { id: 'pd-gallery-wc', label: 'casa de banho' },
      { id: 'pd-gallery-jantar', label: 'sala de jantar' },
      { id: 'pd-gallery-entrada', label: 'hall de entrada' },
    ],
  },
  {
    slug: 'palacete-ferreira',
    type: 'apartment',
    ref: 'BG-0918',
    place: 'Lisboa · Príncipe Real',
    name: 'Palacete Ferreira',
    meta: '3 suítes · 280 m² · pátio',
    price: '€2.140.000',
    priceValue: 2140000,
    areaValue: 280,
    bedrooms: 3,
    lat: 38.7169,
    lng: -9.1499,
    kind: 'Venda',
    region: 'Lisboa',
    img: 'design-system/assets/properties/palacete-ferreira.jpg',
    eyebrow: 'Lisboa · Príncipe Real',
    description: 'Palacete reabilitado do século XIX, com pátio interior e tetos originais recuperados. Cozinha e casas de banho remodeladas em 2023, mantendo o traço clássico da fachada e do átrio de entrada.',
    specs: [['Área bruta', '280 m²'], ['Pátio', '60 m²'], ['Suítes', '3'], ['Energia', 'B']],
    plan: { id: 'pf-plan', label: 'planta dos três pisos · vetor' },
    gallery: [
      { id: 'pf-hero', label: 'átrio de entrada', src: 'design-system/assets/properties/palacete-ferreira.jpg' },
      { id: 'pf-2', label: 'sala principal' },
      { id: 'pf-3', label: 'pátio interior' },
    ],
  },
  {
    slug: 'casa-sal',
    type: 'apartment',
    ref: 'BG-0873',
    place: 'Comporta · Carvalhal',
    name: 'Casa Sal',
    meta: '5 quartos · 310 m² · mobilada',
    price: '€6.500 / mês',
    priceValue: 6500,
    areaValue: 310,
    bedrooms: 5,
    lat: 38.3835,
    lng: -8.7834,
    badge: 'Arrendamento',
    tone: 'navy',
    kind: 'Arrendamento',
    region: 'Comporta',
    img: 'design-system/assets/properties/casa-sal.jpg',
    eyebrow: 'Comporta · Carvalhal · Arrendamento',
    description: 'Casa de praia totalmente mobilada, a cinco minutos da Praia do Carvalhal. Arquitetura térrea em madeira e pedra local, jardim com piscina exterior e acesso direto a caminhos pedonais para a duna.',
    specs: [['Área bruta', '310 m²'], ['Lote', '2.400 m²'], ['Quartos', '5'], ['Energia', 'B-']],
    plan: { id: 'cs-plan', label: 'planta térrea · vetor' },
    gallery: [
      { id: 'cs-hero', label: 'exterior e piscina', src: 'design-system/assets/properties/casa-sal.jpg' },
      { id: 'cs-2', label: 'sala comum' },
      { id: 'cs-3', label: 'quarto principal' },
    ],
  },
  {
    slug: 'casa-das-faias',
    type: 'apartment',
    ref: 'BG-0801',
    place: 'Sintra · Penha Longa',
    name: 'Casa das Faias',
    meta: '4 quartos · 365 m² · jardim',
    price: '€1.690.000',
    priceValue: 1690000,
    areaValue: 365,
    bedrooms: 4,
    lat: 38.7423,
    lng: -9.4295,
    badge: 'Exclusivo',
    tone: 'exclusive',
    kind: 'Venda',
    region: 'Sintra',
    img: 'design-system/assets/properties/casa-das-faias.jpg',
    eyebrow: 'Sintra · Penha Longa · Em exclusivo',
    description: 'Moradia rodeada de mata, junto ao campo de golfe de Penha Longa. Jardim paisagístico com árvores de grande porte, lareira central e garagem para três viaturas.',
    specs: [['Área bruta', '365 m²'], ['Lote', '1.800 m²'], ['Quartos', '4'], ['Energia', 'A']],
    plan: { id: 'cf-plan', label: 'planta dos dois pisos · vetor' },
    gallery: [
      { id: 'cf-hero', label: 'fachada e jardim', src: 'design-system/assets/properties/casa-das-faias.jpg' },
      { id: 'cf-2', label: 'sala com lareira' },
      { id: 'cf-3', label: 'jardim traseiro' },
    ],
  },
  {
    slug: 'edificio-se',
    type: 'empreendimento',
    ref: 'BG-1108',
    place: 'Porto · Sé',
    name: 'Edifício Sé',
    meta: 'Empreendimento · 6 frações · entrega 2027',
    price: 'Desde €245.000',
    priceValue: 245000,
    areaValue: 48,
    bedrooms: 0,
    lat: 41.1436,
    lng: -8.6110,
    badge: 'Novo',
    tone: 'navy',
    kind: 'Venda',
    region: 'Porto',
    img: 'design-system/assets/properties/edificio-se.jpg',
    eyebrow: 'Porto · Sé · Novo empreendimento',
    description: 'Reabilitação integral de um edifício do centro histórico do Porto, junto à Sé, com 6 frações autónomas. Estrutura reforçada, isolamento térmico e acústico renovado, e certificação energética A em todas as frações. Entrega prevista para o segundo semestre de 2027.',
    consultant: { name: 'Inês Barbeitos', email: 'ines.barbeitos@barbeitosgroup.pt', phone: '+351 22 000 0002' },
    fracoes: [
      { id: 'F1', tipologia: 'T0', area: '48 m²', piso: 'R/C', estado: 'Disponível', plan: { id: 'se-plan-f1', label: 'planta F1 · T0' } },
      { id: 'F2', tipologia: 'T1', area: '62 m²', piso: '1º', estado: 'Disponível', plan: { id: 'se-plan-f2', label: 'planta F2 · T1' } },
      { id: 'F3', tipologia: 'T1', area: '65 m²', piso: '1º', estado: 'Reservado', plan: { id: 'se-plan-f3', label: 'planta F3 · T1' } },
      { id: 'F4', tipologia: 'T2', area: '89 m²', piso: '2º', estado: 'Disponível', plan: { id: 'se-plan-f4', label: 'planta F4 · T2' } },
      { id: 'F5', tipologia: 'T2', area: '92 m²', piso: '2º', estado: 'Vendido', plan: { id: 'se-plan-f5', label: 'planta F5 · T2' } },
      { id: 'F6', tipologia: 'T3 duplex', area: '134 m²', piso: '3º e 4º', estado: 'Disponível', plan: { id: 'se-plan-f6', label: 'planta F6 · T3 duplex' } },
    ],
    gallery: [
      { id: 'se-hero', label: 'fachada principal', src: 'design-system/assets/properties/edificio-se.jpg' },
      { id: 'se-2', label: 'átrio de entrada' },
      { id: 'se-3', label: 'terraço comum' },
    ],
  },
];
