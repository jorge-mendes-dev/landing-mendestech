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
            className="group relative p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-all duration-200 hover:bg-primary/10 dark:hover:bg-primary/20"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          >
            <span className="sr-only">{link.label}</span>
            <Icon className="h-6 w-6 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
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
