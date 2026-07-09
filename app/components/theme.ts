import type { CSSProperties } from "react";

export const ORANGE = "#EE6A22";
export const INK = "#1C1C1E";
export const MUTED = "#6E6E73";
export const MANROPE = "'Manrope',sans-serif";
export const MONO = "ui-monospace,SFMono-Regular,Menlo,monospace";

/** Small uppercase section eyebrow. Add `marginBottom` at the call site. */
export const eyebrow: CSSProperties = {
  color: ORANGE,
  fontWeight: 700,
  fontSize: 14,
  letterSpacing: ".14em",
  textTransform: "uppercase",
};

/** Shared base for the big Manrope section headings. Add `fontSize`/`maxWidth`. */
export const h2Base: CSSProperties = {
  fontFamily: MANROPE,
  fontWeight: 800,
  lineHeight: 1.05,
  letterSpacing: "-.03em",
  margin: 0,
};
