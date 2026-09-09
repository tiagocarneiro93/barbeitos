import React from 'react';

export function Switch({ label, checked, defaultChecked, disabled, onChange, ...rest }) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked === undefined ? inner : checked;
  return (
    <label {...rest} style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1,
      font: 'var(--type-body-sm)', color: 'var(--text-body)', ...rest.style,
    }}>
      <input type="checkbox" role="switch" checked={on} disabled={disabled}
        onChange={(e) => { if (checked === undefined) setInner(e.target.checked); onChange && onChange(e); }}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{
        position: 'relative', width: '40px', height: '20px', flex: '0 0 auto',
        background: on ? 'var(--midnight-navy)' : 'var(--paper-300)',
        border: 'var(--border-width-hairline) solid ' + (on ? 'var(--midnight-navy)' : 'var(--paper-400)'),
        transition: 'var(--transition-control)',
      }}>
        <span style={{
          position: 'absolute', top: '2px', left: on ? '22px' : '2px',
          width: '14px', height: '14px', background: 'var(--paper-000)',
          transition: 'left var(--duration-fast) var(--ease-standard)',
        }} />
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
