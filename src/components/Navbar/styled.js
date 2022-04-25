import styled from 'styled-components'

export const NavWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.mediumBackground};
  border-bottom: 1px solid ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  front-weight: ${({ theme }) => theme.font.weight.bold};
  text-transform: uppercase;

  padding: ${({ theme }) => theme.spacings.small};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavList = styled.div`

`

export const NavItem = styled.a`
  padding: ${({ theme }) => theme.spacings.xsmall};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  front-weight: ${({ theme }) => theme.font.weight.normal};

  &: hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`
