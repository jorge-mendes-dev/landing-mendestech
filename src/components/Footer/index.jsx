import SocialLinks from 'components/SocialLinks'
import config from 'config'

const Footer = () => {
  const { footer } = config
  return (
    <footer className="bg-background dark:bg-zinc-900">
      <div className="mx-auto border-t border-gray-100 dark:border-gray-800 max-w-7xl px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <SocialLinks />
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500 dark:text-white">
            {new Date().getFullYear()} - {footer.description} | {footer.title}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
