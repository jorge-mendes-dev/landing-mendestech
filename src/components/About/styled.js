import styled from "styled-components";
import media from "styled-media-query";
import { Player } from "@lottiefiles/react-lottie-player";

export const AboutWrapper = styled.div`
  padding: ${({ theme }) => theme.spacings.base};
`;

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;

  ${media.lessThan("large")`
    flex-direction: column;
    padding: 0;
  `}
`;

export const AboutLogo = styled.img`
  width: 40vw;

  ${media.lessThan("large")`
    width: 90%;
  `}
`;

export const AboutTextContainer = styled.div`
  padding: ${({ theme }) => theme.spacings.medium};
  line-height: ${({ theme }) => theme.font.height.large};
  font-weight: ${({ theme }) => theme.font.weight.normal};

  ${media.lessThan("large")`
    width: 100%;
  `}
`;

export const PlayerAbout = styled(Player)`
  width: 40vw;
  height: 40vh;

  ${media.lessThan("large")`
    width: 90%;
  `}
`;
