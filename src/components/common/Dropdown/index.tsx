import { FC, useRef, useState } from "react";
import Image from "next/image";
import "react-day-picker/dist/style.css";
import { useOutsideClick } from "@hooks";
import Text from "@components/Text";
import WithToolTip from "@components/HOCs/WithReactToolTip";
import DropdownItem from "./components/DropdownItem";
import down from "@assets/down.svg";
import { DropdownStyles } from "./styles";
import { CommonUseComponents } from "@styles";
import { IDropdown } from "@interfaces";
import { useMemo } from "react";
import { useEffect } from "react";

const { Container, Arrow, Popup, Input } = DropdownStyles;
const { Column } = CommonUseComponents;

const Dropdown: FC<IDropdown> = ({
  fullWidth,
  id,
  header,
  tooltip,
  data,
  value,
  setValue,
}) => {
  const isModalDrowDown = !!fullWidth;
  const ref = useRef(null);
  const [isShow, setIsShow] = useState(false);

  const options = useMemo(() => {
    const options = new Set();
    data.forEach((item) => options.add(item?.[id]));
    return [...options];
  }, [id, data]);

  const selectItemHandler = (valueNumber: number | string | null) => () => {
    isModalDrowDown
      ? setValue({
          ...value,
          userId: valueNumber,
        })
      : setValue(id, valueNumber);

    close();
  };

  const filterTitle = isShow
    ? `Выберите ${id}`
    : value?.length > 0
    ? value[0].value
    : "";

  const modalTitle = value?.userId;

  const close = () => {
    setIsShow(false);
  };

  useOutsideClick(ref, close);

  const title = isModalDrowDown ? modalTitle : filterTitle;

  return (
    <Column spaceBetween ref={ref}>
      <Container
        spaceBetween
        onClick={() => setIsShow((state) => !state)}
        isModalDrowDown={isModalDrowDown}
      >
        <Column spaceBetween>
          <WithToolTip toolTip={tooltip} id={id}>
            <Text small withTooltip>
              {header}
            </Text>
          </WithToolTip>
          <Input id={id} value={title} disabled isShow={isShow} />
        </Column>
        <Column>
          <Arrow rotate={isShow}>
            <Image src={down} alt="open/close" />
          </Arrow>
        </Column>
      </Container>
      {isShow && (
        <Popup id={id} isModalDrowDown={isModalDrowDown}>
          {options.length > 0 &&
            options.map((item: string, index: number) => {
              return (
                <DropdownItem onClick={selectItemHandler(item)} key={index}>
                  {item}
                </DropdownItem>
              );
            })}
        </Popup>
      )}
    </Column>
  );
};

export default Dropdown;
