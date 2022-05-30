import React from "react";

import PropTypes from "prop-types";

import * as S from "./styled";

const Content = ({ children, ...props }) => (
  <S.ContentWrapper {...props}>{children}</S.ContentWrapper>
);

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
