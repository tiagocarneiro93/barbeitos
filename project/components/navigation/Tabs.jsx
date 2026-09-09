import React from 'react';

export function Tabs({ items = [], value, defaultValue, onChange, tone = 'default', variant = 'underline', ...rest }) {
  const first = typeof items[0] === 'string' ? items[0] : items[0] && items[0].value;
  const [inner, setInner] = React.useState(defaultValue ?? first);
  const current = value === undefined ? inner : value;
  const inverse = tone === 'inverse';
  const bare = variant === 'bare';
  return (
    <div role="tablist" {...rest} style={{
      display: 'flex', gap: bare ? 'var(--space-5)' : 'var(--space-8)',
      borderBottom: bare ? 'none' : '1px solid ' + (inverse ? 'var(--rule-inverse)' : 'var(--rule)'),
      ...rest.style,
    }}>
      {items.map((it) => {
        const v = typeof it === 'string' ? it : it.value;
        const l = typeof it === 'string' ? it : it.label;
        const on = current === v;
        return (
          <button key={v} role="tab" aria-selected={on} type="button"
            onClick={() => { if (value === undefined) setInner(v); onChange && onChange(v); }}
            style={{
              border: 'none', background: 'none', cursor: 'pointer',
              padding: bare ? '0 0 3px' : '0 0 var(--space-4)',
              font: 'var(--type-mono)', letterSpacing: 'var(--tracking-mono)',
              color: on ? (inverse ? 'var(--text-inverse)' : 'var(--midnight-navy)') : (inverse ? 'var(--text-inverse-faint)' : 'var(--text-faint)'),
              borderBottom: on ? '1px solid ' + (inverse ? 'var(--terracotta-light)' : 'var(--terracotta-brown)') : '1px solid transparent',
              transition: 'var(--transition-control)',
            }}>
            {l}
          </button>
        );
      })}
    </div>
  );
}
