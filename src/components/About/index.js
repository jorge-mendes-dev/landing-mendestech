import React from "react";

import { random } from "utils/random";
import { aboutFirst, aboutSecond } from "info/aboutMe";
import logo from "assets/images/logo.png";
import developer from "utils/developer.json";

import * as S from "./styled";

const About = ({ ...props }) => (
  <S.AboutWrapper {...props}>
    <S.AboutContainer>
      <S.AboutLogo src={logo} alt="Mendes Technology" />
      <S.AboutTextContainer>
        <h3>My story</h3>
        {aboutFirst.map((about) => (
          <p key={random()}>{about}</p>
        ))}
      </S.AboutTextContainer>
    </S.AboutContainer>
    <S.AboutContainer>
      <S.AboutTextContainer>
        <h3>My experience</h3>
        {aboutSecond.map((about) => (
          <p key={random()}>{about}</p>
        ))}
      </S.AboutTextContainer>
      <S.PlayerAbout src={developer} loop autoplay />
    </S.AboutContainer>
  </S.AboutWrapper>
);

export default About;
