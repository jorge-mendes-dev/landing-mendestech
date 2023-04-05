import styled from 'styled-components'
import media from 'styled-media-query'
import { Player } from '@lottiefiles/react-lottie-player'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.mediumBackground};
`
export const PlayerNotFound = styled(Player)`
  width: 35vw;

  ${media.lessThan('large')`
    width: 90%;
  `}
`
