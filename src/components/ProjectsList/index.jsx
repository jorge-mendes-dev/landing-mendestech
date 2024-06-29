import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Projects from 'config/Projects'
import { random } from 'utils/generic'
import { Link } from 'react-router-dom'
import { ProjectItem, Divider } from 'components'
import config from 'config'

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
              className={`w-full my-2 text-4xl font-bold leading-tight text-center`}
            >
              {pagesTitle.split(' ').map((word, index) => (
                <span
                  key={index}
                  className={index % 2 ? 'text-primary' : 'text-border'}
                >
                  {word}{' '}
                </span>
              ))}
            </h2>
            <Divider />
          </>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 lg:grid-cols-3 sm:gap-10 p-8">
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
                className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-400 md:py-4 md:text-lg md:px-10`}
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
