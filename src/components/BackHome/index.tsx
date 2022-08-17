import Image from "next/image";
import backIcon from "../../assets/back.svg";
import Button from "../Button";

const BackHome = () => {
  return (
    <Button back onClick={() => console.log("Вернуться на главную")}>
      <Image src={backIcon} width={4} height={8} alt="back" />
      Вернуться на главную
    </Button>
  );
};

export default BackHome;
