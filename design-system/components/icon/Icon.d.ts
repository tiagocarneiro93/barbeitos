import * as React from 'react';

/**
 * Line icon. Substituted set — Lucide via CDN. See readme.md > Iconography.
 */
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Lucide glyph id, kebab-case, e.g. "arrow-right", "ruler", "building-2". */
  name: string;
  /** Square edge in px. 16 / 20 / 24 are the system steps. */
  size?: number;
  /** Override the glyph colour. Defaults to currentColor. */
  stroke?: string;
  /** Accessible name. Omit for decorative glyphs. */
  label?: string;
}
export function Icon(props: IconProps): JSX.Element;
