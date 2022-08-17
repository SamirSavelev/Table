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
export interface WithToolTipProps {
  children: ReactNode;
  toolTip: string | ReactNode;
  id?: string;
}

export interface IDropdown {
  big?: boolean;
  id: string;
  header: string;
  tooltip: string;
  menuItems: Array<string>;
}

export interface IFlex {
  flexStart?: boolean;
  spaceBetween?: boolean;
  gap?: string;
  alignItems?: string;
}

export interface IDropdownItem {
  children: ReactNode;
  onClick: any;
}
