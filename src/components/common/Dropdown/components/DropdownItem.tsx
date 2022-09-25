import { FC } from "react";
import Text from "@components/Text";
import { DropdownItemStyles } from "./styles";
import { IDropdownItem } from "@interfaces";

const { Container } = DropdownItemStyles;

const DropdownItem: FC<IDropdownItem> = ({ children, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Text small>{children}</Text>
    </Container>
  );
};

export default DropdownItem;
