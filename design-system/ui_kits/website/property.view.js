const { Eyebrow, Meta, Button, Badge, RuleGrid, Field, Input, Icon, Tabs } = window.BarbeitosGroupDesignSystem_b431cc;

const SPECS = [['Área bruta', '420 m²'], ['Lote', '1.100 m²'], ['Suítes', '4'], ['Energia', 'A+']];
const BY_GROUP = [
  ['01 Real Estate', 'Promoção e mediação em exclusivo'],
  ['02 Construction', 'Execução integral, garantia de 10 anos'],
  ['03 Interiors', 'Mobiliário à medida, entrega chave-na-mão'],
];
const DATES = ['8 set', '9 set', '11 set'];

function Property({ onNavigate }) {
  const [date, setDate] = React.useState('8 set');
  const [sent, setSent] = React.useState(false);
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--space-4) var(--gutter-page)', background: 'var(--surface-page)', borderBottom: '1px solid var(--rule)' }}>
        <button type="button" onClick={() => onNavigate('realestate')} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}><Meta tone="strong">← Portfólio</Meta></button>
        <Meta>Ref. BG-1042</Meta>
      </div>

      <RuleGrid template="2fr 1fr">
        <Slot id="pd-hero" label="galeria principal — sala com vista" height="520px" />
        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '1px', background: 'var(--rule)', height: '520px' }}>
          <div style={{ background: 'var(--surface-card)' }}><Slot id="pd-2" label="cozinha" height="100%" /></div>
          <div style={{ background: 'var(--surface-card)', position: 'relative' }}>
            <Slot id="pd-3" label="piscina" height="100%" />
            <span style={{ position: 'absolute', right: '16px', bottom: '16px' }}><Badge tone="outline">+ 24 fotografias · tour 3D</Badge></span>
          </div>
        </div>
      </RuleGrid>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 420px' }}>
        <div style={{ padding: 'var(--space-12) var(--gutter-page) var(--space-16)' }}>
          <Eyebrow>Cascais · Quinta da Marinha · Em exclusivo</Eyebrow>
          <h1 style={{ font: 'var(--type-display-2)', margin: 'var(--space-4) 0 var(--space-2)' }}>Villa Marinha 14</h1>
          <div style={{ font: 'var(--type-heading-1)', color: 'var(--text-accent)', marginBottom: 'var(--space-8)' }}>€3.850.000</div>
          <p style={{ font: 'var(--type-body-lg)', maxWidth: '62ch', marginBottom: 'var(--space-10)' }}>
            Moradia isolada em lote de 1.100 m², a quatro minutos do mar. Construção de 2024 executada pela Barbeitos Construction, com interiores e mobiliário desenhados pelo atelier do grupo. Sistema de climatização geotérmica, certificação energética A+.
          </p>

          <RuleGrid columns={4} style={{ marginBottom: 'var(--space-12)' }}>
            {SPECS.map(([k, v]) => (
              <div key={k} style={{ padding: 'var(--space-6) var(--space-5)' }}>
                <Meta>{k}</Meta>
                <div style={{ font: 'var(--type-heading-2)', color: 'var(--text-display)', marginTop: 'var(--space-2)' }}>{v}</div>
              </div>
            ))}
          </RuleGrid>

          <Eyebrow>Planta</Eyebrow>
          <div style={{ margin: 'var(--space-5) 0 var(--space-12)', border: '1px solid var(--rule)' }}>
            <Slot id="pd-plan" label="planta dos dois pisos · vetor" height="250px" />
          </div>

          <div style={{ borderTop: '1px solid var(--rule)', paddingTop: 'var(--space-8)' }}>
            <Eyebrow>Feito pelo grupo</Eyebrow>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 'var(--space-5)', marginTop: 'var(--space-5)' }}>
              {BY_GROUP.map(([k, v]) => (
                <div key={k} style={{ border: '1px solid var(--rule)', padding: 'var(--space-5) var(--space-6)' }}>
                  <Meta>{k}</Meta>
                  <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-strong)', marginTop: 'var(--space-3)' }}>{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderLeft: '1px solid var(--rule)', background: 'var(--surface-sunken)', padding: 'var(--space-10) var(--space-8) var(--space-12)' }}>
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
            <Button fullWidth onClick={() => setSent(true)}>{sent ? 'Pedido enviado' : 'Confirmar pedido'}</Button>
            <Meta style={{ display: 'block', marginTop: 'var(--space-4)', lineHeight: 1.7 }}>Resposta em 24 h. Visitas acompanhadas, sem partilha de dados com terceiros.</Meta>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-8)', paddingTop: 'var(--space-6)', borderTop: '1px solid var(--rule)' }}>
            <div style={{ width: '56px', height: '56px', flex: '0 0 auto' }}><Slot id="pd-agent" label="retrato" height="56px" /></div>
            <div>
              <div style={{ font: 'var(--weight-medium) var(--size-body-sm)/1.4 var(--font-core)', color: 'var(--text-display)' }}>Consultor dedicado</div>
              <Meta style={{ display: 'block', marginTop: '5px' }}>+351 21 000 0000</Meta>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginTop: 'var(--space-5)' }}>
            <Button variant="secondary" fullWidth icon="download" iconPosition="left">Descarregar dossier</Button>
            <Button variant="secondary" fullWidth>Simular financiamento</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Property });
