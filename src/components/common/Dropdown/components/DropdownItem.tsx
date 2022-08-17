import { FC } from "react";
import { IDropdownItem } from "../../../interfaces";
import Text from "../../../Text";
import { DropdownItemStyles } from "./styles";

const { Container } = DropdownItemStyles;
const DropdownItem: FC<IDropdownItem> = ({ children, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Text small>{children}</Text>
    </Container>
  );
};

export default DropdownItem;
