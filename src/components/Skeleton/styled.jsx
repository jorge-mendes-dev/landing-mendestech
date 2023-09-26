import styled from 'styled-components'
import media from 'styled-media-query'
import { Player } from '@lottiefiles/react-lottie-player'

export const Wrapper = styled.div``

export const PlayerAnimation = styled(Player)`
  width: 25vw;

  ${media.lessThan('large')`
    width: 90%;
  `}
`
