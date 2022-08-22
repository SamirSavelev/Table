import { IButton } from "./interfaces";
import styled, { css } from "styled-components";

const Container = styled.button<IButton>`
  width: ${({ stretch }) => (stretch ? "100%" : "max-content")};
  padding: ${({ ...props }) =>
    props.big
      ? "24px 22px"
      : props.noPadding
      ? ""
      : props.small
      ? "10px 20px "
      : "13px"};
  transition: 0.2s ease-out;
  align-items: center;
  justify-content: center;
  display: inline-flex;
  white-space: nowrap;
  border-radius: 8px;
  &:hover {
    background: #f5f5f5;
    box-shadow: 0px 4px 10px rgba(221, 222, 222, 0.5);
  }
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
        background-color: transparent;
        color: ${({ theme }) => theme.greyHover};
      }
    `}
    ${({ redBorder }) =>
    redBorder &&
    css`
      border: 1px solid #fb2c2c;
      &:hover {
        background: #ff5353;
        color: ${({ theme }) => theme.white};
      }
    `}
     ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: 0px 4px 10px rgba(221, 222, 222, 0.5);
    `}
`;

export const ButtonStyles = { Container };
