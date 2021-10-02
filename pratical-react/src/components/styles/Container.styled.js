import styled from "styled-components";

export const Container = styled.div`
  padding: 0 12px;
  margin: 0 auto;

  max-width: 1320px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 540px;
  }
`;
