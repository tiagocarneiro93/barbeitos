import React from 'react';
import { Icon } from '../icon/Icon.jsx';

export function Select({ options = [], placeholder, invalid = false, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <span style={{ position: 'relative', display: 'block', width: '100%' }}>
      <select
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        {...rest}
        style={{
          width: '100%', padding: '13px 38px 13px 14px', appearance: 'none',
          background: 'var(--paper-000)',
          border: '1px solid ' + (invalid ? 'var(--status-danger)' : focused ? 'var(--midnight-navy)' : 'var(--rule-strong)'),
          borderRadius: 0,
          font: 'var(--weight-light) var(--size-body)/1.5 var(--font-core)',
          color: 'var(--midnight-navy)', outline: 'none',
          transition: 'var(--transition-control)', ...rest.style,
        }}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((o) => {
          const value = typeof o === 'string' ? o : o.value;
          const label = typeof o === 'string' ? o : o.label;
          return <option key={value} value={value}>{label}</option>;
        })}
      </select>
      <span style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-faint)', pointerEvents: 'none', display: 'flex' }}>
        <Icon name="chevron-down" size={14} />
      </span>
    </span>
  );
}
