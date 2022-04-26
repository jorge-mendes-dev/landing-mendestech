import React from 'react'

import PropTypes from 'prop-types'

import * as S from './styled'

const Header = ({ title, ...props }) => {
  return (
    <S.Wrapper {...props}>
      <h1>{title}</h1>
    </S.Wrapper>
)}

Header.propTypes = {
  title: PropTypes.string
}

Header.defaultProps = {
  title: 'Header'
}

export default Header
