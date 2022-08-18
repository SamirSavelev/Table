import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import theme from "../../../../styles/light";
import { ROW_HEIGHT } from "./utils";

type Props = {
  data: any;
  index: number;
  style: any;
  prepareRow: any;
  rows: any;
};

export const RenderRow: React.FC<Props> = ({
  index,
  style,
  prepareRow,
  rows,
  visibleColumns,
  renderRowSubComponent,
  openRow,
  setOpenRow,
}) => {
  const [opRow, setOpRow] = useState();
  const row = rows[index];
  prepareRow(row);

  const { style: rowStyle, ...restRow } = row?.getRowProps({ style });
  const top = 16 + ROW_HEIGHT * index;

  const i = row?.index;
  const isShiftRow = openRow < row.index;

  if (row.isExpanded) {
    setOpRow(i);
  }

  const shiftRowsStyles = isShiftRow ? rowStyle.top + 200 : rowStyle.top;
  const rowStyleOpen = { ...rowStyle, top: shiftRowsStyles };
  return (
    <>
      <div
        {...restRow}
        className="tr"
        style={{ ...rowStyleOpen, width: "auto", background: theme.white }}
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
            {renderRowSubComponent({ row })}
          </td>
        </StyledTr>
      ) : null}
    </>
  );
};

const StyledTr = styled.tr<{ top?: number }>`
  z-index: 9999999;
  background-color: red;
  height: 200px;
  position: relative;
  top: ${({ top }) => top && `${top}px`};
`;
