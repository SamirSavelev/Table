import styled, { css } from "styled-components";
import { CommonUseComponents } from "../../../../../../styles/CommonUseComponents";
const { Row } = CommonUseComponents;

const Container = styled(Row)<{ padding?: string; gap?: string }>`
  width: max-content;
  padding: ${({ padding }) => (padding ? padding : "0")};
  gap: ${({ gap }) => (gap ? gap : "0")};
  background: ${({ theme }) => theme.white};
  box-shadow: 0px 4px 10px rgba(221, 222, 222, 0.5);
  border-radius: 38px;
`;

const Button = styled.button<{ isActive?: boolean }>`
  display: flex;
  flex-direction: row;
  width: max-content;
  padding: 0 15px;
  align-items: center;
  transition: 0.2s ease-out;
  &:hover {
    background: ${({ theme }) => theme.rowHover};
  }
  ${({ isActive }) =>
    isActive &&
    css`
      background: ${({ theme }) => theme.lightGreyHover};
    `}
`;

const CircleButton = styled.button<{
  right?: boolean;
  left?: boolean;
  isActive?: boolean;
}>`
  height: 32px;
  width: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  background-color: ${({ theme, right, left, isActive }) =>
    right || left || isActive ? theme.lightGreyHover : theme.white};
  transition: 0.2s ease-out;
  transform: ${({ right, left }) =>
    right ? `rotate(-0.25turn)` : left ? `rotate(0.25turn)` : ""};
  &:hover {
    background-color: ${({ theme }) => theme.rowHover};
  }
`;

export const PaginationStyles = { Container, Button, CircleButton };
