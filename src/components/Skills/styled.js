import styled from 'styled-components'
import media from 'styled-media-query'

import { StarFill } from '@styled-icons/bootstrap/StarFill'

export const SkillsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const SkillTitle = styled.h6`
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  letter-spacing: ${({ theme }) => theme.spacings.xxsmall};
  text-shadow: 2px 2px 0px ${({ theme }) => theme.colors.darker};
  font-size: ${({ theme }) => theme.font.sizes.medium};
  margin-bottom: 1rem;

  ${media.lessThan('large')`
    margin-top: 2rem;
  `};
`

export const SkillsContainer = styled.div`
  display: flex;
  align-items: center;

  ${media.lessThan('large')`
    width: 100%;
    justify-content: space-around;
  `};
`

export const SkillName = styled.p`
  min-width: 150px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  margin-right: 1rem;
`

export const SkillLevel = styled.p`
  min-width: 100px;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`

export const SkillStar = styled(StarFill)`
  width: 1rem;
  margin-right: .3rem;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`
