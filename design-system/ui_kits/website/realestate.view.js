const { Eyebrow, Meta, Button, Card, Badge, Tag, Tabs, Select, Switch, RuleGrid } = window.BarbeitosGroupDesignSystem_b431cc;

function RealEstate({ onNavigate }) {
  const [view, setView] = React.useState('Grelha');
  const [exclusive, setExclusive] = React.useState(true);
  const [region, setRegion] = React.useState('');
  const [kind, setKind] = React.useState('');
  const LISTINGS = window.LISTINGS || [];
  let list = LISTINGS.filter((l) => (!exclusive || l.badge === 'Exclusivo') && (!region || l.region === region) && (!kind || l.kind === kind));
  const openListing = (slug) => onNavigate('property', { slug });
  return (
    <div>
      <div style={{ padding: 'var(--space-12) var(--gutter-page) var(--space-10)', background: 'var(--division-realestate)', color: 'var(--text-inverse-muted)' }}>
        <Eyebrow tone="light">01 — Real Estate Development</Eyebrow>
        <h1 style={{ font: 'var(--type-display-2)', color: 'var(--text-inverse)', margin: 'var(--space-4) 0 var(--space-3)' }}>Portfólio residencial</h1>
        <Meta tone="inverse">18 propriedades · 6 em exclusivo · atualizado a 8 set 2026</Meta>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flexWrap: 'wrap', padding: 'var(--space-4) var(--gutter-page)', background: 'var(--surface-sunken)', borderBottom: '1px solid var(--rule)' }}>
        <div style={{ minWidth: '210px' }}><Select value={region} onChange={(e) => setRegion(e.target.value)} placeholder="Localização" options={['Cascais', 'Lisboa', 'Comporta', 'Sintra', 'Porto']} /></div>
        <div style={{ minWidth: '170px' }}><Select value={kind} onChange={(e) => setKind(e.target.value)} placeholder="Venda ou arrendamento" options={['Venda', 'Arrendamento']} /></div>
        <Tag selected={exclusive} onRemove={exclusive ? () => setExclusive(false) : undefined} onClick={exclusive ? undefined : () => setExclusive(true)}>Em exclusivo</Tag>
        <div style={{ marginLeft: 'auto' }}><Tabs variant="bare" items={['Grelha', 'Lista', 'Mapa']} value={view} onChange={setView} /></div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'var(--grid-sidebar-420, minmax(0,1fr) 420px)' }}>
        <div style={{ padding: 'var(--space-8) var(--space-8) var(--space-12) var(--gutter-page)' }}>
          {view === 'Lista' ? (
            <RuleGrid columns={1}>
              {list.map((l) => (
                <div key={l.slug} onClick={() => openListing(l.slug)} style={{ display: 'flex', gap: 'var(--space-6)', padding: 'var(--space-4)', cursor: 'pointer', alignItems: 'center' }}>
                  <div style={{ width: '150px', flex: '0 0 auto' }}><Slot id={'list-' + l.slug} label="fotografia" ratio="4 / 3" src={l.img} /></div>
                  <div style={{ flex: 1 }}>
                    <Meta>{l.place}</Meta>
                    <h3 style={{ font: 'var(--type-heading-3)', color: 'var(--text-display)', margin: '6px 0' }}>{l.name}</h3>
                    <Meta>{l.meta}</Meta>
                  </div>
                  <span style={{ font: 'var(--type-heading-3)', color: 'var(--text-display)' }}>{l.price}</span>
                </div>
              ))}
            </RuleGrid>
          ) : view === 'Mapa' ? (
            <Slot id="re-map-full" label="mapa em ecrã inteiro — pins das propriedades" height="560px" src="design-system/assets/maps/re-map-full.jpg" />
          ) : (
            // A plain gap, not RuleGrid's 1px hairline: Card has no border and
            // shares the exact same background as the page (both --paper-050),
            // so a 1px rule was the only thing keeping cards from visually
            // running into each other — on the single-column mobile
            // breakpoint that read as one continuous block of photos and text.
            <div style={{ display: 'grid', gridTemplateColumns: 'var(--rule-grid-2, repeat(2,minmax(0,1fr)))', gap: 'var(--grid-gap)' }}>
              {list.map((l) => (
                <Card key={l.slug} interactive onClick={() => openListing(l.slug)}
                  media={<div style={{ position: 'relative' }}>
                    <Slot id={'re-' + l.slug} label="fotografia · 900×700" height="236px" src={l.img} />
                    {l.badge && <span style={{ position: 'absolute', top: '14px', left: '14px' }}><Badge tone={l.tone}>{l.badge}</Badge></span>}
                  </div>}
                  eyebrow={l.place} title={l.name} meta={l.meta}
                  footer={<><span style={{ font: 'var(--type-heading-3)', color: 'var(--text-display)' }}>{l.price}</span><Meta tone="accent">Detalhe →</Meta></>} />
              ))}
            </div>
          )}
          {list.length === 0 && (
            <div style={{ padding: 'var(--space-16) 0', textAlign: 'center' }}>
              <Eyebrow>Sem resultados</Eyebrow>
              <p style={{ font: 'var(--type-body)', marginTop: 'var(--space-4)' }}>Nenhuma propriedade corresponde a esta combinação de filtros.</p>
            </div>
          )}
        </div>
        <div style={{ borderLeft: '1px solid var(--rule)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1, minHeight: '420px' }}><Slot id="re-map" label="mapa — pins das propriedades" height="100%" src="design-system/assets/maps/re-map.jpg" /></div>
          <div style={{ padding: 'var(--space-8) var(--space-8) var(--space-10)', borderTop: '1px solid var(--rule)', background: 'var(--surface-sunken)' }}>
            <Eyebrow>Acesso reservado</Eyebrow>
            <h3 style={{ font: 'var(--type-heading-2)', color: 'var(--text-display)', margin: 'var(--space-3) 0' }}>Oportunidades off-market</h3>
            <p style={{ font: 'var(--type-body-sm)', marginBottom: 'var(--space-5)' }}>Seis propriedades não listadas publicamente. Partilhadas apenas por contacto direto com o consultor.</p>
            <Button fullWidth onClick={() => onNavigate('contact')}>Pedir acesso</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { RealEstate });
