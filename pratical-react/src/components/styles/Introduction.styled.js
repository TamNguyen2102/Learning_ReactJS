import styled from "styled-components";
import headImage from "../../assets/img/bg-masthead.jpg";

export const Introduction = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  --navHeight: ${({ navHeight }) => navHeight}px;
  height: calc(100vh - var(--navHeight));
  width: 100%;
  background: url(${headImage}) no-repeat center center;
  background-size: cover;

  &::before {
    content: "";
    position: absolute;
    background-color: #1c375e;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0.5;
  }

  /* @media (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 540px;
  } */
`;
