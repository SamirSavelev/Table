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
import Loader from "@src/ui-kit/Loader";

const Home: NextPage = () => {
  const {
    data: tableData,
    isError: tableDataError,
    isLoading: tableDataLoading,
    isUninitialized: tableDataUninitialized,
    isFetching: tableDataFetching,
    isSuccess: tableDataSuccess,
    error: tableDataErrorData,
    refetch,
  } = useGetPostsQuery();

  const [data, setData] = useState(tableData);

  const [
    deletePost,
    {
      isError: deletePostError,
      isLoading: deletePostLoading,
      isUninitialized: deletePostUninitialized,
      isSuccess: deletePostSuccess,
      error: deletePostErrorData,
    },
  ] = useDeletePostMutation();

  const isLoading =
    tableDataLoading ||
    tableDataUninitialized ||
    tableDataFetching ||
    deletePostLoading;

  const isShowTable = data && !isLoading && tableDataSuccess && !tableDataError;

  useEffect(() => {
    setData(tableData);
  }, [tableData]);

  return (
    <>
      {isShowTable && (
        <Table
          header="Список"
          data={data}
          columns={columns(data, setData, deletePost, refetch)}
        />
      )}
      {isLoading && <Loader />}
      <ModalDialog />
    </>
  );
};

export default withLayout(Home);
