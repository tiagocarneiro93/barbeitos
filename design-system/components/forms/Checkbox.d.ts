import * as React from 'react';

/** Square 18px checkbox. Fills solid onyx when checked. */
export interface CheckboxProps extends React.HTMLAttributes<HTMLLabelElement> {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
