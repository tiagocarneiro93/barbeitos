import React from 'react';

/* Zapfino is licensed exclusively to the slogan (Manual de Normas p.10, p.12).
   --font-script carries the Italianno substitute until Zapfino is supplied. */
export function Slogan({
  text = 'Building Value. Creating Legacy.',
  size = 44,
  tone = 'onyx',
  align = 'left',
  rule = false,
  ...rest
}) {
  const ink = tone === 'inverse' ? 'var(--paper-050)'
    : tone === 'gold' ? 'var(--foil-gold)'
    : tone === 'navy' ? 'var(--midnight-navy)'
    : 'var(--onyx-black)';
  return (
    <div {...rest} style={{ textAlign: align, ...rest.style }}>
      {rule && (
        <span style={{
          display: 'block', width: '56px', height: '1px',
          background: tone === 'inverse' ? 'var(--border-inverse)' : 'var(--foil-gold)',
          margin: align === 'center' ? '0 auto var(--space-6)' : '0 0 var(--space-6)',
        }} />
      )}
      <span style={{
        display: 'block',
        fontFamily: 'var(--font-script)',
        fontSize: size + 'px',
        lineHeight: 1.15,
        color: ink,
      }}>
        {text}
      </span>
    </div>
  );
}
