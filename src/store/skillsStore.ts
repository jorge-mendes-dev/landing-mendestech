import { create } from 'zustand'
import type { SkillsConfig } from './types/skillsStore.types'

export const useSkillsStore = create<SkillsConfig>(() => ({
  title: 'My Skills',
  data: [
    { title: 'Angular', img: 'angular' },
    { title: 'AWS', img: 'aws' },
    { title: 'Bootstrap', img: 'bootstrap' },
    { title: 'canva', img: 'canva' },
    { title: 'css', img: 'css' },
    { title: 'Docker', img: 'docker' },
    { title: 'Figma', img: 'figma' },
    { title: 'Firebase', img: 'firebase' },
    { title: 'Gimp', img: 'gimp' },
    { title: 'Git', img: 'git' },
    { title: 'Graphql', img: 'graphql' },
    { title: 'html', img: 'html' },
    { title: 'Javascript', img: 'javascript' },
    { title: 'Markdown', img: 'markdown' },
    { title: 'Material UI', img: 'materialui' },
    { title: 'MS Office', img: 'microsoftoffice' },
    { title: 'MongoDB', img: 'mongoDB' },
    { title: 'Mysql', img: 'mysql' },
    { title: 'NextJS', img: 'nextJS' },
    { title: 'Photoshop', img: 'photoshop' },
    { title: 'php', img: 'php' },
    { title: 'postgreSQL', img: 'postgresql' },
    { title: 'react', img: 'react' },
    { title: 'Strapi', img: 'strapi' },
    { title: 'Tailwind', img: 'tailwind' },
    { title: 'Typescript', img: 'typescript' },
    { title: 'Vitejs', img: 'vitejs' },
    { title: 'Vue', img: 'vue' },
    { title: 'Wordpress', img: 'wordpress' }
  ]
}))
