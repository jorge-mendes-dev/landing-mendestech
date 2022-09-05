import styled from "styled-components";
import { DegradeAnimation } from "assets/styles/globalStyles";

export const Wrapper = styled.div`
  background: linear-gradient(
    -45deg,
    #5981e3,
    #4c70ca,
    #3f5fb1,
    #324f99,
    #253f82
  );
  background-size: 400% 400%;
  animation: ${DegradeAnimation} 15s ease infinite;
  filter: contrast(200%);
`;
