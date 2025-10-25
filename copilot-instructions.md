# GitHub Copilot Instructions — Mendestech

This document defines how GitHub Copilot should generate, structure, and format code for the Mendestech project.

---

## 🧠 Project Context

This is a **React 18 + TypeScript** project using **Vite**.
Key libraries include:

- **React Router DOM** for routing
- **Styled-components** for styling
- **Framer Motion**, **Lottie Player** for animations
- **React PDF / React PDF to Text**
- **Tailwind CSS** and **PostCSS**
- **Headless UI** and **Heroicons** for UI components
- **React Hook Form**, **Zod**, and **DOMPurify** (if forms or rich-text inputs)
- Analytics / tracking: **React GA**, **PostHog** (if needed)

Copilot should prioritize **clean, readable, and maintainable code**, with **strict TypeScript typing** and **safe handling of user input**.

---

## 💻 Code Style

- Use **TypeScript** with proper types and interfaces.
- Prefer **arrow functions** and `const`.
- Avoid `any`; prefer generics or explicit types.
- Components should be **pure and functional**, small, and reusable.
- Follow **React best practices**: hooks for logic, stateless UI components.

---

## 🎨 Styling

- Use **styled-components v6**.
- Keep styles colocated with components when appropriate.
- Style definition order:
  1. Base component
  2. Props-based variants
  3. Responsive styles

---

## 🧩 Components & Structure

- Components under `src/components/`.
- Use barrel `index.ts` for grouped exports.
- Use `src/hooks/` for logic separation.
- Group GraphQL operations (queries/mutations) under `src/graphql/`.
- Follow feature-first modular architecture.

---

## 🧪 Forms & Validation

- Use **React Hook Form** + **Zod** for validation.
- All inputs must have labels and validation messages.
- Keep validation schemas in `src/schemas`.

---

## 🔒 Security & Data Handling

- Never log or expose sensitive data.
- Sanitize HTML / rich-text content with **DOMPurify**.
- Use environment variables (`process.env`) for secrets or API keys.

---
