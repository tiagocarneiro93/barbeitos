const { Logotype, Eyebrow, Meta, Button, Icon, RuleGrid } = window.BarbeitosGroupDesignSystem_b431cc;

const NAV_IDS = ['realestate', 'construction', 'interiors', 'home'];

function chrome(localeKey) {
  return (window.I18N && window.I18N[localeKey]) || (window.I18N && window.I18N['pt-PT']) || { nav: {}, footer: {}, contactCta: 'Contacto privado' };
}
function localeKeyFor(lang) {
  return (window.I18N_LOCALE_KEY && window.I18N_LOCALE_KEY[lang]) || 'pt-PT';
}

function LangSwitcher({ lang, onLang, inverse }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);
  const languages = window.LANGUAGES || [{ code: 'PT', flag: '🇵🇹', name: 'Português' }];
  const current = languages.find((l) => l.code === lang) || languages[0];
  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button type="button" onClick={() => setOpen((v) => !v)} aria-haspopup="true" aria-expanded={open} style={{
        display: 'flex', alignItems: 'center', gap: '5px', border: 'none', background: 'none', cursor: 'pointer', padding: 0,
        font: 'var(--type-mono)', letterSpacing: 'var(--tracking-mono)',
        color: inverse ? 'var(--text-inverse)' : 'var(--midnight-navy)',
      }}>
        <span style={{ fontSize: '14px', lineHeight: 1 }}>{current.flag}</span>
        <span>{current.code}</span>
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 14px)', right: 0, zIndex: 50, minWidth: '160px',
          background: 'var(--paper-000)', border: '1px solid var(--rule-strong)', boxShadow: 'var(--shadow-menu)',
        }}>
          {languages.map((l) => (
            <button key={l.code} type="button" onClick={() => { onLang(l.code); setOpen(false); }} style={{
              display: 'flex', alignItems: 'center', gap: 'var(--space-3)', width: '100%', border: 'none',
              background: l.code === lang ? 'var(--paper-100)' : 'none', cursor: 'pointer',
              padding: 'var(--space-3) var(--space-4)', font: 'var(--type-body-sm)', color: 'var(--text-body)', textAlign: 'left',
            }}>
              <span style={{ fontSize: '16px', lineHeight: 1 }}>{l.flag}</span>
              <span>{l.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Slot({ id, label, height, ratio, dark, src }) {
  return (
    <div style={{ height: height ? height : undefined, aspectRatio: ratio, width: '100%', background: dark ? 'rgba(244,241,236,.045)' : 'var(--paper-100)' }}>
      <image-slot id={id} shape="rect" fit="cover" placeholder={label} src={src}></image-slot>
    </div>
  );
}

function Header({ route, onNavigate, lang, onLang, tone = 'dark' }) {
  const inverse = tone !== 'paper';
  const [menuOpen, setMenuOpen] = React.useState(false);
  const L = chrome(localeKeyFor(lang));
  const active = (id) => route === id || (id === 'realestate' && route === 'property');
  React.useEffect(() => {
    const mq = window.matchMedia('(min-width: 861px)');
    const onChange = () => { if (mq.matches) setMenuOpen(false); };
    mq.addEventListener ? mq.addEventListener('change', onChange) : mq.addListener(onChange);
    return () => (mq.removeEventListener ? mq.removeEventListener('change', onChange) : mq.removeListener(onChange));
  }, []);
  const go = (id) => { setMenuOpen(false); onNavigate(id); };
  const href = (id) => (window.Router ? window.Router.buildPath(id, lang) : '#');
  const navTo = (id) => (e) => { e.preventDefault(); go(id); };
  const navLinkStyle = (id) => ({
    display: 'inline-block', textDecoration: 'none',
    border: 'none', background: 'none', cursor: 'pointer', padding: '0 0 3px', textAlign: 'left',
    font: 'var(--type-label)', letterSpacing: '.1em', textTransform: 'uppercase',
    color: active(id)
      ? (inverse ? 'var(--text-inverse)' : 'var(--midnight-navy)')
      : (inverse ? 'var(--text-inverse-muted)' : 'var(--text-muted)'),
    borderBottom: '1px solid ' + (active(id) ? 'var(--terracotta-light)' : 'transparent'),
    transition: 'var(--transition-control)',
  });
  const langToggle = <LangSwitcher lang={lang} onLang={onLang} inverse={inverse} />;
  return (
    <header style={{
      background: inverse ? 'var(--division-group)' : 'var(--surface-page)',
      borderBottom: '1px solid ' + (inverse ? 'var(--rule-inverse)' : 'var(--rule)'),
      position: 'sticky', top: 0, zIndex: 40,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-8)', padding: '20px var(--gutter-page)' }}>
        <a href={href('home')} onClick={navTo('home')} style={{ cursor: 'pointer' }}>
          <Logotype size={16} tone={inverse ? 'inverse' : 'navy'} />
        </a>
        <div style={{ display: 'var(--nav-desktop-display, flex)', alignItems: 'center', gap: 'var(--space-8)' }}>
          <nav style={{ display: 'flex', gap: 'var(--space-8)' }}>
            {NAV_IDS.map((id) => (
              <a key={id} href={href(id)} onClick={navTo(id)} style={navLinkStyle(id)}>{L.nav[id]}</a>
            ))}
          </nav>
          <span style={{ width: '1px', height: '14px', background: inverse ? 'var(--rule-inverse-strong)' : 'var(--rule)' }} />
          {langToggle}
          <Button size="sm" variant={inverse ? 'primary' : 'navy'} onClick={() => go('contact')}>{L.contactCta}</Button>
        </div>
        <button type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen((v) => !v)} style={{
          display: 'var(--nav-toggle-display, none)', alignItems: 'center', justifyContent: 'center',
          border: 'none', background: 'none', cursor: 'pointer', padding: 0, width: '32px', height: '32px', flex: '0 0 auto',
        }}>
          <Icon name={menuOpen ? 'x' : 'menu'} size={22} stroke={inverse ? 'var(--text-inverse)' : 'var(--midnight-navy)'} />
        </button>
      </div>
      {menuOpen && (
        <div style={{
          display: 'flex', flexDirection: 'column', gap: 'var(--space-6)',
          padding: 'var(--space-6) var(--gutter-page) var(--space-8)',
          borderTop: '1px solid ' + (inverse ? 'var(--rule-inverse)' : 'var(--rule)'),
        }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            {NAV_IDS.map((id) => (
              <a key={id} href={href(id)} onClick={navTo(id)} style={navLinkStyle(id)}>{L.nav[id]}</a>
            ))}
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-6)' }}>
            {langToggle}
            <Button size="sm" variant={inverse ? 'primary' : 'navy'} onClick={() => go('contact')}>{L.contactCta}</Button>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer({ onNavigate, lang }) {
  const L = chrome(localeKeyFor(lang));
  const href = (id) => (window.Router ? window.Router.buildPath(id, lang) : '#');
  const navTo = (id) => (e) => { e.preventDefault(); onNavigate(id); };
  return (
    <footer style={{ background: 'var(--division-group)', color: 'var(--text-inverse-muted)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 'var(--space-12)', padding: 'var(--space-16) var(--gutter-page) var(--space-10)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          <a href={href('home')} onClick={navTo('home')}><Logotype size={17} tone="inverse" /></a>
          <Meta tone="inverse">{L.footer.cities}</Meta>
        </div>
        <div>
          <Eyebrow tone="inverse">{L.footer.areas}</Eyebrow>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginTop: 'var(--space-4)' }}>
            {NAV_IDS.slice(0, 3).map((id) => (
              <a key={id} href={href(id)} onClick={navTo(id)} style={{ display: 'inline-block', textDecoration: 'none', border: 'none', background: 'none', padding: 0, textAlign: 'left', cursor: 'pointer', font: 'var(--type-body-sm)', color: 'var(--text-inverse-muted)' }}>{L.nav[id]}</a>
            ))}
          </div>
        </div>
        <div>
          <Eyebrow tone="inverse">{L.footer.contact}</Eyebrow>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginTop: 'var(--space-4)', font: 'var(--type-body-sm)' }}>
            <span style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}><Icon name="mail" size={13} /> info@barbeitosgroup.pt</span>
            <span style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}><Icon name="phone" size={13} /> +351 21 000 0000</span>
            <Meta tone="inverse">{L.footer.indicativeContacts}</Meta>
          </div>
        </div>
        <div>
          <Eyebrow tone="inverse">{L.footer.reserved}</Eyebrow>
          <p style={{ font: 'var(--type-body-sm)', marginTop: 'var(--space-4)', marginBottom: 'var(--space-5)' }}>{L.footer.reservedText}</p>
          <Button variant="outline-inverse" size="sm" onClick={() => onNavigate('contact')}>{L.footer.reservedCta}</Button>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: 'var(--space-6) var(--gutter-page)', borderTop: '1px solid var(--rule-inverse)' }}>
        <Meta tone="inverse">{L.footer.copyright}</Meta>
        <Meta tone="inverse">{L.footer.tagline}</Meta>
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
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 'var(--space-10)', marginBottom: 'var(--space-10)' }}>
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

Object.assign(window, { Header, Footer, Section, Slot });
