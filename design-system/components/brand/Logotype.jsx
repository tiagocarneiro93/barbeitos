import React from 'react';

/* No vector logo was supplied. The lockup follows the approved mock-up:
   a hairline square holding the B, the serif wordmark at 0.26em, and the
   mono GROUP descriptor. Swap the square for the real symbol SVG when it
   arrives — sizing and clearspace logic here already match the manual. */
export function Logotype({
  size = 15, tone = 'navy', division, symbol = true, descriptor = true,
  clearspace = false, as: Tag = 'div', ...rest
}) {
  const inverse = tone === 'inverse';
  const ink = inverse ? 'var(--text-inverse)' : 'var(--midnight-navy)';
  const faint = inverse ? 'var(--text-inverse-faint)' : 'var(--text-faint)';
  const rule = inverse ? 'var(--rule-inverse-strong)' : 'var(--rule-strong)';
  const box = Math.round(size * 2.1);
  return (
    <Tag {...rest} style={{
      display: 'inline-flex', alignItems: 'center', gap: Math.round(size * 0.95) + 'px',
      padding: clearspace ? size * 1.6 + 'px' : 0,
      outline: clearspace ? '1px dashed var(--rule)' : 'none',
      ...rest.style,
    }}>
      {symbol && (
        <span style={{
          width: box + 'px', height: box + 'px', flex: '0 0 auto',
          border: '1px solid ' + rule,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          font: 'var(--weight-regular) ' + Math.round(size * 0.66) + 'px/1 var(--font-mono)',
          color: faint,
        }}>B</span>
      )}
      <span style={{ display: 'flex', flexDirection: 'column', gap: Math.max(3, Math.round(size * 0.26)) + 'px' }}>
        <span style={{
          font: 'var(--weight-display) ' + size + 'px/1 var(--font-display)',
          letterSpacing: 'var(--tracking-wordmark)', color: ink, whiteSpace: 'nowrap',
        }}>BARBEITOS</span>
        {descriptor && (
          <span style={{
            font: 'var(--weight-regular) ' + Math.max(8, Math.round(size * 0.6)) + 'px/1 var(--font-mono)',
            letterSpacing: '.3em', color: faint, whiteSpace: 'nowrap', textTransform: 'uppercase',
          }}>{division || 'G R O U P'}</span>
        )}
      </span>
    </Tag>
  );
}
