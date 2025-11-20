import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

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
            <h2
              className={`w-full my-4 text-3xl md:text-4xl font-bold leading-tight text-center`}
            >
              {pagesTitle.split(' ').map((word, index) => (
                <span
                  key={index}
                  className={
                    index % 2 ? 'text-primary' : 'text-gray-900 dark:text-white'
                  }
                >
                  {word}{' '}
                </span>
              ))}
            </h2>
            <Divider />
          </>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-12 lg:grid-cols-3 gap-8 md:gap-10 p-4 md:p-8">
          {item.map((project) => {
            const Image = Projects[project.img]
            return (
              <ProjectItem
                title={project.title}
                technology={project.technology}
                image={Image}
                href={project.link}
                key={random()}
                type={project.type}
                company={project.company}
              />
            )
          })}
        </div>
        {layout === 'compact' && (
          <div className={`flex flex-col items-center justify-center`}>
            <div className="rounded-xl shadow">
              <Link
                rel="noreferrer"
                aria-label={primaryAction.text}
                to={primaryAction.href}
                className={`w-full flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-xl text-white bg-primary hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-200 md:py-4 md:text-lg md:px-10`}
              >
                {primaryAction.text}
              </Link>
            </div>
          </div>
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
