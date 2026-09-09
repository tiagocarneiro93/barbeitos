import React from 'react';

export function Radio({ name, options = [], value, defaultValue, onChange, direction = 'column', disabled, ...rest }) {
  const [inner, setInner] = React.useState(defaultValue);
  const current = value === undefined ? inner : value;
  return (
    <div role="radiogroup" {...rest} style={{
      display: 'flex', flexDirection: direction, gap: direction === 'row' ? 'var(--space-6)' : 'var(--space-3)', ...rest.style,
    }}>
      {options.map((o) => {
        const v = typeof o === 'string' ? o : o.value;
        const l = typeof o === 'string' ? o : o.label;
        const on = current === v;
        return (
          <label key={v} style={{
            display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)',
            cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1,
            font: 'var(--type-body-sm)', color: 'var(--text-body)',
          }}>
            <input type="radio" name={name} value={v} checked={on} disabled={disabled}
              onChange={(e) => { if (value === undefined) setInner(v); onChange && onChange(e); }}
              style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
            <span style={{
              width: '18px', height: '18px', flex: '0 0 auto', borderRadius: '999px',
              border: 'var(--border-width-hairline) solid ' + (on ? 'var(--onyx-black)' : 'var(--border-strong)'),
              boxShadow: on ? 'inset 0 0 0 4px var(--surface-raised), inset 0 0 0 10px var(--onyx-black)' : 'none',
              transition: 'var(--transition-control)',
            }} />
            <span>{l}</span>
          </label>
        );
      })}
    </div>
  );
}
