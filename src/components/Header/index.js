import React from 'react'

import PropTypes from 'prop-types'

import * as S from './styled'

const Header = ({ title, ...props }) => {
  return (
    <S.HeadeWrrapper {...props}>
      <S.HeaderTitle>{title}</S.HeaderTitle>
    </S.HeadeWrrapper>
)}

Header.propTypes = {
  title: PropTypes.string
}

Header.defaultProps = {
  title: 'Header'
}

export default Header
