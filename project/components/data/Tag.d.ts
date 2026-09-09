import * as React from 'react';

/** Square mono filter chip. Selected state fills terracotta. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  selected?: boolean;
  onRemove?: (e: React.MouseEvent) => void;
}
export function Tag(props: TagProps): JSX.Element;
