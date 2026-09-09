import React from 'react';
import { Icon } from '../icon/Icon.jsx';

export function Checkbox({ label, checked, defaultChecked, disabled, onChange, ...rest }) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const isOn = checked === undefined ? inner : checked;
  return (
    <label {...rest} style={{
      display: 'inline-flex', alignItems: 'flex-start', gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1,
      font: 'var(--type-body-sm)', color: 'var(--text-body)', ...rest.style,
    }}>
      <input
        type="checkbox" checked={isOn} disabled={disabled}
        onChange={(e) => { if (checked === undefined) setInner(e.target.checked); onChange && onChange(e); }}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
      />
      <span style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: '18px', height: '18px', marginTop: '2px', flex: '0 0 auto',
        border: 'var(--border-width-hairline) solid ' + (isOn ? 'var(--onyx-black)' : 'var(--border-strong)'),
        background: isOn ? 'var(--onyx-black)' : 'transparent',
        color: 'var(--paper-050)', transition: 'var(--transition-control)',
      }}>
        {isOn && <Icon name="check" size={12} />}
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
