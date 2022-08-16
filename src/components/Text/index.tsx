import styled, { css } from "styled-components";

interface IText {
  margin?: string;
  logo?: boolean;
}

const Text = styled.div<IText>`
  cursor: default;
  color: ${({ theme, ...props }) => theme.black};
  font-weight: ${({ ...props }) => (props.logo ? "700" : "400")};
  font-size: ${({ ...props }) => (props.logo ? "30px" : "13px")};
  margin: ${({ margin = 0 }) => margin};
`;

export default Text;
