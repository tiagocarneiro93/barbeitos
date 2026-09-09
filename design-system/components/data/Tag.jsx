import React from 'react';
import { Icon } from '../icon/Icon.jsx';

export function Tag({ selected = false, onRemove, onClick, children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const clickable = !!onClick;
  return (
    <span
      onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      {...rest}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
        padding: '9px 14px', borderRadius: 0,
        border: '1px solid ' + (selected ? 'var(--terracotta-brown)' : 'var(--rule-strong)'),
        background: selected ? 'var(--terracotta-brown)' : (clickable && hover ? 'rgba(12,25,53,.05)' : 'transparent'),
        color: selected ? 'var(--text-on-accent)' : 'var(--text-muted)',
        font: 'var(--type-mono)', letterSpacing: 'var(--tracking-mono)',
        cursor: clickable ? 'pointer' : 'default',
        transition: 'var(--transition-control)',
        ...rest.style,
      }}
    >
      {children}
      {onRemove && (
        <button type="button" aria-label="Remove" onClick={(e) => { e.stopPropagation(); onRemove(e); }}
          style={{ display: 'flex', border: 'none', background: 'none', padding: 0, color: 'inherit', cursor: 'pointer' }}>
          <Icon name="x" size={11} />
        </button>
      )}
    </span>
  );
}
