import styled from "styled-components";
export const Title = styled.h1`
  font-size: ${({ size }) => size}rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  z-index: 1;
`;
