const { Logotype, Eyebrow, Meta, Button, Icon, RuleGrid } = window.BarbeitosGroupDesignSystem_b431cc;

const NAV = [
  { id: 'realestate', label: 'Imobiliário' },
  { id: 'construction', label: 'Construção' },
  { id: 'interiors', label: 'Interiores' },
  { id: 'home', label: 'Grupo' },
];

function Slot({ id, label, height, ratio, dark }) {
  return (
    <div style={{ height: height ? height : undefined, aspectRatio: ratio, width: '100%', background: dark ? 'rgba(244,241,236,.045)' : 'var(--paper-100)' }}>
      <image-slot id={id} shape="rect" fit="cover" placeholder={label}></image-slot>
    </div>
  );
}

function Header({ route, onNavigate, lang, onLang, tone = 'dark' }) {
  const inverse = tone !== 'paper';
  const active = (id) => route === id || (id === 'realestate' && route === 'property');
  return (
    <header style={{
      background: inverse ? 'var(--division-group)' : 'var(--surface-page)',
      borderBottom: '1px solid ' + (inverse ? 'var(--rule-inverse)' : 'var(--rule)'),
      position: 'sticky', top: 0, zIndex: 40,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-8)', padding: '20px var(--gutter-page)' }}>
        <div onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
          <Logotype size={16} tone={inverse ? 'inverse' : 'navy'} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}>
          <nav style={{ display: 'flex', gap: 'var(--space-8)' }}>
            {NAV.map((n) => (
              <button key={n.id} type="button" onClick={() => onNavigate(n.id)} style={{
                border: 'none', background: 'none', cursor: 'pointer', padding: '0 0 3px',
                font: 'var(--type-label)', letterSpacing: '.1em', textTransform: 'uppercase',
                color: active(n.id)
                  ? (inverse ? 'var(--text-inverse)' : 'var(--midnight-navy)')
                  : (inverse ? 'var(--text-inverse-muted)' : 'var(--text-muted)'),
                borderBottom: '1px solid ' + (active(n.id) ? 'var(--terracotta-light)' : 'transparent'),
                transition: 'var(--transition-control)',
              }}>{n.label}</button>
            ))}
          </nav>
          <span style={{ width: '1px', height: '14px', background: inverse ? 'var(--rule-inverse-strong)' : 'var(--rule)' }} />
          <div style={{ display: 'flex', gap: '6px' }}>
            {['PT', 'EN'].map((l, i) => (
              <React.Fragment key={l}>
                {i === 1 && <Meta tone={inverse ? 'inverse' : 'faint'}>/</Meta>}
                <button type="button" onClick={() => onLang(l)} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer', font: 'var(--type-mono)', letterSpacing: 'var(--tracking-mono)', color: lang === l ? (inverse ? 'var(--text-inverse)' : 'var(--midnight-navy)') : (inverse ? 'var(--text-inverse-faint)' : 'var(--text-faint)') }}>{l}</button>
              </React.Fragment>
            ))}
          </div>
          <Button size="sm" variant={inverse ? 'primary' : 'navy'} onClick={() => onNavigate('contact')}>Contacto privado</Button>
        </div>
      </div>
    </header>
  );
}

function Footer({ onNavigate }) {
  return (
    <footer style={{ background: 'var(--division-group)', color: 'var(--text-inverse-muted)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 'var(--space-12)', padding: 'var(--space-16) var(--gutter-page) var(--space-10)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          <Logotype size={17} tone="inverse" />
          <Meta tone="inverse">Braga · Lisboa · Cascais</Meta>
        </div>
        <div>
          <Eyebrow tone="inverse">Áreas</Eyebrow>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginTop: 'var(--space-4)' }}>
            {NAV.slice(0, 3).map((n) => (
              <button key={n.id} type="button" onClick={() => onNavigate(n.id)} style={{ border: 'none', background: 'none', padding: 0, textAlign: 'left', cursor: 'pointer', font: 'var(--type-body-sm)', color: 'var(--text-inverse-muted)' }}>{n.label}</button>
            ))}
          </div>
        </div>
        <div>
          <Eyebrow tone="inverse">Contacto</Eyebrow>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginTop: 'var(--space-4)', font: 'var(--type-body-sm)' }}>
            <span style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}><Icon name="mail" size={13} /> info@barbeitosgroup.pt</span>
            <span style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}><Icon name="phone" size={13} /> +351 21 000 0000</span>
            <Meta tone="inverse">Contactos indicativos</Meta>
          </div>
        </div>
        <div>
          <Eyebrow tone="inverse">Acesso reservado</Eyebrow>
          <p style={{ font: 'var(--type-body-sm)', marginTop: 'var(--space-4)', marginBottom: 'var(--space-5)' }}>Seis propriedades off-market, partilhadas por contacto direto.</p>
          <Button variant="outline-inverse" size="sm" onClick={() => onNavigate('contact')}>Pedir acesso</Button>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: 'var(--space-6) var(--gutter-page)', borderTop: '1px solid var(--rule-inverse)' }}>
        <Meta tone="inverse">© 2026 Barbeitos Group</Meta>
        <Meta tone="inverse">Building your dreams</Meta>
      </div>
    </footer>
  );
}

function Section({ eyebrow, title, lead, tone = 'paper', action, children, ...rest }) {
  const dark = tone === 'onyx' || tone === 'navy' || tone === 'graphite' || tone === 'terracotta';
  const bg = { paper: 'var(--surface-page)', sunken: 'var(--surface-sunken)', onyx: 'var(--division-group)', navy: 'var(--division-realestate)', graphite: 'var(--division-construction)', terracotta: 'var(--division-interiors)' }[tone];
  return (
    <section {...rest} style={{ background: bg, color: dark ? 'var(--text-inverse-muted)' : 'var(--text-body)', padding: 'var(--section-y) var(--gutter-page)', ...rest.style }}>
      {(eyebrow || title) && (
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 'var(--space-10)', marginBottom: 'var(--space-10)' }}>
          <div style={{ maxWidth: 'var(--container-narrow)' }}>
            {eyebrow && <Eyebrow tone={dark ? 'light' : 'accent'}>{eyebrow}</Eyebrow>}
            {title && <h2 style={{ font: 'var(--type-display-3)', color: dark ? 'var(--text-inverse)' : 'var(--text-display)', margin: 'var(--space-4) 0 0' }}>{title}</h2>}
            {lead && <p style={{ font: 'var(--type-body-lg)', color: dark ? 'var(--text-inverse-muted)' : 'var(--text-body)', maxWidth: '58ch', marginTop: 'var(--space-4)' }}>{lead}</p>}
          </div>
          {action}
        </div>
      )}
      {children}
    </section>
  );
}

Object.assign(window, { Header, Footer, Section, Slot, NAV });
