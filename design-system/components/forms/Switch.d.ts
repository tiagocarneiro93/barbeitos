import * as React from 'react';

/** Immediate on/off toggle. Rectangular track, square knob — no pill. */
export interface SwitchProps extends React.HTMLAttributes<HTMLLabelElement> {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
export function Switch(props: SwitchProps): JSX.Element;
