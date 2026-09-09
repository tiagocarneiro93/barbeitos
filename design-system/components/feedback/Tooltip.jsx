import React from 'react';

export function Tooltip({ label, placement = 'top', children, ...rest }) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top:    { bottom: '100%', left: '50%', transform: 'translate(-50%,-8px)' },
    bottom: { top: '100%',    left: '50%', transform: 'translate(-50%,8px)' },
    left:   { right: '100%',  top: '50%',  transform: 'translate(-8px,-50%)' },
    right:  { left: '100%',   top: '50%',  transform: 'translate(8px,-50%)' },
  }[placement];
  return (
    <span
      onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}
      {...rest}
      style={{ position: 'relative', display: 'inline-flex', ...rest.style }}
    >
      {children}
      <span role="tooltip" style={{
        position: 'absolute', ...pos, zIndex: 60,
        padding: '6px var(--space-3)', whiteSpace: 'nowrap',
        background: 'var(--onyx-black)', color: 'var(--paper-050)',
        font: 'var(--type-caption)', letterSpacing: '0.02em',
        opacity: open ? 1 : 0, pointerEvents: 'none',
        transition: 'opacity var(--duration-fast) var(--ease-standard)',
      }}>{label}</span>
    </span>
  );
}
