import { FC } from "react";
import Image from "next/image";
import search from "@assets/search.svg";
import { IGlobalFilter } from "@interfaces";
import { InputSearchStyles } from "./styles";
import { useState } from "react";
import { useEffect } from "react";

const { Input, InputContainer } = InputSearchStyles;

const InputSearch: FC<IGlobalFilter> = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) => {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const inputFilterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(e.target.value);
    setValue(e.target.value);
  };

  useEffect(() => {
    !globalFilter && setValue("");
  }, [globalFilter]);

  return (
    <InputContainer>
      <Image src={search} alt="search" />
      <Input
        value={value}
        placeholder={`${count} сообщений...`}
        onChange={inputFilterHandler}
      />
    </InputContainer>
  );
};

export default InputSearch;
