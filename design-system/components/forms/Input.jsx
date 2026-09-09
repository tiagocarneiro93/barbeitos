import React from 'react';

const shell = (invalid, focused) => ({
  width: '100%', padding: '13px 14px',
  background: 'var(--paper-000)',
  border: '1px solid ' + (invalid ? 'var(--status-danger)' : focused ? 'var(--midnight-navy)' : 'var(--rule-strong)'),
  borderRadius: 0,
  font: 'var(--weight-light) var(--size-body) /1.5 var(--font-core)',
  color: 'var(--midnight-navy)',
  outline: 'none', transition: 'var(--transition-control)',
});

export function Input({ invalid = false, multiline = false, rows = 4, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const Tag = multiline ? 'textarea' : 'input';
  return (
    <Tag
      rows={multiline ? rows : undefined}
      onFocus={(e) => { setFocused(true); rest.onFocus && rest.onFocus(e); }}
      onBlur={(e) => { setFocused(false); rest.onBlur && rest.onBlur(e); }}
      {...rest}
      style={{ ...shell(invalid, focused), resize: multiline ? 'vertical' : undefined, ...rest.style }}
    />
  );
}
