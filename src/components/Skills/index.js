import React from 'react'

import { random } from 'utils/random'

import PropTypes from 'prop-types'

import * as S from './styled'

const Skills = ({ title, data, ...props }) => {
  const stars = level => [...Array(level)].map(() => <S.SkillStar key={random()} />)

  return (
    <S.SkillsWrapper {...props}>
      <S.SkillTitle>{title}</S.SkillTitle>
      {data.map(skill => (
        <S.SkillsContainer key={random()}>
          <S.SkillName>{skill.name}</S.SkillName>
          <S.SkillLevel>{stars(skill.level, skill.id)}</S.SkillLevel>
        </S.SkillsContainer>
      ))}
    </S.SkillsWrapper>
  )
}

Skills.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  title: PropTypes.string
}

Skills.defaultProps = {
  title: ''
}

export default Skills
