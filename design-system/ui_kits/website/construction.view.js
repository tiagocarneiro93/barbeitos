const { Eyebrow, Meta, Button, Tag, RuleGrid, Field, Input } = window.BarbeitosGroupDesignSystem_b431cc;

const SERVICES = [
  ['01', 'Pintura', 'Interior e fachada, preparação de superfícies, tintas técnicas.', 'desde €9 / m²', 'con-servico-pintura'],
  ['02', 'Isolamento', 'Térmico e acústico, ETICS, correção de pontes térmicas.', 'desde €34 / m²', 'con-servico-isolamento'],
  ['03', 'Eletricidade', 'Quadros, remodelação de rede, iluminação e domótica.', 'orçamento por visita', 'con-servico-eletricidade'],
  ['04', 'Canalização', 'Redes de água e esgoto, louças, deteção de fugas.', 'orçamento por visita', 'con-servico-canalizacao'],
];
const RECENT = [
  ['Apartamento Estoril', 'Pintura integral · 6 dias · 2026', 'design-system/assets/construction/con-apartamento-estoril.jpg'],
  ['Moradia Birre', 'Isolamento ETICS · 3 semanas · 2025', 'design-system/assets/construction/con-moradia-birre.jpg'],
  ['Loja Chiado', 'Rede elétrica e iluminação · 2025', 'design-system/assets/construction/con-loja-chiado.jpg'],
];
const STEPS = ['1 Serviço', '2 Detalhes', '3 Contacto'];
const STARTS = ['Urgente', '1–3 meses', 'Sem data'];

function QuoteWizard() {
  const [step, setStep] = React.useState(1);
  const [picked, setPicked] = React.useState([]);
  const [start, setStart] = React.useState('1–3 meses');
  const [sent, setSent] = React.useState(false);
  const toggle = (s) => setPicked((p) => p.includes(s) ? p.filter((x) => x !== s) : [...p, s]);

  const canContinue = step !== 1 || picked.length > 0;
  const goToStep = (i) => { if (i <= step) setStep(i); }; // indicator only goes back — Continuar enforces validation forward
  const next = () => canContinue && setStep((s) => Math.min(3, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  if (sent) {
    return (
      <div style={{ border: '1px solid var(--rule-strong)', background: 'var(--paper-000)', padding: 'var(--space-8)', marginTop: 'var(--space-5)', textAlign: 'center' }}>
        <Eyebrow style={{ justifyContent: 'center' }}>Pedido enviado</Eyebrow>
        <h3 style={{ font: 'var(--type-heading-2)', color: 'var(--text-display)', margin: 'var(--space-4) 0 var(--space-3)' }}>Obrigado — já recebemos o seu pedido</h3>
        <p style={{ font: 'var(--type-body-sm)', maxWidth: '48ch', margin: '0 auto var(--space-6)' }}>
          Um dos nossos consultores entra em contacto em até 48 horas com um orçamento fixo para {picked.length ? picked.join(', ').toLowerCase() : 'o serviço pedido'}.
        </p>
        <Button variant="secondary" onClick={() => { setSent(false); setStep(1); setPicked([]); }}>Novo pedido</Button>
      </div>
    );
  }

  return (
    <div style={{ border: '1px solid var(--rule-strong)', background: 'var(--paper-000)', padding: 'var(--space-8)', marginTop: 'var(--space-5)' }}>
      <RuleGrid columns={3} style={{ marginBottom: 'var(--space-7)' }}>
        {STEPS.map((s, i) => (
          <button key={s} type="button" onClick={() => goToStep(i + 1)} disabled={i + 1 > step} style={{
            border: 'none', cursor: i + 1 <= step ? 'pointer' : 'default', padding: '12px 0', width: '100%',
            background: i + 1 <= step ? 'var(--midnight-navy)' : 'var(--surface-card)',
            color: i + 1 <= step ? 'var(--text-inverse)' : 'var(--text-faint)',
            font: 'var(--type-mono)', letterSpacing: 'var(--tracking-mono)',
          }}>{s}</button>
        ))}
      </RuleGrid>

      {step === 1 && (
        <>
          <Meta style={{ display: 'block', marginBottom: 'var(--space-3)' }}>Que serviço(s) precisa?</Meta>
          <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', marginBottom: picked.length ? 'var(--space-3)' : 'var(--space-7)' }}>
            {SERVICES.map(([, t]) => (
              <Tag key={t} selected={picked.includes(t)} onClick={() => toggle(t)}>{picked.includes(t) ? t : '+ ' + t}</Tag>
            ))}
          </div>
          {picked.length === 0 && (
            <Meta tone="muted" style={{ display: 'block', marginBottom: 'var(--space-6)' }}>Escolha pelo menos um serviço para continuar.</Meta>
          )}
        </>
      )}

      {step === 2 && (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'var(--grid-2col, minmax(0,1fr) minmax(0,1fr))', gap: 'var(--space-4)', marginBottom: 'var(--space-5)' }}>
            <Field label="Área aproximada" htmlFor="c-a"><Input id="c-a" defaultValue="85 m²" /></Field>
            <Field label="Código postal" htmlFor="c-cp"><Input id="c-cp" placeholder="2750-000" /></Field>
          </div>
          <Meta style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Quando pretende começar</Meta>
          <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-6)' }}>
            {STARTS.map((o) => (
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
        </>
      )}

      {step === 3 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
          <Field label="Nome" htmlFor="c-n"><Input id="c-n" placeholder="Nome completo" /></Field>
          <Field label="Email" htmlFor="c-e"><Input id="c-e" type="email" placeholder="nome@empresa.com" /></Field>
          <Field label="Telefone" htmlFor="c-t"><Input id="c-t" placeholder="+351" /></Field>
        </div>
      )}

      <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
        {step > 1 && <Button variant="secondary" onClick={back}>Voltar</Button>}
        {step < 3 ? (
          <Button onClick={next} disabled={!canContinue}>Continuar</Button>
        ) : (
          <Button onClick={() => setSent(true)}>Pedir orçamento</Button>
        )}
        {step === 2 && <Meta>Estimativa indicativa: €760 – €1.020</Meta>}
      </div>
    </div>
  );
}

function Construction({ onNavigate }) {
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'var(--grid-2col, minmax(0,1fr) minmax(0,1fr))', background: 'var(--surface-graphite)', color: 'var(--text-inverse-muted)' }}>
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
          {SERVICES.map(([n, t, b, p, imgId]) => (
            <div key={n}>
              <Slot id={imgId} label={'fotografia — ' + t.toLowerCase()} ratio="4 / 3" />
              <div style={{ padding: 'var(--space-7) var(--space-6) var(--space-8)' }}>
                <Meta tone="accent">{n}</Meta>
                <h3 style={{ font: 'var(--type-heading-3)', color: 'var(--text-display)', margin: 'var(--space-3) 0' }}>{t}</h3>
                <p style={{ font: 'var(--type-body-sm)' }}>{b}</p>
                <Meta tone="strong" style={{ display: 'block', marginTop: 'var(--space-4)' }}>{p}</Meta>
              </div>
            </div>
          ))}
        </RuleGrid>
      </Section>

      <div style={{ display: 'grid', gridTemplateColumns: 'var(--grid-2col-uneven, minmax(0,1.15fr) minmax(0,1fr))', gap: 'var(--space-12)', padding: '0 var(--gutter-page) var(--section-y)', alignItems: 'start' }}>
        <div>
          <Eyebrow>Pedido de orçamento</Eyebrow>
          <QuoteWizard />
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
