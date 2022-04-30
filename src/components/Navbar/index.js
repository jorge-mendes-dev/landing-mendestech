import React from 'react'

import PropTypes from 'prop-types'
import navLinks from 'info/navLinks'
import logo from 'assets/images/logo.png'

import * as S from './styled'

const Navbar = ({ title, ...props }) => (
  <S.NavWrapper {...props}>
    <S.Logo src={logo} alt={title} />
    <S.NavList>
    {navLinks.map(link => (
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
