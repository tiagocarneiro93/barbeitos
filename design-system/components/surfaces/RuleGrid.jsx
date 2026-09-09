import React from 'react';

/* The signature layout device: cells separated by 1px rules rather than gaps,
   achieved with a 1px grid gap over a rule-coloured ground. */
export function RuleGrid({
  columns = 3, template, tone = 'paper', bordered = true, children, ...rest
}) {
  const cellBg = {
    paper: 'var(--surface-card)',
    raised: 'var(--paper-000)',
    sunken: 'var(--surface-sunken)',
    navy: 'var(--midnight-navy)',
    graphite: 'var(--surface-graphite)',
  }[tone] || 'var(--surface-card)';
  const ruleColor = tone === 'navy' || tone === 'graphite' ? 'var(--rule-inverse)' : 'var(--rule)';
  return (
    <div {...rest} style={{
      display: 'grid',
      gridTemplateColumns: template || 'repeat(' + columns + ',minmax(0,1fr))',
      gap: '1px', background: ruleColor,
      border: bordered ? '1px solid ' + ruleColor : 'none',
      ...rest.style,
    }}>
      {React.Children.map(children, (child, i) =>
        child ? <div key={i} style={{ background: cellBg, minWidth: 0 }}>{child}</div> : null
      )}
    </div>
  );
}
