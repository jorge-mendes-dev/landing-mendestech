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

_This guide ensures GitHub Copilot aligns with Mendestech’s technical standards and produces high-quality, production-ready code._
