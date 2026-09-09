import React from 'react';
import { Eyebrow } from '../brand/Eyebrow.jsx';
import { Meta } from '../brand/Meta.jsx';

const TONES = {
  paper:      { bg: 'var(--surface-card)',      head: 'var(--text-display)', body: 'var(--text-body)',          rule: 'var(--rule)',         hover: 'var(--paper-100)' },
  raised:     { bg: 'var(--paper-000)',         head: 'var(--text-display)', body: 'var(--text-body)',          rule: 'var(--rule)',         hover: 'var(--paper-050)' },
  sunken:     { bg: 'var(--surface-sunken)',    head: 'var(--text-display)', body: 'var(--text-body)',          rule: 'var(--rule)',         hover: 'var(--paper-200)' },
  navy:       { bg: 'var(--midnight-navy)',     head: 'var(--text-inverse)', body: 'var(--text-inverse-muted)', rule: 'var(--rule-inverse)', hover: '#16244a' },
  graphite:   { bg: 'var(--surface-graphite)',  head: 'var(--text-inverse)', body: 'var(--text-inverse-muted)', rule: 'var(--rule-inverse)', hover: '#3e3e3e' },
  terracotta: { bg: 'var(--terracotta-brown)',  head: 'var(--text-inverse)', body: 'rgba(244,241,236,.78)',     rule: 'var(--rule-inverse)', hover: '#5a3532' },
};

export function Card({
  eyebrow, title, meta, media, tone = 'paper', interactive = false, bordered = false,
  padding = 'var(--space-6) var(--space-6) var(--space-7)', footer, children, as: Tag = 'div', ...rest
}) {
  const t = TONES[tone] || TONES.paper;
  const [hover, setHover] = React.useState(false);
  const lift = interactive && hover;
  return (
    <Tag
      onMouseEnter={interactive ? () => setHover(true) : undefined}
      onMouseLeave={interactive ? () => setHover(false) : undefined}
      {...rest}
      style={{
        display: 'flex', flexDirection: 'column', height: '100%',
        background: lift ? t.hover : t.bg,
        border: bordered ? '1px solid ' + t.rule : 'none',
        borderRadius: 0, boxShadow: 'none',
        cursor: interactive ? 'pointer' : undefined,
        transition: 'background-color var(--duration-base) var(--ease-standard)',
        textDecoration: 'none',
        ...rest.style,
      }}
    >
      {media && (
        <div style={{ overflow: 'hidden', position: 'relative' }}>
          <div style={{
            transform: lift ? 'scale(1.03)' : 'scale(1)',
            transition: 'transform var(--duration-slow) var(--ease-standard)',
          }}>{media}</div>
        </div>
      )}
      <div style={{ padding, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', flex: 1 }}>
        {eyebrow && <Eyebrow tone={tone === 'paper' || tone === 'raised' || tone === 'sunken' ? 'accent' : 'inverse'} style={{ marginBottom: 'var(--space-2)' }}>{eyebrow}</Eyebrow>}
        {title && <h3 style={{ font: 'var(--type-heading-2)', color: t.head, margin: 0 }}>{title}</h3>}
        {children && <div style={{ font: 'var(--type-body-sm)', color: t.body, marginTop: 'var(--space-2)' }}>{children}</div>}
        {meta && <div style={{ marginTop: 'var(--space-3)' }}><Meta tone={tone === 'paper' || tone === 'raised' || tone === 'sunken' ? 'muted' : 'inverse'}>{meta}</Meta></div>}
      </div>
      {footer && (
        <div style={{
          padding: 'var(--space-4) var(--space-6) var(--space-5)',
          borderTop: '1px solid ' + t.rule,
          display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 'var(--space-4)',
        }}>{footer}</div>
      )}
    </Tag>
  );
}
