import React from 'react'

import Projects from 'config/Projects'
import { random } from 'utils/generic'
import { ProjectItem, Divider } from 'components'
import config from 'config'

const ProjectsList = () => {
  const { projects } = config
  const { title, project } = projects

  return (
    <div className="container mx-auto">
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
      </section>
    </div>
  )
}

export default ProjectsList
