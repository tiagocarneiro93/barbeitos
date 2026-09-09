import React from 'react';
import { Icon } from '../icon/Icon.jsx';

const SIZES = {
  sm: { py: 13, px: 22, font: '10.5px', icon: 13 },
  md: { py: 15, px: 26, font: '11px',   icon: 14 },
  lg: { py: 18, px: 32, font: '11.5px', icon: 15 },
};

const VARIANTS = {
  primary:   { bg: 'var(--terracotta-brown)', fg: 'var(--text-on-accent)', bd: 'transparent',        hbg: 'var(--midnight-navy)',   hbd: 'transparent' },
  navy:      { bg: 'var(--midnight-navy)',    fg: 'var(--text-inverse)',   bd: 'transparent',        hbg: 'var(--navy-hover)',      hbd: 'transparent' },
  secondary: { bg: 'transparent',             fg: 'var(--midnight-navy)',  bd: 'var(--rule-strong)', hbg: 'rgba(12,25,53,.05)',     hbd: 'var(--midnight-navy)' },
  ghost:     { bg: 'transparent',             fg: 'var(--text-body)',      bd: 'transparent',        hbg: 'var(--surface-sunken)',  hbd: 'transparent' },
  inverse:   { bg: 'var(--paper-050)',        fg: 'var(--midnight-navy)',  bd: 'transparent',        hbg: 'var(--terracotta-light)', hbd: 'transparent', hfg: 'var(--paper-050)' },
  'outline-inverse': { bg: 'transparent',     fg: 'var(--text-inverse)',   bd: 'var(--rule-inverse-strong)', hbg: 'rgba(244,241,236,.08)', hbd: 'var(--paper-050)', hfg: 'var(--text-inverse)' },
};

export function Button({
  variant = 'primary', size = 'md', icon, iconPosition = 'right',
  fullWidth = false, disabled = false, as: Tag = 'button', children, ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const [hover, setHover] = React.useState(false);
  const on = hover && !disabled;
  return (
    <Tag
      type={Tag === 'button' ? 'button' : undefined}
      disabled={Tag === 'button' ? disabled : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex',
        width: fullWidth ? '100%' : undefined,
        alignItems: 'center', justifyContent: 'center', gap: 'var(--space-3)',
        padding: s.py + 'px ' + s.px + 'px',
        border: '1px solid ' + (on ? v.hbd : v.bd),
        borderRadius: 0,
        background: on ? v.hbg : v.bg,
        color: on ? (v.hfg || v.fg) : v.fg,
        font: 'var(--weight-medium) ' + s.font + '/1 var(--font-core)',
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.38 : 1,
        transition: 'var(--transition-control)',
        textDecoration: 'none',
        ...rest.style,
      }}
    >
      {icon && iconPosition === 'left' && <Icon name={icon} size={s.icon} />}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <Icon name={icon} size={s.icon} />}
    </Tag>
  );
}
