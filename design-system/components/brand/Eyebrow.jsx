import React from 'react';

export function Eyebrow({ children, tone = 'accent', tick = false, as: Tag = 'span', ...rest }) {
  const ink = {
    accent: 'var(--text-accent)',
    light: 'var(--text-accent-light)',
    muted: 'var(--text-muted)',
    inverse: 'var(--text-inverse-faint)',
    gold: 'var(--text-gold)',
  }[tone] || 'var(--text-accent)';
  return (
    <Tag {...rest} style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)',
      font: 'var(--type-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase', color: ink, ...rest.style,
    }}>
      {tick && <span style={{ width: '18px', height: '1px', background: 'currentColor', opacity: .6 }} />}
      {children}
    </Tag>
  );
}
