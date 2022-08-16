import Text from "../../Text";
import Ava from "./components/Ava";
import LogOut from "./components/LogOut";
import { UserStyles } from "./styles";

const { Container } = UserStyles;
const User = () => {
  return (
    <Container>
      <Text main>Менеджер</Text>
      <Ava />
      <LogOut />
    </Container>
  );
};

export default User;
