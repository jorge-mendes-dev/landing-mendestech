import { create } from 'zustand'
import type { JourneyInfoConfig } from './types/journeyInfoStore.types'

export const useJourneyInfoStore = create<JourneyInfoConfig>(() => ({
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
}))
