import React from "react";

import rocket from "utils/rocket.json";
import PropTypes from "prop-types";

import * as S from "./styled";

const Header = ({ title }) => (
  <S.HeadeWrrapper>
    <S.HeaderTitle>{title}</S.HeaderTitle>
    <S.PlayerHeader src={rocket} loop autoplay />
  </S.HeadeWrrapper>
);

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: "Header",
};

export default Header;
