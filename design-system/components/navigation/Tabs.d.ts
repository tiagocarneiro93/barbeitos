import * as React from 'react';

/** Mono tab bar with a 1px terracotta underline on the active item. */
export interface TabItem { value: string; label: string }
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: (string | TabItem)[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  tone?: 'default' | 'inverse';
  /** underline = full-width rule beneath the bar; bare = inline filter row. */
  variant?: 'underline' | 'bare';
}
export function Tabs(props: TabsProps): JSX.Element;
