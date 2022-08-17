import theme from "../../../../../styles/light";
import { TableInnerHeaderGroup } from "./TableInnerHeaderGroup/TableInnerHeaderGroup";

type Props = {
  totalColumnsWidth: number;
  headerGroups: [any];
  grayHeader?: boolean;
};

export const TableInnerHeader: React.FC<Props> = ({
  totalColumnsWidth,
  headerGroups,
  grayHeader,
}) => {
  return (
    <div className="header">
      <div
        style={{
          width: totalColumnsWidth,
          borderRadius: grayHeader ? 0 : "10px",
          backgroundColor: grayHeader ? theme.green2 : theme.white,
        }}
      >
        {headerGroups.map((headerGroup: any, index) => (
          <TableInnerHeaderGroup key={index} headerGroup={headerGroup} />
        ))}
      </div>
    </div>
  );
};
