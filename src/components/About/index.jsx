import React from 'react'
import PropTypes from 'prop-types'

import { random } from 'utils/generic'
import { Divider, PlayerAnimation } from 'components'

import astronalt from 'utils/JSON/astronalt.json'

import config from 'config'

const About = ({ ...props }) => {
  const { about } = config
  const { title, paragraphs, list } = about

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
    </section>
  )
}

export default About
