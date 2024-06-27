import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import { random } from 'utils/generic'
import { Divider, PlayerAnimation } from 'components'

import astronalt_no_bg from 'utils/JSON/astronalt_no_bg.json'
import astronalt from 'utils/JSON/astronalt.json'

import config from 'config'

const About = ({ layout, ...props }) => {
  const { about } = config
  const { title, paragraphs, primaryAction, list } = about

  return (
    <section
      className={`bg-background dark:bg-zinc-800 container mx-auto`}
      id="about"
      {...props}
    >
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
        <div className={`container max-w-5xl mx-auto m-8`}>
          <div className={`flex flex-wrap p-8 rounded-xl shadow mb-6`}>
            {paragraphs.slice(0, 3).map((description) => (
              <p
                key={random()}
                className={`mb-6 text-gray-800 dark:text-gray subpixel-antialiased font-light tracking-light align-baseline leading-relaxed`}
              >
                {description}
              </p>
            ))}
          </div>
          <div className={`flex flex-col items-center justify-center`}>
            <div className="rounded-xl shadow mb-2">
              <Link
                rel="noreferrer"
                aria-label={primaryAction.text}
                to={primaryAction.href}
                className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-background bg-primary hover:text-offwhite md:py-4 md:text-lg md:px-10`}
              >
                {primaryAction.text}
              </Link>
            </div>
          </div>
          <div className={`flex flex-col items-center justify-center`}>
            <PlayerAnimation animation={astronalt_no_bg} />
          </div>
        </div>
      ) : (
        <div className="block sm:flex sm:gap-10 justify-center`">
          <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
            <PlayerAnimation animation={astronalt} size={'16vw'} />
          </div>

          <div className="font-general-regular bg-white w-full sm:w-3/4 text-left p-6 shadow rounded-xl">
            {paragraphs.map((description) => (
              <p
                key={random()}
                className={`text-gray-600 dark:text-gray mb-6 font-light subpixel-antialiased tracking-light align-baseline leading-relaxed`}
              >
                {description}
              </p>
            ))}
            <div className="text-gray-600 dark:text-gray pl-4 font-light subpixel-antialiased tracking-light align-baseline leading-relaxed">
              <ul className="list-disc">
                {list.map((item) => (
                  <li key={random()}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

About.propTypes = {
  layout: PropTypes.string.isRequired
}

export default About
