import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ layout }) => layout};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;
