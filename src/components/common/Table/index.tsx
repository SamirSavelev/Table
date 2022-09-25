import React, { useRef, useEffect, useState } from "react";
import {
  useTable,
  useSortBy,
  useBlockLayout,
  useResizeColumns,
  useRowSelect,
  useExpanded,
  useFilters,
  usePagination,
  useGlobalFilter,
} from "react-table";

import { FixedSizeList } from "react-window";
import { useSticky } from "react-table-sticky";
import { showModal } from "@features/modal/modal-slice";

import {
  getItemSize,
  _bindScrollCallback,
  _unBindScrollCallback,
} from "./utils";

import InputSearch from "@components/InputSearch";
import ModalContent from "@components/Modal/Content";
import Button from "@components/Button";
import Pagination from "./components/Pagination";
import { TableInner } from "./TableInner";
import { RenderRow } from "./RenderRow";
import Dropdown from "../Dropdown";
import { useAppDispatch } from "@hooks";
import { CommonUseComponents } from "@styles";
import { TableStyles } from "./styles";
import { ITable } from "@interfaces";

const { Styles, Container, Header } = TableStyles;
const { Row } = CommonUseComponents;

const Table: React.FC<ITable> = ({ header, columns, data }) => {
  const [queries, setQueries] = useState(data);

  useEffect(() => {
    data && setQueries(data);
  }, [data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    totalColumnsWidth,
    page,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setFilter,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter, filters },
  } = useTable(
    {
      columns,
      data: queries,
      initialState: { pageIndex: 0 },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    useBlockLayout,
    useResizeColumns,
    useSticky,
    useExpanded,
    usePagination,
    useRowSelect
  );

  const dispatch = useAppDispatch();

  const containerRef = useRef(null);

  const dizableFilter = () => {
    setFilter("userId", undefined);
    setGlobalFilter(undefined);
  };

  const content = <ModalContent data={queries} setData={setQueries} />;
  const addPost = () => {
    dispatch(
      showModal({
        content,
      })
    );
  };

  return (
    <>
      <Row gap="50px" flexStart alignItems="center" margin="0 0 20px 0">
        <Header>{header}</Header>
        <InputSearch
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <Dropdown
          id="userId"
          data={data}
          header="Фильтр"
          tooltip="Фильтрация данных по пользователям"
          value={filters}
          setValue={setFilter}
        />
        <Button big onClick={dizableFilter}>
          Сбросить
        </Button>
        <Button big onClick={addPost}>
          Добавить
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
                  height={getItemSize(page.length + 1)}
                  itemCount={page.length}
                  itemSize={67}
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
                      index={index}
                      style={style}
                      prepareRow={prepareRow}
                      rows={page}
                      data={queries}
                      setData={setQueries}
                    />
                  )}
                </FixedSizeList>
              </div>
            </div>
          </Styles>
        }
      </Container>
      <Pagination
        pageSize={pageSize}
        setPageSize={setPageSize}
        previousPage={previousPage}
        gotoPage={gotoPage}
        pageIndex={pageIndex}
        nextPage={nextPage}
      />
    </>
  );
};

export default Table;
