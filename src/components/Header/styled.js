import styled from 'styled-components'
import media from 'styled-media-query'

export const HeadeWrrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  background-image: linear-gradient(to right top, #5981e3, #4c70ca, #3f5fb1, #324f99, #253f82);
  box-shadow: 0 4px 8px 0 ${({ theme }) => theme.colors.black};
  min-height: 80vh;
  transition: 0.15s;

  ${media.lessThan('large')`
    display: none;
  `}
`

export const HeaderTitle = styled.h1`
  font-size: ${({ theme }) => theme.spacings.xxlarge};
  color: ${({ theme }) => theme.colors.offwhite};
  text-transform: uppercase;
  text-align: center;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  letter-spacing: ${({ theme }) => theme.font.sizes.xsmall};
  text-shadow: ${({ theme }) => theme.shadow.header};
`
