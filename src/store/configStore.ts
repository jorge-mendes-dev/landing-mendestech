import { create } from 'zustand'

export interface CompanyConfig {
  name: string
  logo: string
  url: string
}

export interface SeoConfig {
  title: string
  description: string
  image: string
  lang: string
  author: string
  siteUrl: string
  type: string
  keywords: string[]
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
  list: string[]
  primaryAction: { text: string; href: string }
  video: { title: string; id: string }
}

export interface ProjectItem {
  title: string
  technology: string[]
  img: string
  link: string
  type: string
  slug: string
  company: string
}

export interface ProjectsConfig {
  title: string
  primaryAction: { text: string; href: string }
  project: ProjectItem[]
}

export interface SocialMediaItem {
  label: string
  url: string
}

export interface ReviewItem {
  name: string
  review: string
}

export interface ReviewsConfig {
  title: string
  feedbacks: ReviewItem[]
}

export interface JourneyItem {
  period: string
  institution: string
  position: string
  description: string
  location: string
  icon: string
  url: string
}

export interface JourneyInfoConfig {
  title: string
  description: string
  journey: JourneyItem[]
}

export interface SkillItem {
  title: string
  img: string
}

export interface SkillsConfig {
  title: string
  data: SkillItem[]
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

export interface ConfigState {
  company: CompanyConfig
  seo: SeoConfig
  notifications: NotificationConfig
  navigation: NavigationItem[]
  resume: string
  projectsSectionNote: string
  callToAction: { text: string; href: string }
  mainHero: MainHeroConfig
  about: AboutConfig
  projects: ProjectsConfig
  features: {
    title: string
    subtitle: string
    description: string
    items: any[]
  }
  socialMedia: SocialMediaItem[]
  reviews: ReviewsConfig
  journeyInfo: JourneyInfoConfig
  skills: SkillsConfig
  utilities: { title: string }
  clients: ClientsConfig
  footer: FooterConfig
}

export const useConfigStore = create<ConfigState>(() => ({
  company: {
    name: 'Jorge Mendes',
    logo: 'logo.png',
    url: '/'
  },
  seo: {
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
    { name: 'Resume', type: '', href: '/resume' }
  ],
  resume: 'Jorge_Mendes_resume.pdf',
  projectsSectionNote:
    'The projects below are grouped by the company where I worked. My resume lists companies, and these projects were delivered as part of my roles at each employer.',
  callToAction: { text: 'About Me', href: 'about' },
  mainHero: {
    title: 'Jorge Mendes',
    subtitle: 'Senior Developer',
    description:
      'Experienced web developer passionate about leveraging AI-assisted coding to improve performance and deliver efficient, beautiful applications.',
    img: 'profile.svg',
    primaryAction: { text: 'About Me', href: 'about' },
    secondaryAction: { text: 'Resume', href: '/resume' }
  },
  about: {
    title: 'About Me',
    subtitle: 'Discover My Journey',
    paragraphs: [
      'Senior Software Engineer with 10 years of experience, developing scalable applications from scratch or helping grow existing projects, using mainly JavaScript, React, Redux, TypeScript. I have worked on start-up companies with Agile methodologies both in person and remotely. I am passionate about using AI-assisted coding tools to boost productivity and code quality.',
      'Today I am focused on learning new techniques and skills, especially in the field of AI-powered development. One of my most notable skills is my ability to translate client needs into efficient technology solutions, often leveraging AI assistance for rapid prototyping and delivery. I am an excellent communicator and know how to listen and understand.',
      'I am also highly efficient in working as part of a team. I understand the importance of collaboration in achieving common goals and work well with other developers and team members. I am able to contribute positively to team dynamics, bringing creative ideas and solutions to the technical challenges the team faces, including the adoption of AI tools for better outcomes.'
    ],
    list: [
      'Experience maintaining legacy web applications,',
      'Experience in architecture and building and documenting web applications,',
      'Experience with modern frontend technologies such as React, Typescript, and CSS frameworks as styled-components, Tailwind CSS, MaterialUI,',
      'Aptitude to quickly learn new languages and technologies,',
      'Strong ownership and growth mindset,',
      'Strong ability to work independently and self-guided,',
      'Collaboration with Product and Design professionals.'
    ],
    primaryAction: { text: 'See More', href: 'about' },
    video: { title: 'Introduce myself', id: 'eFD7_zQVTgI' }
  },
  projects: {
    title: 'Projects portfolio',
    primaryAction: { text: 'See all projects', href: '/projects' },
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
  },
  features: { title: '', subtitle: '', description: '', items: [] },
  socialMedia: [
    { label: 'Linkedin', url: 'https://www.linkedin.com/in/jorge-mendes-dev/' },
    { label: 'Github', url: 'https://github.com/jorge-mendes-dev' }
  ],
  reviews: {
    title: 'Feedbacks',
    feedbacks: [
      {
        name: '',
        review:
          'Jorge always delivers top-notch code and really knows his way around React. He handles tough challenges with a calm, structured approach and always keeps performance in mind.'
      },
      {
        name: '',
        review:
          'He’s amazing at spotting and fixing technical bottlenecks. Whether he’s refactoring old code or building something new, his solutions are both smart and practical.'
      },
      {
        name: '',
        review:
          'Jorge pays close attention to detail, so his code is always clean, modular, and easy to maintain. He follows best practices, which makes everything easier to read and work with in the long run.'
      },
      {
        name: '',
        review:
          'It’s a pleasure working with him. He gives helpful feedback during code reviews and is always willing to help out when someone’s stuck. His communication makes the team stronger and more positive.'
      },
      {
        name: '',
        review:
          'Jorge works well both remotely and in person, making teamwork smooth and effective. He’s proactive about collaborating with designers, product managers, and other engineers to make sure everyone’s on the same page.'
      },
      {
        name: '',
        review:
          'He consistently delivers high-quality code and has a deep understanding of React. He tackles complex problems with a clear, efficient approach and always thinks about performance.'
      },
      {
        name: '',
        review:
          'His attention to detail is impressive—his code is always tidy, modular, and easy to maintain. He sticks to best practices, which really helps with readability and long-term health of the project.'
      },
      {
        name: '',
        review:
          'Jorge is super reliable and approachable. He’s the go-to person for solving both technical and organizational challenges, and his collaborative attitude inspires everyone around him.'
      }
    ]
  },
  journeyInfo: {
    title: 'Professional experience',
    description: `Here are the places I've worked during my career.`,
    journey: [
      {
        period: '2022 - NOW',
        institution: 'Escala APP',
        position: 'Senior Web Developer Full Stack',
        description:
          'In my current position at Escala, I act as a senior FullStack developer, a company that makes schedules in an easy way. The project that I work on is used for managing the Hospital Israelita Albert Einstein (ICU) intensive care unit. The project was so good that it became a Saas platform that other clients of many industries.',
        location: 'São Paulo, Brazil',
        icon: 'Work',
        url: 'https://escala.app/produtos/escala-plantoes'
      },
      {
        period: '2021 - 2022',
        institution: 'Hotmart',
        position: 'Front-End Web Developer',
        description: `I worked participating in projects, on the front-end in order to meet my clients' needs, always seeking maximum quality in the code and with a lot of love. Focusing on developing solutions for the company's privacy and international policies.`,
        location: 'São Paulo, Brazil',
        icon: 'Work',
        url: 'https://hotmart.com/pt-br'
      },
      {
        period: '2019 - 2021',
        institution:
          'FDTE - Foundation for the Technological Development of Engineering',
        position: 'Web Developer Full Stack',
        description:
          'I work as a consultant, on projects, being a full-stack developer, thus being part of the workforce of these clients, as well as on projects, building resources, bug fixes, refactoring and rebuilding when necessary.',
        location: 'São Paulo, Brazil',
        icon: 'Work',
        url: 'https://www.linkedin.com/company/inovata---fdte/posts/?feedView=all'
      },
      {
        period: '09/2017 - 09/2019',
        institution: 'Atitude Digital media',
        position: 'Web Developer',
        description:
          'I worked developing products and internal solutions for the company and clients, updating the products that already existed.',
        location: 'São Paulo, Brazil',
        icon: 'Work',
        url: 'https://www.linkedin.com/company/atitude-m-dia-digital/?originalSubdomain=br'
      },
      {
        period: '05/2016 - 09/2017',
        institution: 'Novacia',
        position: 'Web Assistant',
        description:
          'I worked Assisting in the development of email marketing and functional responsive websites, tailored for our customers.',
        location: 'São Paulo, Brazil',
        icon: 'Work',
        url: 'https://novacia.com.br/'
      },
      {
        period: '11/2015 - 05/2016',
        institution: 'SRTI - São Roque technology of information',
        position: 'Internship',
        description:
          'I worked in the development of web applications, responsive websites, mainly with front-end development.',
        location: 'São Roque-SP, Brazil',
        icon: 'Work',
        url: ''
      },
      {
        period: '01/2012 - 05/2016',
        institution: 'São Paulo State Department of Education',
        position: 'School Organization Agent',
        description:
          'My responsibilities have always been to take care of public property, establish contact between students and school management, resolve conflicts between teachers and students.',
        location: 'Ibíuna-SP, Brazil',
        icon: 'Work',
        url: ''
      },
      {
        period: '01/2014 - 12/2016',
        institution: 'Fatec São Roque',
        position: 'internet System',
        description:
          'To learn subjects related to specific programming for the internet, the student will study Mathematics, especially logical reasoning. Statistics, English and marketing are also part of the course, in addition to design.',
        location: 'São Roque-SP, Brazil',
        icon: 'Education',
        url: 'https://fatecsaoroque.cps.sp.gov.br/'
      },
      {
        period: '01/2010 - 05/2014',
        institution: 'Freelancer',
        position: 'Web Development',
        description:
          'Worked as a freelance web developer, that built institutional websites and on free time make computer maintenance.',
        location: 'Ibíuna-SP, Brazil',
        icon: 'Work',
        url: ''
      },
      {
        period: '01/2009 - 12/2010',
        institution: 'Centro Paula Souza - Etec São Roque',
        position: 'Computer Technician',
        description:
          'The IT technician develops and operates systems, applications and graphical interfaces. Assembles database structures and codes programs. Designs, implements and maintains systems and applications. Selects work resources, programming languages, tools and methodologies for systems development.',
        location: 'São Roque-SP, Brazil',
        icon: 'Education',
        url: 'https://www.etecsr.com.br/'
      }
    ]
  },
  skills: {
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
  },
  utilities: { title: 'WhatsApp Utils' },
  clients: {
    title: `Companies that trust's my work`,
    data: [
      { title: 'FATEC SÃO ROQUE', img: 'fatec' },
      { title: 'SÃO PAULO - STATE DEPARTMENT OF EDUCATION', img: 'gov' },
      { title: 'SRTI', img: 'defaultImg' },
      { title: 'NOVACIA', img: 'novacia' },
      { title: 'ATITUDE DIGITAL MEDIA', img: 'atitude' },
      {
        title:
          'FDTE - FOUNDATION FOR THE TECHNOLOGICAL DEVELOPMENT OF ENGINEERING',
        img: 'fdte'
      },
      { title: 'HOTMART', img: 'hotmart' },
      { title: 'ESCALA APP', img: 'escala' }
    ]
  },
  footer: { title: 'React and love.', description: 'Jorge Mendes' }
}))
