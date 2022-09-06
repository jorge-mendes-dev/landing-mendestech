import styled from "styled-components";

export const ContentWrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.offwhite};
  color: ${({ theme }) => theme.colors.title};
  padding: ${({ theme }) => theme.spacings.medium};
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: ${({ theme }) => theme.font.weight.light};
  line-height: ${({ theme }) => theme.font.height.large};
  letter-spacing: 0.069rem;
  margin: auto;
`;
