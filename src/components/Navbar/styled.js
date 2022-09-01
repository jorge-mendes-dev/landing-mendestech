import styled from "styled-components";

export const NavWrapper = styled.nav`
  padding: ${({ theme }) => theme.spacings.small};
  background: linear-gradient(90deg, #5981e3 0%, #253f82 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
`;

export const Logo = styled.img`
  width: ${({ theme }) => theme.font.sizes.xxlarge};
`;

export const NavList = styled.div``;

export const NavItem = styled.a`
  front-weight: ${({ theme }) => theme.font.weight.bold};
  padding: ${({ theme }) => theme.spacings.xsmall};
  color: ${({ theme }) => theme.colors.offwhite};
  text-transform: uppercase;
  text-decoration: none;

  &: hover {
    color: ${({ theme }) => theme.colors.softblue};
  }
`;
