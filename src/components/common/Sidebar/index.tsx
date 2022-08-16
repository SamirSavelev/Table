import Logo from "../../Logo";
import { SidebarStyled } from "./styles";

const SideBar = () => {
  const { Wrapper } = SidebarStyled;
  return (
    <Wrapper>
      <Logo margin="0 0 33px 0" />
    </Wrapper>
  );
};
export default SideBar;
