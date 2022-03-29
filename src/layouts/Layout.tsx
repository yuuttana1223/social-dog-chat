import { VFC, memo, ReactNode } from "react";
import { Header } from "src/layouts/Header";
import styled from "styled-components";

const _Container = styled.div`
  background-color: rgb(249 250 251);
  color: rgb(17 24 39);
`;

const _Main = styled.main`
  height: 100%;
`;

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = memo(({ children }) => {
  return (
    <_Container>
      <Header />
      <_Main>{children}</_Main>
    </_Container>
  );
});

Layout.displayName = "Layout";
