import styled from "styled-components";
import theme from "../../../../styles/light";

type Props = {
  data: any;
  index: number;
  style: any;
  prepareRow: any;
  rows: any;
  grayHeader?: boolean;
  plusMunisModal?: boolean;
};

export const RenderRow: React.FC<Props> = ({
  index,
  style,
  prepareRow,
  rows,
  grayHeader,
  plusMunisModal,
  visibleColumns,
  renderRowSubComponent,
}) => {
  const row = rows[index];

  prepareRow(row);

  const { style: rowStyle, ...restRow } = row?.getRowProps({ style });
  const bgTable = index % 2 ? "#f9f9f9" : theme.white;
  const bgPlusMinusTable = theme.white;
  const background = plusMunisModal ? bgPlusMinusTable : bgTable;
  return (
    <>
      <div
        {...restRow}
        className="tr"
        style={{ ...rowStyle, width: "auto", background: background }}
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
        <StyledTr>
          <td colSpan={visibleColumns.length}>
            {renderRowSubComponent({ row })}
          </td>
        </StyledTr>
      ) : null}
    </>
  );
};

const StyledTr = styled.tr`
  z-index: 9999999;
  position: relative;
  top: 0; ;
`;
