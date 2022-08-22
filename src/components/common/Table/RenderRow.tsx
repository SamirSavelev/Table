import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import theme from "../../../../styles/light";
import { selectOpenedRows } from "../../../features/table/table-api-slice";
import { useAppSelector } from "../../../hooks";
import Text from "../../Text";
import Expander from "./components/Expander";
import { ROW_HEIGHT, StyledTr } from "./utils";

type Props = {
  index: number;
  style: any;
  prepareRow: any;
  rows: any;
  visibleColumns: any;
};

export const RenderRow: React.FC<Props> = ({
  index,
  style,
  prepareRow,
  rows,
  visibleColumns,
}) => {
  const row = rows[index];
  const indexRow = row.index;
  const isExpanded = row.isExpanded;
  const [counter, setCounter] = useState(0);
  const openedRow = useAppSelector((state) => selectOpenedRows(state));
  prepareRow(row);
  const { style: rowStyle, ...restRow } = row?.getRowProps({ style });
  const top = (ROW_HEIGHT + 1) * index;

  const topFactor = openedRow
    .map((row) => row < indexRow)
    .filter((item) => item).length;

  const shiftRowsStyles = openedRow.length
    ? rowStyle.top + 1000 * topFactor
    : rowStyle.top;
  const rowStyleOpen = { ...rowStyle, top: shiftRowsStyles };

  return (
    <>
      <div {...row.getToggleRowExpandedProps()}>
        <div
          {...restRow}
          className="tr"
          style={{
            ...rowStyleOpen,
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
      {isExpanded ? (
        <StyledTr top={top}>
          <td colSpan={visibleColumns.length}>
            <Expander data={row.original} />
          </td>
        </StyledTr>
      ) : null}
    </>
  );
};
