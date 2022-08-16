import InputSearch from "../../InputSearch";
import { HeaderStyles } from "./styles";

const { Container } = HeaderStyles;

const Header = () => {
  return (
    <Container>
      <InputSearch />
    </Container>
  );
};

export default Header;
