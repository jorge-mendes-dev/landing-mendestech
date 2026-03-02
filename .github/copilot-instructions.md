# 🧠 GitHub Copilot Instructions — Mendestech

These instructions define how **GitHub Copilot** should generate, format, and structure code for the **Mendestech** project.
The goal is to ensure **clean, maintainable, and scalable** code that matches our architecture and standards.

---

## ⚙️ Project Overview

This is a **React 19 + TypeScript + Vite** project.
Key technologies:

- **React Router DOM (v7)** for routing
- **Styled-components v6** and **TailwindCSS v3** for styling
- **Framer Motion** and **Lottie Player** for animations
- **Headless UI** and **Heroicons** for accessible UI components
- **React PDF**, **React CountUp**, and **React Fast Marquee** for rich content
- **Vitest + Testing Library** for testing
- **Commitlint**, **Husky**, **Lint-Staged**, **Prettier** for code quality
- **Plop** for scaffolding
- Strict **TypeScript** configuration

---

## 💻 Code Style

### General

- Always use **TypeScript** with explicit types or generics — avoid `any`.
- Use **arrow functions** and **const** declarations.
- Components must be **pure, functional**, and **self-contained**.
- Organize imports: React → libraries → local components → styles.
- Prefer **early returns** to reduce nesting.

### Naming

- **PascalCase** → Components, Interfaces, Enums
- **camelCase** → Functions, Variables, Hooks
- Prefix hooks with `use` (e.g., `useFetchUser`).
- Styled components: `Container`, `Wrapper`, `StyledButton`, etc.

### File conventions

- One component per file (`ComponentName.tsx`).
- Group related files per feature or module.
- Use `index.ts` for grouped exports.

---

## 🎨 Styling

You may use **styled-components** or **TailwindCSS**, depending on context.

**Guidelines:**

1. Use **styled-components v6** for dynamic or prop-based styles.
2. Use **TailwindCSS** for layout utilities and responsive structure.
3. Co-locate styles with components when possible.

**Styled-component order:**

1. Base style
2. Prop-based variants
3. Responsive styles

**Example:**

```jsx
const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  ${({ $variant }) =>
    $variant === 'primary'
      ? css`
          background: var(--blue-500);
          color: #fff;
        `
      : css`
          background: #fff;
          color: var(--blue-500);
        `}
  @media (max-width: 768px) {
    width: 100%;
  }
`
```

---

## 🧩 Component Architecture

Follow the project structure:

```
src/
│  ├─ App.jsx
│  ├─ assets/
│  │  ├─ images/
│  │  │  ├─ brands/
│  │  │  ├─ code.jpg
│  │  │  ├─ defaultImg.svg
│  │  │  ├─ favicon.ico
│  │  │  ├─ git.jpg
│  │  │  ├─ jorge.png
│  │  │  ├─ jorge_mendes.png
│  │  │  ├─ jorge_profile.jpeg
│  │  │  ├─ logo.png
│  │  │  ├─ logo.svg
│  │  │  ├─ notebook.jpg
│  │  │  ├─ profile.svg
│  │  │  ├─ projects/
│  │  │  └─ techs/
│  │  └─ styles/
│  │     ├─ globalStyles.jsx
│  │     ├─ main.css
│  │     └─ themes/
│  │        ├─ themeDefault.jsx
│  │        └─ themeMendesTech.jsx
│  ├─ components/
│  │  ├─ About/
│  │  │  ├─ index.jsx
│  │  │  ├─ index.test.jsx
│  │  │  └─ __snapshots__
│  │  │     └─ index.test.jsx.snap
│  │  ├─ ClientsList/
│  │  │  ├─ index.jsx
│  │  │  ├─ index.test.jsx
│  │  │  ├─ styled.jsx
│  │  │  └─ __snapshots__
│  │  │     └─ index.test.jsx.snap
│  │  ├─ Counter/
│  │  │  ├─ CounterItem.jsx
│  │  │  ├─ index.jsx
│  │  │  ├─ index.test.jsx
│  │  │  ├─ styled.jsx
│  │  │  └─ __snapshots__
│  │  │     └─ index.test.jsx.snap
│  │  ├─ CreateQRCode/
│  │  │  ├─ index.jsx
│  │  │  ├─ index.test.jsx
│  │  │  └─ __snapshots__
│  │  │     └─ index.test.jsx.snap
│  │  ├─ Divider/
│  │  │  ├─ index.jsx
│  │  │  ├─ index.test.jsx
│  │  │  └─ __snapshots__
│  │  │     └─ index.test.jsx.snap
│  │  ├─ Feedbacks/
│  │  │  ├─ index.jsx
│  │  │  ├─ index.test.jsx
│  │  │  └─ __snapshots__
│  │  │     └─ index.test.jsx.snap
│  │  ├─ Footer/
│  │  │  ├─ index.jsx
│  │  │  ├─ index.test.jsx
│  │  │  ├─ styled.jsx
│  │  │  └─ __snapshots__
│  │  │     └─ index.test.jsx.snap
│  │  ├─ Header/
│  │  │  ├─ index.jsx
│  │  │  ├─ index.test.jsx
│  │  │  ├─ styled.jsx
│  │  │  └─ __snapshots__
│  │  │     └─ index.test.jsx.snap
│  │  ├─ HeaderSub/
│  │  │  ├─ index.jsx
│  │  │  ├─ index.test.jsx
│  │  │  ├─ styled.jsx
│  │  │  └─ __snapshots__
│  │  │     └─ index.test.jsx.snap
│  │  ├─ HomeAbout/
│  │  │  ├─ index.jsx
│  │  │  ├─ index.test.jsx
│  │  │  ├─ styled.jsx
│  │  │  └─ __snapshots__
│  │  │     └─ index.test.jsx.snap
│  │  ├─ ImageCard/
│  │  │  ├─ index.jsx
│  │  │  ├─ index.test.jsx
│  │  │  └─ __snapshots__
│  │  │     └─ index.test.jsx.snap
│  │  ├─ index.jsx
│  │  ├─ IntroduceMe/
│  │  │  ├─ index.jsx
│  │  │  ├─ index.test.jsx
│  │  │  └─ __snapshots__
│  │  │     └─ index.test.jsx.snap
│  │  ├─ LazyShow/
│  │  │  ├─ index.jsx
│  │  │  ├─ index.test.jsx
│  │  │  └─ __snapshots__
│  │  │     └─ index.test.jsx.snap
│  │  ├─ MainHeroImage/
│  │  │  ├─ index.jsx
│  │  │  ├─ index.test.jsx
│  │  │  └─ __snapshots__
│  │  │     └─ index.test.jsx.snap
│  │  ├─ Navbar/
│  │  │  ├─ index.jsx
│  │  │  └─ styled.jsx
│  │  ├─ NotFound/
│  │  │  ├─ index.jsx
│  │  │  └─ styled.jsx
│  │  ├─ OpenLink/
│  │  │  └─ index.jsx
│  │  ├─ PlayerAnimation/
│  │  │  ├─ index.jsx
│  │  │  └─ styled.jsx
│  │  ├─ ProjectDetails/
│  │  │  ├─ index.jsx
│  │  │  └─ styled.jsx
│  │  ├─ ProjectItem/
│  │  │  └─ index.jsx
│  │  ├─ ProjectsList/
│  │  │  └─ index.jsx
│  │  ├─ Reader/
│  │  │  └─ index.jsx
│  │  ├─ Seo/
│  │  │  └─ index.jsx
│  │  ├─ Skeleton/
│  │  │  ├─ index.jsx
│  │  │  └─ styled.jsx
│  │  ├─ SkillsList/
│  │  │  ├─ index.jsx
│  │  │  └─ styled.jsx
│  │  ├─ SocialLinks/
│  │  │  ├─ index.jsx
│  │  │  └─ styled.jsx
│  │  ├─ TalkLink/
│  │  │  └─ index.jsx
│  │  ├─ Timeline/
│  │  │  ├─ index.jsx
│  │  │  └─ styled.jsx
│  │  └─ Utilities/
│  │     └─ index.jsx
│  ├─ config/
│  │  ├─ Brands.jsx
│  │  ├─ constants.jsx
│  │  ├─ Icons.jsx
│  │  ├─ index.json
│  │  ├─ project/
│  │  │  ├─ aprova.json
│  │  │  ├─ hotmart.json
│  │  │  ├─ plantoes.json
│  │  │  ├─ provu.json
│  │  │  └─ webmeeting.json
│  │  ├─ Projects.jsx
│  │  └─ Techs.jsx
│  ├─ hooks/
│  │  ├─ useGoogleAnalytics.jsx
│  │  ├─ useNotifications.jsx
│  │  └─ useTheme.jsx
│  ├─ main.jsx
│  ├─ pages/
│  │  ├─ 404.jsx
│  │  ├─ aboutMe.jsx
│  │  ├─ home.jsx
│  │  ├─ project.jsx
│  │  ├─ projects.jsx
│  │  ├─ resume.jsx
│  │  └─ utils.jsx
│  ├─ routes/
│  │  └─ routes.jsx
│  └─ utils/
│     ├─ analytics.jsx
│     ├─ generic.jsx
│     └─ JSON/
```

**Principles:**

- Keep components **small** and **focused**.
- Extract logic to **custom hooks**.
- Avoid prop drilling — lift state or use context when necessary.

---

## 🧠 Logic & State Management

- Use **React hooks** (`useState`, `useEffect`, `useMemo`, etc.) for logic.
- Use **Context** only for global concerns.
- Consider **Zustand** or similar lightweight state stores for shared state.
- Keep side effects isolated.
- Use **custom hooks** for shared logic between components.

---

## 🧪 Testing

Use **Vitest** + **React Testing Library**.

**Guidelines:**

- Use `@testing-library/react` for rendering components.
- Use `userEvent` for realistic user interaction.
- Mock external modules (e.g., `react-ga4`) with `vi.mock()`.
- Co-locate tests with components (`ComponentName.test.tsx`).

---

## 🧱 Forms & Validation

- Use **React Hook Form** + **Zod** for schema-based validation.
- All inputs must have:
  - Accessible `<label>` linked via `htmlFor`
  - Validation messages on error
  - Type-safe defaults

**Example:**

```ts
import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})
```

---

## 🔒 Security & Data Handling

- Sanitize all HTML / user input using **DOMPurify**.
- Never hardcode secrets — always use environment variables.
- Use secure HTTPS APIs.
- Validate all external data with Zod or DTOs.
- Prevent analytics or tracking leaks.

---

## ⚡ Performance

- Lazy-load routes and large components (`React.lazy`).
- Use `React.memo` for pure UI components.
- Optimize images via `vite-plugin-image-optimizer`.
- Use **Suspense** and **Error Boundaries** for async safety.
- Keep animations efficient — use **Framer Motion** only when valuable.

---

## 🧭 Copilot Behavior Preferences

Copilot **should**:

- Suggest **typed**, **clean**, and **idiomatic React + TypeScript** code.
- Use **composition over inheritance**.
- Generate **pure functional components** with typed props.
- Include **JSDoc comments** for exported utilities and hooks.
- Suggest **semantic HTML** and **accessible markup**.

Copilot **should not**:

- Use `any` or implicit types.
- Suggest `class` components.
- Mix Tailwind and styled-components in one element.
- Use inline styles unless explicitly needed.

---

## 🧩 Example Component

```tsx
import { motion } from 'framer-motion'
import styled from 'styled-components'

interface FeatureCardProps {
  title: string
  description: string
}

const Card = styled(motion.div)`
  background: var(--surface);
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.2s ease;
  &:hover {
    transform: translateY(-4px);
  }
`

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description
}) => (
  <Card whileHover={{ scale: 1.03 }}>
    <h3>{title}</h3>
    <p>{description}</p>
  </Card>
)
```

---

## 🧰 Tooling Compatibility

Copilot suggestions must work seamlessly with:

- **Vite** (`vite`, `vite build`, `vite preview`)
- **Prettier** for formatting (`prettier --write .`)
- **ESLint 9** for lint rules
- **Husky + Lint-Staged** for pre-commit validation
- **Commitizen / Conventional Commits** for version control hygiene

---

## 📘 Quick Summary for Copilot Behavior

| Category      | Expected Behavior                            |
| ------------- | -------------------------------------------- |
| Language      | TypeScript only                              |
| Style         | Functional, composable, minimal side effects |
| UI            | Styled-components v6 + Tailwind              |
| Accessibility | Semantic HTML + aria attributes              |
| Performance   | Lazy-loading + memoization                   |
| Testing       | Vitest + Testing Library                     |
| Validation    | React Hook Form + Zod                        |
| Code Quality  | Prettier + ESLint enforced                   |

---

---

name: design-principles
description: Enforce a precise, minimal design system inspired by Linear, Notion, and Stripe. Use this skill when building dashboards, admin interfaces, or any UI that needs Jony Ive-level precision - clean, modern, minimalist with taste. Every pixel matters.

---

# Design Principles

This skill enforces precise, crafted design for enterprise software, SaaS dashboards, admin interfaces, and web applications. The philosophy is Jony Ive-level precision with intentional personality — every interface is polished, and each is designed for its specific context.

## Design Direction (REQUIRED)

**Before writing any code, commit to a design direction.** Don't default. Think about what this specific product needs to feel like.

### Think About Context

- **What does this product do?** A finance tool needs different energy than a creative tool.
- **Who uses it?** Power users want density. Occasional users want guidance.
- **What's the emotional job?** Trust? Efficiency? Delight? Focus?
- **What would make this memorable?** Every product has a chance to feel distinctive.

### Choose a Personality

Enterprise/SaaS UI has more range than you think. Consider these directions:

**Precision & Density** — Tight spacing, monochrome, information-forward. For power users who live in the tool. Think Linear, Raycast, terminal aesthetics.

**Warmth & Approachability** — Generous spacing, soft shadows, friendly colors. For products that want to feel human. Think Notion, Coda, collaborative tools.

**Sophistication & Trust** — Cool tones, layered depth, financial gravitas. For products handling money or sensitive data. Think Stripe, Mercury, enterprise B2B.

**Boldness & Clarity** — High contrast, dramatic negative space, confident typography. For products that want to feel modern and decisive. Think Vercel, minimal dashboards.

**Utility & Function** — Muted palette, functional density, clear hierarchy. For products where the work matters more than the chrome. Think GitHub, developer tools.

**Data & Analysis** — Chart-optimized, technical but accessible, numbers as first-class citizens. For analytics, metrics, business intelligence.

Pick one. Or blend two. But commit to a direction that fits the product.

### Choose a Color Foundation

**Don't default to warm neutrals.** Consider the product:

- **Warm foundations** (creams, warm grays) — approachable, comfortable, human
- **Cool foundations** (slate, blue-gray) — professional, trustworthy, serious
- **Pure neutrals** (true grays, black/white) — minimal, bold, technical
- **Tinted foundations** (slight color cast) — distinctive, memorable, branded

**Light or dark?** Dark modes aren't just light modes inverted. Dark feels technical, focused, premium. Light feels open, approachable, clean. Choose based on context.

**Accent color** — Pick ONE that means something. Blue for trust. Green for growth. Orange for energy. Violet for creativity. Don't just reach for the same accent every time.

### Choose a Layout Approach

The content should drive the layout:

- **Dense grids** for information-heavy interfaces where users scan and compare
- **Generous spacing** for focused tasks where users need to concentrate
- **Sidebar navigation** for multi-section apps with many destinations
- **Top navigation** for simpler tools with fewer sections
- **Split panels** for list-detail patterns where context matters

### Choose Typography

Typography sets tone. Don't always default:

- **System fonts** — fast, native, invisible (good for utility-focused products)
- **Geometric sans** (Geist, Inter) — modern, clean, technical
- **Humanist sans** (SF Pro, Satoshi) — warmer, more approachable
- **Monospace influence** — technical, developer-focused, data-heavy

---

## Core Craft Principles

These apply regardless of design direction. This is the quality floor.

### The 4px Grid

All spacing uses a 4px base grid:

- `4px` - micro spacing (icon gaps)
- `8px` - tight spacing (within components)
- `12px` - standard spacing (between related elements)
- `16px` - comfortable spacing (section padding)
- `24px` - generous spacing (between sections)
- `32px` - major separation

### Symmetrical Padding

**TLBR must match.** If top padding is 16px, left/bottom/right must also be 16px. Exception: when content naturally creates visual balance.

```css
/* Good */
padding: 16px;
padding: 12px 16px; /* Only when horizontal needs more room */

/* Bad */
padding: 24px 16px 12px 16px;
```

### Border Radius Consistency

Stick to the 4px grid. Sharper corners feel technical, rounder corners feel friendly. Pick a system and commit:

- Sharp: 4px, 6px, 8px
- Soft: 8px, 12px
- Minimal: 2px, 4px, 6px

Don't mix systems. Consistency creates coherence.

### Depth & Elevation Strategy

**Match your depth approach to your design direction.** Depth is a tool, not a requirement. Different products need different approaches:

**Borders-only (flat)** — Clean, technical, dense. Works for utility-focused tools where information density matters more than visual lift. Linear, Raycast, and many developer tools use almost no shadows — just subtle borders to define regions. This isn't lazy; it's intentional restraint.

**Subtle single shadows** — Soft lift without complexity. A simple `0 1px 3px rgba(0,0,0,0.08)` can be enough. Works for approachable products that want gentle depth without the weight of layered shadows.

**Layered shadows** — Rich, premium, dimensional. Multiple shadow layers create realistic depth for products that want to feel substantial. Stripe and Mercury use this approach. Best for cards that need to feel like physical objects.

**Surface color shifts** — Background tints establish hierarchy without any shadows. A card at `#fff` on a `#f8fafc` background already feels elevated. Shadows can reinforce this, but color does the heavy lifting.

Choose ONE approach and commit. Mixing flat borders on some cards with heavy shadows on others creates visual inconsistency.

```css
/* Borders-only approach */
--border: rgba(0, 0, 0, 0.08);
--border-subtle: rgba(0, 0, 0, 0.05);
border: 0.5px solid var(--border);

/* Single shadow approach */
--shadow: 0 1px 3px rgba(0, 0, 0, 0.08);

/* Layered shadow approach (when appropriate) */
--shadow-layered:
  0 0 0 0.5px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.04),
  0 2px 4px rgba(0, 0, 0, 0.03), 0 4px 8px rgba(0, 0, 0, 0.02);
```

**The craft is in the choice, not the complexity.** A flat interface with perfect spacing and typography is more polished than a shadow-heavy interface with sloppy details.

### Card Layouts Vary, Surface Treatment Stays Consistent

Monotonous card layouts are lazy design. A metric card doesn't have to look like a plan card doesn't have to look like a settings card. One might have a sparkline, another an avatar stack, another a progress ring, another a two-column split.

Design each card's internal structure for its specific content — but keep the surface treatment consistent: same border weight, shadow depth, corner radius, padding scale, typography. Cohesion comes from the container chrome, not from forcing every card into the same layout template.

### Isolated Controls

UI controls deserve container treatment. Date pickers, filters, dropdowns — these should feel like crafted objects sitting on the page, not plain text with click handlers.

**Never use native form elements for styled UI.** Native `<select>`, `<input type="date">`, and similar elements render OS-native dropdowns and pickers that cannot be styled. Build custom components instead:

- Custom select: trigger button + positioned dropdown menu
- Custom date picker: input + calendar popover
- Custom checkbox/radio: styled div with state management

**Custom select triggers must use `display: inline-flex` with `white-space: nowrap`** to keep text and chevron icons on the same row. Without this, flex children can wrap to new lines.

### Typography Hierarchy

- Headlines: 600 weight, tight letter-spacing (-0.02em)
- Body: 400-500 weight, standard tracking
- Labels: 500 weight, slight positive tracking for uppercase
- Scale: 11px, 12px, 13px, 14px (base), 16px, 18px, 24px, 32px

### Monospace for Data

Numbers, IDs, codes, timestamps belong in monospace. Use `tabular-nums` for columnar alignment. Mono signals "this is data."

### Iconography

Use **Phosphor Icons** (`@phosphor-icons/react`). Icons clarify, not decorate — if removing an icon loses no meaning, remove it.

Give standalone icons presence with subtle background containers.

### Animation

- 150ms for micro-interactions, 200-250ms for larger transitions
- Easing: `cubic-bezier(0.25, 1, 0.5, 1)`
- No spring/bouncy effects in enterprise UI

### Contrast Hierarchy

Build a four-level system: foreground (primary) → secondary → muted → faint. Use all four consistently.

### Color for Meaning Only

Gray builds structure. Color only appears when it communicates: status, action, error, success. Decorative color is noise.

When building data-heavy interfaces, ask whether each use of color is earning its place. Score bars don't need to be color-coded by performance — a single muted color works. Grade badges don't need traffic-light colors — typography can do the hierarchy work. Look at how GitHub renders tables and lists: almost entirely monochrome, with color reserved for status indicators and actionable elements.

---

## Navigation Context

Screens need grounding. A data table floating in space feels like a component demo, not a product. Consider including:

- **Navigation** — sidebar or top nav showing where you are in the app
- **Location indicator** — breadcrumbs, page title, or active nav state
- **User context** — who's logged in, what workspace/org

When building sidebars, consider using the same background as the main content area. Tools like Supabase, Linear, and Vercel rely on a subtle border for separation rather than different background colors. This reduces visual weight and feels more unified.

---

## Dark Mode Considerations

Dark interfaces have different needs:

**Borders over shadows** — Shadows are less visible on dark backgrounds. Lean more on borders for definition. A border at 10-15% white opacity might look nearly invisible but it's doing its job — resist the urge to make it more prominent.

**Adjust semantic colors** — Status colors (success, warning, error) often need to be slightly desaturated or adjusted for dark backgrounds to avoid feeling harsh.

**Same structure, different values** — The hierarchy system (foreground → secondary → muted → faint) still applies, just with inverted values.

---

## Anti-Patterns

### Never Do This

- Dramatic drop shadows (`box-shadow: 0 25px 50px...`)
- Large border radius (16px+) on small elements
- Asymmetric padding without clear reason
- Pure white cards on colored backgrounds
- Thick borders (2px+) for decoration
- Excessive spacing (margins > 48px between sections)
- Spring/bouncy animations
- Gradients for decoration
- Multiple accent colors in one interface

### Always Question

- "Did I think about what this product needs, or did I default?"
- "Does this direction fit the context and users?"
- "Does this element feel crafted?"
- "Is my depth strategy consistent and intentional?"
- "Are all elements on the grid?"

---

## The Standard

Every interface should look designed by a team that obsesses over 1-pixel differences. Not stripped — _crafted_. And designed for its specific context.

Different products want different things. A developer tool wants precision and density. A collaborative product wants warmth and space. A financial product wants trust and sophistication. Let the product context guide the aesthetic.

The goal: intricate minimalism with appropriate personality. Same quality bar, context-driven execution.

_This guide ensures GitHub Copilot aligns with Mendestech’s technical standards and produces high-quality, production-ready code._
