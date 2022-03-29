import { VFC, memo } from "react";
import { heights } from "src/constants/style";
import styled from "styled-components";

const _Header = styled.header`
  box-sizing: border-box;
  height: ${heights.header};
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(14 165 233);
  color: white;
`;

const _Heading = styled.h1`
  font-size: 24px;
`;

const _Paragraph = styled.p`
  margin: 12px 0;
`;

export const Header: VFC = memo(() => {
  return (
    <_Header>
      <_Heading>Realtime Chat</_Heading>
      <_Paragraph>React / React Redux / Firebase Realtime Database</_Paragraph>
    </_Header>
  );
});

Header.displayName = "Header";
