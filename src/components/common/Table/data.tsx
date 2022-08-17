import { Cell, Row } from "react-table";
import Text from "../../Text";

export const tableData = [
  {
    number: 2887,
    type: "Контейнер",
    order: 4329,
    sender: "ООО “Компания”",
    certificate: "25499-Т",
    consignment: "440038990",
    receipt_date: "29.06.2021",
  },
  {
    number: 2886,
    type: "Генеральный груз",
    order: 4329,
    sender: "ООО “Компания”",
    certificate: "25499-Т",
    consignment: "440038990",
    receipt_date: "29.06.2021",
  },
  {
    number: 2885,
    type: "Контейнер",
    order: 3257,
    sender: "ООО “Новый век”",
    certificate: "25499-Т",
    consignment: "440038990",
    receipt_date: "29.06.2021",
  },
  {
    number: 2884,
    type: "Генеральный груз",
    order: 3257,
    sender: "ООО “Новый век”",
    certificate: "25499-Т",
    consignment: "440038990",
    receipt_date: "29.06.2021",
  },
  {
    number: 2883,
    type: "Контейнер",
    order: 4329,
    sender: "ООО “Компания”",
    certificate: "25499-Т",
    consignment: "440038990",
    receipt_date: "29.06.2021",
  },
  {
    number: 2882,
    type: "Генеральный груз",
    order: 4329,
    sender: "ООО “Компания”",
    certificate: "25499-Т",
    consignment: "440038990",
    receipt_date: "29.06.2021",
  },
  {
    number: 2881,
    type: "Контейнер",
    order: 3257,
    sender: "ООО “Новый век”",
    certificate: "25499-Т",
    consignment: "440038990",
    receipt_date: "29.06.2021",
  },
];
export const columns = [
  {
    accessor: "number",
    minWidth: 132,
    width: 132,
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
    minWidth: 180,
    width: 180,
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
    minWidth: 185,
    width: 185,
    Header: (
      <Text tableHeader clickable>
        Номер приемного акта
      </Text>
    ),
    Cell: ({ cell }: { cell: Cell }) => <Text>{cell.value}</Text>,
  },
  {
    accessor: "consignment",
    minWidth: 270,
    width: 270,
    Header: (
      <Text tableHeader clickable>
        Номер транспортной/ЖД накладной
      </Text>
    ),
    Cell: ({ cell }: { cell: Cell }) => <Text>{cell.value}</Text>,
  },
  {
    accessor: "receipt_date",
    minWidth: 200,
    width: 200,
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
    Cell: ({ row }: { row: Row }) => (
      <span {...row.getToggleRowExpandedProps()}>
        {row.isExpanded ? "👇" : "👉"}
      </span>
    ),
  },
];
