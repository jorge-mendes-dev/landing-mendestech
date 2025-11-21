import SocialLinks from 'components/SocialLinks'
import config from 'config'

const Footer = () => {
  const { footer } = config
  return (
    <footer className="relative bg-gradient-to-b from-white via-gray-50 to-white dark:from-zinc-900 dark:via-black dark:to-zinc-900 border-t border-gray-200/50 dark:border-gray-800/50 backdrop-blur-sm">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="mx-auto max-w-7xl px-6 py-8 md:py-10 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <SocialLinks />
        </div>
        <div className="mt-6 md:order-1 md:mt-0">
          <p className="text-center text-sm md:text-base leading-6 text-gray-600 dark:text-gray-400">
            {new Date().getFullYear()} - {footer.description} | {footer.title}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
