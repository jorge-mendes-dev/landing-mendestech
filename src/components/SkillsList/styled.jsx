import styled from 'styled-components'
import media from 'styled-media-query'
import Icons from 'config/Icons'

export const SkillsWrapper = styled.div``

export const SkillTitle = styled.h6`
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  // letter-spacing: ${({ theme }) => theme.spacings.xxsmall};
  // font-size: ${({ theme }) => theme.font.sizes.large};
  // margin-bottom: 1rem;

  // ${media.lessThan('large')`
  //   margin-top: 2rem;
  // `};
`

export const SkillsContainer = styled.div`
  // display: flex;
  // align-items: center;

  // ${media.lessThan('large')`
  //   width: 100%;
  //   justify-content: space-around;
  // `};
`

export const SkillName = styled.p`
  min-width: 150px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  // font-size: ${({ theme }) => theme.font.sizes.xsmall};
  // margin-right: 1rem;
`

export const SkillLevel = styled.p`
  min-width: 100px;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`

export const SkillStar = styled(Icons.StarFill)`
  width: 1rem;
  // margin-right: 0.3rem;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`
