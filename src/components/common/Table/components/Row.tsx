import styled from "styled-components";
import { UseComponents } from "../../../../../styles/useComponents";
import Text from "../../../Text";

const { Row } = UseComponents;

const RowExpander = ({ title, children }) => {
  return (
    <Wrapper>
      <Text>{title}</Text>
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
