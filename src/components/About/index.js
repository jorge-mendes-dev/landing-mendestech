import React from 'react'

import { random } from 'utils/random'
import { aboutMe } from 'info/aboutMe'
import logo from 'assets/images/logo.png'

import * as S from './styled'

const About = ({ ...props }) => (
  <S.AboutWrapper {...props}>
    <S.AboutLogoContainer>
      <S.AboutLogo src={logo} alt="Mendes Technology" />
    </S.AboutLogoContainer>
    <S.AboutTextContainer>
      {aboutMe.map(item => (
        <p key={random()}>{item}</p>
      ))}
    </S.AboutTextContainer>
  </S.AboutWrapper>
)

export default About
