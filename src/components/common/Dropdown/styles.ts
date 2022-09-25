import styled, { css } from "styled-components";
import { CommonUseComponents } from "../../../../styles/CommonUseComponents";
import Button from "../../Button";

const { Row } = CommonUseComponents;

const Container = styled(Row)<{ isModalDrowDown?: boolean }>`
  background: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.lightGrey3};
  border-radius: 8px;
  width: ${({ isModalDrowDown }) => (isModalDrowDown ? "400px" : "250px")};
  height: 62px;
  padding: 9px 13px;
  cursor: pointer;
`;

const Arrow = styled.div<{ rotate?: boolean }>`
  transition: 0.2s ease-out;
  ${({ rotate }) =>
    rotate &&
    css`
      transform: rotate(0.5turn);
    `}
`;

const Popup = styled.div<{ id?: string; isModalDrowDown?: boolean }>`
  position: absolute;
  top: ${({ isModalDrowDown }) => (isModalDrowDown ? "130px" : "102px")};
  width: ${({ isModalDrowDown }) => (isModalDrowDown ? "400px" : "250px")};
  height: 221px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px 5px 18px rgba(40, 41, 61, 0.07);
  border-radius: 8px;
  overflow-y: scroll;
  z-index: 9;
`;

const Input = styled.input<{ isShow?: boolean; id?: string }>`
  cursor: pointer;
  width: 180px;
  background-color: ${({ theme }) => theme.white};
  font-size: 14px;
  color: ${({ theme }) => theme.grey2};
  ${({ isShow }) =>
    isShow &&
    css`
      color: ${({ theme }) => theme.greyLink};
    `}
`;

export const DropdownStyles = {
  Container,
  Arrow,
  Popup,
  Input,
};
