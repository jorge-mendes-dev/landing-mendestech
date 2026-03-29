import SocialLinks from 'components/SocialLinks'
import config from 'config/index.json'

const Footer: React.FC = () => {
  const { footer } = config
  return (
    <footer className="relative bg-background dark:bg-background-dark border-t border-border dark:border-border-dark">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 lg:px-8">
        <div className="flex justify-center space-x-6 order-2 md:order-2">
          <SocialLinks />
        </div>
        <div className="order-1 md:order-1">
          <p className="text-center text-sm md:text-base leading-6 text-text-secondary dark:text-text-secondary-dark">
            &copy; {new Date().getFullYear()} {footer.title} &mdash;{' '}
            {footer.description}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
