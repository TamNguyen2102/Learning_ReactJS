import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  padding: 0.75rem 1rem;
  border-radius: 4px;

  font-weight: 400;
  line-height: 1.5;
  text-transform: capitalize;

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.accent};
  border-color: ${({ theme }) => theme.colors.accent};

  &:hover {
    background-color: #0b5ed7;
    border-color: #0a58ca;
  }
`;
