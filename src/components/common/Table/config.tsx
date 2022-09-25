import { Cell } from "react-table";
import Text from "../../Text";
import { FiX } from "react-icons/fi";

export const columns = (data: Array<any>, setData: any, deletePost: any) => {
  const deleteRow = async (e: any, cell: Cell) => {
    e.stopPropagation();
    await deletePost(cell?.row?.original?.id)
      .unwrap()
      .then(() => {
        const item = cell?.row?.original;
        const array = [...data];
        const index = array.indexOf(item);
        array.splice(index, 1);
        setData(array);
      })
      .catch(() => {});
  };

  return [
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
    {
      accessor: "delete",
      minWidth: 50,
      width: 50,
      Cell: ({ cell }: { cell: Cell }) => (
        <FiX
          size={18}
          onClick={(e) => {
            deleteRow(e, cell);
          }}
        />
      ),
    },
  ];
};
