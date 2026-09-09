import * as React from 'react';

/** Native select in the system's field shell. */
export interface SelectOption { value: string; label: string }
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Strings or {value,label} pairs. */
  options?: (string | SelectOption)[];
  /** Empty-value first option. */
  placeholder?: string;
  invalid?: boolean;
}
export function Select(props: SelectProps): JSX.Element;
