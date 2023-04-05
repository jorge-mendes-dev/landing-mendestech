import styled from 'styled-components'
import media from 'styled-media-query'
import { Player } from '@lottiefiles/react-lottie-player'

export const AboutWrapper = styled.div`
  padding: ${({ theme }) => theme.spacings.base};
`

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  transition: ${({ theme }) => theme.transition.default};

  ${media.lessThan('large')`
    flex-direction: column;
    padding: 0;
  `}

  &:first-child {
    margin-bottom: ${({ theme }) => theme.spacings.small};
  }
`

export const AboutTextContainer = styled.div`
  padding: ${({ theme }) => theme.spacings.medium};

  ${media.lessThan('large')`
    width: 100%;
  `}

  h3, p {
    display: block;
    font-smoothing: antialiased;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }

  h3 {
    font-size: ${({ theme }) => theme.font.sizes.xlarge};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: ${({ theme }) => theme.colors.title};
    text-transform: uppercase;
    border-bottom: 4px solid ${({ theme }) => theme.colors.bluehighlight};
  }

  p {
    font-size: ${({ theme }) => theme.font.sizes.small};
    line-height: ${({ theme }) => theme.font.height.large};
    font-weight: ${({ theme }) => theme.font.weight.normal};
  }

  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.border.radius};
  box-shadow: 0 3px 0 ${({ theme }) => theme.colors.gray};
`

export const PlayerAbout = styled(Player)`
  width: 25vw;

  ${media.lessThan('large')`
    width: 90%;
  `}
`

export const AboutLogo = styled.img`
  width: 25vw;

  ${media.lessThan('large')`
    width: 90%;
  `}
`
