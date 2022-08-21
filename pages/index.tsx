import type { NextPage } from "next";
import React from "react";
import { withLayout } from "../layout/Layout";
import BackHome from "../src/components/BackHome";
import Header from "../src/components/common/Header";
import Table from "../src/components/common/Table";
import { columns, tableData } from "../src/components/common/Table/data";
import { selectOpenedRows } from "../src/features/table/table-api-slice";
import { useAppSelector } from "../src/hooks";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <BackHome />
      <Table
        header="Все грузы"
        data={{ data: tableData }}
        tableData={tableData}
        columns={columns}
      />
    </>
  );
};

export default withLayout(Home);
