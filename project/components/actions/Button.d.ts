import * as React from 'react';

/**
 * Action control. Square, uppercase, 0.16em tracked. The primary action is
 * terracotta and resolves to navy on hover — the brand's signature transition.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = terracotta → navy; navy = navy fill; secondary = hairline outline on paper; ghost = bare; inverse = paper fill on dark; outline-inverse = hairline outline on dark. */
  variant?: 'primary' | 'navy' | 'secondary' | 'ghost' | 'inverse' | 'outline-inverse';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  disabled?: boolean;
  as?: 'button' | 'a';
}
export function Button(props: ButtonProps): JSX.Element;
