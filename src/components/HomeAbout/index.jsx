import { Divider, PlayerAnimation } from 'components'
import { Link } from 'react-router-dom'
import { random } from 'utils/generic'

import astronalt_no_bg from 'utils/JSON/astronalt_no_bg.json'

import config from 'config'

import * as S from './styled'

const HomeAbout = ({ ...props }) => {
  const { about } = config
  const { title, paragraphs, primaryAction } = about

  return (
    <S.Wrapper
      id="about"
      {...props}
      className="mb-16 p-2 rounded-2xl shadow-card bg-gradient-to-tr from-primary via-primary-600 to-primary-800 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl"
    >
      <div className="w-full h-64 lg:w-1/2 lg:h-auto">
        <div className="h-full w-full object-cover">
          <PlayerAnimation animation={astronalt_no_bg} />
        </div>
      </div>
      <div className="bg-white dark:bg-zinc-900 dark:border-zinc-800 rounded-2xl max-w-lg md:max-w-2xl md:z-10 md:shadow-card-elevated md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        <div className="flex flex-col p-8 md:p-12 lg:px-16">
          <h2
            className={`w-full my-4 text-3xl md:text-4xl font-bold leading-tight text-center`}
          >
            {title.split(' ').map((word, index) => (
              <span
                key={index}
                className={
                  index % 2 ? 'text-primary' : 'text-gray-900 dark:text-white'
                }
              >
                {word}{' '}
              </span>
            ))}
          </h2>
          <Divider />
          {paragraphs.slice(0, 1).map((description) => (
            <p
              key={random()}
              className={`mt-6 text-base md:text-lg text-gray-700 dark:text-gray-300 font-normal leading-relaxed`}
            >
              {description}
            </p>
          ))}
          <div className={`mt-10 flex flex-col items-center justify-center`}>
            <div className="rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300 mb-2">
              <Link
                rel="noreferrer"
                aria-label={primaryAction.text}
                to={primaryAction.href}
                className={`w-full flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-xl text-white bg-primary hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-200 md:py-4 md:text-lg md:px-10`}
              >
                {primaryAction.text}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white dark:from-black sm:h-32" />
    </S.Wrapper>
  )
}

export default HomeAbout
