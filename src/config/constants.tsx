import pjson from '../../package.json'

export const GA_ID = import.meta.env.VITE_APP_GTAG
export const TITLE = import.meta.env.VITE_APP_TITLE
export const DESCRIPTION = import.meta.env.VITE_APP_DESCRIPTION
export const LANGUAGE = import.meta.env.VITE_APP_LANG
export const IMAGE = import.meta.env.VITE_APP_IMAGE
export const AUTHOR = import.meta.env.VITE_APP_AUTHOR
export const PUBLIC_URL = import.meta.env.VITE_PUBLIC_URL
export const APP_VERSION = pjson.version
export const NODE_ENV = import.meta.env.VITE_NODE_ENV
