import React, { useState } from "react";

import LazyLoad from "react-lazyload";
import rocket from "utils/rocket.json";
import PropTypes from "prop-types";

import * as S from "./styled";

const Header = ({ title, ...props }) => {
  const [loader, setLoader] = useState(true);
  const handleLoader = () => setLoader(!loader);

  return (
    <S.HeadeWrrapper {...props}>
      <LazyLoad>
        <S.HeaderTitle>{title}</S.HeaderTitle>
        <S.PlayerHeader src={rocket} loop autoplay />
      </LazyLoad>
    </S.HeadeWrrapper>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: "Header",
};

export default Header;
