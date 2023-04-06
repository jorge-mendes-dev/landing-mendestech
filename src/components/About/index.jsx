import React from 'react'
import PropTypes from 'prop-types'

import { random } from 'utils/generic'
import { Divider } from 'components'

import astronalt_no_bg from 'utils/JSON/astronalt_no_bg.json'
import astronalt from 'utils/JSON/astronalt.json'

import info from 'info'

import * as S from './styled'

const About = ({ layout, ...props }) => {
  const { about } = info
  const { title, paragraphs, primaryAction } = about

  return (
    <section
      className={`bg-background container mx-auto`}
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
          <div className={`flex flex-wrap p-8`}>
            {paragraphs.slice(0, 3).map((description) => (
              <p
                key={random()}
                className={`mb-6 text-gray-600 subpixel-antialiased font-light tracking-light leading-10 align-baseline leading-relaxed`}
              >
                {description}
              </p>
            ))}
            <div className="rounded-md shadow">
              <a
                rel="noreferrer"
                href={primaryAction.href}
                className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:text-offwhite md:py-4 md:text-lg md:px-10`}
              >
                {primaryAction.text}
              </a>
            </div>
          </div>
          <div className={`flex flex-col items-center justify-center`}>
            <S.PlayerAbout src={astronalt_no_bg} loop autoplay />
          </div>
        </div>
      ) : (
        <div className="block sm:flex sm:gap-10 justify-center`">
          <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
            <S.PlayerAboutPage src={astronalt} loop autoplay />
          </div>

          <div className="font-general-regular w-full sm:w-3/4 text-left p-6 shadow-md rounded-lg">
            {paragraphs.map((description) => (
              <p
                key={random()}
                className={`text-gray-600 mb-6 subpixel-antialiased font-light tracking-light leading-10 align-baseline leading-relaxed`}
              >
                {description}
              </p>
            ))}
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
