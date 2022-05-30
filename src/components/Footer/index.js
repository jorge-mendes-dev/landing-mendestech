import React from "react";

import * as S from "./styled";
import SocialLinks from "components/SocialLinks";

const Footer = () => (
  <S.FooterWrapper>
    <S.Container>
      <SocialLinks />
      <S.Text>Build with JS e ❤️</S.Text>
    </S.Container>
  </S.FooterWrapper>
);

export default Footer;
