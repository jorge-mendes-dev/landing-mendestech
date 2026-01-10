import SocialLinks from 'components/SocialLinks'
import config from 'config'

const Footer = () => {
  const { footer } = config
  return (
    <footer className="relative bg-white dark:bg-black border-t border-gray-100 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 lg:px-8">
        <div className="flex justify-center space-x-6 order-2 md:order-2">
          <SocialLinks />
        </div>
        <div className="order-1 md:order-1">
          <p className="text-center text-sm md:text-base leading-6 text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} {footer.title} &mdash;{' '}
            {footer.description}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
