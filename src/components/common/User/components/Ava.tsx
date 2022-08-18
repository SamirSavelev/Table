import Text from "../../../Text";
import { UserComponentsStyles } from "./styles";

const { Ellipse } = UserComponentsStyles;

const Ava = () => {
  return (
    <Ellipse onClick={() => console.log("Аватар")}>
      <Text white medium extraBold>
        ИИ
      </Text>
    </Ellipse>
  );
};

export default Ava;
