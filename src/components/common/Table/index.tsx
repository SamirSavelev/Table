import React, { useEffect, useMemo, useRef, useState } from "react";

import { useRouter } from "next/router";

import {
  useTable,
  useSortBy,
  useBlockLayout,
  useResizeColumns,
  useRowSelect,
  useExpanded,
} from "react-table";

import { FixedSizeList } from "react-window";
import {
  defaultColumn,
  getItemSize,
  ITable,
  Styles,
  TableHeader,
  _bindScrollCallback,
  _unBindScrollCallback,
} from "./utils";
import styled, { useTheme } from "styled-components";
import { useSticky } from "react-table-sticky";
import SectionBox from "./SectionBox";
import Text from "../../Text";
import { RenderRow } from "./RenderRow";
import { TableInner } from "./TableInner";
import { UseComponents } from "../../../../styles/useComponents";
import { CommonComponents } from "./CommonUseComponents";
import IndeterminateCheckbox from "../../Checkbox";
import { TableStyles } from "./styles";
import Dropdown from "../Dropdown";
import { ports, statuses } from "../Dropdown/config";

const { Container, Header } = TableStyles;
const { Column, Row } = UseComponents;
export const TableContext = React.createContext({});

const Table: React.FC<ITable> = ({
  header,
  columns,
  data,
  tableData,
  bottomContent = null,
  initialState,
  title,
  subtitle,
  selectRows, //adds the checkboxes column if true (selectedFlatRows is the array of checked rows (per each column))
  setCheckedRows,
  scrollEnd,
  height,
  exportStyle = null,
  extraContent = null,
  hideExcel = false,
  footerData = null,
  modal = false,
  noHorPadding = false,
  noPadding = false,
  grayHeader = false,
  noExport = false,
  noHeader = false,
  plusMunisModal = false,
}) => {
  const router = useRouter();
  const theme = useTheme();
  const ROW_HEIGHT = 66;
  const {
    getTableProps,
    selectedFlatRows,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state,
    totalColumnsWidth,
    visibleColumns,
    state: { expanded, pageIndex, pageSize, selectedRowIds, globalFilter },
    page,
    gotoPage,
    setPageSize,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data: tableData,
      defaultColumn: useMemo(defaultColumn, []),
      initialState,
    },
    useSortBy,
    useBlockLayout,
    useResizeColumns,
    useSticky,
    useExpanded,
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

  const renderRowSubComponent = React.useCallback(
    ({ row }) => (
      <pre
        style={{
          fontSize: "10px",
        }}
      >
        <code>{JSON.stringify({ values: row.values }, null, 2)}</code>
      </pre>
    ),
    []
  );
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && scrollEnd) {
      const scrollContainer = containerRef.current.children[0];
      scrollContainer.scrollLeft = scrollContainer.scrollWidth;
    }
  }, [containerRef]);

  useEffect(() => {
    selectRows &&
      !isLoading &&
      setCheckedRows(selectedFlatRows.map((item) => item.original));
  }, [selectedFlatRows.length]);

  return (
    <>
      <Header>{header}</Header>
      <Row gap="10px" flexStart alignItems="flex-start" margin="0 0 20px 0">
        <Dropdown
          id="port"
          menuItems={ports}
          big
          header="Порт назначения"
          tooltip="Выберите порт назначения"
        />
        <Dropdown
          id="status"
          menuItems={statuses}
          big
          header="Статус"
          tooltip="Выберите статус"
        />
        <Dropdown
          id="calendar"
          header="Дата поступления в порт"
          tooltip="Дата поступления в порт"
        />
      </Row>
      <Container>
        {
          <Styles
            noHeader={noHeader}
            plusMunisModal={plusMunisModal}
            noHorPadding={noHorPadding}
            grayHeader={grayHeader}
            selectedRows={selectRows}
          >
            <div {...getTableProps()} className="table sticky">
              <div
                ref={containerRef}
                style={{ position: "relative", flex: 1, zIndex: 0 }}
              >
                <FixedSizeList
                  height={height || getItemSize(rows.length + 2)}
                  itemCount={rows.length}
                  itemSize={ROW_HEIGHT}
                  width="100%"
                  style={{ borderRadius: grayHeader ? 0 : 10 }}
                  innerElementType={({ children, style, ...rest }: any) => {
                    return (
                      <TableInner
                        grayHeader={grayHeader}
                        footerData={footerData}
                        getTableBodyProps={getTableBodyProps}
                        totalColumnsWidth={totalColumnsWidth}
                        headerGroups={headerGroups}
                        footerGroups={footerGroups}
                        rows={rows}
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
                      plusMunisModal={plusMunisModal}
                      grayHeader={grayHeader}
                      data={data}
                      index={index}
                      style={style}
                      prepareRow={prepareRow}
                      rows={rows}
                      visibleColumns={visibleColumns}
                      renderRowSubComponent={renderRowSubComponent}
                    />
                  )}
                </FixedSizeList>
              </div>
            </div>
          </Styles>
        }
        {bottomContent}
      </Container>
    </>
  );
};

export default Table;

const Buttons = styled.div`
  display: flex;

  > *:not(:last-child) {
    margin-right: 16px;
  }
`;
