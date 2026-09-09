import React from 'react';
import { Icon } from '../icon/Icon.jsx';
import { IconButton } from '../actions/IconButton.jsx';

const GLYPH = { info: 'info', success: 'check', warning: 'triangle-alert', danger: 'circle-alert' };
const ACCENT = { info: 'var(--midnight-navy)', success: 'var(--status-success)', warning: 'var(--status-warning)', danger: 'var(--status-danger)' };

export function Toast({ tone = 'info', title, description, onDismiss, ...rest }) {
  return (
    <div role="status" {...rest} style={{
      display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)',
      minWidth: '320px', maxWidth: '440px', padding: 'var(--space-4) var(--space-5)',
      background: 'var(--surface-raised)',
      borderLeft: 'var(--border-width-strong) solid ' + ACCENT[tone],
      border: 'var(--border-width-hairline) solid var(--border-hairline)',
      borderLeftWidth: 'var(--border-width-strong)', borderLeftColor: ACCENT[tone],
      boxShadow: 'var(--shadow-menu)',
      ...rest.style,
    }}>
      <span style={{ color: ACCENT[tone], display: 'flex', marginTop: '2px' }}><Icon name={GLYPH[tone]} size={18} /></span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1 }}>
        <span style={{ font: 'var(--weight-medium) var(--size-body-sm)/1.35 var(--font-core)', color: 'var(--text-strong)' }}>{title}</span>
        {description && <span style={{ font: 'var(--type-caption)', color: 'var(--text-muted)' }}>{description}</span>}
      </div>
      {onDismiss && <IconButton icon="x" label="Dismiss" size="sm" onClick={onDismiss} />}
    </div>
  );
}
