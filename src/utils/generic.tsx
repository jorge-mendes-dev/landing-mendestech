import { NODE_ENV } from 'config/constants'

export const random: () => string = () => Math.random().toString(36).slice(2)

interface GetImagePath {
  (image: string): string
}

export const getImagePath: GetImagePath = (image) => {
  if (NODE_ENV === 'development') {
    return `/src/assets/images/${image}`
  }
  return `/assets/${image}`
}

export const backToTop: () => void = () => window.scrollTo(0, 0)
