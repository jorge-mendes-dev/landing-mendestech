import { create } from 'zustand'
import type { ProjectsConfig } from './types/projectsStore.types'

export const useProjectsStore = create<
  ProjectsConfig & { projectsSectionNote: string }
>(() => ({
  title: 'Projects portfolio',
  primaryAction: { text: 'See all projects', href: '/projects' },
  projectsSectionNote:
    'The projects below are grouped by the company where I worked. My resume lists companies, and these projects were delivered as part of my roles at each employer.',
  project: [
    {
      title: 'Fernanda Souza - Personal Portfolio',
      technology: [
        'Next.js 16 (App Router)',
        'React 19',
        'Tailwind CSS 4',
        'Framer Motion',
        'Advanced SEO (OG, Sitemap, Schema)',
        'WhatsApp & TikTok, Instagram Integration'
      ],
      img: 'fernanda_souza_header',
      link: '/project/fernanda_souza',
      type: '',
      slug: 'fernanda_souza',
      company: 'Personal Project'
    },
    {
      title: 'Private Learning Hub',
      technology: [
        'AI integration',
        'Next.js 15 (App Router)',
        'React 19',
        'Tailwind CSS 3',
        'Framer Motion',
        'Vercel AI SDK (Groq Llama 3.1)',
        'Supabase Storage',
        'Jest & React Testing Library',
        'Heroicons v2',
        'PDF.js (react-pdf)'
      ],
      img: 'private_learning_hub_player',
      link: '/project/private_learning_hub',
      type: '',
      slug: 'private_learning_hub',
      company: 'Personal Project'
    },
    {
      title: 'Read it for me',
      technology: [
        'TypeScript',
        'React 18',
        'Vite',
        'Tailwind CSS 3',
        'Chrome Extension Manifest V3',
        'Web Speech API',
        'Custom i18n (7 languages)',
        'Jest (for testing)'
      ],
      img: 'readit',
      link: '/project/read_it',
      type: '',
      slug: 'read_it',
      company: 'Personal Project'
    },
    {
      title: 'Escala Plantões',
      technology: [
        'HTML 5',
        'CSS 3',
        'JavaScript',
        'React.js',
        'Angular',
        'Bootstrap',
        'Material UI',
        'Micro-Frontend',
        'PHP',
        'Laravel',
        'Mysql',
        'AWS'
      ],
      img: 'plantoes',
      link: '/project/plantoes',
      type: '',
      slug: 'plantoes',
      company: 'Escala App'
    },
    {
      title: 'Hotmart internal applications',
      technology: [
        'React.js',
        'Typescript',
        'Context API',
        'Web Components',
        'Design System',
        'Jest',
        'React testing library',
        'styled-components',
        'i18n'
      ],
      img: 'hotmart',
      link: '/project/hotmart',
      type: '',
      slug: 'hotmart',
      company: 'Hotmart'
    },
    {
      title: 'Aprova Fácil - mobile',
      technology: [
        'React.js',
        'React Native',
        'Redux Toolkit',
        'axios',
        'Android',
        'Ios',
        'whatsApp Integration',
        'i18n'
      ],
      img: 'aprova',
      link: '/project/aprova',
      type: '',
      slug: 'aprova',
      company: 'FDTE'
    },
    {
      title: 'Provu',
      technology: [
        'React.js',
        'Redux Saga',
        'axios',
        'Angular',
        'Yup',
        'jest',
        'i18n',
        'formik',
        'styled-components',
        'storybook'
      ],
      img: 'provu',
      link: '/project/provu',
      type: '',
      slug: 'provu',
      company: 'FDTE'
    },
    {
      title: 'WebMeeeting',
      technology: [
        'React.js',
        'Redux Saga',
        'axios',
        'PHP',
        'Laravel',
        'jest',
        'i18n',
        'Materialize',
        'styled-components',
        'webRTC',
        'Realtime',
        'Socket',
        'Mysql',
        'MongoDB'
      ],
      img: 'webmeeting',
      link: '/project/webmeeting',
      type: '',
      slug: 'webmeeting',
      company: 'Atitude'
    }
  ]
}))
