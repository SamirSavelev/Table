import Button from "../../Button";
import Logo from "../../Logo";
import { SidebarStyled } from "./styles";
import plus from "../../../assets/plus.svg";
import Image from "next/image";
const SideBar = () => {
  const { Wrapper } = SidebarStyled;
  return (
    <Wrapper>
      <Logo margin="0 0 33px 0" />
      <Button add>
        <Image src={plus} width="20px" height="20px" alt="Logo" />
      </Button>
    </Wrapper>
  );
};
export default SideBar;
