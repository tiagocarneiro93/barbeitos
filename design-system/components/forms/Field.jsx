import React from 'react';

export function Field({ label, hint, error, required, htmlFor, children, ...rest }) {
  return (
    <div {...rest} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', ...rest.style }}>
      {label && (
        <label htmlFor={htmlFor} style={{
          font: 'var(--type-mono)', letterSpacing: 'var(--tracking-mono)',
          color: 'var(--text-muted)',
        }}>
          {label}{required && <span style={{ color: 'var(--text-accent)' }}> *</span>}
        </label>
      )}
      {children}
      {(error || hint) && (
        <span style={{ font: 'var(--type-mono)', letterSpacing: 'var(--tracking-mono)', color: error ? 'var(--status-danger)' : 'var(--text-faint)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
