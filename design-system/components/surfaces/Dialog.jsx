import React from 'react';
import { IconButton } from '../actions/IconButton.jsx';

export function Dialog({ open = false, title, description, onClose, footer, width = 520, children }) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape' && onClose) onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div
      role="presentation"
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 90,
        background: 'var(--scrim-overlay)', backdropFilter: 'var(--blur-veil)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 'var(--space-6)',
        animation: 'none',
      }}
    >
      <div
        role="dialog" aria-modal="true" aria-label={title}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: width + 'px',
          background: 'var(--surface-raised)',
          border: 'var(--border-width-hairline) solid var(--border-hairline)',
          borderRadius: 'var(--radius-none)',
          boxShadow: 'var(--shadow-overlay)',
          padding: 'var(--space-10)',
          display: 'flex', flexDirection: 'column', gap: 'var(--space-5)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-6)' }}>
          <h2 style={{ font: 'var(--type-heading-1)', margin: 0 }}>{title}</h2>
          {onClose && <IconButton icon="x" label="Close" size="sm" onClick={onClose} />}
        </div>
        {description && <p style={{ font: 'var(--type-body)', color: 'var(--text-body)', maxWidth: '52ch' }}>{description}</p>}
        {children}
        {footer && <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end', paddingTop: 'var(--space-2)' }}>{footer}</div>}
      </div>
    </div>
  );
}
