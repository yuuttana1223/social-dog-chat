import { VFC, memo } from "react";
import Moment from "react-moment";
import { Message } from "src/redux/slices/messageSlice";
import "moment/locale/ja";
import styled from "styled-components";
import { devices } from "src/constants/style";

const _ListItem = styled.li`
  padding: 8px 16px;
  border-bottom: 2px rgb(243 244 246) solid;
`;

const _Wrapper = styled.div`
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 8px;

  @media ${devices.tablet} {
    grid-template-columns: 144px 1fr;
  }

  @media ${devices.laptop} {
    grid-template-columns: 216px 1fr;
  }
`;

const _Username = styled.p`
  word-break: break-all;
  font-weight: bold;
`;

const _Content = styled.p`
  word-break: break-all;
`;

const _CreatedAt = styled(Moment)`
  display: block;
  text-align: right;
  margin-left: auto;
  font-size: smaller;
  color: rgb(107 114 128);
`;

type Props = {
  message: Message;
};

export const MessageItem: VFC<Props> = memo(({ message }) => {
  return (
    <_ListItem>
      <_Wrapper>
        <_Username>{message.username}</_Username>
        <_Content>{message.content}</_Content>
      </_Wrapper>
      <_CreatedAt fromNow>{message.createdAt}</_CreatedAt>
    </_ListItem>
  );
});

MessageItem.displayName = "MessageItem";
