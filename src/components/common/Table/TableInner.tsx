import { ITableInner } from "@interfaces";
import { ROW_HEIGHT } from "./utils";
import { TableInnerHeader } from "./TableInnerHeader/TableInnerHeader";
import Text from "@components/Text";

export const TableInner: React.FC<ITableInner> = ({
  totalColumnsWidth,
  headerGroups,
  footerGroups,
  rows,
  children,
  getTableBodyProps,
  style,
  ...rest
}) => {
  const height = ROW_HEIGHT * (rows.length - 1);

  return (
    <>
      <TableInnerHeader
        totalColumnsWidth={totalColumnsWidth}
        headerGroups={headerGroups}
      />
      <div className="body">
        <div {...getTableBodyProps()} {...rest} style={{ height }}>
          {children}
          {!rows.length && (
            <Text tableHeader medium centered>
              К сожалению данные не найдены. Попробуйте задать другие параметры
              поиска
            </Text>
          )}
        </div>
      </div>
    </>
  );
};
