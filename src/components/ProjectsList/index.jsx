import React from 'react'
import PropTypes from 'prop-types'

import Projects from 'config/Projects'
import { random } from 'utils/generic'
import { Link } from 'react-router-dom'
import { ProjectItem, Divider } from 'components'
import config from 'config'

const ProjectsList = ({ layout, ...props }) => {
  const { projects } = config
  const { title, project, primaryAction } = projects

  return (
    <div className="container mx-auto" {...props}>
      <section className="py-5 sm:py-10 mt-5 sm:mt-10">
        <h2
          className={`w-full my-2 text-5xl font-bold leading-tight text-center`}
        >
          {title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h2>
        <Divider />
        {layout === 'Home' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 lg:grid-cols-3 sm:gap-10 p-8">
            {project.slice(0, 3).map((project) => {
              const Image = Projects[project.img]
              return (
                <ProjectItem
                  title={project.title}
                  category={project.category}
                  image={Image}
                  href={project.link}
                  key={random()}
                  type={project.type}
                />
              )
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 lg:grid-cols-3 sm:gap-10 p-8">
            {project.map((project) => {
              const Image = Projects[project.img]
              return (
                <ProjectItem
                  title={project.title}
                  category={project.category}
                  image={Image}
                  href={project.link}
                  key={random()}
                  type={project.type}
                />
              )
            })}
          </div>
        )}
        {layout === 'Home' && (
          <div className={`flex flex-col items-center justify-center`}>
            <div className="rounded-md shadow mt-2">
              <Link
                rel="noreferrer"
                aria-label={primaryAction.text}
                to={primaryAction.href}
                className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:text-offwhite md:py-4 md:text-lg md:px-10`}
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
  layout: PropTypes.string.isRequired
}

export default ProjectsList
