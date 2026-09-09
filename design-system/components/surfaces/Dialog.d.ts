import * as React from 'react';

/** Modal panel over a navy scrim with a veil blur. Square, long soft shadow. */
export interface DialogProps {
  open?: boolean;
  title?: string;
  description?: string;
  /** Called on scrim click, close button and Escape. */
  onClose?: () => void;
  footer?: React.ReactNode;
  /** Max width in px. Default 520. */
  width?: number;
  children?: React.ReactNode;
}
export function Dialog(props: DialogProps): JSX.Element | null;
