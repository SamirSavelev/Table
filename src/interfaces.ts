import { Dispatch, ReactNode } from "react";
import { CSSProperties } from "styled-components";

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
  prepareRow: (row: any) => void;
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
  add?: boolean;
  edit?: IPost;
  data: Array<IPost>;
  setData: Dispatch<Array<IPost>>;
}
