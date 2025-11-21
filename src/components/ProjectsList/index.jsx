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
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-12 lg:grid-cols-3 gap-8 md:gap-10 p-4 md:p-8 items-stretch">
          {item.map((project, index) => {
            const Image = Projects[project.img]
            return (
              <div key={random()} className="flex">
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
            className={`flex flex-col items-center justify-center mt-8`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div 
              className="rounded-xl shadow-lg group relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary-light rounded-xl opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
              <Link
                rel="noreferrer"
                aria-label={primaryAction.text}
                to={primaryAction.href}
                className={`relative w-full flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-xl text-white bg-primary hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-200 md:py-4 md:text-lg md:px-10`}
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
