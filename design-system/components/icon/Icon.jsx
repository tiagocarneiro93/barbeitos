import React from 'react';

/* Lucide (CDN) stands in for the brand's icon set — no icon assets were
   supplied in the sources. Glyphs are masked so they inherit currentColor. */
const CDN = 'https://unpkg.com/lucide-static@0.544.0/icons/';

export function Icon({ name, size = 20, stroke, label, ...rest }) {
  const url = CDN + name + '.svg';
  return (
    <span
      role={label ? 'img' : 'presentation'}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      {...rest}
      style={{
        display: 'inline-block',
        width: size + 'px',
        height: size + 'px',
        flex: '0 0 auto',
        background: stroke || 'currentColor',
        WebkitMaskImage: 'url(' + url + ')',
        maskImage: 'url(' + url + ')',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        ...rest.style,
      }}
    />
  );
}
