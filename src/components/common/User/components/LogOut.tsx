import Image from "next/image";
import Text from "../../../Text";
import { UserComponentsStyles } from "./styles";
import logout from "../../../../assets/logout.svg";
const { Ellipse } = UserComponentsStyles;

const LogOut = () => {
  return (
    <Ellipse onClick={() => console.log("Выйти")}>
      <Image src={logout} alt="logout" height={24} width={24} />
    </Ellipse>
  );
};

export default LogOut;
