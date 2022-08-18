import { TableInnerHeader } from "./TableInnerHeader/TableInnerHeader";
import { ROW_HEIGHT } from "./utils";

type Props = {
  totalColumnsWidth: any;
  headerGroups: any;
  footerGroups: any;
  rows: any;
  children: any;
  style: any;
  getTableBodyProps: any;

  grayHeader?: boolean;
};

export const TableInner: React.FC<Props> = ({
  totalColumnsWidth,
  headerGroups,
  footerGroups,
  rows,
  children,
  getTableBodyProps,
  style,
  grayHeader,
  ...rest
}) => {
  const height = ROW_HEIGHT * (rows.length - 1);
  return (
    <>
      <TableInnerHeader
        totalColumnsWidth={totalColumnsWidth}
        grayHeader={grayHeader}
        headerGroups={headerGroups}
      />
      <div className="body">
        <div {...getTableBodyProps()} {...rest} style={{ height }}>
          {children}
        </div>
      </div>
    </>
  );
};
