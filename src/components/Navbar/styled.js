import styled from "styled-components";
import { Link } from "react-scroll";

export const NavWrapper = styled.nav`
  padding: ${({ theme }) => theme.spacings.small};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
`;

export const Logo = styled.img`
  width: ${({ theme }) => theme.font.sizes.xxlarge};
`;

export const NavList = styled.div``;

export const NavItem = styled(Link)`
  front-weight: ${({ theme }) => theme.font.weight.bold};
  padding: ${({ theme }) => theme.spacings.xsmall};
  color: ${({ theme }) => theme.colors.offwhite};
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;

  &: hover {
    color: ${({ theme }) => theme.colors.bluehighlight};
    front-weight: ${({ theme }) => theme.font.weight.light};
  }
`;
