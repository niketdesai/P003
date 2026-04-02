# ENND CO — Brand Style Guide
## v1 · 02 Apr 2026

---

## PALETTE

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Teal | `#3E6670` | Left field, TECHNOLOGY vertical, primary accent |
| Cream | `#F4F1EA` | Right field, backgrounds, light text on teal |
| Vermilion | `#C4462B` | HOSPITALITY vertical, signal events, emphasis |
| Navy | `#2B4A5C` | FINANCE vertical |
| Near-black | `#141210` | Headlines, high-contrast text |

### Neutral Scale
| Name | Hex | Usage |
|------|-----|-------|
| Dark text | `#5C574E` | Body text on cream |
| Mid text | `#8A8478` | Monospace data, secondary info |
| Light text | `#B0A898` | Tertiary, labels |
| Rule | `#DDD8CF` | Horizontal dividers on cream |
| Entity line | `#F4F1EA` | Entity footer, low-contrast text on teal |

### Vertical Color System
Each vertical has a dedicated color used for:
- Border on vertical tags
- Section headers
- Project card accents
- Essay underline coding

| Vertical | Color | Hex |
|----------|-------|-----|
| Technology | Teal | `#3E6670` |
| Hospitality | Vermilion | `#C4462B` |
| Finance | Navy | `#2B4A5C` |

---

## TYPOGRAPHY

### Font Stack
| Role | Font | Weight | Size |
|------|------|--------|------|
| Mark / headlines | Archivo | 900 (Black) | 48px mark, 12px headers |
| Section labels | Archivo | 800 | 8-9px, all caps, tracked |
| Body / sentence | Libre Baskerville | 400/400i | 13-14px |
| Data / timeline | Space Mono | 400/700 | 9px |
| Tags / verticals | Archivo | 700 | 8px, all caps, tracked |

### Tracking
- Section labels: `letter-spacing: 0.12-0.18em`
- Vertical tags: `letter-spacing: 0.08em`
- Body: default
- Mark: `letter-spacing: -0.03em` (tight)

---

## GRAPHIC SYSTEM

### Signal B — Scrolling Intercept
The primary graphic element. Lives on the teal left field.

- **Grain**: SVG feTurbulence filter (fractalNoise, baseFrequency 0.6, 4 octaves)
- **Signal lines**: Two waveforms scrolling left via CSS `drift` animation (22s loop)
  - White line: `stroke="#F4F1EA"` at 0.08 opacity, 1px weight
  - Red line: `stroke="#C4462B"` at 0.12 opacity, 0.7px weight
- **Intercept line**: Vertical `#C4462B` at 50% left, 0.15 opacity
- **Edge fade**: CSS gradient overlay, teal→transparent→teal (12% edges)
- **Lorenz field**: Canvas layer, accumulates over visit duration
  - Parameters: σ=10, β=8/3, ρ=28
  - Fill: `rgba(244,241,234,0.003)` per point
  - Unique per page load (random initial conditions)
- **Signal Found event**:
  - Timing: 20-45 second random intervals, cycles indefinitely
  - Appearance: Vermilion glow, 30-70px random radius
  - Duration: ~300ms fire, ~1200ms visible, ~600ms fade
  - State machine: scanning → firing → visible → fading → scanning

---

## LAYOUT

### F4 Split
- Left field: 44% width, teal background
- Right field: 56% width, cream background
- No visible separator between panels
- Minimum height: 100vh on desktop

### Content Hierarchy (Right Side)
1. Entity label (ENND CO)
2. Positioning text
3. Vertical tags
4. Principal + background
5. Also Building
6. Thinking (essays)
7. Contact

### Fade-in Sequence
Staggered entrance: 0.2s → 0.5s → 0.8s → 1.1s → 1.4s

---

## LINKS

All links: `text-decoration: underline`, `text-underline-offset: 3px`,
`text-decoration-thickness: 0.5px`, inherits parent color.
Hover: `opacity: 0.7`.

---

## PROJECT CARDS (Extending the System)

Each project card inherits:
- Vertical color as left border or top accent
- Space Mono for project code
- Archivo for project name
- Libre Baskerville for description
- Signal grain texture as card background option

---

## MARKS

- Primary: `~/nnd` in Archivo 900
  - `~/` in cream on teal field
  - `nnd` in near-black on teal field
- Entity: `ENND CO` in Archivo 900, 9px, tracked 0.18em, vermilion
- Footer: `ENND I, LLC · SAN FRANCISCO` in Archivo 700, 8px, 0.3 opacity

---

## DO NOT USE

- Gold (#D4A853) — that's the P003/project sites palette, not ENND CO
- The House Fund — never reference
- Yomomma Ventures — never reference
- Bright colors, gradients, drop shadows
- System fonts, Inter, generic sans-serif
