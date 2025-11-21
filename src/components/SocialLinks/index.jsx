import Icons from 'config/Icons'
import PropTypes from 'prop-types'
import { random } from 'utils/generic'

import config from 'config'

const SocialLinks = ({ className, size = 'auto', ...props }) => {
  const { socialMedia } = config
  return (
    <>
      {socialMedia.map((link) => {
        const Icon = Icons[link.label]
        return (
          <a
            key={random()}
            href={link.url}
            className="group relative p-3 rounded-full text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-all duration-300 hover:bg-primary/10 dark:hover:bg-primary/20 backdrop-blur-sm border border-transparent hover:border-primary/20 dark:hover:border-primary/30"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          >
            <span className="sr-only">{link.label}</span>
            <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" aria-hidden="true" />
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </a>
        )
      })}
    </>
  )
}

SocialLinks.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'auto'])
}

export default SocialLinks
