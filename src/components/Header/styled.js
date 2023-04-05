import styled from 'styled-components'
import media from 'styled-media-query'
import { Player } from '@lottiefiles/react-lottie-player'

export const HeadeWrrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.highlight};
  min-height: 100vh;
`

export const HeaderTitle = styled.h1`
  font-size: ${({ theme }) => theme.spacings.xxlarge};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  letter-spacing: ${({ theme }) => theme.font.sizes.xsmall};
  text-shadow: ${({ theme }) => theme.shadow.header};
  text-transform: uppercase;
  text-align: center;

  position: absolute;
  z-index: 999;
  left: 0;
  right: 0;
  top: 40%;

  ${media.lessThan('large')`
    font-size: ${({ theme }) => theme.spacings.medium};
    top: 45%;
  `}
`

export const PlayerHeader = styled(Player)`
  width: 80vw;
  height: 80vh;
`
