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
  clickable?: boolean;
  description?: boolean;
  centered?: boolean;
  disabled?: boolean;
}

const Text = styled.div<IText>`
  cursor: default;
  color: ${({ theme, ...props }) =>
    props.main
      ? theme.mainColor
      : props.white
      ? theme.white
      : props.tableHeader
      ? theme.greyHover
      : props.withTooltip
      ? theme.tooltipTitle
      : props.disabled
      ? theme.textDarkGrey
      : theme.black};
  font-weight: ${({ ...props }) =>
    props.logo || props.extraBold ? "700" : props.bold ? "600" : "400"};
  font-size: ${({ ...props }) =>
    props.logo
      ? "30px"
      : props.medium
      ? "16px"
      : props.small
      ? "12px"
      : "13px"};
  margin: ${({ margin }) => (margin ? margin : 0)};
  ${({ clickable }) =>
    clickable &&
    css`
      cursor: pointer;
    `};
  ${({ description }) =>
    description &&
    css`
      font-weight: 400;
      font-size: 13px;
      line-height: 18px;
      color: ${({ theme }) => theme.textBlack};
    `};
  ${({ centered }) =>
    centered &&
    css`
      text-align: center;
    `};
`;

export default Text;
