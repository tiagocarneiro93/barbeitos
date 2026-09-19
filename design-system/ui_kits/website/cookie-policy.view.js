const { Meta, Button } = window.BarbeitosGroupDesignSystem_b431cc;

/* Cookie policy page — linked from the consent banner (cookie-consent.view.js)
 * and the footer (chrome.view.js). Content below is a good-faith summary
 * matching the categories actually offered in the banner, written to be
 * genuinely accurate for this site as it stands today (no analytics/
 * marketing scripts wired up yet — see cookie-consent.js). It is NOT a
 * substitute for a real legal review before this site goes live: a
 * Portuguese lawyer should confirm this against Lei n.º 41/2004 (as
 * amended), the GDPR, and whatever CNPD guidance applies once the site
 * actually has a controller, a DPO (if required), and real third-party
 * scripts to disclose.
 */
function CookiePolicy({ onNavigate }) {
  const email = window.GLOBAL_CONTACT_EMAIL || 'info@barbeitosgroup.pt';
  return (
    <Section eyebrow="Legal" title="Política de cookies" lead="Como o site barbeitosgroup.pt utiliza cookies e como pode gerir as suas preferências.">
      <div style={{ maxWidth: '72ch', display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
        <div>
          <h3 style={{ font: 'var(--type-heading-2)', color: 'var(--text-display)', marginBottom: 'var(--space-3)' }}>O que são cookies</h3>
          <p style={{ font: 'var(--type-body)' }}>
            Cookies são pequenos ficheiros de texto guardados no seu dispositivo quando visita um site. Permitem que o site
            reconheça o seu dispositivo em visitas seguintes, guarde escolhas (como o consentimento dado nesta página) e,
            quando autorizado, perceba como o site é utilizado.
          </p>
        </div>

        <div>
          <h3 style={{ font: 'var(--type-heading-2)', color: 'var(--text-display)', marginBottom: 'var(--space-3)' }}>Categorias de cookies utilizadas</h3>
          <p style={{ font: 'var(--type-body)', marginBottom: 'var(--space-5)' }}>
            Pedimos o seu consentimento antes de ativar qualquer cookie que não seja estritamente necessário, e pode escolher
            cada categoria em separado:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            {window.COOKIE_CONSENT_CATEGORIES.map((c) => (
              <div key={c.key} style={{ borderTop: '1px solid var(--rule)', paddingTop: 'var(--space-4)' }}>
                <h4 style={{ font: 'var(--type-heading-3)', color: 'var(--text-display)', margin: '0 0 var(--space-2)' }}>
                  {c.label}{c.locked && <Meta tone="accent" style={{ marginLeft: 'var(--space-3)' }}>Sempre ativos</Meta>}
                </h4>
                <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)' }}>{c.description}</p>
              </div>
            ))}
          </div>
          <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', marginTop: 'var(--space-5)' }}>
            Neste momento não temos cookies de analítica, marketing ou terceiros ativos — apenas a categoria "Necessários"
            está em uso, para guardar a sua escolha de cookies (localmente, no seu próprio dispositivo). Se isso mudar, esta
            página e o separador de preferências serão atualizados antes de qualquer novo cookie ser colocado.
          </p>
        </div>

        <div>
          <h3 style={{ font: 'var(--type-heading-2)', color: 'var(--text-display)', marginBottom: 'var(--space-3)' }}>Como gerir as suas preferências</h3>
          <p style={{ font: 'var(--type-body)', marginBottom: 'var(--space-5)' }}>
            Pode aceitar, rejeitar ou personalizar a sua escolha a qualquer momento — não só na primeira visita. A escolha
            fica guardada no seu dispositivo até a alterar ou apagar os dados de navegação do site.
          </p>
          <Button onClick={() => window.CookieConsent.openSettings()}>Gerir preferências de cookies</Button>
        </div>

        <div>
          <h3 style={{ font: 'var(--type-heading-2)', color: 'var(--text-display)', marginBottom: 'var(--space-3)' }}>Mais informação</h3>
          <p style={{ font: 'var(--type-body)' }}>
            Para questões sobre esta política ou sobre os seus dados, contacte-nos em{' '}
            <a href={'mailto:' + email} style={{ color: 'var(--terracotta-brown)' }}>{email}</a>. Em Portugal, a autoridade de
            controlo é a CNPD — Comissão Nacional de Proteção de Dados (<a href="https://www.cnpd.pt" style={{ color: 'var(--terracotta-brown)' }} target="_blank" rel="noopener noreferrer">www.cnpd.pt</a>).
          </p>
        </div>
      </div>
    </Section>
  );
}

Object.assign(window, { CookiePolicy });
