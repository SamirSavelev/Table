import styled from "styled-components";
import { ISpinner } from "@interfaces";

const Container = styled.div<ISpinner>`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  margin: 20px auto;
  animation: 1s linear 0s normal none infinite running rot;
  @keyframes rot {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const SpinnerStyles = { Container };
