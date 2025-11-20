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
        <div className="relative inline-block">
          <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl dark:text-white relative z-10">
            <span className="block xl:inline bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {title}
            </span>{' '}
            <span className={`block text-primary xl:inline bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent`}>
              {subtitle}
            </span>
          </h1>
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-lg blur-xl opacity-75 dark:opacity-50 -z-10"></div>
        </div>
        <p className="mt-6 max-w-2xl mb-8 font-normal text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
        <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary-light rounded-xl opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
            <Link
              rel="noreferrer"
              aria-label={primaryAction.text}
              to={primaryAction.href}
              className="relative w-full flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-xl text-white bg-primary hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 md:py-4 md:text-lg md:px-10"
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
              className={`w-full flex items-center justify-center px-8 py-3.5 text-base font-semibold text-center text-gray-900 dark:text-gray-100 border-2 border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary/50 dark:hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 md:py-4 md:text-lg md:px-10`}
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
