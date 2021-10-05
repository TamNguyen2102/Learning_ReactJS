import styled from "styled-components";

export const StyledBody = styled.main`
  width: 100vw;
  .imageBody {
    width: 50%;
  }
  & img {
    height: 480px;
    width: 100%;
    object-fit: cover;
  }
  & article {
    padding: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    width: 50%;

    & h3 {
      font-size: 2rem;
      font-weight: 700;
    }
    & p {
      font-size: 1.2rem;
      font-weight: 300;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100vw;
    .imageBody {
      width: 100%;
    }
    & article {
      width: 100%;
      padding: 3.5rem;
    }
  }
`;
