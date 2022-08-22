import { FC, useEffect, useRef, useState } from "react";
import { CommonUseComponents } from "../../../../styles/CommonUseComponents";
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
const { Column } = CommonUseComponents;

const Dropdown: FC<IDropdown> = ({
  menuItems,
  big = false,
  id,
  header,
  tooltip,
  filterForm,
  setFilterForm,
}) => {
  const ref = useRef(null);
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState<Date>(today);
  const [isShow, setIsShow] = useState(false);
  const isCalendar = id === "calendar";
  const isStatus = id === "status";
  const isPort = id === "port";
  const isSelectedDay =
    format(selectedDay, "dd-MM-yyyy") !== format(today, "dd-MM-yyyy");
  const open = () => {
    setIsShow(true);
  };
  const close = () => {
    setIsShow(false);
  };

  useOutsideClick(ref, close);

  const activeItemHandler = (item: string) => () => {
    if (isPort) {
      setFilterForm({
        ...filterForm,
        port: item,
      });
    } else if (isStatus) {
      setFilterForm({
        ...filterForm,
        status: item,
      });
    }
    setIsShow(false);
  };

  useEffect(() => {
    if (isCalendar && isSelectedDay) {
      setFilterForm({
        ...filterForm,
        date: format(selectedDay, "dd.MM.yyyy"),
      });
    }
  }, [selectedDay]);

  const activeCalendarDay = () => {
    setIsShow(false);
  };

  const cancel = () => {
    setSelectedDay(today);
    setIsShow(false);
    setFilterForm({
      ...filterForm,
      date: "",
    });
  };
  const inputTitle =
    isShow && !isCalendar
      ? `Выберите ${isStatus ? "статус" : "порт"} `
      : isPort && filterForm.port
      ? filterForm.port
      : isStatus && filterForm.status
      ? filterForm.status
      : isCalendar && !filterForm.date
      ? "__.___.____"
      : isCalendar && filterForm.date
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
          <Arrow rotate={isShow && !isCalendar}>
            <Image src={id == "calendar" ? calendar : down} alt="" />
          </Arrow>
        </Column>
      </Container>
      {isShow && !isCalendar && (
        <Popup id={id}>
          {menuItems &&
            menuItems.map((item: string, index: number) => {
              return (
                <DropdownItem onClick={activeItemHandler(item)} key={index}>
                  {item}
                </DropdownItem>
              );
            })}
        </Popup>
      )}
      {isShow && isCalendar && (
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
