import { FC, useRef, useState } from "react";
import { UseComponents } from "../../../../styles/useComponents";
import WithToolTip from "../../HOCs/WithReactToolTip";
import { IDropdown } from "../../interfaces";
import Text from "../../Text";
import { DropdownStyles } from "./styles";
import down from "../../../assets/down.svg";
import Image from "next/image";
import { ports } from "./config";
import DropdownItem from "./components/DropdownItem";
import { useOutsideClick } from "../../../hooks";

const { Container, Arrow, Popup, Input } = DropdownStyles;
const { Column } = UseComponents;

const Dropdown: FC<IDropdown> = ({
  menuItems,
  big = false,
  id,
  header,
  tooltip,
}) => {
  const ref = useRef(null);
  const [selectItem, setSelectItem] = useState("Любой");
  const [activeItem, setActiveItem] = useState("");
  const [isShow, setIsShow] = useState(false);

  const open = () => {
    setIsShow(true);
    setSelectItem("");
  };
  const close = () => setIsShow(false);

  useOutsideClick(ref, close);

  const activeItemHandler = (item: string) => () => {
    setActiveItem(item);
    close();
  };

  const inputTitle = isShow
    ? `Выберите ${big ? "порт" : "статус"} `
    : activeItem
    ? activeItem
    : "Любой";

  return (
    <Column spaceBetween ref={ref}>
      <Container big={big} spaceBetween onClick={open}>
        <Column spaceBetween>
          <WithToolTip toolTip={tooltip} id={id}>
            <Text small withTooltip>
              {header}
            </Text>
          </WithToolTip>
          <Input value={inputTitle} disabled isShow={isShow} />
        </Column>
        <Column>
          <Arrow rotate={isShow}>
            <Image src={down} alt="" />
          </Arrow>
        </Column>
      </Container>
      {isShow && (
        <Popup big={big}>
          {menuItems.map((item: string, index: number) => {
            return (
              <DropdownItem onClick={activeItemHandler(item)} key={index}>
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
