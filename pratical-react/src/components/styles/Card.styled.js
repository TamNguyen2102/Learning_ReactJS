import styled from "styled-components";
export const StyledCard = styled.div`
  margin: 6rem;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .title {
    font-size: 1.5rem;
    font-weight: 700;
  }
  & > p {
    font-size: 1.2rem;
    font-weight: 300;
  }

  & img {
    height: ${({ imgRound }) => (imgRound ? 200 : 100)}px;
    width: ${({ imgRound }) => (imgRound ? 200 : 100)}px;
    border-radius: ${({ imgRound }) => (imgRound ? 50 : 0)}%;
    display: inline-block;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 5rem 4rem 2rem 4rem;
  }
`;
