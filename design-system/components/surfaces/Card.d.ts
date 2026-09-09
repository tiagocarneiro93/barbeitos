import * as React from 'react';

/**
 * Content container for a property, service or piece. Square, unshadowed and
 * normally borderless — it sits inside a `RuleGrid`, which supplies the rules.
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Mono uppercase kicker, e.g. "Cascais · Em exclusivo". */
  eyebrow?: string;
  /** Serif title. */
  title?: string;
  /** Mono metadata line, e.g. "4 suítes · 420 m² · piscina". */
  meta?: React.ReactNode;
  /** Image slot above the body; scales 1.03 on hover when interactive. */
  media?: React.ReactNode;
  tone?: 'paper' | 'raised' | 'sunken' | 'navy' | 'graphite' | 'terracotta';
  /** Pointer, ground tint on hover and media zoom. */
  interactive?: boolean;
  /** Own 1px frame. Leave off inside a RuleGrid. */
  bordered?: boolean;
  padding?: string;
  /** Rule-topped baseline row — typically price on the left, link on the right. */
  footer?: React.ReactNode;
  as?: 'div' | 'a' | 'article';
}
export function Card(props: CardProps): JSX.Element;
