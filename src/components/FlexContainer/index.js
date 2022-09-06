import React from "react";

import PropTypes from "prop-types";

import * as S from "./styled";

const FlexContainer = ({ children, ...props }) => (
  <S.FlexContainerWrapper {...props}>{children}</S.FlexContainerWrapper>
);

FlexContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FlexContainer;
