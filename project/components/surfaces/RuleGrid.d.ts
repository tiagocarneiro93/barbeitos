import * as React from 'react';

/**
 * Grid whose cells are divided by 1px brand rules instead of whitespace.
 * The structural motif of the whole system — use it for card grids, spec
 * tables, service columns and stepper rows.
 */
export interface RuleGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Equal columns. Ignored when `template` is set. */
  columns?: number;
  /** Explicit grid-template-columns, e.g. "2fr 1fr 1fr". */
  template?: string;
  /** Cell ground. navy/graphite switch the rules to their inverse value. */
  tone?: 'paper' | 'raised' | 'sunken' | 'navy' | 'graphite';
  /** Outer 1px frame. On by default. */
  bordered?: boolean;
}
export function RuleGrid(props: RuleGridProps): JSX.Element;
