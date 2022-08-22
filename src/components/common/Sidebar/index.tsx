import { FC } from "react";
import Image from "next/image";
import { menuConfig } from "./config";
import Button from "../../Button";
import Logo from "../../Logo";
import MenuItem from "../Menu/components/MenuItem";
import { SidebarStyled } from "./styles";
import plus from "../../../assets/plus.svg";
import wave from "../../../assets/menu/wave.svg";

const { part1, part2, part3 } = menuConfig;
const { Wrapper, ButtonContainer, Wave } = SidebarStyled;

const SideBar: FC = () => {
  const add = (e: React.MouseEvent) => {
    console.log("Добавление");
  };

  return (
    <Wrapper>
      <Logo />
      <ButtonContainer>
        <Button add onClick={add} stretch>
          <Image src={plus} width="20px" height="20px" alt="Logo" />
        </Button>
      </ButtonContainer>
      {part1.map((item, index) => {
        return (
          <MenuItem
            key={index}
            onClick={() => console.log(item.title)}
            img={item.image}
          >
            {item.title}
          </MenuItem>
        );
      })}
      <Wave>
        <Image src={wave} alt="" />
      </Wave>
      {part2.map((item, index) => {
        return (
          <MenuItem
            key={index}
            onClick={() => console.log(item.title)}
            img={item.image}
          >
            {item.title}
          </MenuItem>
        );
      })}
      <Wave>
        <Image src={wave} alt="" />
      </Wave>
      {part3.map((item, index) => {
        return (
          <MenuItem
            key={index}
            onClick={() => console.log(item.title)}
            img={item.image}
          >
            {item.title}
          </MenuItem>
        );
      })}
    </Wrapper>
  );
};

export default SideBar;
