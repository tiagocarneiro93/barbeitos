const { Eyebrow, Meta, Button, Tabs, RuleGrid } = window.BarbeitosGroupDesignSystem_b431cc;

const PIECES = [
  ['Mesa Sal', 'carvalho maciço · 240 cm', 'Sala', 'design-system/assets/interiors/int-mesa-sal.jpg'],
  ['Cadeira Birre', 'nogueira e couro', 'Sala', 'design-system/assets/interiors/int-cadeira-birre.jpg'],
  ['Sala Marinha', 'projeto completo · 92 m²', 'Sala', 'design-system/assets/interiors/int-sala-marinha.jpg'],
  ['Candeeiro Onyx', 'latão escurecido', 'Iluminação', 'design-system/assets/interiors/int-candeeiro-onyx.jpg'],
  ['Suite Faias', 'freixo e linho · projeto completo', 'Quarto', 'design-system/assets/interiors/int-suite-faias.jpg'],
  ['Terraço Comporta', 'teca e pedra · 40 m²', 'Exterior', 'design-system/assets/interiors/int-terraco-comporta.jpg'],
];
const PROCESS = [
  ['01', 'Levantamento e briefing', 'visita ao espaço, medições, orçamento-quadro'],
  ['02', 'Conceito e materiais', 'moodboard, plantas, amostras físicas'],
  ['03', 'Produção à medida', 'marcenaria própria, 6 a 10 semanas'],
  ['04', 'Montagem e entrega', 'coordenação com a obra, styling final'],
];

function Interiors({ onNavigate }) {
  const [filter, setFilter] = React.useState('Todas');
  const list = PIECES.filter((p) => filter === 'Todas' || p[2] === filter);
  return (
    <div>
      <div style={{ position: 'relative', background: 'var(--surface-page)' }}>
        <Slot id="int-hero" label="fotografia — interior assinado pelo atelier" height="460px" src="design-system/assets/interiors/int-hero.jpg" />
        <div style={{ position: 'absolute', left: 'var(--gutter-page)', bottom: '-64px', width: '520px', background: 'var(--terracotta-brown)', color: 'var(--text-inverse)', padding: 'var(--space-10) var(--space-10) var(--space-12)' }}>
          <Eyebrow tone="inverse">Furniture &amp; Interior Design</Eyebrow>
          <h1 style={{ font: 'var(--type-display-3)', color: 'var(--text-inverse)', margin: 'var(--space-4) 0 var(--space-4)' }}>Peças desenhadas<br />para um só lugar</h1>
          <p style={{ font: 'var(--type-body-sm)', color: 'rgba(244,241,236,.78)' }}>Do levantamento ao assentamento, mobiliário produzido à medida e projeto de interiores completo, coordenado com a obra.</p>
        </div>
      </div>

      <div style={{ padding: 'var(--space-32) var(--gutter-page) var(--space-8)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 'var(--space-7)' }}>
          <h2 style={{ font: 'var(--type-display-3)' }}>Peças e espaços</h2>
          <Tabs variant="bare" items={['Todas', 'Sala', 'Quarto', 'Exterior', 'Iluminação']} value={filter} onChange={setFilter} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,minmax(0,1fr))', gap: 'var(--space-6)' }}>
          {list.map(([n, d, cat, img]) => (
            <div key={n}>
              <Slot id={'int-' + n.slice(0, 6)} label="peça ou espaço · atelier" ratio="4 / 5" src={img} />
              <h3 style={{ font: 'var(--type-heading-3)', color: 'var(--text-display)', margin: 'var(--space-4) 0 var(--space-2)' }}>{n}</h3>
              <Meta>{d}</Meta>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '0 var(--gutter-page) var(--section-y)' }}>
        <RuleGrid columns={2}>
          <div style={{ padding: 'var(--space-10)' }}>
            <Eyebrow>Projeto de interiores</Eyebrow>
            <div style={{ marginTop: 'var(--space-5)' }}>
              {PROCESS.map(([n, t, b], i) => (
                <div key={n} style={{ display: 'flex', gap: 'var(--space-5)', padding: 'var(--space-4) 0', borderBottom: i < 3 ? '1px solid var(--rule)' : 'none' }}>
                  <Meta tone="accent" style={{ width: '26px', flex: '0 0 auto' }}>{n}</Meta>
                  <div>
                    <div style={{ font: 'var(--weight-medium) var(--size-body) /1.4 var(--font-core)', color: 'var(--text-display)' }}>{t}</div>
                    <Meta style={{ display: 'block', marginTop: '6px' }}>{b}</Meta>
                  </div>
                </div>
              ))}
            </div>
            <Button style={{ marginTop: 'var(--space-7)' }} onClick={() => onNavigate('contact')}>Marcar reunião no atelier</Button>
          </div>
          <Slot id="int-materials" label="amostras de materiais — madeira, pedra, tecido" height="100%" src="design-system/assets/interiors/int-materials.jpg" />
        </RuleGrid>
      </div>
    </div>
  );
}

Object.assign(window, { Interiors });
