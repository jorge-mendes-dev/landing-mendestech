import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import { backToTop, random } from 'utils/generic'

const ProjectItem = ({
  title,
  href = '#',
  technology,
  image = '',
  type,
  company
}) => {
  const Separator = (
    <div className="relative my-4">
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200 dark:border-gray-700" />
      </div>
      <div className="relative flex justify-center">
        <span className="inline-flex items-center gap-x-1.5 rounded-full bg-primary/10 dark:bg-primary/20 px-4 py-1.5 text-sm font-semibold text-primary dark:text-primary-light">
          {company}
        </span>
      </div>
    </div>
  )

  const Component = (
    <div
      onClick={() => backToTop()}
      className="group cursor-pointer mb-10 sm:mb-0 h-full flex flex-col bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
    >
      <div className={`flex flex-col items-center justify-center overflow-hidden rounded-xl mb-6 flex-shrink-0`}>
        <img 
          src={image} 
          className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300" 
          alt={title} 
        />
      </div>

      {Separator}

      <div className="text-center px-2 flex flex-col flex-grow">
        <h3 className="font-bold text-xl md:text-2xl text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-primary mb-4 min-h-[3rem] flex items-center justify-center">
          {title}
        </h3>

        <div className="flex flex-wrap justify-center gap-2 mt-auto">
          {technology.map((tech) => (
            <span
              key={random()}
              className="inline-flex items-center rounded-full px-3 py-1.5 text-sm font-semibold text-primary bg-primary/10 dark:bg-primary/20 dark:text-primary-light border border-primary/20 dark:border-primary/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div>
      {type === 'external' ? (
        <a href={href} target="_blank">
          {Component}
        </a>
      ) : (
        <Link to={href} aria-label={title}>
          {Component}
        </Link>
      )}
    </div>
  )
}

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  technology: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string,
  href: PropTypes.string
}

export default ProjectItem
