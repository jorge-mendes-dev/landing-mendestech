## JORGE MENDES WEBSITE

Project of mendes tecnology landing page using a react Vite and Tailwind css.

This project was made thinking on fast and better productivity. So any change on the main structure repository can be pulled and apply to this child project.

## 💫 Deploy

[![Netlify Status](https://api.netlify.com/api/v1/badges/4649d379-760f-4e2e-a11d-df09216e019b/deploy-status)](https://app.netlify.com/sites/landing-mendestech/deploys)

## <a href="https://jorgemendes.com.br/"> 🌐 &nbsp; Acess the website </a>

<p align="center">
  <a href="https://jorgemendes.com.br/">
    <img src="https://raw.githubusercontent.com/Jorge-Bill/Jorge-Bill/master/assets/jorgeMendesWeb.png" />
  </a>
</p>

## 🚀 Project Structure

This project structure a web app with great organization, made to be the base template for other apps.

Stack and resources used on this structure creation.

    .
    ├── Vite + React
    ├── prop-types
    ├── Eslint + eslint-config-airbnb + prettier
    ├── Plop component generator
    ├── Styled-components
    ├── Styled-icons
    ├── Styled-media-query
    ├── React-router-dom
    ├── Jest
    ├── Husky
    ├── Commitizen

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

---

```
landing-mendestech,
├─ .editorconfig,
├─ .eslintignore,
├─ .git,
├─ .github,
├─ .gitignore,
├─ .husky,
├─ .nvmrc,
├─ .prettierignore,
├─ .prettierrc,
├─ .vscode,
├─ CHANGELOG.md,
├─ commitlint.config.cjs,
├─ copilot-instructions.md,
├─ generators,
│  ├─ plopfile.cjs,
│  └─ templates,
├─ index.html,
├─ LICENSE,
├─ package.json,
├─ postcss.config.cjs,
├─ pre-commit,
├─ prepare-commit-msg,
├─ public,
├─ README.md,
├─ src,
│  ├─ App.jsx,
│  ├─ assets,
│  │  ├─ images,
│  │  │  ├─ .gitkeep,
│  │  │  ├─ brands,
│  │  │  │  ├─ atitude.svg,
│  │  │  │  ├─ escala.svg,
│  │  │  │  ├─ fatec.svg,
│  │  │  │  ├─ fdte.svg,
│  │  │  │  ├─ gov.svg,
│  │  │  │  ├─ hotmart.svg,
│  │  │  │  └─ novacia.svg,
│  │  │  ├─ code.jpg,
│  │  │  ├─ defaultImg.svg,
│  │  │  ├─ favicon.ico,
│  │  │  ├─ git.jpg,
│  │  │  ├─ jorge.png,
│  │  │  ├─ jorge_mendes.png,
│  │  │  ├─ jorge_profile.jpeg,
│  │  │  ├─ logo.png,
│  │  │  ├─ logo.svg,
│  │  │  ├─ notebook.jpg,
│  │  │  ├─ profile.svg,
│  │  │  ├─ projects,
│  │  │  └─ techs,
│  │  └─ styles,
│  │     ├─ globalStyles.jsx,
│  │     ├─ main.css,
│  │     └─ themes,
│  │        ├─ themeDefault.jsx,
│  │        └─ themeMendesTech.jsx,
│  ├─ components,
│  │  ├─ About,
│  │  │  ├─ index.jsx,
│  │  │  ├─ index.test.jsx,
│  │  │  └─ __snapshots__,
│  │  │     └─ index.test.jsx.snap,
│  │  ├─ ClientsList,
│  │  │  ├─ index.jsx,
│  │  │  ├─ index.test.jsx,
│  │  │  ├─ styled.jsx,
│  │  │  └─ __snapshots__,
│  │  │     └─ index.test.jsx.snap,
│  │  ├─ Counter,
│  │  │  ├─ CounterItem.jsx,
│  │  │  ├─ index.jsx,
│  │  │  ├─ index.test.jsx,
│  │  │  ├─ styled.jsx,
│  │  │  └─ __snapshots__,
│  │  │     └─ index.test.jsx.snap,
│  │  ├─ CreateQRCode,
│  │  │  ├─ index.jsx,
│  │  │  ├─ index.test.jsx,
│  │  │  └─ __snapshots__,
│  │  │     └─ index.test.jsx.snap,
│  │  ├─ Divider,
│  │  │  ├─ index.jsx,
│  │  │  ├─ index.test.jsx,
│  │  │  └─ __snapshots__,
│  │  │     └─ index.test.jsx.snap,
│  │  ├─ Feedbacks,
│  │  │  ├─ index.jsx,
│  │  │  ├─ index.test.jsx,
│  │  │  └─ __snapshots__,
│  │  │     └─ index.test.jsx.snap,
│  │  ├─ Footer,
│  │  │  ├─ index.jsx,
│  │  │  ├─ index.test.jsx,
│  │  │  ├─ styled.jsx,
│  │  │  └─ __snapshots__,
│  │  │     └─ index.test.jsx.snap,
│  │  ├─ Header,
│  │  │  ├─ index.jsx,
│  │  │  ├─ index.test.jsx,
│  │  │  ├─ styled.jsx,
│  │  │  └─ __snapshots__,
│  │  │     └─ index.test.jsx.snap,
│  │  ├─ HeaderSub,
│  │  │  ├─ index.jsx,
│  │  │  ├─ index.test.jsx,
│  │  │  ├─ styled.jsx,
│  │  │  └─ __snapshots__,
│  │  │     └─ index.test.jsx.snap,
│  │  ├─ HomeAbout,
│  │  │  ├─ index.jsx,
│  │  │  ├─ index.test.jsx,
│  │  │  ├─ styled.jsx,
│  │  │  └─ __snapshots__,
│  │  │     └─ index.test.jsx.snap,
│  │  ├─ ImageCard,
│  │  │  ├─ index.jsx,
│  │  │  ├─ index.test.jsx,
│  │  │  └─ __snapshots__,
│  │  │     └─ index.test.jsx.snap,
│  │  ├─ index.jsx,
│  │  ├─ IntroduceMe,
│  │  │  ├─ index.jsx,
│  │  │  ├─ index.test.jsx,
│  │  │  └─ __snapshots__,
│  │  │     └─ index.test.jsx.snap,
│  │  ├─ LazyShow,
│  │  │  ├─ index.jsx,
│  │  │  ├─ index.test.jsx,
│  │  │  └─ __snapshots__,
│  │  │     └─ index.test.jsx.snap,
│  │  ├─ MainHeroImage,
│  │  │  ├─ index.jsx,
│  │  │  ├─ index.test.jsx,
│  │  │  └─ __snapshots__,
│  │  │     └─ index.test.jsx.snap,
│  │  ├─ Navbar,
│  │  │  ├─ index.jsx,
│  │  │  └─ styled.jsx,
│  │  ├─ NotFound,
│  │  │  ├─ index.jsx,
│  │  │  └─ styled.jsx,
│  │  ├─ OpenLink,
│  │  │  └─ index.jsx,
│  │  ├─ PlayerAnimation,
│  │  │  ├─ index.jsx,
│  │  │  └─ styled.jsx,
│  │  ├─ ProjectDetails,
│  │  │  ├─ index.jsx,
│  │  │  └─ styled.jsx,
│  │  ├─ ProjectItem,
│  │  │  └─ index.jsx,
│  │  ├─ ProjectsList,
│  │  │  └─ index.jsx,
│  │  ├─ Reader,
│  │  │  └─ index.jsx,
│  │  ├─ Seo,
│  │  │  └─ index.jsx,
│  │  ├─ Skeleton,
│  │  │  ├─ index.jsx,
│  │  │  └─ styled.jsx,
│  │  ├─ SkillsList,
│  │  │  ├─ index.jsx,
│  │  │  └─ styled.jsx,
│  │  ├─ SocialLinks,
│  │  │  ├─ index.jsx,
│  │  │  └─ styled.jsx,
│  │  ├─ TalkLink,
│  │  │  └─ index.jsx,
│  │  ├─ Timeline,
│  │  │  ├─ index.jsx,
│  │  │  └─ styled.jsx,
│  │  └─ Utilities,
│  │     └─ index.jsx,
│  ├─ config,
│  │  ├─ Brands.jsx,
│  │  ├─ constants.jsx,
│  │  ├─ Icons.jsx,
│  │  ├─ index.json,
│  │  ├─ project,
│  │  ├─ Projects.jsx,
│  │  └─ Techs.jsx,
│  ├─ hooks,
│  │  ├─ useGoogleAnalytics.jsx,
│  │  ├─ useNotifications.jsx,
│  │  └─ useTheme.jsx,
│  ├─ main.jsx,
│  ├─ pages,
│  │  ├─ 404.jsx,
│  │  ├─ aboutMe.jsx,
│  │  ├─ home.jsx,
│  │  ├─ project.jsx,
│  │  ├─ projects.jsx,
│  │  ├─ resume.jsx,
│  │  └─ utils.jsx,
│  ├─ routes,
│  │  └─ routes.jsx,
│  └─ utils,
│     ├─ analytics.jsx,
│     ├─ generic.jsx,
│     └─ JSON,
├─ sw.jsx,
├─ tailwind.config.cjs,
├─ tailwind.config.js,
├─ tests.cjs,
└─ vite.config.js,

```
