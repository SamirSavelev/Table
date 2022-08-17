import { ReactNode } from "react";

export interface IButton {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  add?: boolean;
  back?: boolean;
}
