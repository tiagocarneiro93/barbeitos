import React from 'react';

/* The client supplied the real lockup as a white PNG (assets/logo-white.png)
   drawn for dark grounds only — no separate ink/navy file exists. On light
   (navy-tone) grounds the same asset is rendered through a CSS invert
   filter (white -> near-black) so the header stays visually consistent
   across every page instead of flipping back to the code-drawn mock. */
export function Logotype({
  size = 15, tone = 'navy', division, symbol = true, descriptor = true,
  clearspace = false, as: Tag = 'div', ...rest
}) {
  const inverse = tone === 'inverse';
  const ink = inverse ? 'var(--text-inverse)' : 'var(--midnight-navy)';
  const faint = inverse ? 'var(--text-inverse-faint)' : 'var(--text-faint)';
  const rule = inverse ? 'var(--rule-inverse-strong)' : 'var(--rule-strong)';
  const box = Math.round(size * 2.1);
  if ((inverse || tone === 'navy') && symbol && descriptor && !division) {
    return (
      <Tag {...rest} style={{
        display: 'inline-flex', alignItems: 'center',
        padding: clearspace ? size * 1.6 + 'px' : 0,
        outline: clearspace ? '1px dashed ' + (inverse ? 'var(--rule-inverse)' : 'var(--rule)') : 'none',
        ...rest.style,
      }}>
        <img src="design-system/assets/logo-white.png" alt="Barbeitos Group" style={{ height: Math.round(size * 2.3) + 'px', width: 'auto', display: 'block', filter: inverse ? undefined : 'invert(1)' }} />
      </Tag>
    );
  }
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
