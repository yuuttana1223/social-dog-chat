import { VFC, memo } from "react";

export const Header: VFC = memo(() => {
  return (
    <header>
      <h1>Realtime Chat</h1>
      <p>React / React Redux / Firebase Realtime Database</p>
    </header>
  );
});

Header.displayName = "Header";
