const { Eyebrow, Meta, Button, Tag, RuleGrid, Field, Input, Select } = window.BarbeitosGroupDesignSystem_b431cc;

const SERVICES = [
  ['01', 'Pintura', 'Interior e fachada, preparação de superfícies, tintas técnicas.', 'desde €9 / m²'],
  ['02', 'Isolamento', 'Térmico e acústico, ETICS, correção de pontes térmicas.', 'desde €34 / m²'],
  ['03', 'Eletricidade', 'Quadros, remodelação de rede, iluminação e domótica.', 'orçamento por visita'],
  ['04', 'Canalização', 'Redes de água e esgoto, louças, deteção de fugas.', 'orçamento por visita'],
];
const RECENT = [
  ['Apartamento Estoril', 'Pintura integral · 6 dias · 2026', 'design-system/assets/construction/con-apartamento-estoril.jpg'],
  ['Moradia Birre', 'Isolamento ETICS · 3 semanas · 2025', 'design-system/assets/construction/con-moradia-birre.jpg'],
  ['Loja Chiado', 'Rede elétrica e iluminação · 2025', 'design-system/assets/construction/con-loja-chiado.jpg'],
];
const STEPS = ['1 Serviço', '2 Detalhes', '3 Contacto'];

function Construction({ onNavigate }) {
  const [step, setStep] = React.useState(2);
  const [picked, setPicked] = React.useState(['Pintura interior']);
  const [start, setStart] = React.useState('1–3 meses');
  const toggle = (s) => setPicked((p) => p.includes(s) ? p.filter((x) => x !== s) : [...p, s]);
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', background: 'var(--surface-graphite)', color: 'var(--text-inverse-muted)' }}>
        <div style={{ padding: 'var(--space-16) var(--gutter-page)' }}>
          <Eyebrow tone="light">Construction Company</Eyebrow>
          <h1 style={{ font: 'var(--type-display-2)', color: 'var(--text-inverse)', margin: 'var(--space-5) 0 var(--space-5)' }}>A mesma exigência<br />em obras pequenas</h1>
          <p style={{ font: 'var(--type-body-lg)', color: 'var(--text-inverse-muted)', maxWidth: '46ch', marginBottom: 'var(--space-8)' }}>
            Pintura, isolamento, eletricidade e canalização executados pelas equipas que constroem os nossos empreendimentos. Orçamento fixo em 48 horas, obra com acompanhamento e garantia escrita.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
            <Button>Pedir orçamento</Button>
            <Button variant="outline-inverse">Ver trabalhos</Button>
          </div>
        </div>
        <Slot id="con-hero" label="fotografia — equipa em obra" height="100%" dark src="design-system/assets/construction/con-hero.jpg" />
      </div>

      <Section eyebrow="Serviços">
        <RuleGrid columns={4}>
          {SERVICES.map(([n, t, b, p]) => (
            <div key={n} style={{ padding: 'var(--space-7) var(--space-6) var(--space-8)' }}>
              <Meta tone="accent">{n}</Meta>
              <h3 style={{ font: 'var(--type-heading-3)', color: 'var(--text-display)', margin: 'var(--space-3) 0' }}>{t}</h3>
              <p style={{ font: 'var(--type-body-sm)' }}>{b}</p>
              <Meta tone="strong" style={{ display: 'block', marginTop: 'var(--space-4)' }}>{p}</Meta>
            </div>
          ))}
        </RuleGrid>
      </Section>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.15fr) minmax(0,1fr)', gap: 'var(--space-12)', padding: '0 var(--gutter-page) var(--section-y)', alignItems: 'start' }}>
        <div>
          <Eyebrow>Pedido de orçamento · passo {step} de 3</Eyebrow>
          <div style={{ border: '1px solid var(--rule-strong)', background: 'var(--paper-000)', padding: 'var(--space-8)', marginTop: 'var(--space-5)' }}>
            <RuleGrid columns={3} style={{ marginBottom: 'var(--space-7)' }}>
              {STEPS.map((s, i) => (
                <button key={s} type="button" onClick={() => setStep(i + 1)} style={{
                  border: 'none', cursor: 'pointer', padding: '12px 0', width: '100%',
                  background: i + 1 <= step ? 'var(--midnight-navy)' : 'var(--surface-card)',
                  color: i + 1 <= step ? 'var(--text-inverse)' : 'var(--text-faint)',
                  font: 'var(--type-mono)', letterSpacing: 'var(--tracking-mono)',
                }}>{s}</button>
              ))}
            </RuleGrid>
            <Meta style={{ display: 'block', marginBottom: 'var(--space-3)' }}>Serviço selecionado</Meta>
            <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', marginBottom: 'var(--space-6)' }}>
              {['Pintura interior', 'Isolamento', 'Eletricidade', 'Canalização'].map((s) => (
                <Tag key={s} selected={picked.includes(s)} onClick={() => toggle(s)}>{picked.includes(s) ? s : '+ ' + s}</Tag>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'var(--space-4)', marginBottom: 'var(--space-5)' }}>
              <Field label="Área aproximada" htmlFor="c-a"><Input id="c-a" defaultValue="85 m²" /></Field>
              <Field label="Código postal" htmlFor="c-cp"><Input id="c-cp" placeholder="2750-000" /></Field>
            </div>
            <Meta style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Quando pretende começar</Meta>
            <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-6)' }}>
              {['Urgente', '1–3 meses', 'Sem data'].map((o) => (
                <button key={o} type="button" onClick={() => setStart(o)} style={{
                  flex: 1, padding: '12px 0', cursor: 'pointer', background: 'transparent',
                  border: '1px solid ' + (start === o ? 'var(--midnight-navy)' : 'var(--rule-strong)'),
                  font: 'var(--type-mono)', letterSpacing: 'var(--tracking-mono)',
                  color: start === o ? 'var(--midnight-navy)' : 'var(--text-faint)',
                }}>{o}</button>
              ))}
            </div>
            <Meta style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Fotografias do espaço (opcional)</Meta>
            <div style={{ border: '1px dashed var(--rule-strong)', marginBottom: 'var(--space-6)' }}>
              <Slot id="con-upload" label="arraste imagens · até 6" height="96px" />
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
              <Button onClick={() => setStep(Math.min(3, step + 1))}>Continuar</Button>
              <Meta>Estimativa indicativa: €760 – €1.020</Meta>
            </div>
          </div>
        </div>
        <div>
          <Eyebrow>Trabalhos recentes</Eyebrow>
          <RuleGrid columns={1} style={{ marginTop: 'var(--space-5)' }}>
            {RECENT.map(([t, m, img]) => (
              <div key={t} style={{ display: 'flex', gap: 'var(--space-5)', padding: 'var(--space-4)', alignItems: 'center' }}>
                <div style={{ width: '110px', flex: '0 0 auto' }}><Slot id={'con-' + t.slice(0, 6)} label="obra" ratio="4 / 3" src={img} /></div>
                <div>
                  <h3 style={{ font: 'var(--type-heading-3)', color: 'var(--text-display)' }}>{t}</h3>
                  <Meta style={{ display: 'block', marginTop: 'var(--space-2)' }}>{m}</Meta>
                </div>
              </div>
            ))}
          </RuleGrid>
          <div style={{ background: 'var(--midnight-navy)', color: 'var(--text-inverse-muted)', padding: 'var(--space-7)', marginTop: 'var(--space-6)' }}>
            <h3 style={{ font: 'var(--type-heading-3)', color: 'var(--text-inverse)', marginBottom: 'var(--space-3)' }}>Obra grande em vista?</h3>
            <p style={{ font: 'var(--type-body-sm)', marginBottom: 'var(--space-5)' }}>Remodelações completas e promoção passam pela equipa de empreendimentos.</p>
            <button type="button" onClick={() => onNavigate('home')} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}><Meta tone="light">Falar com o grupo →</Meta></button>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Construction });
