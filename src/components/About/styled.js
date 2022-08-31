import styled from "styled-components";
import media from "styled-media-query";

export const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacings.large};

  ${media.lessThan("large")`
    flex-direction: column;
    padding: 0;
  `}

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.border.radius};
  box-shadow: 0 3px 0 ${({ theme }) => theme.colors.gray};
  padding: ${({ theme }) => theme.spacings.base};
`;

export const AboutLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutLogo = styled.img`
  width: 100%;

  ${media.lessThan("large")`
    width: 90%;
  `}
`;

export const AboutTextContainer = styled.div`
  padding: ${({ theme }) => theme.spacings.medium};
  line-height: ${({ theme }) => theme.font.height.large};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  width: 80%;

  ${media.lessThan("large")`
    padding: 0;
    width: 100%;
  `}
`;
