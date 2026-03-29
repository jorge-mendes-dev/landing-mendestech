import { create } from 'zustand'
import type { SeoConfig } from './types/seoStore.types'

export const useSeoStore = create<SeoConfig>(() => ({
  title: 'Jorge Mendes - Senior Developer',
  description:
    'Experienced web developer with a talent for efficient solutions, building responsive applications with beautiful layouts. 8+ years of experience with JavaScript, React, Redux, TypeScript. Passionate about leveraging AI-assisted coding to improve performance and deliver innovative solutions.',
  image: 'jorge_mendes.png',
  lang: 'en',
  author: '@jorge-mendes-dev',
  siteUrl: 'https://jorgemendes.com.br',
  type: 'website',
  keywords: [
    'Jorge Mendes',
    'Senior Developer',
    'Full Stack Developer',
    'React Developer',
    'JavaScript Expert',
    'TypeScript',
    'Web Development',
    'Frontend Developer',
    'Software Engineer',
    'React Redux',
    'Portfolio',
    'Brazil Developer',
    'AI-assisted coding',
    'AI developer',
    'AI productivity',
    'AI code assistance'
  ]
}))
