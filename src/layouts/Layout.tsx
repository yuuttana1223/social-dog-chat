import { VFC, memo, ReactNode } from "react";
import { Header } from "src/layouts/Header";

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = memo(({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
});

Layout.displayName = "Layout";
