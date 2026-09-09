import * as React from 'react';

/** Single-line or multiline text entry. Hairline box, square corners, onyx focus edge. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
  /** Render a textarea instead. */
  multiline?: boolean;
  rows?: number;
}
export function Input(props: InputProps): JSX.Element;
