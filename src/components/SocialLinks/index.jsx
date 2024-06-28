import React from 'react'

import PropTypes from 'prop-types'
import Icons from 'config/Icons'
import { random } from 'utils/generic'

import config from 'config'

import * as S from './styled'

const SocialLinks = ({ className, size = 'auto', ...props }) => {
  const { socialMedia } = config

  return (
    <S.SocialLinksWrapper className={className} size={size} {...props}>
      <S.SocialLinksList>
        {socialMedia.map((link) => {
          const Icon = Icons[link.label]
          return (
            <S.SocialLinksItem key={random()}>
              <S.SocialLinksLink
                href={link.url}
                title={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <S.IconWrapper>
                  <Icon />
                </S.IconWrapper>
              </S.SocialLinksLink>
            </S.SocialLinksItem>
          )
        })}
      </S.SocialLinksList>
    </S.SocialLinksWrapper>
  )
}

SocialLinks.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'auto'])
}

export default SocialLinks
