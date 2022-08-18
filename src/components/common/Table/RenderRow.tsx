import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import theme from "../../../../styles/light";
import Expander from "./components/Expander";
import { ROW_HEIGHT, StyledTr } from "./utils";

type Props = {
  data: any;
  index: number;
  style: any;
  prepareRow: any;
  rows: any;
  visibleColumns: any;
  openRow: number | null;
  setOpenRow: any;
};

export const RenderRow: React.FC<Props> = ({
  index,
  style,
  prepareRow,
  rows,
  visibleColumns,
  openRow,
  setOpenRow,
}) => {
  const row = rows[index];
  prepareRow(row);

  const { style: rowStyle, ...restRow } = row?.getRowProps({ style });
  const top = 14 + ROW_HEIGHT * index;

  if (row.isExpanded) {
    setOpenRow(row.index);
  }

  const isShiftRow = openRow !== null && openRow < row.index;

  const shiftRowsStyles = isShiftRow ? rowStyle.top + 1000 : rowStyle.top;
  const rowStyleOpen = { ...rowStyle, top: shiftRowsStyles };

  return (
    <>
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
      {row.isExpanded ? (
        <StyledTr top={top}>
          <td colSpan={visibleColumns.length}>
            <Expander data={row.original} />
          </td>
        </StyledTr>
      ) : null}
    </>
  );
};
