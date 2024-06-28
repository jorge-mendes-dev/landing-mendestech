import styled, { keyframes } from 'styled-components'
import media from 'styled-media-query'
import { Player } from '@lottiefiles/react-lottie-player'

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

export const StyledTitle = styled.div`
  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }

  width: 500px;

  ${media.lessThan('large')`
    width: auto
  `}

  border-right: 2px solid;
  white-space: nowrap;
  animation:
    typing 3.5s steps(21),
    blink 0.8s infinite alternate;
  overflow: hidden;

  @media screen and (max-width: 1440px) {
    h2 {
      font-size: 3.75rem !important;
    }
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 2.5rem !important;
    }
  }
`
