import * as React from 'react';

/** Mono, 10px, 0.22em uppercase kicker that opens a section. Terracotta on paper, terracotta-light on dark. */
export interface EyebrowProps extends React.HTMLAttributes<HTMLElement> {
  tone?: 'accent' | 'light' | 'muted' | 'inverse' | 'gold';
  /** Leading hairline tick. Off by default. */
  tick?: boolean;
  as?: keyof JSX.IntrinsicElements;
}
export function Eyebrow(props: EyebrowProps): JSX.Element;
