import { IFlex } from "./../src/components/interfaces";
import styled from "styled-components";

const Row = styled.div<IFlex>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ ...props }) =>
    props.flexStart
      ? "flex-start"
      : props.spaceBetween
      ? "space-between"
      : "center"};
  gap: ${({ gap }) => (gap ? gap : 0)};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "stretch")};
`;

const Column = styled.div<IFlex>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ ...props }) =>
    props.flexStart
      ? "flex-start"
      : props.spaceBetween
      ? "space-between"
      : "center"};
  gap: ${({ gap }) => (gap ? gap : 0)};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "stretch")};
`;

const Clickable = styled.button`
  cursor: pointer;
  padding: 0;
  width: max-content;
`;
export const UseComponents = { Row, Column, Clickable };
