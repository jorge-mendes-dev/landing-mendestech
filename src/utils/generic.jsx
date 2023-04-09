import { NODE_ENV } from 'config/constants'

export const random = () => Math.random().toString(36).slice(2)

export const getImagePath = (image) => {
  if (NODE_ENV === 'development') {
    return `/src/assets/images/${image}`
  }
  return `/assets/${image}`
}
