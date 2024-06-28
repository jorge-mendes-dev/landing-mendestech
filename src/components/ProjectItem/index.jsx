import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import { backToTop } from 'utils/generic'

const ProjectItem = ({ title, href = '#', category, image = '', type }) => {
  const Component = (
    <div
      onClick={() => backToTop()}
      className="hover:bg-blue-50 hover:shadow-xl transition-all duration-300 group hover:scale-110 cursor-pointer mb-10 sm:mb-0 bg-white dark:bg-zinc-800 rounded-xl p-8 shadow"
    >
      <div className={`flex flex-col items-center justify-center`}>
        <img src={image} className="rounded-xl-t-xl border-none" alt={title} />
      </div>
      <div className="text-center px-4 py-8">
        <p className="font-general-medium font-bold text-lg md:text-xl text-ternary-dark dark:text-blue-800 mb-2 transition-all duration-300 group-hover:text-primary">
          {title}
        </p>
        <span className="text-sm font-light text-ternary-dark dark:text-gray">
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

export default ProjectItem
