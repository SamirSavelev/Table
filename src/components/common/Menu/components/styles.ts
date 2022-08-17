import styled from "styled-components";
import Button from "../../../Button";
import Text from "../../../Text";

const Item = styled(Button)`
  display: flex;
  flex-direction: row;
  padding: 15px 0px 15px 20px;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  &:hover {
    background: ${({ theme }) => theme.lightGreyHover};
    border-radius: 10px;
  }
`;

const Title = styled(Text)`
  text-align: left;
  font-weight: 600;
  font-size: 13px;
  color: ${({ theme }) => theme.grey};
  cursor: pointer;
  text-transform: uppercase;
  line-height: 18px;
  white-space: pre-wrap;
`;

export const StyledMenuItem = { Item, Title };
