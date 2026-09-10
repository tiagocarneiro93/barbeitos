const { Logotype, Eyebrow, Meta, Button, Card, Badge, RuleGrid, Icon } = window.BarbeitosGroupDesignSystem_b431cc;

const BRANCHES = [
  { n: '01', route: 'realestate', title: 'Real Estate', body: 'Empreendimentos em exclusivo, arrendamento e imobiliário premium.', colour: 'var(--division-realestate)' },
  { n: '02', route: 'construction', title: 'Construction', body: 'Pinturas, isolamentos, eletricidade, canalização e remodelação parcial.', colour: 'var(--division-construction)' },
  { n: '03', route: 'interiors', title: 'Furniture & Interiors', body: 'Mobiliário desenhado à medida e projeto de interiores chave-na-mão.', colour: 'var(--division-interiors)' },
];

const PORTFOLIO_A = [
  { place: 'Cascais · Em exclusivo', name: 'Quinta da Marinha 14', meta: '4 suítes · 420 m² · piscina', price: '€3.850.000', badge: 'Exclusivo', tone: 'exclusive', h: 330, img: 'design-system/assets/properties/quinta-marinha-14.jpg' },
  { place: 'Lisboa · Príncipe Real', name: 'Palacete Ferreira', meta: '3 suítes · 280 m² · pátio', price: '€2.140.000', h: 200, img: 'design-system/assets/properties/palacete-ferreira.jpg' },
  { place: 'Comporta · Arrendamento', name: 'Casa Sal', meta: '5 quartos · 310 m² · mobilada', price: '€6.500 / mês', badge: 'Arrendamento', tone: 'navy', h: 200, img: 'design-system/assets/properties/casa-sal.jpg' },
];

const PORTFOLIO_B = [
  { place: 'Sintra · Penha Longa', name: 'Casa das Faias', meta: '4 quartos · 365 m² · jardim', price: '€1.690.000', h: 200, img: 'design-system/assets/properties/casa-das-faias.jpg' },
  { place: 'Braga · Centro histórico', name: 'Edifício Sé', meta: '12 unidades · T1 a T3', price: 'desde €410.000', badge: 'Em construção', tone: 'neutral', h: 200, img: 'design-system/assets/properties/edificio-se.jpg' },
  { place: 'Cascais · Birre', name: 'Villa Birre 6', meta: '5 suítes · 510 m² · court', price: '€4.600.000', badge: 'Exclusivo', tone: 'exclusive', h: 330, img: 'design-system/assets/properties/villa-birre-6.jpg' },
];

const SERVICES = [
  ['01', 'Pintura', 'Interior e fachada, preparação de superfícies, tintas técnicas.', 'desde €9 / m²'],
  ['02', 'Isolamento', 'Térmico e acústico, ETICS, correção de pontes térmicas.', 'desde €34 / m²'],
  ['03', 'Eletricidade', 'Quadros, remodelação de rede, iluminação e domótica.', 'orçamento por visita'],
  ['04', 'Canalização', 'Redes de água e esgoto, louças, deteção de fugas.', 'orçamento por visita'],
];

const ATELIER = [
  ['01', 'Mobiliário à medida', 'Marcenaria própria em carvalho, nogueira, freixo e lacados.'],
  ['02', 'Projeto de interiores', 'Conceito, plantas, materiais e styling do espaço completo.'],
  ['03', 'Iluminação', 'Desenho de luz e peças em latão escurecido e vidro.'],
  ['04', 'Exterior', 'Teca, pedra e têxteis técnicos para pátios e terraços.'],
];

function Home({ onNavigate }) {
  return (
    <div>
      {/* Group hero — onyx ground: the mark on the left, the founder on the right */}
      <div style={{ background: 'var(--division-group)', color: 'var(--text-inverse)', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 520px' }}>
        <div style={{ minHeight: '620px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-20)' }}>
          {/* Hero plate supplied by the client (design-system/assets/hero-logo.jpg) — path is repo-root-relative, matches how index.html loads this file */}
          <img src="design-system/assets/hero-logo.jpg" alt="Barbeitos Group" style={{ width: '100%', maxWidth: '620px', height: 'auto', display: 'block' }} />
        </div>
        <div style={{ borderLeft: '1px solid var(--rule-inverse)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: '300px' }}>
            <Slot id="home-founder" label="retrato do fundador — enviar fotografia" height="100%" dark />
          </div>
          <div style={{ padding: 'var(--space-12) var(--gutter-page)', borderTop: '1px solid var(--rule-inverse)', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', flex: 1, justifyContent: 'center' }}>
            <Eyebrow tone="light">Fundador · Barbeitos Group</Eyebrow>
            <p style={{ font: 'var(--type-body-lg)', color: 'var(--text-inverse-muted)', maxWidth: '44ch' }}>
              [Nome do fundador] construiu o grupo a partir da obra: primeiro a executar, depois a promover, hoje a assinar cada projeto do terreno ao último detalhe de interiores. É esse percurso — e a exigência que dele resulta — que responde por cada empreendimento que leva o nome Barbeitos.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
              <Button onClick={() => onNavigate('realestate')}>Ver empreendimentos</Button>
              <Button variant="outline-inverse" onClick={() => onNavigate('contact')}>Falar com o fundador</Button>
            </div>
            <Meta tone="inverse">Nome e biografia por confirmar — texto indicativo.</Meta>
          </div>
        </div>
      </div>

      {/* Three branches of the group */}
      <RuleGrid columns={3} bordered={false} style={{ borderBottom: '1px solid var(--rule)' }}>
        {BRANCHES.map((b) => (
          <a key={b.n} href="#" onClick={(e) => { e.preventDefault(); onNavigate(b.route); }} style={{ display: 'block', padding: 'var(--space-10) var(--space-10) var(--space-8)', textDecoration: 'none', borderTop: '2px solid ' + b.colour }}>
            <Meta tone="accent">{b.n}</Meta>
            <h3 style={{ font: 'var(--type-heading-2)', color: 'var(--text-display)', margin: 'var(--space-4) 0 var(--space-3)' }}>{b.title}</h3>
            <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-body)', maxWidth: '34ch' }}>{b.body}</p>
          </a>
        ))}
      </RuleGrid>

      {/* 01 — Real estate section */}
      <Section eyebrow="01 — Portfólio em exclusivo" title="Empreendimentos selecionados"
        action={<button type="button" onClick={() => onNavigate('realestate')} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 0 }}><Meta tone="accent">Ver todos (18) →</Meta></button>}>
        <RuleGrid template="2fr 1fr 1fr">
          {PORTFOLIO_A.map((p) => (
            <Card key={p.name} interactive onClick={() => onNavigate('property')}
              media={<div style={{ position: 'relative' }}>
                <Slot id={'home-' + p.name.slice(0, 6)} label="render · fachada principal" height={p.h + 'px'} src={p.img} />
                {p.badge && <span style={{ position: 'absolute', top: '14px', left: '14px' }}><Badge tone={p.tone}>{p.badge}</Badge></span>}
              </div>}
              eyebrow={p.place} title={p.name} meta={p.meta}
              footer={<><span style={{ font: 'var(--type-heading-3)', color: 'var(--text-display)' }}>{p.price}</span><Meta tone="accent">Detalhe →</Meta></>} />
          ))}
        </RuleGrid>
        <RuleGrid template="1fr 1fr 2fr" style={{ borderTop: 'none' }}>
          {PORTFOLIO_B.map((p) => (
            <Card key={p.name} interactive onClick={() => onNavigate('property')}
              media={<div style={{ position: 'relative' }}>
                <Slot id={'home-' + p.name.slice(0, 6)} label="render · fachada principal" height={p.h + 'px'} src={p.img} />
                {p.badge && <span style={{ position: 'absolute', top: '14px', left: '14px' }}><Badge tone={p.tone}>{p.badge}</Badge></span>}
              </div>}
              eyebrow={p.place} title={p.name} meta={p.meta}
              footer={<><span style={{ font: 'var(--type-heading-3)', color: 'var(--text-display)' }}>{p.price}</span><Meta tone="accent">Detalhe →</Meta></>} />
          ))}
        </RuleGrid>
      </Section>

      {/* 02 — Construction section */}
      <Section tone="graphite" eyebrow="02 — Construction Company" title="A mesma exigência em obras pequenas"
        lead="Pintura, isolamento, eletricidade e canalização executados pelas equipas que constroem os nossos empreendimentos. Orçamento fixo em 48 horas."
        action={<div style={{ display: 'flex', gap: 'var(--space-3)' }}><Button onClick={() => onNavigate('construction')}>Pedir orçamento</Button><Button variant="outline-inverse" onClick={() => onNavigate('construction')}>Ver trabalhos</Button></div>}>
        <RuleGrid columns={4} tone="graphite">
          {SERVICES.map(([n, t, b, p]) => (
            <div key={n} style={{ padding: 'var(--space-7) var(--space-6) var(--space-8)' }}>
              <Meta tone="light">{n}</Meta>
              <h3 style={{ font: 'var(--type-heading-3)', color: 'var(--text-inverse)', margin: 'var(--space-3) 0 var(--space-3)' }}>{t}</h3>
              <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-inverse-muted)' }}>{b}</p>
              <Meta tone="inverse" style={{ display: 'block', marginTop: 'var(--space-4)' }}>{p}</Meta>
            </div>
          ))}
        </RuleGrid>
      </Section>

      {/* 03 — Interiors section */}
      <div style={{ background: 'var(--surface-page)' }}>
        <div style={{ position: 'relative' }}>
          <Slot id="home-interiors" label="fotografia — interior assinado pelo atelier" height="440px" />
          <div style={{ position: 'absolute', left: 'var(--gutter-page)', bottom: '-56px', width: '520px', background: 'var(--terracotta-brown)', color: 'var(--text-inverse)', padding: 'var(--space-10) var(--space-10) var(--space-12)' }}>
            <Eyebrow tone="inverse">03 — Furniture &amp; Interior Design</Eyebrow>
            <h2 style={{ font: 'var(--type-display-3)', color: 'var(--text-inverse)', margin: 'var(--space-4) 0 var(--space-4)' }}>Peças desenhadas<br />para um só lugar</h2>
            <p style={{ font: 'var(--type-body-sm)', color: 'rgba(244,241,236,.78)' }}>Do levantamento ao assentamento, mobiliário produzido à medida e projeto de interiores completo, coordenado com a obra.</p>
          </div>
        </div>
        <Section style={{ paddingTop: 'var(--space-32)' }}
          action={<button type="button" onClick={() => onNavigate('interiors')} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 0 }}><Meta tone="accent">Ver o atelier →</Meta></button>}
          title="O que o atelier faz">
          <RuleGrid columns={4}>
            {ATELIER.map(([n, t, b]) => (
              <div key={n} onClick={() => onNavigate('interiors')} style={{ padding: 'var(--space-7) var(--space-6) var(--space-8)', cursor: 'pointer' }}>
                <Meta tone="accent">{n}</Meta>
                <h3 style={{ font: 'var(--type-heading-3)', color: 'var(--text-display)', margin: 'var(--space-3) 0' }}>{t}</h3>
                <p style={{ font: 'var(--type-body-sm)' }}>{b}</p>
              </div>
            ))}
          </RuleGrid>
        </Section>
      </div>

      {/* Symbol */}
      <div style={{ background: 'var(--division-group)', color: 'var(--text-inverse-muted)', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'var(--space-16)', alignItems: 'center', padding: 'var(--space-20) var(--gutter-page)' }}>
        <div>
          <Eyebrow tone="inverse">O símbolo</Eyebrow>
          <h2 style={{ font: 'var(--type-heading-1)', color: 'var(--text-inverse)', margin: 'var(--space-4) 0 var(--space-5)' }}>Três “B” interligados,<br />três áreas, um ecossistema</h2>
          <p style={{ font: 'var(--type-body)', color: 'var(--text-inverse-muted)', maxWidth: '48ch' }}>
            A composição do símbolo é formada pela repetição e interligação de três letras “B”, representando a união e a complementaridade das três áreas que integram o grupo.
          </p>
        </div>
        <Slot id="home-symbol" label="símbolo em vetor — enviar SVG" height="230px" dark />
      </div>
    </div>
  );
}

Object.assign(window, { Home });
