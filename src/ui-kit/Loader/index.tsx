import Text from "@components/Text";
import { CommonUseComponents } from "@styles";
import Spinner from "../Spinner";

const { Column } = CommonUseComponents;

const Loader = () => {
  return (
    <Column gap="20" margin="auto auto">
      <Text big medium centered>
        Пожалуйста подождите..
      </Text>
      <Spinner />
    </Column>
  );
};

export default Loader;
