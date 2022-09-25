import { Cell } from "react-table";
import { FiX } from "react-icons/fi";
import Text from "@components/Text";

export const columns = (
  data: Array<any>,
  setData: any,
  deletePost: any,
  refetch: any
) => {
  const deleteRow = async (e: any, cell: Cell) => {
    e.stopPropagation();
    await deletePost(cell?.row?.original?.id)
      .unwrap()
      .then(() => {
        refetch();
        // Так как данные моковые, рефетч не работает, поэтому удаление вручную
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
      accessor: "id",
      minWidth: 50,
      width: 50,
      Header: (
        <Text tableHeader clickable>
          id
        </Text>
      ),
      Cell: ({ cell }: { cell: Cell }) => (
        <Text margin="auto auto">{cell.value}</Text>
      ),
    },
    {
      accessor: "userId",
      minWidth: 150,
      width: 150,
      Header: (
        <Text tableHeader clickable>
          Пользователь
        </Text>
      ),
      Cell: ({ cell }: { cell: Cell }) => (
        <Text margin="auto auto">{cell.value}</Text>
      ),
    },

    {
      accessor: "title",
      minWidth: 300,
      width: 300,
      Header: (
        <Text tableHeader clickable>
          Заголовок
        </Text>
      ),
      Cell: ({ cell }: { cell: Cell }) => <Text>{cell.value}</Text>,
    },
    {
      Header: (
        <Text tableHeader clickable>
          Сообщение
        </Text>
      ),
      accessor: "body",
      minWidth: 795,
      width: 795,
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
