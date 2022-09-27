import React from "react";

import * as S from "./styled";
import SocialLinks from "components/SocialLinks";
import space from "utils/JSON/space.json";

const Footer = () => (
  <S.FooterWrapper>
    <S.PlayerFooter src={space} loop autoplay />
    <S.Container>
      <SocialLinks />
      <S.Text>Build with JS</S.Text>
      <S.Text>Jorge Mendes {new Date().getFullYear()}</S.Text>
    </S.Container>
  </S.FooterWrapper>
);

export default Footer;
