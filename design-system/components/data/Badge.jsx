import React from 'react';

const TONES = {
  exclusive: { bg: 'var(--terracotta-brown)', fg: 'var(--text-on-accent)' },
  navy:      { bg: 'var(--midnight-navy)',    fg: 'var(--text-inverse)' },
  neutral:   { bg: 'var(--paper-100)',        fg: 'var(--midnight-navy)' },
  outline:   { bg: 'var(--paper-000)',        fg: 'var(--midnight-navy)', bd: 'var(--rule-strong)' },
  success:   { bg: 'var(--status-success-tint)', fg: 'var(--status-success)' },
  warning:   { bg: 'var(--status-warning-tint)', fg: 'var(--status-warning)' },
  danger:    { bg: 'var(--status-danger-tint)',  fg: 'var(--status-danger)' },
};

export function Badge({ tone = 'neutral', dot = false, children, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span {...rest} style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
      padding: '6px 10px', background: t.bg, color: t.fg,
      border: '1px solid ' + (t.bd || 'transparent'), borderRadius: 0,
      font: 'var(--type-mono)', letterSpacing: 'var(--tracking-mono)',
      ...rest.style,
    }}>
      {dot && <span style={{ width: '5px', height: '5px', background: 'currentColor', borderRadius: '999px' }} />}
      {children}
    </span>
  );
}
