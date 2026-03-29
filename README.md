# Jorge Mendes Portfolio — Mendestech

Modern, high-performance portfolio and landing page for Jorge Mendes, built with **React 19**, **TypeScript**, and **Vite**. Features a clean, accessible UI, rich animations, and a scalable architecture for rapid development.

## 💫 Deploy

[![Netlify Status](https://api.netlify.com/api/v1/badges/4649d379-760f-4e2e-a11d-df09216e019b/deploy-status)](https://app.netlify.com/sites/landing-mendestech/deploys)

## 🌐 [Access the Website](https://jorgemendes.com.br/)

<p align="center">
  <a href="https://jorgemendes.com.br/">
    <img src="https://raw.githubusercontent.com/Jorge-Bill/Jorge-Bill/master/assets/jorgeMendesWeb.png" alt="Jorge Mendes Portfolio Screenshot" />
  </a>
</p>

---

## 🚀 Features

- **React 19** + **TypeScript** + **Vite**
- **TailwindCSS v3** + **styled-components v6**
- **Framer Motion** for animations
- **Headless UI** & **Heroicons** for accessible UI
- **React Router DOM v7** for routing
- **React PDF**, **React CountUp**, **React Fast Marquee** for rich content
- **Vitest** + **Testing Library** for testing
- **Commitlint**, **Husky**, **Lint-Staged**, **Prettier** for code quality
- **Plop** for component scaffolding
- **Strict TypeScript config**
- **SEO optimized** with dynamic meta tags
- **Dark mode** (always enabled)

---

## 📁 Project Structure

```
src/
  App.tsx
  main.tsx
  assets/
    images/
    styles/
  components/
    [Feature]/
      index.tsx
      index.test.tsx
      styled.tsx
  config/
    index.json
    Projects.tsx
    Techs.tsx
    Brands.tsx
    Icons.tsx
  hooks/
  pages/
    home.tsx
    aboutMe.tsx
    projects.tsx
    project.tsx
    resume.tsx
    utils.tsx
  routes/
    routes.tsx
  utils/
    analytics.tsx
    generic.tsx
```

---

## 🛠 Scripts

- `pnpm dev` — Start local dev server ([localhost:5173](http://localhost:5173))
- `pnpm build` — Build for production
- `pnpm test` — Run Vitest test suite
- `pnpm lint` — Run ESLint
- `pnpm format` — Run Prettier
- `pnpm generate` — Generate new components with Plop
- `pnpm commit` — Commit with Commitizen (Husky/Commitlint enforced)

> Replace `pnpm` with `yarn` or `npm` if preferred.

---

## 🧪 Testing

- **Vitest** + **@testing-library/react** for unit and integration tests
- Run all tests: `pnpm test`
- Coverage: `pnpm test --coverage`

---

## 🖥 Environment Variables

Set these in your `.env` file:

- `VITE_APP_TITLE` — Site title
- `VITE_APP_DESCRIPTION` — Site description
- `VITE_APP_LANG` — Language
- `VITE_APP_IMAGE` — Default image
- `VITE_APP_AUTHOR` — Author
- `VITE_PUBLIC_URL` — Public URL

---

## 🧹 Code Quality & Tooling

- **ESLint** (strict, TypeScript-aware)
- **Prettier** (auto-formatting)
- **Husky** + **Lint-Staged** (pre-commit hooks)
- **Commitlint** (conventional commits)
- **Plop** (component generator)

---

## 📄 License

MIT

## 🛠 Scripts

- `yarn dev` - start the app. open in [local](http://localhost:3000).
- `yarn generate` - execute the script to generate new components.
- `yarn build` - execute the script to build the application.
- `yarn test` - execute the Jest test suite.
- `yarn commit` - commit changes with Husky and commitizen | type `git commit` works too.
- `yarn lint` - use prettier to verify files on your app.
- `yarn format` - use prettier to format files on your app.

## 💾 SET Husky hoooks

- `yarn husky install`

If any of yours hook is not working, you can make them execute with:

- `yarn husky add .husky/hook-name`

## 🖥 ENV VARIABLES

.env variables used for Seo component.

- `VITE_APP_TITLE=''`
- `VITE_APP_DESCRIPTION=''`
- `VITE_APP_LANG=''`
- `VITE_APP_IMAGE=''`
- `VITE_APP_AUTHOR=''`
- `VITE_PUBLIC_URL=''`
