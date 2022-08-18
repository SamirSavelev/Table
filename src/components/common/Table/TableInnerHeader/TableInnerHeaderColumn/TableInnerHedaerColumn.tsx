import SortedIcon from "../../components/SortedIcon";

type Props = {
  column: any;
  last: boolean;
};

const columnStyle = {
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
};

export const TableInnerHeaderColumn: React.FC<Props> = ({ column, last }) => {
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
