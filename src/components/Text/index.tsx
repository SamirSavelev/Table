import styled, { css } from "styled-components";

interface IText {
  margin?: string;
  logo?: boolean;
  main?: boolean;
  white?: boolean;
  extraBold?: boolean;
  bold?: boolean;
  medium?: boolean;
  small?: boolean;
  tableHeader?: boolean;
  withTooltip?: boolean;
}

const Text = styled.div<IText>`
  cursor: default;
  color: ${({ theme, ...props }) =>
    props.main
      ? theme.mainColor
      : props.white
      ? theme.white
      : props.tableHeader
      ? theme.grey2
      : props.withTooltip
      ? theme.tooltipTitle
      : theme.black};
  font-weight: ${({ ...props }) =>
    props.logo || props.extraBold
      ? "700"
      : props.bold || props.tableHeader
      ? "600"
      : "400"};
  font-size: ${({ ...props }) =>
    props.logo
      ? "30px"
      : props.tableHeader
      ? "18px"
      : props.medium
      ? "16px"
      : props.small
      ? "12px"
      : "13px"};
  margin: ${({ margin = 0 }) => margin};
`;

export default Text;
