import styled, { css } from "styled-components";
import { UseComponents } from "../../../../styles/useComponents";

const { Row } = UseComponents;

const Container = styled(Row)<{ big?: boolean }>`
  background: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.lightGrey3};
  border-radius: 8px;
  width: ${({ big }) => (big ? "363px" : "290px")};
  height: 62px;
  padding: 9px 13px;
  cursor: pointer;
`;

const Arrow = styled.div<{ rotate?: boolean }>`
  transition: 0.5s ease-out;
  ${({ rotate }) =>
    rotate &&
    css`
      transform: rotate(0.5turn);
    `}
`;

const Popup = styled.div<{ big?: boolean }>`
  position: relative;
  top: 0;
  width: ${({ big }) => (big ? "363px" : "290px")};
  height: 221px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px 5px 18px rgba(40, 41, 61, 0.07);
  border-radius: 8px;
  overflow-y: scroll;
`;

const Input = styled.input<{ isShow?: boolean }>`
  cursor: pointer;
  width: 250px;
  background-color: ${({ theme }) => theme.white};
  font-size: 14px;
  color: ${({ theme }) => theme.grey2};
  ${({ isShow }) =>
    isShow &&
    css`
      color: ${({ theme }) => theme.greyLink};
    `}
`;

export const DropdownStyles = { Container, Arrow, Popup, Input };
