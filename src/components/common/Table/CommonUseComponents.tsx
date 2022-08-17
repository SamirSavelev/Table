import styled, { css } from "styled-components";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;
  grid-column-gap: 50px;
  align-items: flex-start;
`;

const InputBox = styled.div<{ checkbox?: boolean }>`
  margin-bottom: 30px;
  ${({ checkbox }) =>
    checkbox &&
    css`
      display: flex;
      align-items: center;
      gap: 12px;
    `};
`;
const InputLabel = styled.label`
  font-weight: 600;
  margin-bottom: 12px;
  display: block;
`;
const Row = styled.div<{
  confirm?: boolean;
  gap?: number;
  between?: boolean;
  center?: boolean;
  fullWidth?: boolean;
  noMb?: boolean;
}>`
  display: flex;
  align-items: center;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "initial")};
  column-gap: ${({ gap }) => (typeof gap === "number" ? gap : 25)}px;
  margin-bottom: ${({ confirm, noMb }) =>
    noMb ? 0 : confirm ? "25px" : "10px"};
  justify-content: ${({ between, center }) =>
    between ? "space-between" : center ? "center" : "initial"};
  white-space: pre-wrap;
`;

type TColumn = {
  gap?: number;
  centered?: boolean;
  fullWidth?: boolean;
};

const Column = styled.div<TColumn>`
  display: flex;
  flex-direction: column;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "initial")};
  align-items: ${({ centered }) => (centered ? "center" : "unset")};
  justify-content: ${({ centered }) => (centered ? "center" : "unset")};
  row-gap: ${({ gap }) => `${gap}px`};
`;
const RowWithButton = styled(Row)<{ start?: boolean }>`
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "space-between")};
`;
const Gray = styled.div<{ red?: boolean }>`
  color: #c1c1c1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  > *:hover {
    color: ${({ theme, ...props }) => (props.red ? theme.red : theme.black)};
  }
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  align-items: center;
`;

const WidthWrapper = styled.div<{ max: number }>`
  max-width: ${({ max }) => max}px;
`;

const Checkbox = styled.label<{ disabled?: boolean }>`
  display: flex;
  gap: 12px;
  align-items: center;
  font-weight: 600;
  margin-bottom: 12px;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
`;
export const CommonComponents = {
  InputLabel,
  Checkbox,
  InputBox,
  Row,
  RowWithButton,
  Column,
  Gray,
  Buttons,
  GridWrapper,
  WidthWrapper,
};
