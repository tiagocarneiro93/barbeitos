const { Eyebrow, Meta, Field, Input, Select, Checkbox, Radio, Button, Toast, Icon, RuleGrid } = window.BarbeitosGroupDesignSystem_b431cc;

function Contact() {
  const [sent, setSent] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [touched, setTouched] = React.useState(false);
  const invalid = touched && !/.+@.+\..+/.test(email);
  return (
    <Section eyebrow="Contacto privado" title="Falemos do seu projeto" lead="Responda a algumas perguntas e a equipa certa do grupo entra em contacto.">
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr)', gap: 'var(--space-16)', alignItems: 'start' }}>
        <form onSubmit={(e) => { e.preventDefault(); setTouched(true); if (!invalid && email) setSent(true); }}
          style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'var(--space-5)' }}>
          <Field label="Nome" htmlFor="c-name"><Input id="c-name" placeholder="Nome completo" /></Field>
          <Field label="Empresa" htmlFor="c-co" hint="Opcional"><Input id="c-co" placeholder="Family office, fundo, particular" /></Field>
          <Field label="Email" htmlFor="c-mail" required error={invalid ? 'Introduza um email válido.' : undefined}>
            <Input id="c-mail" type="email" value={email} invalid={invalid} onBlur={() => setTouched(true)} onChange={(e) => setEmail(e.target.value)} placeholder="nome@empresa.com" />
          </Field>
          <Field label="Área" htmlFor="c-div"><Select id="c-div" placeholder="Selecione uma área" options={['Real Estate', 'Construction', 'Furniture & Interiors']} /></Field>
          <div style={{ gridColumn: '1 / -1' }}>
            <Field label="Projeto" htmlFor="c-brief"><Input id="c-brief" multiline rows={4} placeholder="Localização, dimensão e calendário previsto" /></Field>
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <Field label="Idioma preferido"><Radio name="c-lang" direction="row" defaultValue="PT-PT" options={['PT-PT', 'EN']} /></Field>
          </div>
          <div style={{ gridColumn: '1 / -1' }}><Checkbox label="Autorizo o contacto sobre este pedido." defaultChecked /></div>
          <div style={{ gridColumn: '1 / -1', display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
            <Button type="submit">Enviar pedido</Button>
            <Meta>Resposta em 24 h.</Meta>
          </div>
          {sent && <div style={{ gridColumn: '1 / -1' }}><Toast tone="success" title="Pedido enviado" description="A equipa entra em contacto em 24 horas." onDismiss={() => setSent(false)} /></div>}
        </form>

        <div>
          <RuleGrid columns={1}>
            <div style={{ padding: 'var(--space-7)' }}>
              <Eyebrow>Sede</Eyebrow>
              <h3 style={{ font: 'var(--type-heading-2)', color: 'var(--text-display)', margin: 'var(--space-3) 0 var(--space-4)' }}>Braga, Portugal</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', font: 'var(--type-body-sm)' }}>
                <span style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}><Icon name="mail" size={14} /> info@barbeitosgroup.pt</span>
                <span style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}><Icon name="phone" size={14} /> +351 21 000 0000</span>
              </div>
              <Meta style={{ display: 'block', marginTop: 'var(--space-4)' }}>Contactos indicativos — não constam das fontes fornecidas.</Meta>
            </div>
            <div style={{ padding: 'var(--space-7)' }}>
              <Eyebrow>Áreas</Eyebrow>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginTop: 'var(--space-4)', font: 'var(--type-body-sm)' }}>
                <span>Real Estate Development</span><span>Construction Company</span><span>Furniture &amp; Interior Design</span>
              </div>
            </div>
          </RuleGrid>
        </div>
      </div>
    </Section>
  );
}

Object.assign(window, { Contact });
