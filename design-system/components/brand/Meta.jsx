import React from 'react';

/* The mono metadata voice: references, dimensions, prices in lists, counts,
   image captions, footer lines. Never used for sentences. */
export function Meta({ tone = 'muted', items, children, as: Tag = 'span', ...rest }) {
  const ink = {
    muted: 'var(--text-muted)',
    faint: 'var(--text-faint)',
    strong: 'var(--midnight-navy)',
    accent: 'var(--text-accent)',
    light: 'var(--text-accent-light)',
    inverse: 'var(--text-inverse-faint)',
  }[tone] || 'var(--text-muted)';
  const style = {
    font: 'var(--type-mono)', letterSpacing: 'var(--tracking-mono)',
    color: ink, ...rest.style,
  };
  if (items) {
    return (
      <Tag {...rest} style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-5)', ...style }}>
        {items.map((it, i) => <span key={i}>{it}</span>)}
      </Tag>
    );
  }
  return <Tag {...rest} style={style}>{children}</Tag>;
}
