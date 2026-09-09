import * as React from 'react';

/** Square mono marker overlaid on media or set beside a title: Exclusivo, Arrendamento, availability. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'exclusive' | 'navy' | 'neutral' | 'outline' | 'success' | 'warning' | 'danger';
  dot?: boolean;
}
export function Badge(props: BadgeProps): JSX.Element;
