import * as React from 'react';

/**
 * The corporate signature set in the script face. The only place the script
 * typeface is permitted.
 */
export interface SloganProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Defaults to "Building Value. Creating Legacy." */
  text?: string;
  /** Rendered size in px. The script face needs 32px+ to read. */
  size?: number;
  tone?: 'onyx' | 'navy' | 'gold' | 'inverse';
  align?: 'left' | 'center';
  /** Draw the short gold rule above the signature. */
  rule?: boolean;
}
export function Slogan(props: SloganProps): JSX.Element;
