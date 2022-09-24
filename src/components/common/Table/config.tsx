import { Cell } from "react-table";
import Text from "../../Text";

export const columns = [
  {
    accessor: "userId",
    minWidth: 100,
    width: 100,
    Header: (
      <Text tableHeader clickable>
        userId
      </Text>
    ),
    Cell: ({ cell }: { cell: Cell }) => <Text>{cell.value}</Text>,
    Filter: "number",
  },
  {
    accessor: "id",
    minWidth: 75,
    width: 75,
    Header: (
      <Text tableHeader clickable>
        id
      </Text>
    ),
    Cell: ({ cell }: { cell: Cell }) => <Text>{cell.value}</Text>,
  },
  {
    accessor: "title",
    minWidth: 300,
    width: 300,
    Header: (
      <Text tableHeader clickable>
        title
      </Text>
    ),
    Cell: ({ cell }: { cell: Cell }) => <Text>{cell.value}</Text>,
  },
  {
    Header: (
      <Text tableHeader clickable>
        body
      </Text>
    ),
    accessor: "body",
    minWidth: 800,
    width: 800,
    Cell: ({ cell }: { cell: Cell }) => <Text>{cell.value}</Text>,
  },
];
