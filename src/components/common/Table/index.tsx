import { FC } from "react";
import { UseComponents } from "../../../../styles/useComponents";
import { ITable } from "../../interfaces";
import Text from "../../Text";
import Dropdown from "../Dropdown";
import { ports, statuses } from "../Dropdown/config";
import { TableStyles } from "./styles";

const { Row } = UseComponents;
const { Container, Header } = TableStyles;

const Table: FC<ITable> = ({ title }) => {
  return (
    <Container>
      <Header>
        <Text tableHeader>{title}</Text>
      </Header>
      <Row gap="10px" flexStart>
        <Dropdown
          menuItems={ports}
          big
          id="port"
          header="Порт назначения"
          tooltip="Выберите порт назначения"
        />
        <Dropdown
          menuItems={statuses}
          id="status"
          header="Статус"
          tooltip="Выберите cтатус"
        />
      </Row>
    </Container>
  );
};

export default Table;
