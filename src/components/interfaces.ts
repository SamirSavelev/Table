import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface IMenuItem {
  children: ReactNode;
  img: StaticImageData;
  onClick: any;
}

export interface ITable {
  title: string;
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
