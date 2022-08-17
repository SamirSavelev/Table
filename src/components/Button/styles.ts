import { IButton } from "./interfaces";
import styled, { css } from "styled-components";

const Container = styled.button<IButton>`
  width: ${({ stretch }) => (stretch ? "100%" : "max-content")};
  padding: ${({ big }) => (big ? "24px 22px" : "13px")};
  transition: 0.2s ease-out;
  align-items: center;
  justify-content: center;
  display: inline-flex;
  white-space: nowrap;
  border-radius: 8px;
  ${({ theme, big }) =>
    big &&
    css`
      &:hover {
        background-color: ${theme.grey};
        color: ${theme.white};
      }
      font-weight: 700;
      text-transform: uppercase;
    `};

  background-color: ${({ theme, confirm }) =>
    confirm ? theme.grey2 : theme.white};
  color: ${({ theme, confirm }) => (confirm ? theme.white : theme.black)};
  ${({ border }) =>
    border &&
    css`
      border: 1px solid #1d2028;
    `}

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
