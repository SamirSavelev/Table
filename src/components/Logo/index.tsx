import { FC } from "react";
import Text from "../Text";

interface ILogoProps {
  margin?: string;
}
const Logo: FC<ILogoProps> = ({ margin }) => {
  return (
    <>
      <Text logo margin={margin}>
        LOGO
      </Text>
    </>
  );
};

export default Logo;
