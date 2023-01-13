import React from "react";

import * as S from "./styled";
import SocialLinks from "components/SocialLinks";
import space from "utils/JSON/space.json";

import info from "info";

const Footer = () => {
  const { footer } = info;
  return (
    <S.FooterWrapper>
      <S.PlayerFooter src={space} loop autoplay />
      <S.Container>
        <SocialLinks />
        <S.Text>{footer.title}</S.Text>
        <S.Text>
          {footer.description} - {new Date().getFullYear()}
        </S.Text>
      </S.Container>
    </S.FooterWrapper>
  );
};

export default Footer;
