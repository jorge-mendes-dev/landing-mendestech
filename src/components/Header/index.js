import React from "react";

import LazyLoad from "react-lazyload";
import rocket from "utils/rocket.json";
import PropTypes from "prop-types";

import * as S from "./styled";

const Header = ({ title }) => (
  <LazyLoad>
    <S.HeadeWrrapper>
      <S.HeaderTitle>{title}</S.HeaderTitle>
      <S.PlayerHeader src={rocket} loop autoplay />
    </S.HeadeWrrapper>
  </LazyLoad>
);


Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: "Header",
};

export default Header;
