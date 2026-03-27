---
name: festo-design-tokens
description: Festo official design tokens for colors, typography, spacing, and animation. Use for consistent UI across all Festo web apps.
---

# Festo Design Tokens

## Overview

This file provides the official Festo BDAI design tokens for use in web applications. Use these tokens for consistent branding, theming, and UI development.

**Keywords**: festo, bdai, design tokens, brand colors, typography, spacing, animation, theming, UI, web apps

## Brand Guidelines

### Colors

**Festo Brand Colors:**

- Caerul (Primary Blue): `#0091DC` — Main brand color, CTAs, key UI elements
- Aterul (Dark Gray): `#333333` — Primary text, dark UI elements

**BDAI Color Variables (CSS):**

**Light Mode:**

- Primary: `--bdai-caerul` (`#0091dc`)
- Background: `--bdai-background` (`#f2f3f5`)
- Text: `--bdai-text` (`#333333`)
- Border: `--bdai-border` (`#d8dce1`)

**Dark Mode:**

- Background: `--bdai-background` (`#121212`)
- Text: `--bdai-text` (`#ffffff`)
- Border: `--bdai-border` (`#3a3a3a`)

**Semantic Colors:**

- Success: `--bdai-green` (`#80ca3d`)
- Warning: `--bdai-yellow` / `--bdai-orange` (`#ffd600` / `#ff9600`)
- Error: `--bdai-red` (`#d50000`)
- Info: `--bdai-hero` (`#0091dc`)

**Button Tokens:**

- Default: `--bdai-btn`, `--bdai-btn-text`
- Hero/Primary: `--bdai-btn-hero`, `--bdai-btn-hero-text`
- Hover: `--bdai-btn-hover`, `--bdai-btn-hero-hover`
- Active: `--bdai-btn-active`, `--bdai-btn-hero-active`
- Disabled: `--bdai-btn-disabled`, `--bdai-btn-text-disabled`

**Gray Scale:**

_Light mode grays:_

- `--bdai-gray-100`: `#f2f3f5`
- `--bdai-gray-200`: `#e5e8eb`
- `--bdai-gray-300`: `#d8dce1`
- `--bdai-gray-400`: `#b6bec6`

_Dark mode grays:_

- `--bdai-gray-100`: `#2a2a2a`
- `--bdai-gray-200`: `#3a3a3a`
- `--bdai-gray-300`: `#4a4a4a`
- `--bdai-gray-400`: `#5a5a5a`

### Typography

- **Headings**: Inter, Arial, sans-serif
- **Body Text**: Inter, Arial, sans-serif
- **Font Weights**: 400 (regular), 600 (semibold), 700 (bold)
- **Font Sizes**: Use Tailwind scale (`text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, etc.)

### Spacing & Layout

- Use Tailwind spacing scale (`p-4`, `m-2`, `gap-6`)
- Custom spacing: `84` = 21rem
- Consistent padding/margin: Prefer `4`, `6`, `8` units for major spacing

### Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Animation Tokens

**Entrance Animations:**

- `animate-fade-in` — Gentle fade in
- `animate-fade-scale` — Fade with scale up
- `animate-slide-up` — Slide from bottom
- `animate-slideInLeft` — Slide from left
- `animate-slideInRight` — Slide from right
- `animate-bounce-in` — Bouncy entrance with rotation

**Exit Animations:**

- `animate-fade-out` — Gentle fade out
- `animate-bounce-out` — Bouncy exit with rotation

**Continuous Animations:**

- `animate-pulse-grow` — Infinite subtle pulse
- `animate-shimmer` — Loading shimmer effect

## Technical Details

### Color Application

- Use CSS variables (`--bdai-*`) for all colors to support theming
- Never hardcode hex values in components
- Ensure light/dark mode support

### Typography Application

- Use Inter font family for all text
- Fallback to Arial, sans-serif
- Use Tailwind classes for font size/weight

### Animation Usage

- Use predefined animation classes for consistent motion
- Prefer Tailwind and DaisyUI utilities

---

For more details, see `/copilot-instructions.md` and app-level `README.md` files.
