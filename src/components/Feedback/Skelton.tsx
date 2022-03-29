import { VFC } from "react";
import ContentLoader from "react-content-loader";
import styled from "styled-components";

const _Skeleton = styled(ContentLoader)`
  margin-top: -4px;
`;

export const Skelton: VFC = () => {
  return (
    <_Skeleton width="100%" height="66px">
      <rect width="100%" height="100%" />
    </_Skeleton>
  );
};
