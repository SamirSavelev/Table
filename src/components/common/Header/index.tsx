import InputSearch from "../../InputSearch";
import User from "../User";
import { HeaderStyles } from "./styles";

const { Container } = HeaderStyles;

const Header = () => {
  return (
    <Container>
      <InputSearch />
      <User />
    </Container>
  );
};

export default Header;
