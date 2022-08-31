import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.black} 0%,
    ${({ theme }) => theme.colors.darker} 100%
  );
  box-shadow: 0 4px 8px 0 ${({ theme }) => theme.colors.black};
  transition: 0.15s;
  min-height: 20vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const Text = styled.p`
  text-transform: captalize;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.offwhite};
  padding: ${({ theme }) => theme.spacings.small};
`;
