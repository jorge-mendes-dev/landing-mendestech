const cssnano = require('cssnano')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const ENV = import.meta.env.VITE_NODE_ENV

const plugins =
  ENV === 'production'
    ? [tailwindcss, autoprefixer, cssnano]
    : [tailwindcss, autoprefixer]

module.exports = { plugins }
