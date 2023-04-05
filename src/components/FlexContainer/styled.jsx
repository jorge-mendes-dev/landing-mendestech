import styled from 'styled-components'
import media from 'styled-media-query'

export const FlexContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.spacings.large} auto;

  ${media.lessThan('large')`
    flex-direction: column;
  `}
`
