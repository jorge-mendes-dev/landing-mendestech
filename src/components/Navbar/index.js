import React from 'react'

import PropTypes from 'prop-types'
import Links from './Links'

import * as S from './styled'

const Navbar = ({ title, ...props }) => (
  <S.NavWrapper {...props}>
    <h1>{title}</h1>
    <S.NavList>
    {Links.map(link => (
      <S.NavItem href={link.url} key={link.url + link.label}>{link.label}</S.NavItem>
    ))}
    </S.NavList>
  </S.NavWrapper>
)

Navbar.propTypes = {
  title: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Navbar'
}

export default Navbar
