import { format } from "date-fns/fp";
import { useRef, useState } from "react";
import styled from "styled-components";
import { CommonUseComponents } from "../../../../../styles/CommonUseComponents";
import Button from "../../../Button";
import Text from "../../../Text";
import RowExpander from "./Row";
import but1 from "../../../../assets/but1.svg";
import but2 from "../../../../assets/but2.svg";
import fix from "../../../../assets/fix.svg";
import files from "../../../../assets/files.svg";
import Image from "next/image";

const { Column } = CommonUseComponents;
const Expander = ({ data }) => {
  const fileRef = useRef();
  const file = document.getElementById("file");
  file?.addEventListener("change", (event) => {
    const files = event.target.files;
  });

  return (
    <Wrapper>
      <Block>
        <Section widht="500px">
          <Column>
            <RowExpander title="Cтатус груза">{data.status}</RowExpander>
            <RowExpander title="Дата поступления груза в порт">
              {data.receipt_date}
            </RowExpander>
            <RowExpander title="Менеджер">{data.manager.name}</RowExpander>
            <RowExpander title="Грузоотправитель">{data.sender}</RowExpander>
          </Column>
        </Section>
        <Section widht="400px">
          <Column>
            <RowExpander title="Закрепленный заказ">
              <a href="#">Заказ №{data.number}</a>
            </RowExpander>
            <RowExpander title="Доставка груза до порта отправления">
              {data.delivery}
            </RowExpander>
          </Column>
        </Section>
      </Block>
      <Block>
        <Section widht="500px">
          <Column>
            <RowExpander title="Тип контейнера">
              {data.type_container}
            </RowExpander>
            <RowExpander title="Общий объем, м3">
              {data.size.volume}
            </RowExpander>
            <RowExpander title="Высота, метры">{data.size.height}</RowExpander>
          </Column>
        </Section>
        <Section widht="400px">
          <Column>
            <RowExpander title="Масса, тн">{data.size.weight}</RowExpander>
            <RowExpander title="Длина, метры">{data.size.length}</RowExpander>
            <RowExpander title="Ширина, метры">{data.size.width}</RowExpander>
          </Column>
        </Section>
      </Block>
      <Block>
        <Section widht="1000px">
          <Column>
            <BigBlock>
              <Text disabled>Описание груза</Text>
              <Text description>{data.description}</Text>
            </BigBlock>
          </Column>
        </Section>
      </Block>
      <Block>
        <Section widht="500px">
          <Column>
            <RowExpander title="ТМЦ">{data.inventory_items}</RowExpander>
            <RowExpander title="Расположение груза в порту">
              {data.location}
            </RowExpander>
          </Column>
        </Section>
        <Section widht="400px">
          <Column>
            <RowExpander title="Фрахтовая единица">
              {data.size.freight} (Масса, тн)
            </RowExpander>
          </Column>
        </Section>
      </Block>
      <BigBlock>
        <Text disabled>Файл транспортной накладной</Text>
        <DownloadBlock>
          <DownLoadTitle>
            <Text>Накладная_для_Умки (1).doc</Text>
            <Text>от 24.10.2021</Text>
            <Text>Заказ №{data.number}</Text>
          </DownLoadTitle>
          <ButtonBlock>
            <Button noPadding>
              <a
                style={{ position: "relative", top: "2px" }}
                href={data.file_link}
                download
              >
                <Image src={but2} alt="" />
              </a>
            </Button>
            <Button noPadding>
              <Image src={but1} alt="" />
            </Button>
          </ButtonBlock>
        </DownloadBlock>
      </BigBlock>
      <BigBlock>
        <Text disabled>Файл приемного акта</Text>
        <Text description>
          <Button onClick={() => fileRef?.current?.click()}>
            <Image src={fix} alt="" /> &nbsp;&nbsp;Добавить
          </Button>
          <input
            id="file"
            ref={fileRef}
            type="file"
            name="file"
            multiple
            hidden
          />
        </Text>
      </BigBlock>
      <RowExpander title="Номер приемного акта">{data.certificate}</RowExpander>
      <ButtonBlock>
        <Button small shadow>
          <Image src={files} alt="" />
          &nbsp;&nbsp; РЕДАКТИРОВАТЬ
        </Button>
        <Button small shadow redBorder>
          РАЗДЕЛИТЬ ГРУЗ
        </Button>
      </ButtonBlock>
    </Wrapper>
  );
};

const Block = styled.div`
  width: 1000px;
  border-bottom: 1px dashed #e9e9e9;
  display: flex;
  flex-direction: row;
`;

const Section = styled.div<{ widht: string }>`
  width: ${({ widht }) => widht};
`;
const Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 1465px;
  margin-left: 40px;
  border-top: 1px dashed #e9e9e9;
`;

const BigBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const DownloadBlock = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(170, 170, 170, 0.25);
  border-radius: 8px;
  padding: 0 18px;
  height: 44px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const DownLoadTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 40px;
`;

const ButtonBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 15px;
`;
export default Expander;
