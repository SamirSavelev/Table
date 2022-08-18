import Image from "next/image";
import { InputSearchStyles } from "./styles";
import search from "../../assets/search.svg";

const { Input, InputContainer } = InputSearchStyles;
const InputSearch = () => {
  const submitContainer = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value, "e");
  };
  return (
    <InputContainer>
      <Image src={search} alt="search" />
      <Input
        placeholder="Найти коносамент, груз, заказ и др."
        onChange={submitContainer}
      />
    </InputContainer>
  );
};

export default InputSearch;
