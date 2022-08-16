import type { NextPage } from "next";
import { withLayout } from "../layout/Layout";
import Header from "../src/components/common/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default withLayout(Home);
