import { ITableInnerHeaderColumn } from "@interfaces";
import SortedIcon from "../../components/SortedIcon";

const columnStyle = {
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
};

export const TableInnerHeaderColumn: React.FC<ITableInnerHeaderColumn> = ({
  column,
  last,
}) => {
  return (
    <div {...column.getHeaderProps({ style: columnStyle })} className="th">
      <div {...column.getSortByToggleProps()}>
        <div>{column.render("Header")}</div>
      </div>
      {!last && (
        <div
          {...column.getResizerProps()}
          className={`resizer ${column.isResizing ? "isResizing" : ""}`}
        />
      )}
      {column.render("Header")?.props?.children && (
        <SortedIcon
          isSorted={column.isSorted}
          isSortedDesc={column.isSortedDesc}
        />
      )}
    </div>
  );
};
