import { ITableInnerHeaderGroup } from "@interfaces";
import { TableInnerHeaderColumn } from "../TableInnerHeaderColumn/TableInnerHedaerColumn";

export const TableInnerHeaderGroup: React.FC<ITableInnerHeaderGroup> = ({
  headerGroup,
}) => {
  return (
    <div
      {...headerGroup.getHeaderGroupProps({ style: { display: "flex" } })}
      className="tr"
    >
      {headerGroup.headers.map((column: any, index: number) => (
        <TableInnerHeaderColumn
          last={index === headerGroup.headers.length - 1}
          column={column}
          key={index}
        />
      ))}
    </div>
  );
};
