import React from 'react'

import config from 'config'
import { Link } from 'react-router-dom'

import * as S from './styled'

const Header = () => {
  const { mainHero } = config
  const { title, subtitle, description, primaryAction, secondaryAction } =
    mainHero

  return (
    <main
      className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
      id="header"
    >
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline dark:text-white">{title}</span>{' '}
          <S.StyledTitle>
            <h2>
              <span className={`block text-primary xl:inline`}>{subtitle}</span>
            </h2>
          </S.StyledTitle>
        </h1>
        <p className="mt-3 max-w-2xl mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-zinc-200">
          {description}
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-xl shadow">
            <Link
              rel="noreferrer"
              aria-label={primaryAction.text}
              to={primaryAction.href}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-400 md:py-4 md:text-lg md:px-10"
            >
              {primaryAction.text}
            </Link>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Link
              target="_blank"
              rel="noreferrer"
              aria-label={secondaryAction.text}
              to={secondaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-md hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:py-4 md:text-lg md:px-10`}
            >
              {secondaryAction.text}
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Header
