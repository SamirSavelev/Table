import styled, { css } from "styled-components";
import Text from "../../Text";

const Container = styled.section`
  width: 100%;
  padding: 0;
  background-color: ${({ theme }) => theme.white};
  border-radius: 2px;
  box-sizing: border-box;
  max-width: 1100px;
  padding: 0 10px 0 10px;
`;

const Header = styled(Text)`
  font-weight: 600;
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 17px;
  color: ${({ theme }) => theme.grey2};
`;
export const TableStyles = { Container, Header };
