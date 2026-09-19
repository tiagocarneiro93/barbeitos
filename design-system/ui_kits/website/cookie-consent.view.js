const { Eyebrow, Button, Switch } = window.BarbeitosGroupDesignSystem_b431cc;

/* Cookie consent banner + settings dialog — see cookie-consent.js for the
 * underlying store (window.CookieConsent) and category list. Mounted once
 * at the app root (index.html's Site()) so it persists across route
 * changes instead of remounting (and re-showing) on every navigation.
 *
 * No analytics or marketing scripts are actually wired into this site
 * yet (it's a demo — the contact/quote forms are mocked, not wired to a
 * real backend either), so accepting or rejecting those two categories
 * has no visible effect today. The banner still asks up front rather
 * than after the fact: EU/CNPD rules require consent BEFORE any
 * non-essential cookie is set, not "we'll ask once we add tracking" —
 * building the gate now means a future <script src="...ga.js"> just
 * needs `if (window.CookieConsent.get()?.analytics) { ... }` in front of
 * it, instead of retrofitting consent onto an already-loaded script.
 *
 * Compliance choices this reflects (EDPB Cookie Banner Taskforce, 2023;
 * CNPD has issued no cookie-specific guidance beyond the same EU
 * baseline): "Rejeitar tudo" is on the same first layer as "Aceitar
 * tudo", not hidden behind "Personalizar"; non-essential categories
 * default to off (no pre-ticked boxes); the choice is stored, not
 * re-asked every visit, but stays changeable at any time via the
 * "Definições de cookies" footer link (chrome.view.js).
 */
function CookieConsentBanner({ onNavigate, lang }) {
  const [stage, setStage] = React.useState(() => (window.CookieConsent.get() ? 'hidden' : 'banner'));
  const [draft, setDraft] = React.useState(() => draftFrom(window.CookieConsent.get()));
  const panelRef = React.useRef(null);

  function draftFrom(base) {
    const prefs = { necessary: true };
    window.COOKIE_CONSENT_CATEGORIES.forEach((c) => { prefs[c.key] = c.locked ? true : !!(base && base[c.key]); });
    return prefs;
  }

  const openCustomize = () => { setDraft(draftFrom(window.CookieConsent.get())); setStage('customize'); };
  const closeCustomize = () => setStage(window.CookieConsent.get() ? 'hidden' : 'banner');

  React.useEffect(() => {
    window.addEventListener('cookie-consent:open-settings', openCustomize);
    return () => window.removeEventListener('cookie-consent:open-settings', openCustomize);
  }, []);

  // The settings dialog is a real modal (has a backdrop, blocks the rest
  // of the page) so it gets the same focus-in/focus-restore treatment as
  // GalleryLightbox in property.view.js; the plain banner below doesn't,
  // since it's a persistent bar rather than something that takes over
  // the screen.
  React.useEffect(() => {
    if (stage !== 'customize') return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const opener = document.activeElement;
    panelRef.current && panelRef.current.focus();
    const onKey = (e) => { if (e.key === 'Escape') closeCustomize(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
      opener && opener.focus && opener.focus();
    };
  }, [stage]);

  if (stage === 'hidden') return null;

  const acceptAll = () => { window.CookieConsent.acceptAll(); setStage('hidden'); };
  const rejectAll = () => { window.CookieConsent.rejectAll(); setStage('hidden'); };
  const savePrefs = () => { window.CookieConsent.set(draft); setStage('hidden'); };

  const cookiesHref = window.Router ? window.Router.buildPath('cookies', lang) : '#';
  const goToCookies = (e) => { e.preventDefault(); onNavigate('cookies'); };
  const linkStyle = { color: 'var(--terracotta-brown)' };
  const buttonRow = { display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' };

  if (stage === 'customize') {
    return (
      <div onClick={closeCustomize} role="dialog" aria-modal="true" aria-label="Preferências de cookies" style={{
        position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(12,25,53,.55)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-6)',
      }}>
        {/* Header and footer (with the actual accept/reject/save actions)
            stay fixed regardless of viewport height; only the category
            list scrolls. Buttons that only appear after the dialog is
            scrolled — which the original single-block layout did on
            ordinary laptop heights once "Guardar preferências" wrapped
            to its own row — would make rejecting or saving a choice
            harder to find than accepting, which is exactly the kind of
            friction EU regulators flag cookie banners for. */}
        <div onClick={(e) => e.stopPropagation()} ref={panelRef} tabIndex={-1} style={{
          background: 'var(--surface-page)', width: '100%', maxWidth: '560px', maxHeight: '86vh',
          display: 'flex', flexDirection: 'column', outline: 'none',
        }}>
          <div style={{ padding: 'var(--space-8) var(--space-8) 0' }}>
            <Eyebrow>Cookies</Eyebrow>
            <h2 style={{ font: 'var(--type-heading-2)', color: 'var(--text-display)', margin: 'var(--space-3) 0 var(--space-5)' }}>Preferências de cookies</h2>
            <p style={{ font: 'var(--type-body-sm)', marginBottom: 'var(--space-2)' }}>
              Escolha que tipos de cookies aceita. Pode alterar esta escolha a qualquer momento em "Definições de cookies", no rodapé do site — ver <a href={cookiesHref} onClick={goToCookies} style={linkStyle}>política de cookies</a>.
            </p>
          </div>
          <div style={{ flex: '1 1 auto', minHeight: 0, overflowY: 'auto', padding: '0 var(--space-8)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', padding: 'var(--space-4) 0 var(--space-6)' }}>
              {window.COOKIE_CONSENT_CATEGORIES.map((c) => (
                <div key={c.key} style={{ borderTop: '1px solid var(--rule)', paddingTop: 'var(--space-4)' }}>
                  <Switch label={c.label} checked={draft[c.key]} disabled={c.locked}
                    onChange={(e) => setDraft((d) => ({ ...d, [c.key]: e.target.checked }))} />
                  <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', margin: 'var(--space-2) 0 0 52px' }}>{c.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding: 'var(--space-6) var(--space-8)', borderTop: '1px solid var(--rule)', flex: '0 0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <Button variant="secondary" onClick={rejectAll} style={{ flex: 1 }}>Rejeitar tudo</Button>
                <Button variant="secondary" onClick={acceptAll} style={{ flex: 1 }}>Aceitar tudo</Button>
              </div>
              <Button variant="primary" fullWidth onClick={savePrefs}>Guardar preferências</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div role="region" aria-label="Consentimento de cookies" aria-live="polite" style={{
      position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 150,
      background: 'var(--surface-page)', borderTop: '1px solid var(--rule)',
      boxShadow: '0 -4px 16px rgba(12,25,53,.12)',
      padding: 'var(--space-6) var(--gutter-page)',
      display: 'flex', flexWrap: 'wrap', gap: 'var(--space-5)', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <p style={{ font: 'var(--type-body-sm)', maxWidth: '640px', margin: 0 }}>
        Utilizamos cookies para o site funcionar corretamente e, com o seu consentimento, para preferências, analítica e marketing. Pode aceitar tudo, rejeitar tudo, ou escolher em detalhe — ver <a href={cookiesHref} onClick={goToCookies} style={linkStyle}>política de cookies</a>.
      </p>
      <div style={buttonRow}>
        <Button variant="secondary" onClick={rejectAll}>Rejeitar tudo</Button>
        <Button variant="primary" onClick={acceptAll}>Aceitar tudo</Button>
        <Button variant="ghost" onClick={openCustomize}>Personalizar</Button>
      </div>
    </div>
  );
}

Object.assign(window, { CookieConsentBanner });
