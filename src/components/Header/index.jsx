import config from 'config'
import { Link } from 'react-router-dom'

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
        <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
          <span className="block xl:inline">{title}</span>{' '}
          <span className={`block text-primary xl:inline`}>{subtitle}</span>
        </h1>
        <p className="mt-6 max-w-2xl mb-8 font-normal text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
        <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
          <div className="rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300">
            <Link
              rel="noreferrer"
              aria-label={primaryAction.text}
              to={primaryAction.href}
              className="w-full flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-xl text-white bg-primary hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-200 md:py-4 md:text-lg md:px-10"
            >
              {primaryAction.text}
            </Link>
          </div>
          <div className="mt-3 sm:mt-0">
            <Link
              target="_blank"
              rel="noreferrer"
              aria-label={secondaryAction.text}
              to={secondaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3.5 text-base font-semibold text-center text-gray-900 dark:text-gray-100 border-2 border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200 md:py-4 md:text-lg md:px-10`}
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
