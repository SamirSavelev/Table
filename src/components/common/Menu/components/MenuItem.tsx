import Image from "next/image";
import { FC } from "react";
import { IMenuItem } from "../../../interfaces";
import { StyledMenuItem } from "./styles";

const { Item, Title } = StyledMenuItem;

const MenuItem: FC<IMenuItem> = ({ children, img, onClick }) => {
  return (
    <Item onClick={onClick}>
      <Image src={img} alt={children?.toString()} height={24} width={24} />
      <Title>{children}</Title>
    </Item>
  );
};

export default MenuItem;
