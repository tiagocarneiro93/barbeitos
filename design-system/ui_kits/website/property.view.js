const { Eyebrow, Meta, Button, Badge, RuleGrid, Field, Input, Icon, Tabs } = window.BarbeitosGroupDesignSystem_b431cc;

const BY_GROUP = [
  ['01 Real Estate', 'Promoção e mediação em exclusivo'],
  ['02 Construction', 'Execução integral, garantia de 10 anos'],
  ['03 Interiors', 'Mobiliário à medida, entrega chave-na-mão'],
];
const DATES = ['8 set', '9 set', '11 set'];

const ESTADO_TONE = { 'Disponível': 'success', 'Reservado': 'warning', 'Vendido': 'neutral' };

function GalleryLightbox({ items, index, onIndex, onClose }) {
  React.useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onIndex((index + 1) % items.length);
      if (e.key === 'ArrowLeft') onIndex((index - 1 + items.length) % items.length);
    };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = prevOverflow; window.removeEventListener('keydown', onKey); };
  }, [index, items.length]);

  const item = items[index];
  const navBtnStyle = {
    border: 'none', background: 'none', cursor: 'pointer', padding: 'var(--space-3)', flex: '0 0 auto',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  };
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 100, background: 'var(--midnight-navy)',
      display: 'flex', flexDirection: 'column',
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--space-6) var(--gutter-page)' }}>
        <Meta tone="inverse">{index + 1} / {items.length}</Meta>
        <button type="button" aria-label="Fechar" onClick={onClose} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 0 }}>
          <Icon name="x" size={24} stroke="var(--text-inverse)" />
        </button>
      </div>
      <div onClick={(e) => e.stopPropagation()} style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', gap: 'var(--space-4)', padding: '0 var(--gutter-page) var(--space-6)' }}>
        <button type="button" aria-label="Anterior" onClick={() => onIndex((index - 1 + items.length) % items.length)} style={navBtnStyle}>
          <Icon name="chevron-left" size={28} stroke="var(--text-inverse)" />
        </button>
        <div style={{ flex: '1 1 0%', minWidth: 0, height: '100%', maxWidth: '1100px', margin: '0 auto' }}>
          <Slot id={'lightbox-' + item.id} label={item.label} height="100%" dark src={item.src} />
        </div>
        <button type="button" aria-label="Seguinte" onClick={() => onIndex((index + 1) % items.length)} style={navBtnStyle}>
          <Icon name="chevron-right" size={28} stroke="var(--text-inverse)" />
        </button>
      </div>
      <Meta tone="inverse" style={{ display: 'block', textAlign: 'center', paddingBottom: 'var(--space-6)' }}>{item.label}</Meta>
    </div>
  );
}

// One row per fração: Tipologia, Área, Piso, Estado, and a "Ver planta" button
// that opens that unit's own floor plan — a building has no single plan the
// way a single apartment does. Built as one flat RuleGrid (header row +
// data rows, 5 cells each) rather than a nested table, matching how the
// rest of the site renders tabular data.
function FracoesTable({ fracoes, onOpenPlan }) {
  const headerStyle = { padding: 'var(--space-4) var(--space-5)', background: 'var(--surface-sunken)' };
  const cellStyle = { padding: 'var(--space-4) var(--space-5)', display: 'flex', alignItems: 'center' };
  const cells = [
    <div key="h-tip" style={headerStyle}><Meta tone="strong">Tipologia</Meta></div>,
    <div key="h-area" style={headerStyle}><Meta tone="strong">Área</Meta></div>,
    <div key="h-piso" style={headerStyle}><Meta tone="strong">Piso</Meta></div>,
    <div key="h-estado" style={headerStyle}><Meta tone="strong">Estado</Meta></div>,
    <div key="h-planta" style={headerStyle}><Meta tone="strong">Planta</Meta></div>,
  ];
  fracoes.forEach((f, i) => {
    cells.push(
      <div key={f.id + '-tip'} style={cellStyle}>{f.tipologia}</div>,
      <div key={f.id + '-area'} style={cellStyle}>{f.area}</div>,
      <div key={f.id + '-piso'} style={cellStyle}>{f.piso}</div>,
      <div key={f.id + '-estado'} style={cellStyle}><Badge tone={ESTADO_TONE[f.estado] || 'neutral'}>{f.estado}</Badge></div>,
      <div key={f.id + '-planta'} style={cellStyle}>
        <button type="button" onClick={() => onOpenPlan(i)} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
          <Meta tone="accent">Ver planta →</Meta>
        </button>
      </div>
    );
  });
  return (
    // Five columns is too tight to reflow on a phone — scroll the table
    // horizontally within its own box instead of letting it force the page
    // wider (the same grid-blowout class of bug fixed elsewhere on this
    // page: minWidth here is a floor for readability, not a blowout risk,
    // since overflow-x:auto contains it to this box).
    <div style={{ overflowX: 'auto', marginTop: 'var(--space-5)' }}>
      <RuleGrid template="repeat(5,minmax(120px,1fr))" style={{ minWidth: '640px' }}>
        {cells}
      </RuleGrid>
    </div>
  );
}

function NotFound({ onNavigate }) {
  return (
    <div style={{ padding: 'var(--space-20) var(--gutter-page)', textAlign: 'center' }}>
      <Eyebrow style={{ justifyContent: 'center' }}>Imobiliário</Eyebrow>
      <h1 style={{ font: 'var(--type-display-2)', margin: 'var(--space-4) 0 var(--space-6)' }}>Anúncio não encontrado</h1>
      <p style={{ font: 'var(--type-body)', marginBottom: 'var(--space-8)' }}>Este imóvel já não está disponível ou a ligação está incorreta.</p>
      <Button onClick={() => onNavigate('realestate')}>Ver portfólio</Button>
    </div>
  );
}

function Property({ onNavigate, slug }) {
  const [date, setDate] = React.useState('8 set');
  const [sent, setSent] = React.useState(false);
  const [lightboxIndex, setLightboxIndex] = React.useState(null);
  const [planIndex, setPlanIndex] = React.useState(null);
  const listing = (window.LISTINGS || []).find((l) => l.slug === slug);

  if (!listing) return <NotFound onNavigate={onNavigate} />;

  const gallery = listing.gallery || [];
  const extraCount = Math.max(0, gallery.length - 3);
  const isEmpreendimento = listing.type === 'empreendimento';
  const consultant = listing.consultant || null;
  // Recipient logic for the visit-request form below: a listing with its own
  // consultant goes to that consultant, cc'd to the group's general inbox;
  // one without goes to the general inbox alone. There's no backend on this
  // static site to actually place the send, so submission is mocked (same
  // as everywhere else on the site) — this computes the real routing a
  // future email integration (e.g. EmailJS, keyed off these two values)
  // would use as its to/cc.
  const requestTo = consultant ? consultant.email : window.GLOBAL_CONTACT_EMAIL;
  const requestCc = consultant ? window.GLOBAL_CONTACT_EMAIL : null;
  const planItems = isEmpreendimento
    ? (listing.fracoes || []).map((f) => ({ id: f.plan.id, label: f.plan.label, src: f.plan.src }))
    : (listing.plan ? [listing.plan] : []);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--space-4) var(--gutter-page)', background: 'var(--surface-page)', borderBottom: '1px solid var(--rule)' }}>
        <button type="button" onClick={() => onNavigate('realestate')} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}><Meta tone="strong">← Portfólio</Meta></button>
        <Meta>Ref. {listing.ref}</Meta>
      </div>

      <RuleGrid template="var(--grid-detail, 2fr 1fr)">
        <div onClick={() => gallery[0] && setLightboxIndex(0)} style={{ cursor: gallery[0] ? 'pointer' : 'default' }}>
          <Slot id={gallery[0] ? gallery[0].id : 'gallery-hero'} label={gallery[0] ? gallery[0].label : 'fotografia principal'} height="520px" src={gallery[0] && gallery[0].src} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr)', gridTemplateRows: 'minmax(0,1fr) minmax(0,1fr)', gap: '1px', background: 'var(--rule)', height: '520px' }}>
          <div onClick={() => gallery[1] && setLightboxIndex(1)} style={{ background: 'var(--surface-card)', cursor: gallery[1] ? 'pointer' : 'default', minWidth: 0, minHeight: 0 }}>
            <Slot id={gallery[1] ? gallery[1].id : 'gallery-2'} label={gallery[1] ? gallery[1].label : 'fotografia'} height="100%" src={gallery[1] && gallery[1].src} />
          </div>
          <div onClick={() => gallery[2] && setLightboxIndex(2)} style={{ background: 'var(--surface-card)', position: 'relative', cursor: gallery[2] ? 'pointer' : 'default', minWidth: 0, minHeight: 0 }}>
            <Slot id={gallery[2] ? gallery[2].id : 'gallery-3'} label={gallery[2] ? gallery[2].label : 'fotografia'} height="100%" src={gallery[2] && gallery[2].src} />
            {extraCount > 0 && (
              <span style={{ position: 'absolute', right: '16px', bottom: '16px' }} onClick={(e) => { e.stopPropagation(); setLightboxIndex(3); }}>
                <Badge tone="outline">+ {extraCount} fotografias</Badge>
              </span>
            )}
          </div>
        </div>
      </RuleGrid>

      {lightboxIndex !== null && (
        <GalleryLightbox items={gallery} index={lightboxIndex} onIndex={setLightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
      {planIndex !== null && (
        <GalleryLightbox items={planItems} index={planIndex} onIndex={setPlanIndex} onClose={() => setPlanIndex(null)} />
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'var(--grid-sidebar-420, minmax(0,1fr) 420px)' }}>
        <div style={{ padding: 'var(--space-12) var(--gutter-page) var(--space-16)', minWidth: 0 }}>
          <Eyebrow>{listing.eyebrow}</Eyebrow>
          <h1 style={{ font: 'var(--type-display-2)', margin: 'var(--space-4) 0 var(--space-2)' }}>{listing.name}</h1>
          <div style={{ font: 'var(--type-heading-1)', color: 'var(--text-accent)', marginBottom: 'var(--space-8)' }}>{listing.price}</div>
          <p style={{ font: 'var(--type-body-lg)', maxWidth: '62ch', marginBottom: 'var(--space-10)' }}>{listing.description}</p>

          {isEmpreendimento ? (
            <>
              <Eyebrow>Frações · {listing.fracoes.length}</Eyebrow>
              <FracoesTable fracoes={listing.fracoes} onOpenPlan={setPlanIndex} />
            </>
          ) : (
            <>
              <RuleGrid columns={4} style={{ marginBottom: 'var(--space-12)' }}>
                {(listing.specs || []).map(([k, v]) => (
                  <div key={k} style={{ padding: 'var(--space-6) var(--space-5)' }}>
                    <Meta>{k}</Meta>
                    <div style={{ font: 'var(--type-heading-2)', color: 'var(--text-display)', marginTop: 'var(--space-2)' }}>{v}</div>
                  </div>
                ))}
              </RuleGrid>

              {listing.plan && (
                <>
                  <Eyebrow>Planta</Eyebrow>
                  <div onClick={() => setPlanIndex(0)} style={{ margin: 'var(--space-5) 0 var(--space-12)', border: '1px solid var(--rule)', cursor: 'pointer' }}>
                    <Slot id={listing.plan.id} label={listing.plan.label} height="250px" src={listing.plan.src} />
                  </div>
                </>
              )}
            </>
          )}

          <div style={{ borderTop: '1px solid var(--rule)', paddingTop: 'var(--space-8)', marginTop: isEmpreendimento ? 'var(--space-12)' : 0 }}>
            <Eyebrow>Feito pelo grupo</Eyebrow>
            <div style={{ display: 'grid', gridTemplateColumns: 'var(--rule-grid-3, repeat(3,minmax(0,1fr)))', gap: 'var(--space-5)', marginTop: 'var(--space-5)' }}>
              {BY_GROUP.map(([k, v]) => (
                <div key={k} style={{ border: '1px solid var(--rule)', padding: 'var(--space-5) var(--space-6)', minWidth: 0 }}>
                  <Meta>{k}</Meta>
                  <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-strong)', marginTop: 'var(--space-3)' }}>{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderLeft: '1px solid var(--rule)', background: 'var(--surface-sunken)', padding: 'var(--space-10) var(--space-8) var(--space-12)', minWidth: 0 }}>
          <div style={{ border: '1px solid var(--rule-strong)', background: 'var(--paper-000)', padding: 'var(--space-8) var(--space-7) var(--space-9)' }}>
            <Eyebrow>Visita privada</Eyebrow>
            <h3 style={{ font: 'var(--type-heading-2)', color: 'var(--text-display)', margin: 'var(--space-4) 0 var(--space-6)' }}>Agendar com o consultor</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
              <Field label="Nome" htmlFor="pv-n"><Input id="pv-n" placeholder="Nome completo" /></Field>
              <Field label="Email" htmlFor="pv-e"><Input id="pv-e" type="email" placeholder="nome@empresa.com" /></Field>
              <Field label="Telefone" htmlFor="pv-t"><Input id="pv-t" placeholder="+351" /></Field>
              <div>
                <Meta style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Data preferida</Meta>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                  {DATES.map((d) => (
                    <button key={d} type="button" onClick={() => setDate(d)} style={{
                      flex: 1, padding: '12px 0', cursor: 'pointer', background: 'transparent',
                      border: '1px solid ' + (date === d ? 'var(--midnight-navy)' : 'var(--rule-strong)'),
                      font: 'var(--type-mono)', letterSpacing: 'var(--tracking-mono)',
                      color: date === d ? 'var(--midnight-navy)' : 'var(--text-faint)',
                      transition: 'var(--transition-control)',
                    }}>{d}</button>
                  ))}
                </div>
              </div>
            </div>
            <Button fullWidth onClick={() => {
              // Mocked send (no backend on this static site) — logs the
              // routing this request would actually use, so the to/cc logic
              // is visible and testable ahead of a real email integration.
              console.log('[pedido de visita] mock — seria enviado para', requestTo, requestCc ? 'com cc para ' + requestCc : '(sem cc)');
              setSent(true);
            }}>{sent ? 'Pedido enviado' : 'Confirmar pedido'}</Button>
            <Meta style={{ display: 'block', marginTop: 'var(--space-4)', lineHeight: 1.7 }}>
              {consultant ? `Resposta em 24 h de ${consultant.name}.` : 'Resposta em 24 h da nossa equipa.'} Visitas acompanhadas, sem partilha de dados com terceiros.
            </Meta>
          </div>

          {consultant && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-8)', paddingTop: 'var(--space-6)', borderTop: '1px solid var(--rule)' }}>
              <div style={{ width: '56px', height: '56px', flex: '0 0 auto' }}><Slot id={'consultant-' + listing.slug} label="retrato" height="56px" src={consultant.photo} /></div>
              <div>
                <div style={{ font: 'var(--weight-medium) var(--size-body-sm)/1.4 var(--font-core)', color: 'var(--text-display)' }}>{consultant.name}</div>
                <Meta style={{ display: 'block', marginTop: '5px' }}>{consultant.phone}</Meta>
              </div>
            </div>
          )}
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 'var(--space-2)',
            marginTop: consultant ? 'var(--space-5)' : 'var(--space-8)',
            paddingTop: consultant ? 0 : 'var(--space-6)',
            borderTop: consultant ? 'none' : '1px solid var(--rule)',
          }}>
            <Button variant="secondary" fullWidth icon="download" iconPosition="left">Descarregar dossier</Button>
            <Button variant="secondary" fullWidth>Simular financiamento</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Property });
