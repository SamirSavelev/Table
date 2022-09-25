import { useEffect, useState } from "react";
import type { NextPage } from "next";
import {
  useDeletePostMutation,
  useGetPostsQuery,
} from "@features/table/table-api-slice";
import { withLayout } from "../layout/Layout";
import { columns } from "@components/common/Table/config";
import ModalDialog from "@components/Modal";
import Table from "@components/common/Table";

const Home: NextPage = () => {
  const { data: tableData } = useGetPostsQuery();
  const [data, setData] = useState(tableData);
  const [deletePost, { isError, isLoading }] = useDeletePostMutation();
  useEffect(() => {
    setData(tableData);
  }, [tableData]);

  return (
    <>
      <Table
        header="Список"
        data={data || []}
        columns={columns(data, setData, deletePost)}
      />
      <ModalDialog />
    </>
  );
};

export default withLayout(Home);
