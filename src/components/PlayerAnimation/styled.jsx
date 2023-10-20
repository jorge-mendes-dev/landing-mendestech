import styled from 'styled-components'
import media from 'styled-media-query'

import { Player } from '@lottiefiles/react-lottie-player'

export const PlayerAnimation = styled(Player)`
  width: ${({ size }) => size};

  ${media.lessThan('large')`
    width: 90%;
  `}
`
