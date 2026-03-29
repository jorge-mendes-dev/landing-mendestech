import { motion } from 'framer-motion'

import { useEffect, useMemo, useState } from 'react'

import { Divider, ProjectItem } from 'components/index'
import config from 'config/index.json'
import Projects from 'config/Projects'
import React from 'react'
import { Link } from 'react-router-dom'

interface ProjectsListProps {
  layout?: 'compact' | 'full'
  customTitle?: string
  except?: string
}

type ProjectType = 'external' | 'internal'
interface Project {
  title: string
  technology: string[]
  img: string
  link: string
  type: ProjectType
  slug: string
  company: string
}

const ProjectsList: React.FC<ProjectsListProps> = ({
  layout = '',
  customTitle = '',
  except = 'none',
  ...props
}) => {
  const { projects } = config
  const { title, project, primaryAction } = projects

  const [item, setItem] = useState<Project[]>(
    project.map((p) => ({ ...p, type: p.type as ProjectType }))
  )
  const [pagesTitle, setPagesTitle] = useState<string>(title)
  const [selectedCompany, setSelectedCompany] = useState<'All' | string>('All')
  const [selectedTech, setSelectedTech] = useState<'All' | string>('All')

  const companies = useMemo(() => {
    const all = project.map((p) => p.company || 'Unknown')
    return ['All', ...Array.from(new Set(all))]
  }, [project])

  const technologies = useMemo(() => {
    const all = project.flatMap((p) => p.technology || [])
    return ['All', ...Array.from(new Set(all))]
  }, [project])

  useEffect(() => {
    let filtered = [...project].map((p) => ({
      ...p,
      type: p.type as ProjectType
    }))
    if (except !== 'none') {
      filtered = filtered.filter((proj) => proj.slug !== except)
    }
    if (selectedCompany && selectedCompany !== 'All') {
      filtered = filtered.filter((proj) => proj.company === selectedCompany)
    }
    if (selectedTech && selectedTech !== 'All') {
      filtered = filtered.filter((proj) =>
        (proj.technology || []).includes(selectedTech)
      )
    }
    if (layout === 'compact') {
      filtered = filtered.slice(0, 3)
    }
    setItem(filtered)
    if (customTitle !== '') {
      setPagesTitle(customTitle)
    }
  }, [layout, except, customTitle, selectedCompany, selectedTech, project])

  return (
    <div className="container mx-auto" {...props}>
      <section className="py-5 sm:py-10">
        {layout === 'compact' && (
          <>
            <motion.h2
              className={`w-full my-4 text-3xl md:text-4xl font-bold leading-tight text-center`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {pagesTitle.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  className={
                    index % 2 ? 'text-primary' : 'text-gray-900 dark:text-white'
                  }
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {word}{' '}
                </motion.span>
              ))}
            </motion.h2>
            <Divider />
          </>
        )}

        {/* Section Intro */}
        {config.projectsSectionNote && (
          <div className="max-w-2xl mx-auto mb-8 text-center">
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-200">
              <span className="font-semibold text-primary">Note:</span>{' '}
              {config.projectsSectionNote}
            </p>
          </div>
        )}
        {/* Category Filters (hide in compact mode) */}
        {layout !== 'compact' && (
          <div className="flex flex-wrap gap-4 mb-8 items-center justify-center">
            <div>
              <label
                htmlFor="company-select"
                className="mr-2 font-medium text-gray-700 dark:text-gray-200"
              >
                Company:
              </label>
              <select
                id="company-select"
                className="rounded-lg border border-gray-300 dark:border-zinc-700 px-3 py-2 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:ring-primary focus:border-primary"
                value={selectedCompany}
                onChange={(e) => setSelectedCompany(e.target.value)}
              >
                {companies.map((company: string) => (
                  <option key={company} value={company}>
                    {company}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="tech-select"
                className="mr-2 font-medium text-gray-700 dark:text-gray-200"
              >
                Technology:
              </label>
              <select
                id="tech-select"
                className="rounded-lg border border-gray-300 dark:border-zinc-700 px-3 py-2 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:ring-primary focus:border-primary"
                value={selectedTech}
                onChange={(e) => setSelectedTech(e.target.value)}
              >
                {technologies.map((tech: string) => (
                  <option key={tech} value={tech}>
                    {tech}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {selectedCompany !== 'All' && (
          <h3 className="text-2xl font-bold mb-6 text-primary/90 dark:text-primary/80 border-b border-primary/20 pb-2 text-center">
            {selectedCompany}
          </h3>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 p-4 md:p-10 items-stretch">
          {item.map((project, index) => {
            const Image = Projects[project.img]
            return (
              <div key={project.slug || index} className="flex w-full">
                <ProjectItem
                  title={project.title}
                  technology={project.technology}
                  image={Image}
                  href={project.link}
                  type={project.type as ProjectType}
                  company={project.company}
                  index={index}
                />
              </div>
            )
          })}
        </div>
        {layout === 'compact' && (
          <motion.div
            className="flex flex-col items-center justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="rounded-xl shadow-md group relative"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                rel="noreferrer"
                aria-label={primaryAction.text}
                to={primaryAction.href}
                className="relative w-full flex items-center justify-center px-10 py-4 border-none text-lg font-semibold rounded-2xl text-white bg-gradient-to-r from-primary to-primary-light shadow-lg hover:from-primary-light hover:to-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200"
              >
                {primaryAction.text}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </section>
    </div>
  )
}

export default ProjectsList
