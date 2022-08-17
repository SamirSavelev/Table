import { FC, useEffect, useRef, useState } from "react";
import { UseComponents } from "../../../../styles/useComponents";
import WithToolTip from "../../HOCs/WithReactToolTip";
import { IDropdown } from "../../interfaces";
import Text from "../../Text";
import { DropdownStyles } from "./styles";
import down from "../../../assets/down.svg";
import Image from "next/image";
import DropdownItem from "./components/DropdownItem";
import { useOutsideClick } from "../../../hooks";
import calendar from "../../../assets/calendar.svg";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import ru from "date-fns/locale/ru";

const {
  Container,
  Arrow,
  Popup,
  Input,
  Calendar,
  Footer,
  FooterButton,
  cssStyle,
} = DropdownStyles;
const { Column } = UseComponents;

const Dropdown: FC<IDropdown> = ({
  menuItems,
  big = false,
  id,
  header,
  tooltip,
}) => {
  const ref = useRef(null);
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState<Date>(today);
  const [selectItem, setSelectItem] = useState("Любой");
  const [activeItem, setActiveItem] = useState("");
  const [isShow, setIsShow] = useState(false);

  const open = () => {
    setIsShow(true);
    setSelectItem("");
  };
  const close = () => {
    setIsShow(false);
  };

  useOutsideClick(ref, close);

  const activeItemHandler = (item: string) => () => {
    setActiveItem(item);
    close();
  };

  useEffect(() => {
    setActiveItem(format(selectedDay, "dd.MM.yyyy"));
  }, [selectedDay]);

  const activeCalendarDay = () => {
    close();
  };

  const cancel = () => {
    close();
  };
  const inputTitle =
    isShow && id !== "calendar"
      ? `Выберите ${big ? "порт" : "статус"} `
      : activeItem
      ? activeItem
      : id === "calendar" &&
        format(selectedDay, "dd-MM-yyyy") === format(today, "dd-MM-yyyy")
      ? "__.___.____"
      : id === "calendar" &&
        format(selectedDay, "dd-MM-yyyy") !== format(today, "dd-MM-yyyy")
      ? format(selectedDay, "dd.MM.yyyy")
      : "Любой";

  const footer = (
    <Footer>
      <FooterButton onClick={activeCalendarDay}>
        <Text small bold>
          Выбрать
        </Text>
      </FooterButton>
      <FooterButton noBg onClick={cancel}>
        <Text small bold>
          Отмена
        </Text>
      </FooterButton>
    </Footer>
  );
  return (
    <Column spaceBetween ref={ref}>
      <Container id={id} spaceBetween onClick={open}>
        <Column spaceBetween>
          <WithToolTip toolTip={tooltip} id={id}>
            <Text small withTooltip>
              {header}
            </Text>
          </WithToolTip>
          <Input id={id} value={inputTitle} disabled isShow={isShow} />
        </Column>
        <Column>
          <Arrow rotate={isShow && id !== "calendar"}>
            <Image src={id == "calendar" ? calendar : down} alt="" />
          </Arrow>
        </Column>
      </Container>
      {isShow && id !== "calendar" && (
        <Popup id={id}>
          {menuItems.map((item: string, index: number) => {
            return (
              <DropdownItem onClick={activeItemHandler(item)} key={index}>
                {item}
              </DropdownItem>
            );
          })}
        </Popup>
      )}
      {isShow && id === "calendar" && (
        <Calendar>
          <style>{cssStyle}</style>
          <DayPicker
            mode="single"
            required
            selected={selectedDay}
            locale={ru}
            modifiersClassNames={{
              selected: "my-selected",
              today: "my-today",
            }}
            onSelect={setSelectedDay}
            footer={footer}
          />
        </Calendar>
      )}
    </Column>
  );
};

export default Dropdown;
