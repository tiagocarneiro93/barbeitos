import * as React from 'react';

/** Label + hint + error wrapper shared by every form control. */
export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  hint?: string;
  /** Present = the field renders in its error state. */
  error?: string;
  required?: boolean;
  htmlFor?: string;
  children?: React.ReactNode;
}
export function Field(props: FieldProps): JSX.Element;
