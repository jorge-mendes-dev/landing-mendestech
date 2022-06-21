<p align="center">
  <a href="https://jorgemendes.com.br/">
    <img src="https://github.com/Jorge-Bill/blog/blob/master/src/images/jorge_banner.png?raw=true">
  </a>
</p>

## 👾 Structure base Custom CRA

---

## 🚀 Project Structure

This project structure a web app with great organizition, made to be the base template for other apps.

Stack and resources used on this structure creation.

    .
    ├── React CRA
    ├── prop-types
    ├── Eslint + eslint-config-airbnb + prettier
    ├── Plop component generator
    ├── Styled-components
    ├── Styled-icons
    ├── Styled-media-query
    ├── React-router-dom
    ├── Jest
    ├── Dotenv
    ├── Husky
    ├── Commitizen

## 🛠 Scripts

- yarn start - start the app. open in [local](http://localhost:3000).
- yarn generate - execute the script to generate new components.
- yarn build - execute the script to build the application.
- yarn test - execute the Jest test suite.
- yarn eject - This is a one-way operation. Once you eject, you can’t go back - remove the single build dependency from your project.
- yarn commit - commit changes with Husky and commitizen | type `git commit` works too.
- yarn lint - use prettier to verify files on your app.
- yarn format - use prettier to format files on your app.

## 🛠 How to use the structure

For using the structure as a second origin use the follow lines:

- git remote add structure git@github.com:Jorge-Bill/blog-cra.git
- git pull structure HEAD:master --allow-unrelated-histories

## SET Husky hoooks

- yarn husky install

## 🛠 ENV VARIABLES

.env variables used for seo component.

`REACT_APP_TITLE='' REACT_APP_DESCRIPTION='' REACT_APP_LANG='' REACT_APP_IMAGE='' REACT_APP_AUTHOR='' REACT_APP_SITE_URL=''`
