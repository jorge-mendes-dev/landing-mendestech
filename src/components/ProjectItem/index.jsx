import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

const ProjectItem = ({ title, href, category, image, type }) => {
  const Component = (
    <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
      <div className={`flex flex-col items-center justify-center`}>
        <img src={image} className="rounded-t-xl border-none" alt={title} />
      </div>
      <div className="text-center px-4 py-6">
        <p className="font-general-medium font-bold text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
          {title}
        </p>
        <span className="text-md text-ternary-dark dark:text-ternary-light">
          {category}
        </span>
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
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string,
  href: PropTypes.string
}

ProjectItem.defaultProps = {
  image: '',
  href: '#'
}

export default ProjectItem
