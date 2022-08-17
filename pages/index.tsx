import type { NextPage } from "next";
import { withLayout } from "../layout/Layout";
import BackHome from "../src/components/BackHome";
import Header from "../src/components/common/Header";
import Table from "../src/components/common/Table";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <BackHome />
      <Table title="Все грузы" />
    </>
  );
};

export default withLayout(Home);
