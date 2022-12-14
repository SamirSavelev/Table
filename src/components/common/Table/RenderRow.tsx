import { Cell } from "react-table";
import { useAppDispatch } from "@hooks";
import { showModal } from "@features/modal/modal-slice";
import ModalContent from "@components/Modal/Content";
import { IRenderRow } from "@interfaces";
import theme from "styles/light";

export const RenderRow: React.FC<IRenderRow> = ({
  index,
  style,
  prepareRow,
  rows,
  data,
  setData,
}) => {
  const dispatch = useAppDispatch();

  const row = rows[index];

  prepareRow(row);

  const { style: rowStyle, ...restRow } = row?.getRowProps({ style });

  const content = (
    <ModalContent edit={row?.original} data={data} setData={setData} />
  );

  const editPost = (cell: Cell) => {
    if (!cell?.value) return;
    dispatch(
      showModal({
        content,
      })
    );
  };

  return (
    <>
      <div {...row.getToggleRowExpandedProps()}>
        <div
          {...restRow}
          className="tr"
          style={{
            ...rowStyle,
            width: "auto",
            background: theme.white,
            cursor: "pointer",
          }}
          onClick={editPost}
        >
          {row.cells.map((cell: any, cellIndex: number) => {
            return (
              <div
                key={cellIndex}
                {...cell.getCellProps()}
                className="td"
                onClick={() => editPost(cell)}
              >
                {cell.render("Cell", {
                  cell,
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
