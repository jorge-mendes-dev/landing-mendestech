import React, { useState } from 'react'

import LazyLoad from 'react-lazyload'
import PropTypes from 'prop-types'

import * as S from './styled'

const Header = ({ title, tags, ...props }) => {
  const [loader, setLoader] = useState(true)
  const handleLoader = () => setLoader(!loader)

  return (
    <S.HeadeWrrapper {...props}>
      <LazyLoad>
        <S.HeaderTitle>{title}</S.HeaderTitle>
        <S.ImageHeader
          src={`https://source.unsplash.com/1600x900/?desktop,${tags}`}
          alt={`Random desktop wallpapers about the tags: ${tags}`}
          onLoad={handleLoader}
          onError={handleLoader}
        />
      </LazyLoad>
    </S.HeadeWrrapper>
)}

Header.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.string
}

Header.defaultProps = {
  title: 'Header',
  tags: 'nature,star,galaxy,space'
}

export default Header
