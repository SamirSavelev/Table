import styled, { css } from "styled-components";

interface IText {
  margin?: string;
  logo?: boolean;
  main?: boolean;
  white?: boolean;
  bold?: boolean;
  medium?: boolean;
}

const Text = styled.div<IText>`
  cursor: default;
  color: ${({ theme, ...props }) =>
    props.main ? theme.mainColor : props.white ? theme.white : theme.black};
  font-weight: ${({ ...props }) => (props.logo ? "700" : "400")};
  font-size: ${({ ...props }) =>
    props.logo ? "30px" : props.medium ? "16px" : "13px"};
  margin: ${({ margin = 0 }) => margin};
  width: ${({ ...props }) => (props.bold ? "600" : "400")};
`;

export default Text;
