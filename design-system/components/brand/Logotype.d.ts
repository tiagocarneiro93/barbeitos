import * as React from 'react';

/**
 * The Barbeitos Group lockup: hairline B square + serif wordmark at 0.26em +
 * mono descriptor. Typographic stand-in until the licensed symbol artwork is
 * supplied — see readme.md > Missing assets.
 */
export interface LogotypeProps extends React.HTMLAttributes<HTMLElement> {
  /** Cap height of the wordmark in px. 13–17 in chrome, 22+ on covers. */
  size?: number;
  tone?: 'navy' | 'inverse';
  /** Replaces "G R O U P", e.g. "R E A L  E S T A T E". */
  division?: string;
  /** Show the hairline symbol square. */
  symbol?: boolean;
  /** Show the descriptor line. */
  descriptor?: boolean;
  /** Draw the Área de proteção (1 B-width) as a dashed guide. Documentation only. */
  clearspace?: boolean;
  as?: keyof JSX.IntrinsicElements;
}
export function Logotype(props: LogotypeProps): JSX.Element;
