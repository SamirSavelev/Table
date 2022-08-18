import { Cell, Row } from "react-table";
import Text from "../../Text";
import ExpandIcon from "./components/ExpandIcon";

export const tableData = [
  {
    status: "Новый",
    number: 2887,
    order: 4329,
    receipt_date: "29.06.2021",
    type: "Контейнер",
    type_container: "40' High Cube",
    sender: "ООО “Компания”",
    certificate: "25499-Т",
    consignment: 440038990,
    manager: {
      name: "Иванов Иван Иванович",
      email: "example@mail.ru",
      phone: "+7(927)777-55-55",
    },
    size: {
      volume: 43.481,
      height: 29.82,
      weight: 5.355,
      length: 12.844,
      width: 3.62,
      freight: 5.355,
    },
    inventory_items: "Опора промежуточная",
    location: "3 скл причал",
    delivery: "Автомобиль",
  },
  {
    status: "Назначен ответственный менеджер",
    number: 2886,
    order: 4329,
    receipt_date: "29.06.2021",
    type: "Генеральный груз",
    type_container: "40' High Cube",
    sender: "ООО “Компания”",
    certificate: "25499-Т",
    consignment: 440038990,
    manager: {
      name: "Иванов Иван Иванович",
      email: "example@mail.ru",
      phone: "+7(927)777-55-55",
    },
    size: {
      volume: 43.481,
      height: 29.82,
      weight: 5.355,
      length: 12.844,
      width: 3.62,
      freight: 5.355,
    },
    inventory_items: "Опора промежуточная",
    location: "3 скл причал",
    delivery: "car",
  },
  {
    number: 2885,
    type: "Контейнер",
    order: 3257,
    sender: "ООО “Новый век”",
    certificate: "25499-Т",
    consignment: "440038990",
    receipt_date: "29.06.2021",
    status: "Расчет стоимости заказа",
  },
  {
    number: 2884,
    type: "Генеральный груз",
    order: 3257,
    sender: "ООО “Новый век”",
    certificate: "25499-Т",
    consignment: "440038990",
    receipt_date: "29.06.2021",
    status: "Рассчитана стоимость заказа",
  },
  {
    number: 2883,
    type: "Контейнер",
    order: 4329,
    sender: "ООО “Компания”",
    certificate: "25499-Т",
    consignment: "440038990",
    receipt_date: "29.06.2021",
    status: "Груз принят в порту отправления",
  },
  {
    number: 2882,
    type: "Генеральный груз",
    order: 4329,
    sender: "ООО “Компания”",
    certificate: "25499-Т",
    consignment: "440038990",
    receipt_date: "29.06.2021",
    status: "Груз размещен на судне",
  },
  {
    number: 2881,
    type: "Контейнер",
    order: 3257,
    sender: "ООО “Новый век”",
    certificate: "25499-Т",
    consignment: "440038990",
    receipt_date: "29.06.2021",
    status: "Новый",
  },
];
export const columns = [
  {
    accessor: "number",
    minWidth: 150,
    width: 150,
    Header: (
      <Text tableHeader clickable>
        Номер груза
      </Text>
    ),
    Cell: ({ cell }: { cell: Cell }) => <Text>{cell.value}</Text>,
  },
  {
    accessor: "type",
    minWidth: 165,
    width: 165,
    Header: (
      <Text tableHeader clickable>
        Тип
      </Text>
    ),
    Cell: ({ cell }: { cell: Cell }) => <Text>{cell.value}</Text>,
  },
  {
    accessor: "order",
    minWidth: 200,
    width: 200,
    Header: (
      <Text tableHeader clickable>
        Закрепленный заказ
      </Text>
    ),
    Cell: ({ cell }: { cell: Cell }) => <Text>{cell.value}</Text>,
  },
  {
    Header: (
      <Text tableHeader clickable>
        Грузоотправитель
      </Text>
    ),
    accessor: "sender",
    minWidth: 160,
    width: 160,
    Cell: ({ cell }: { cell: Cell }) => <Text>{cell.value}</Text>,
  },
  {
    accessor: "certificate",
    minWidth: 200,
    width: 200,
    Header: (
      <Text tableHeader clickable>
        Номер приемного акта
      </Text>
    ),
    Cell: ({ cell }: { cell: Cell }) => <Text>{cell.value}</Text>,
  },
  {
    accessor: "consignment",
    minWidth: 300,
    width: 300,
    Header: (
      <Text tableHeader clickable>
        Номер транспортной/ЖД накладной
      </Text>
    ),
    Cell: ({ cell }: { cell: Cell }) => <Text>{cell.value}</Text>,
  },
  {
    accessor: "receipt_date",
    minWidth: 230,
    width: 230,
    Header: (
      <Text tableHeader clickable>
        Дата поступления в порт
      </Text>
    ),
    Cell: ({ cell }: { cell: Cell }) => <Text>{cell.value}</Text>,
  },
  {
    Header: () => null,
    id: "expander",
    minWidth: 50,
    width: 50,
    Cell: ({ row }: { row: Row }) => (
      <span {...row.getToggleRowExpandedProps()}>
        <ExpandIcon rotate={row.isExpanded} />
      </span>
    ),
  },
];
