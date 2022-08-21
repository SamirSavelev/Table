import React, { useMemo, useRef, useState } from "react";

import { useRouter } from "next/router";

import {
  useTable,
  useSortBy,
  useBlockLayout,
  useResizeColumns,
  useRowSelect,
  useExpanded,
  useFilters,
  usePagination,
} from "react-table";
import { FixedSizeList } from "react-window";
import {
  defaultColumn,
  getItemSize,
  ITable,
  Styles,
  TableStyles,
  _bindScrollCallback,
  _unBindScrollCallback,
} from "./utils";
import { useTheme } from "styled-components";
import { useSticky } from "react-table-sticky";

import { RenderRow } from "./RenderRow";
import { TableInner } from "./TableInner";
import { CommonUseComponents } from "../../../../styles/CommonUseComponents";
import IndeterminateCheckbox from "../../Checkbox";

import Dropdown from "../Dropdown";
import { ports, statuses } from "../Dropdown/config";
import { useAppSelector } from "../../../hooks";
import { selectOpenedRows } from "../../../features/table/table-api-slice";
import { useGlobalFilter, useAsyncDebounce } from "react-table";
import matchSorter from "match-sorter";
import Button from "../../Button";
import Text from "../../Text";
import Image from "next/image";
import down from "../../../assets/down.svg";
const { Container, Header, Pagination, PaginationButton, StyledCircle } =
  TableStyles;
const { Row, Column } = CommonUseComponents;

export const TableContext = React.createContext({});

const Table: React.FC<ITable> = ({ header, columns, data, tableData }) => {
  const router = useRouter();
  const theme = useTheme();
  const ROW_HEIGHT = 66;
  const [filteredData, setFilteredData] = useState(tableData);
  const [filterForm, setFilterForm] = useState({
    port: "",
    status: "",
    date: "",
  });
  const filterData = () => {
    const { port, status, date } = filterForm;
    const filtedData = data?.data
      .filter((column) => {
        if (port) {
          return column.port == port;
        } else {
          return true;
        }
      })
      .filter((column) => {
        if (status) {
          return column.status == status;
        } else {
          return true;
        }
      })
      .filter((column) => {
        if (date) {
          return column.receipt_date == date;
        } else {
          return true;
        }
      });
    setFilteredData(filtedData);
  };

  const reset = () => {
    setFilterForm({
      port: "",
      status: "",
      date: "",
    });
    setFilteredData(tableData);
  };

  const {
    getTableProps,
    selectedFlatRows,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    totalColumnsWidth,
    visibleColumns,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data: filteredData,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    useBlockLayout,
    useResizeColumns,
    useSticky,
    useExpanded,
    usePagination,
    useRowSelect,

    (hooks) => {
      hooks.allColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          minWidth: 28,
          width: 28,
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  const containerRef = useRef(null);
  const openedRows = useAppSelector((state) => selectOpenedRows(state));

  return (
    <>
      <Header>{header}</Header>
      <Row gap="10px" flexStart alignItems="flex-start" margin="0 0 20px 0">
        <Dropdown
          filterForm={filterForm}
          setFilterForm={setFilterForm}
          id="port"
          menuItems={ports}
          big
          header="Порт назначения"
          tooltip="Выберите порт назначения"
        />
        <Dropdown
          filterForm={filterForm}
          setFilterForm={setFilterForm}
          id="status"
          menuItems={statuses}
          big
          header="Статус"
          tooltip="Выберите статус"
        />
        <Dropdown
          filterForm={filterForm}
          setFilterForm={setFilterForm}
          id="calendar"
          header="Дата поступления в порт"
          tooltip="Дата поступления в порт"
        />
        <Button big onClick={reset}>
          Сбросить
        </Button>
        <Button big confirm onClick={filterData}>
          Применить
        </Button>
      </Row>
      <Container>
        {
          <Styles>
            <div {...getTableProps()} className="table sticky">
              <div
                ref={containerRef}
                style={{ position: "relative", flex: 1, zIndex: 0 }}
              >
                <FixedSizeList
                  height={
                    getItemSize(page.length + 1) + openedRows.length * 1000
                  }
                  itemCount={page.length}
                  itemSize={ROW_HEIGHT}
                  width="100%"
                  innerElementType={({ children, style, ...rest }: any) => {
                    return (
                      <TableInner
                        getTableBodyProps={getTableBodyProps}
                        totalColumnsWidth={totalColumnsWidth}
                        headerGroups={headerGroups}
                        rows={page}
                        style={style}
                        {...rest}
                      >
                        {children}
                      </TableInner>
                    );
                  }}
                >
                  {({ index, style }) => (
                    <RenderRow
                      data={filteredData}
                      index={index}
                      style={style}
                      prepareRow={prepareRow}
                      rows={page}
                      visibleColumns={visibleColumns}
                    />
                  )}
                </FixedSizeList>
              </div>
            </div>
          </Styles>
        }
      </Container>
      <Row spaceBetween margin="40px 0 40px 0">
        <Pagination padding="0 25px">
          <Column margin="0 10px 0 0">
            <Text>Показывать по:</Text>
          </Column>

          <PaginationButton
            isActive={pageSize == 10}
            onClick={() => setPageSize(10)}
          >
            10
          </PaginationButton>
          <PaginationButton
            isActive={pageSize == 20}
            onClick={() => setPageSize(20)}
          >
            20
          </PaginationButton>
          <PaginationButton
            isActive={pageSize == 50}
            onClick={() => setPageSize(50)}
          >
            50
          </PaginationButton>
        </Pagination>
        <Pagination padding="9px 10px" gap="10px">
          <StyledCircle left onClick={() => previousPage()}>
            <Image src={down} alt="" />
          </StyledCircle>
          <StyledCircle isActive={pageIndex == 0} onClick={() => gotoPage(0)}>
            1
          </StyledCircle>
          <StyledCircle isActive={pageIndex == 1} onClick={() => gotoPage(1)}>
            2
          </StyledCircle>
          <StyledCircle isActive={pageIndex == 2} onClick={() => gotoPage(2)}>
            3
          </StyledCircle>
          <StyledCircle isActive={pageIndex == 3} onClick={() => gotoPage(3)}>
            4
          </StyledCircle>
          <StyledCircle right onClick={() => nextPage()}>
            <Image src={down} alt="" />
          </StyledCircle>
        </Pagination>
      </Row>
    </>
  );
};

export default Table;
