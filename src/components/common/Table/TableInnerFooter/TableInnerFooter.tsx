import { TableInnerFooterGroup } from '../TableInnerFooterGroup/TableInnerFooterGroup'

type Props = {
  footerGroups: any
  footerData: any[]
}

export const TableInnerFooter: React.FC<Props> = ({ footerGroups, footerData }) => {
  return (
    <div className="footer" style={{ top: 338 }}>
      {footerData.map(data =>
        footerGroups.map((group: any, index: number) => <TableInnerFooterGroup data={data} key={index} group={group} />)
      )}
    </div>
  )
}
