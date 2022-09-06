import styled, { css } from "styled-components";
import media from "styled-media-query";

export const SocialLinksWrapper = styled.nav`
  ${({ size }) => css`
    width: 30vw;
    margin: ${({ theme }) => theme.spacings.small} auto;

    ${size === "small" &&
    `
    width: 20vw;
    margin: 0 ${({ theme }) => theme.spacings.xsmall};
  `};

    ${media.lessThan("large")`
      margin: ${({ theme }) => theme.spacings.xsmall} auto;
      width: 100%;
    `}
  `}
`;

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

export const SocialLinksItem = styled.li``;

export const SocialLinksLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: ${({ theme }) => theme.colors.bluehighlight};
  }
`;

export const IconWrapper = styled.div`
  fill: ${({ theme }) => theme.colors.offwhite};
  width: 30px;
  height: 30px;
`;
