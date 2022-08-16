import { IButton } from "./interfaces";
import styled, { css } from "styled-components";

const Container = styled.button<IButton>`
  width: 100%;
  padding: 13px;
  transition: 0.2s ease-out;
  align-items: center;
  justify-content: center;
  display: inline-flex;
  white-space: nowrap;
  ${({ add }) =>
    add &&
    css`
      border-radius: 4px;
      background-color: ${({ theme }) => theme.grey};
      &:hover {
        background-color: ${({ theme }) => theme.greyHover};
      }
    `}
`;

export const ButtonStyles = { Container };
