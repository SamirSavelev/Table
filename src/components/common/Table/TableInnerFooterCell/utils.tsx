export const getCellProps: (column: any, index: number, isTitle?: boolean) => any = (
  column,
  index,
  isTitle = false
) => {
  const commonStyle = {
    position: index < 3 ? 'sticky' : 'unset',
    zIndex: index < 3 ? 4 : 3,
    display: 'flex',
    alignItems: 'center',
    padding: '10px 16px 12px',
  }

  const titleStyle = {
    ...commonStyle,
    left: 0,
    maxWidth: column.maxWidth,
    minWidth: column.minWidth,
    width: column.width,
  }

  const cellStyle = {
    ...commonStyle,
    left: column.getHeaderProps().style.left,
  }

  const style = isTitle ? titleStyle : cellStyle

  return { style }
}
