/**
 * NND Project Theme Tokens
 *
 * Centralized design values. Import T everywhere, use T.c.accent for the
 * project-specific color. Change the accent in config.js — it flows here.
 *
 * The background/text scale is invariant across all NND projects.
 * Only the accent color changes per project.
 */

import { PROJECT } from "../config.js";

export const T = {
  fonts: {
    mono: "'JetBrains Mono', monospace",
    sans: "'DM Sans', sans-serif",
  },
  c: {
    // Backgrounds (darkest to lightest)
    bg0: "#0a0a0a",
    bg1: "#0d0d0d",
    bg2: "#111111",
    bg3: "#151515",
    bg4: "#1a1a1a",
    bg5: "#1f1f1f",
    bg6: "#252525",
    // Text (lightest to darkest)
    t0: "#f0ede5",
    t1: "#e0ddd5",
    t2: "#cccccc",
    t3: "#999999",
    t4: "#888888",
    t5: "#666666",
    t6: "#555555",
    t7: "#444444",
    t8: "#333333",
    t9: "#2a2a2a",
    // Project accent (from config.js)
    accent: PROJECT.accent,
    // Semantic
    success: "#5a9e6f",
    warning: "#b8a44e",
    danger: "#b85c5c",
    info: "#5B8BA0",
  },
  r: { sm: 3, md: 6, lg: 8, xl: 12 },
  s: { xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 24, x3: 28, x4: 40 },
};

/**
 * Style factory functions — generate inline style objects consistently.
 *
 * Usage:
 *   <span style={st.mono(11, T.c.t5)}>LABEL</span>
 *   <p style={st.sans(14, T.c.t1)}>Body text</p>
 */
export const st = {
  mono: (size = 12, color = T.c.t3, extra = {}) => ({
    fontFamily: T.fonts.mono,
    fontSize: size,
    color,
    letterSpacing: "0.03em",
    ...extra,
  }),
  sans: (size = 14, color = T.c.t1, extra = {}) => ({
    fontFamily: T.fonts.sans,
    fontSize: size,
    color,
    lineHeight: 1.5,
    ...extra,
  }),
};

/**
 * Merge style objects (shorthand for {...a, ...b}).
 */
export const sx = (...styles) => Object.assign({}, ...styles);

/**
 * Google Fonts CSS import string (for injection into <style> tags).
 * Typically not needed — fonts are loaded in index.html.
 */
export const FONTS_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=DM+Sans:wght@400;500;600;700&display=swap');
`;
