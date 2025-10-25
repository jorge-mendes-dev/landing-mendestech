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
            className="text-gray-400 dark:text-white hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          >
            <span className="sr-only">{link.label}</span>
            <Icon className="h-6 w-6" aria-hidden="true" />
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
