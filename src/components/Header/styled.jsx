import styled, { keyframes } from 'styled-components'
import media from 'styled-media-query'
import { Player } from '@lottiefiles/react-lottie-player'

export const HeaderTitle = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  letter-spacing: 0.04em;
  text-shadow: 0 4px 32px rgba(0,0,0,0.25), 0 1.5px 0 #0691c1;
  text-transform: uppercase;
  text-align: center;
  position: absolute;
  z-index: 999;
  left: 0;
  right: 0;
  top: 38%;
  padding: 0 1rem;
  line-height: 1.1;
  filter: drop-shadow(0 2px 16px #0691c1aa);
  ${media.lessThan('large')`
    font-size: clamp(1.5rem, 8vw, 2.5rem);
    top: 45%;
    padding: 0 0.5rem;
  `}
`

export const PlayerHeader = styled(Player)`
  width: 70vw;
  height: 60vh;
  max-width: 900px;
  max-height: 500px;
  margin: 0 auto;
  filter: drop-shadow(0 4px 32px #0691c1aa);
`

export const StyledTitle = styled.div`
  @keyframes typing {
    from { width: 0; }
    to { width: 100%; }
  }
  @keyframes blink {
    50% { border-color: transparent; }
  }
  width: 520px;
  max-width: 100vw;
  border-right: 2px solid #4fd1c5;
  white-space: nowrap;
  animation:
    typing 2.8s steps(30, end),
    blink 0.8s infinite alternate;
  overflow: hidden;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.03em;
  text-shadow: 0 2px 12px #0691c155;
  margin: 0 auto;
  ${media.lessThan('large')`
    width: 90vw;
    font-size: clamp(1.2rem, 7vw, 2.2rem);
  `}
  @media screen and (max-width: 1440px) {
    h2 {
      font-size: 2.5rem !important;
    }
  }
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 2.5rem !important;
    }
  }
`
