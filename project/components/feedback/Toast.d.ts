import * as React from 'react';

/** Transient confirmation or error. Paper panel with a 2px status edge on the left. */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'info' | 'success' | 'warning' | 'danger';
  title?: string;
  description?: string;
  onDismiss?: () => void;
}
export function Toast(props: ToastProps): JSX.Element;
