import { getCellProps } from "./utils";

type Props = {
  column: any;
  index: number;
  data: any[];
};

export const TableInnerFooterCell: React.FC<Props> = ({
  column,
  index,
  data,
}) => {
  const isTitle = index == 0;

  const value = data[column.Header];

  if (isTitle) {
    const cellProps = getCellProps(column, index, true);

    return (
      <div data-sticky-td="true" {...column.getFooterProps(cellProps)}>
        {value}
      </div>
    );
  }

  const cellProps = getCellProps(column, index);

  const lastSticky = index === 2 ? { "data-sticky-last-left-td": true } : "";

  return (
    <div
      data-sticky-td={`${index < 3}`}
      {...lastSticky}
      {...column.getFooterProps(cellProps)}
    >
      {value}
    </div>
  );
};
