import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface IMenuItem {
  children: ReactNode;
  img: StaticImageData;
  onClick: any;
}
