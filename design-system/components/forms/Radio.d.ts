import * as React from 'react';

/** Radio group — the only round control in the system. Use for 2–3 options. */
export interface RadioOption { value: string; label: string }
export interface RadioProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  options?: (string | RadioOption)[];
  value?: string;
  defaultValue?: string;
  direction?: 'row' | 'column';
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
export function Radio(props: RadioProps): JSX.Element;
