import React from 'react';
import { Icon } from '../icon/Icon.jsx';

const SIZES = { sm: { box: 36, glyph: 15 }, md: { box: 44, glyph: 18 }, lg: { box: 52, glyph: 21 } };

export function IconButton({ icon, label, size = 'md', variant = 'ghost', disabled = false, ...rest }) {
  const s = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const on = hover && !disabled;
  const skin = {
    ghost:   { bg: on ? 'var(--surface-sunken)' : 'transparent', fg: 'var(--text-body)', bd: 'transparent' },
    outline: { bg: on ? 'rgba(12,25,53,.05)' : 'transparent', fg: 'var(--midnight-navy)', bd: on ? 'var(--midnight-navy)' : 'var(--rule-strong)' },
    solid:   { bg: on ? 'var(--midnight-navy)' : 'var(--terracotta-brown)', fg: 'var(--text-on-accent)', bd: 'transparent' },
    inverse: { bg: on ? 'rgba(244,241,236,.08)' : 'transparent', fg: 'var(--text-inverse)', bd: 'var(--rule-inverse-strong)' },
  }[variant];
  return (
    <button
      type="button" aria-label={label} disabled={disabled}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      {...rest}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: s.box + 'px', height: s.box + 'px',
        border: '1px solid ' + skin.bd, borderRadius: 0,
        background: skin.bg, color: skin.fg,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.38 : 1,
        transition: 'var(--transition-control)',
        ...rest.style,
      }}
    >
      <Icon name={icon} size={s.glyph} />
    </button>
  );
}
