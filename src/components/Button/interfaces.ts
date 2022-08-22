import { ReactNode } from "react";

export interface IButton {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
