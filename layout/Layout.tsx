import React, { FC } from "react";
import SideBar from "../src/components/common/Sidebar";
import { LayoutProps } from "./Layout.props";
import { Container, MainContainer } from "./styles";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <MainContainer>
      <SideBar />
      <Container>{children}</Container>
    </MainContainer>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FC<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
