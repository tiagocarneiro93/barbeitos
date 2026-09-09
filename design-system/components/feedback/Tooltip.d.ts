import * as React from 'react';

/** Onyx label revealed on hover/focus. One short phrase, never a sentence. */
export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  label: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  children?: React.ReactNode;
}
export function Tooltip(props: TooltipProps): JSX.Element;
