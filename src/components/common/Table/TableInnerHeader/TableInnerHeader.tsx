import theme from "../../../../../styles/light";
import { TableInnerHeaderGroup } from "./TableInnerHeaderGroup/TableInnerHeaderGroup";

type Props = {
  totalColumnsWidth: number;
  headerGroups: [any];
};

export const TableInnerHeader: React.FC<Props> = ({
  totalColumnsWidth,
  headerGroups,
}) => {
  return (
    <div className="header">
      <div
        style={{
          width: totalColumnsWidth,
          borderRadius: "10px",
          backgroundColor: theme.white,
        }}
      >
        {headerGroups.map((headerGroup: any, index) => (
          <TableInnerHeaderGroup key={index} headerGroup={headerGroup} />
        ))}
      </div>
    </div>
  );
};
