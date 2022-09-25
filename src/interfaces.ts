import { Dispatch, ReactNode } from "react";
import { Row } from "react-table";
import { CSSProperties } from "styled-components";
import { StaticImageData } from "next/image";
export interface IPost {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface IStyles {
  height: number;
  left: number;
  position: string;
  right: number | undefined;
  top: number;
  width: string;
}
export interface IPagination {
  pageSize: number;
  setPageSize: Dispatch<number>;
  previousPage: () => void;
  gotoPage: (page: number) => void;
  pageIndex: number;
  nextPage: () => void;
}

export interface IRenderRow {
  index: number;
  style: CSSProperties;
  prepareRow: (row: Row) => void;
  rows: Array<any>;
  data?: any;
  setData?: Dispatch<any>;
  selectedRows?: Array<string>;
  setSelectedRows?: Dispatch<Array<string>>;
}

export interface IGlobalFilter {
  preGlobalFilteredRows: Array<any>;
  globalFilter: string;
  setGlobalFilter: Dispatch<string>;
}

export interface ILayout {
  children: ReactNode;
}

export interface IFlex {
  flexStart?: boolean;
  spaceBetween?: boolean;
  gap?: string;
  alignItems?: string;
  margin?: string;
  padding?: string;
}

export interface IToolTips {
  children: ReactNode;
  toolTip: string | ReactNode;
  id?: string;
}

export interface IText {
  margin?: string;
  logo?: boolean;
  main?: boolean;
  white?: boolean;
  extraBold?: boolean;
  bold?: boolean;
  medium?: boolean;
  small?: boolean;
  tableHeader?: boolean;
  withTooltip?: boolean;
  clickable?: boolean;
  description?: boolean;
  centered?: boolean;
  disabled?: boolean;
  big?: boolean;
}

export interface IDropdown {
  id: string;
  header: string;
  tooltip: string;
  data: Array<IPost>;
  value: any;
  setValue: any;
  fullWidth?: boolean;
}

export interface IModalContent {
  edit?: IPost;
  data: Array<IPost>;
  setData: Dispatch<Array<IPost>>;
}

export interface IModalState {
  isOpen: boolean;
  content: ReactNode | null;
}

export interface ISpinner {
  size?: number;
  color?: string;
}

export interface IMenuItem {
  children: ReactNode;
  img: StaticImageData;
  onClick: any;
}

export interface ITableInnerHeaderGroup {
  headerGroup: any;
}

export interface ITableInnerHeaderColumn {
  column: any;
  last: boolean;
}
export interface IDropdownItem {
  children: ReactNode;
  onClick: any;
}

export interface IButton {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: string;
  children?: ReactNode;
  add?: boolean;
  back?: boolean;
  stretch?: boolean;
  big?: boolean;
  confirm?: boolean;
  border?: boolean;
  noPadding?: boolean;
  small?: boolean;
  redBorder?: boolean;
  shadow?: boolean;
}

export interface ITableInner {
  totalColumnsWidth: any;
  headerGroups: any;
  footerGroups: any;
  rows: any;
  children: any;
  style: any;
  getTableBodyProps: any;
  grayHeader?: boolean;
}

export interface ITable {
  header: string;
  columns: any;
  data: any;
}

export interface IScrollCallback {
  element: any;
  callback: any;
  callbackForScroll: any;
}
