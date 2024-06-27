import React from 'react'
import { Link } from 'react-router-dom'
import { Divider, PlayerAnimation } from 'components'
import { random } from 'utils/generic'

import astronalt_no_bg from 'utils/JSON/astronalt_no_bg.json'

import config from 'config'

import * as S from './styled'

const HomeAbout = ({ ...props }) => {
  const { about } = config
  const { title, paragraphs, primaryAction, list } = about

  return (
    <S.Wrapper
      id="about"
      {...props}
      className="mb-12 rounded-xl shadow bg-gradient-to-r from-primary to-blue-800 dark:bg-zinc-800 relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl"
    >
      <div className="w-full h-64 lg:w-1/2 lg:h-auto">
        <div className="h-full w-full object-cover">
          <PlayerAnimation animation={astronalt_no_bg} />
        </div>
      </div>
      <div className="bg-white rounded-xl max-w-lg md:max-w-2xl md:z-10 md:shadow md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        <div className="flex flex-col p-12 md:px-16">
          <h2
            className={`w-full my-2 text-2xl lg:text-5xl font-bold leading-tight text-center`}
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
          {paragraphs.slice(0, 2).map((description) => (
            <p
              key={random()}
              className={`mt-2 text-gray-800 dark:text-gray subpixel-antialiased font-light tracking-light align-baseline leading-relaxed`}
            >
              {description}
            </p>
          ))}
          <div className={`mt-8 flex flex-col items-center justify-center`}>
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
        </div>
      </div>
    </S.Wrapper>
  )
}

export default HomeAbout
