import React, { useMemo, useRef, useState } from "react";

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
  TableStyles,
  _bindScrollCallback,
  _unBindScrollCallback,
} from "./utils";
import { useTheme } from "styled-components";
import { useSticky } from "react-table-sticky";

import { RenderRow } from "./RenderRow";
import { TableInner } from "./TableInner";
import { UseComponents } from "../../../../styles/useComponents";
import IndeterminateCheckbox from "../../Checkbox";

import Dropdown from "../Dropdown";
import { ports, statuses } from "../Dropdown/config";

const { Container, Header } = TableStyles;
const { Row } = UseComponents;

export const TableContext = React.createContext({});

const Table: React.FC<ITable> = ({ header, columns, data, tableData }) => {
  const router = useRouter();
  const theme = useTheme();
  const ROW_HEIGHT = 66;
  const {
    getTableProps,
    selectedFlatRows,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    totalColumnsWidth,
    visibleColumns,
  } = useTable(
    {
      columns,
      data: tableData,
      defaultColumn: useMemo(defaultColumn, []),
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
  const [openRow, setOpenRow] = useState();
  const containerRef = useRef(null);

  console.log(rows.filter((row) => row.isExpanded).length);
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
          <Styles>
            <div {...getTableProps()} className="table sticky">
              <div
                ref={containerRef}
                style={{ position: "relative", flex: 1, zIndex: 0 }}
              >
                <FixedSizeList
                  height={getItemSize(rows.length + 2) + 800}
                  itemCount={rows.length}
                  itemSize={ROW_HEIGHT}
                  width="100%"
                  innerElementType={({ children, style, ...rest }: any) => {
                    return (
                      <TableInner
                        getTableBodyProps={getTableBodyProps}
                        totalColumnsWidth={totalColumnsWidth}
                        headerGroups={headerGroups}
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
                      data={data}
                      index={index}
                      style={style}
                      prepareRow={prepareRow}
                      rows={rows}
                      visibleColumns={visibleColumns}
                      setOpenRow={setOpenRow}
                      openRow={openRow}
                    />
                  )}
                </FixedSizeList>
              </div>
            </div>
          </Styles>
        }
      </Container>
    </>
  );
};

export default Table;
