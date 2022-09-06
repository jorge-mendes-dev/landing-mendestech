import React from "react";

import navLinks from "info/navLinks";
import logo from "assets/images/logo.png";

import * as S from "./styled";

const Navbar = ({ title, ...props }) => (
  <S.NavWrapper {...props}>
    <S.Logo src={logo} alt={title} />
    <S.NavList>
      {navLinks.map((link) => (
        <S.NavItem
          spy={true}
          active="active"
          smooth={true}
          duration={1000}
          to={link.url}
          key={link.url + link.label}
        >
          {link.label}
        </S.NavItem>
      ))}
    </S.NavList>
  </S.NavWrapper>
);

export default Navbar;
