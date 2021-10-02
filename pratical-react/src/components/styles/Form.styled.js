import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  max-width: 1320px;
  width: 100%;

  & > * {
    font-size: 1.2rem;
  }

  & > input {
    padding: 1.25rem 1.5rem;
    flex-grow: 1;
    margin-right: 0.5rem;

    border-radius: 5px;
  }
  & > button {
    padding: 1.25rem 1.5rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 540px;
  }
`;
