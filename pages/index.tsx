import ModalDialog from "@components/Modal";
import type { NextPage } from "next";
import { withLayout } from "../layout/Layout";
import Table from "../src/components/common/Table";
import { columns } from "../src/components/common/Table/config";
import { useGetPostsQuery } from "../src/features/table/table-api-slice";

const Home: NextPage = () => {
  const { data } = useGetPostsQuery();
  return (
    <>
      <Table header="Список" data={data || []} columns={columns} />
      <ModalDialog />
    </>
  );
};

export default withLayout(Home);
