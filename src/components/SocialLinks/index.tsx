import Icons from 'config/Icons'
import { random } from 'utils/generic'

import { useConfigStore } from 'store/configStore'

interface SocialLinksProps {
  className?: string
  size?: 'small' | 'auto'
}

interface SocialLink {
  label: string
  url: string
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  className,
  size = 'auto',
  ...props
}) => {
  const { socialMedia } = useConfigStore()
  return (
    <>
      {socialMedia.map((link: SocialLink) => {
        const Icon = Icons[link.label as keyof typeof Icons]
        return (
          <a
            key={random()}
            href={link.url}
            className="group relative p-3 rounded-full text-text-secondary dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary-light transition-all duration-300 hover:bg-primary/10 dark:hover:bg-primary/20 backdrop-blur-sm border border-transparent hover:border-primary/20 dark:hover:border-primary/30"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          >
            <span className="sr-only">{link.label}</span>
            <Icon
              className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              aria-hidden="true"
            />
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </a>
        )
      })}
    </>
  )
}

export default SocialLinks
