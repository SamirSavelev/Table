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

  ${({ back }) =>
    back &&
    css`
      cursor: pointer;
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-items: center;
      padding: 0;
      width: max-content;
      background-color: transparent;
      color: ${({ theme }) => theme.greyLink};
      &:hover {
        color: ${({ theme }) => theme.greyHover};
      }
    `}
`;

export const ButtonStyles = { Container };
