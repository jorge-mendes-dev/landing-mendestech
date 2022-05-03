import styled from 'styled-components'
import media from 'styled-media-query'

export const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacings.large};

  ${media.lessThan('large')`
    flex-direction: column;
    padding: 0;
  `}
`

export const AboutLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AboutLogo = styled.img`
  width: 100%;

  ${media.lessThan('large')`
    width: 90%;
  `}
`

export const AboutTextContainer = styled.div`
  padding: ${({ theme }) => theme.spacings.medium};
  line-height: ${({ theme }) => theme.font.height.large};
  font-weight: ${({ theme }) => theme.font.weight.normal};

  ${media.lessThan('large')`
    padding: 0;
  `}

`
