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
  projectsSectionNote: string
}
