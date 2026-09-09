import * as React from 'react';

/** Mono metadata line — refs, dimensions, prices, counts, captions. */
export interface MetaProps extends React.HTMLAttributes<HTMLElement> {
  tone?: 'muted' | 'faint' | 'strong' | 'accent' | 'light' | 'inverse';
  /** Render several values spaced apart instead of children. */
  items?: React.ReactNode[];
  as?: keyof JSX.IntrinsicElements;
}
export function Meta(props: MetaProps): JSX.Element;
