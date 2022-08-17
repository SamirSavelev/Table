import { TableInnerFooterCell } from '../TableInnerFooterCell/TableInnerFooterCell'

type Props = {
  group: any
  data: any[]
}

export const TableInnerFooterGroup: React.FC<Props> = ({ group, data }) => {
  return (
    <div {...group.getHeaderGroupProps()} className="tr">
      {group.headers.map((column: any, index: number) => (
        <TableInnerFooterCell data={data} column={column} index={index} key={index} />
      ))}
    </div>
  )
}
