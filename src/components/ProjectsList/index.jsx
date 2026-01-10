import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { Divider, ProjectItem } from 'components'
import config from 'config'
import Projects from 'config/Projects'
import { Link } from 'react-router-dom'
import { random } from 'utils/generic'

const ProjectsList = ({
  layout = '',
  customTitle = '',
  except = 'none',
  ...props
}) => {
  const { projects } = config
  const { title, project, primaryAction } = projects

  const [item, setItem] = useState(project)
  const [pagesTitle, setPagesTitle] = useState(title)

  useEffect(() => {
    bootstrap()
  }, [layout, except])

  const bootstrap = () => {
    if (layout === 'compact') {
      setItem(project.slice(0, 3))
    }

    if (except !== 'none') {
      setItem(project.filter((proj) => proj.slug !== except))
    }

    if (customTitle !== '') {
      setPagesTitle(customTitle)
    }
  }

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 p-4 md:p-10 items-stretch">
          {item.map((project, index) => {
            const Image = Projects[project.img]
            return (
              <div key={random()} className="flex w-full">
                <ProjectItem
                  title={project.title}
                  technology={project.technology}
                  image={Image}
                  href={project.link}
                  type={project.type}
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
                className="relative w-full flex items-center justify-center px-8 py-3 border border-primary/20 text-base font-semibold rounded-xl text-primary bg-white hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 md:py-4 md:text-lg md:px-10"
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

ProjectsList.propTypes = {
  layout: PropTypes.string,
  customTitle: PropTypes.string,
  except: PropTypes.string
}

export default ProjectsList
