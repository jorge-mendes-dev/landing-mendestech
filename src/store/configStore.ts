import { create } from 'zustand'

export interface CompanyConfig {
  name: string
  logo: string
  url: string
}

export interface NotificationConfig {
  title: string
  icon: string
  message: string
}

export interface NavigationItem {
  name: string
  type: string
  href: string
}

export interface MainHeroConfig {
  title: string
  subtitle: string
  description: string
  img: string
  primaryAction: { text: string; href: string }
  secondaryAction: { text: string; href: string }
}

export interface AboutConfig {
  title: string
  subtitle: string
  paragraphs: string[]
  primaryAction: { text: string; href: string }
  list: string[]
  video: { title: string; id: string }
}
export interface ClientItem {
  title: string
  img: string
}

export interface ClientsConfig {
  title: string
  data: ClientItem[]
}

export interface FooterConfig {
  title: string
  description: string
}

export interface SocialMediaItem {
  label: string
  url: string
}

export interface ConfigState {
  company: CompanyConfig
  notifications: NotificationConfig
  navigation: NavigationItem[]
  resume: string
  callToAction: { text: string; href: string }
  mainHero: MainHeroConfig
  about: AboutConfig
  features: {
    title: string
    subtitle: string
    description: string
    items: any[]
  }
  socialMedia: SocialMediaItem[]
  utilities: { title: string }
  footer: FooterConfig
}

export const useConfigStore = create<ConfigState>(() => ({
  company: {
    name: 'Jorge Mendes',
    logo: 'logo.png',
    url: '/'
  },
  notifications: {
    title: '👋 Welcome to Jorge Mendes!',
    icon: '/logo.svg',
    message: `Explore my portfolio, projects, and skills. Let's build something amazing together!`
  },
  navigation: [
    { name: 'Home', type: 'external', href: '/' },
    { name: 'About', type: 'external', href: '/about' },
    { name: 'Projects', type: 'external', href: '/projects' },
    { name: 'Resume', type: 'external', href: '/resume' }
  ],
  resume: 'Jorge_Mendes_resume.pdf',
  callToAction: { text: 'About Me', href: 'about' },
  mainHero: {
    title: 'Jorge Mendes',
    subtitle: 'Senior Developer',
    description:
      'Experienced web developer passionate about leveraging AI-assisted coding to improve performance and deliver efficient, beautiful applications.',
    img: 'profile.svg',
    primaryAction: { text: 'About Me', href: 'about' },
    secondaryAction: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jorge-mendes-dev/'
    }
  },
  about: {
    title: 'About Me',
    subtitle: 'Discover My Journey',
    paragraphs: [
      'Senior Software Engineer with 10 years of experience, developing scalable applications from scratch or helping grow existing projects, using mainly JavaScript, React, Redux, TypeScript. I have worked on start-up companies with Agile methodologies both in person and remotely. I am passionate about using AI-assisted coding tools to boost productivity and code quality.',
      'Today I am focused on learning new techniques and skills, especially in the field of AI-powered development. One of my most notable skills is my ability to translate client needs into efficient technology solutions, often leveraging AI assistance for rapid prototyping and delivery. I am an excellent communicator and know how to listen and understand.',
      'I am also highly efficient in working as part of a team. I understand the importance of collaboration in achieving common goals and work well with other developers and team members. I am able to contribute positively to team dynamics, bringing creative ideas and solutions to the technical challenges the team faces, including the adoption of AI tools for better outcomes.'
    ],
    primaryAction: { text: 'See More', href: 'about' },
    list: [
      'Experience maintaining legacy web applications,',
      'Experience in architecture and building and documenting web applications,',
      'Experience with modern frontend technologies such as React, Typescript, and CSS frameworks as styled-components, Tailwind CSS, MaterialUI,',
      'Aptitude to quickly learn new languages and technologies,',
      'Strong ownership and growth mindset,',
      'Strong ability to work independently and self-guided,',
      'Collaboration with Product and Design professionals.'
    ],
    video: { title: 'Introduce myself', id: 'eFD7_zQVTgI' }
  },
  features: { title: '', subtitle: '', description: '', items: [] },
  socialMedia: [
    { label: 'Linkedin', url: 'https://www.linkedin.com/in/jorge-mendes-dev/' },
    { label: 'Github', url: 'https://github.com/jorge-mendes-dev' }
  ],
  utilities: { title: 'WhatsApp Utils' },
  footer: { title: 'React and love.', description: 'Jorge Mendes' }
}))
