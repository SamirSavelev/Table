import { FC } from "react";
import Image from "next/image";
import { PaginationConfig } from "./config";
import Text from "../../../../Text";
import { PaginationStyles } from "./styles";
import { CommonUseComponents } from "../../../../../../styles/CommonUseComponents";
import down from "../../../../../assets/down.svg";
import { IPagination } from "../../../../../interfaces";

const { Row, Column } = CommonUseComponents;
const { Container, Button, CircleButton } = PaginationStyles;
const { pageSizes, pages } = PaginationConfig;

const Pagination: FC<IPagination> = ({
  pageSize,
  setPageSize,
  previousPage,
  gotoPage,
  pageIndex,
  nextPage,
}) => {
  return (
    <Row spaceBetween margin="40px 0 40px 0" padding="0 0 40px 0">
      <Container padding="0 25px">
        <Column margin="0 10px 0 0">
          <Text>Показывать по:</Text>
        </Column>
        {pageSizes.map((size: number, index: number) => {
          return (
            <Button
              key={index}
              isActive={pageSize == size}
              onClick={() => setPageSize(size)}
            >
              {size}
            </Button>
          );
        })}
      </Container>
      <Container padding="9px 10px" gap="10px">
        <CircleButton left onClick={() => previousPage()}>
          <Image src={down} alt="previous" />
        </CircleButton>
        {pages.map((page: number) => {
          return (
            <CircleButton
              key={page}
              isActive={pageIndex == page}
              onClick={() => gotoPage(page)}
            >
              {page + 1}
            </CircleButton>
          );
        })}
        <CircleButton right onClick={() => nextPage()}>
          <Image src={down} alt="next" />
        </CircleButton>
      </Container>
    </Row>
  );
};

export default Pagination;
