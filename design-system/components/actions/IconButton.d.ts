import * as React from 'react';

/** Square icon-only control. Always give it a `label`. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Lucide glyph id. */
  icon: string;
  /** Accessible name — required. */
  label: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'ghost' | 'outline' | 'solid' | 'inverse';
  disabled?: boolean;
}
export function IconButton(props: IconButtonProps): JSX.Element;
