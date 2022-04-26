import styled from 'styled-components'

export const NavWrapper = styled.div`
  padding: ${({ theme }) => theme.spacings.small};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
  width: ${({ theme }) => theme.font.sizes.xxlarge};
`

export const NavList = styled.div`

`

export const NavItem = styled.a`
front-weight: ${({ theme }) => theme.font.weight.bold};
  padding: ${({ theme }) => theme.spacings.xsmall};
  color: ${({ theme }) => theme.colors.texts};
  text-transform: Captalize;
  text-decoration: none;

  &: hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`
