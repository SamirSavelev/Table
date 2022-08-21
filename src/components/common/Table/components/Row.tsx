import styled from "styled-components";
import { CommonUseComponents } from "../../../../../styles/CommonUseComponents";
import Text from "../../../Text";

const { Row } = CommonUseComponents;

const RowExpander = ({ title, children }) => {
  return (
    <Wrapper>
      <Text disabled>{title}</Text>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-row: 50px;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;
export default RowExpander;
