import theme from "../../../../styles/light";
import { IRenderRow } from "../../../interfaces";

export const RenderRow: React.FC<IRenderRow> = ({
  index,
  style,
  prepareRow,
  rows,
}) => {
  const row = rows[index];

  prepareRow(row);

  const { style: rowStyle, ...restRow } = row?.getRowProps({ style });

  return (
    <>
      <div {...row.getToggleRowExpandedProps()}>
        <div
          {...restRow}
          className="tr"
          style={{
            ...rowStyle,
            width: "auto",
            background: row.isExpanded ? "#f9f9f9" : theme.white,
          }}
        >
          {row.cells.map((cell: any, cellIndex: number) => {
            return (
              <div key={cellIndex} {...cell.getCellProps()} className="td">
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
