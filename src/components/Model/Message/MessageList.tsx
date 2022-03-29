import { VFC, memo } from "react";
import { Skelton } from "src/components/Feedback/Skelton";
import { MessageItem } from "src/components/Model/Message/MessageItem";
import { devices, heights } from "src/constants/style";
import { useMessages } from "src/hooks/useMessages";
import { useAppSelector } from "src/redux/app/hooks";
import { selectIsUsername } from "src/redux/slices/userSlice";
import styled from "styled-components";

const _SkeltonWrapper = styled.div`
  margin-top: 6px;
`;

const _ErrorMessage = styled.div`
  height: 100vh;
  padding: 8px 16px;
  font-size: large;
  color: rgb(248 113 113);
`;

type ListProps = {
  isUsername: boolean;
};
const _List = styled.ul<ListProps>`
  height: ${({ isUsername }) =>
    isUsername
      ? `calc(100vh - ${heights.header} - ${heights.form} - ${heights.username})`
      : `calc(100vh - ${heights.header} - ${heights.form})`};
  list-style: none;
  overflow: auto;
  @media ${devices.tablet} {
    ${({ isUsername }) =>
      isUsername &&
      `
        height: calc(100vh - ${heights.header} - ${heights.form});
    `}
  }
`;

export const MessageList: VFC = memo(() => {
  const { messages, isLoading, isError } = useMessages();
  const isUsername = useAppSelector(selectIsUsername);

  if (isLoading) {
    return (
      <_SkeltonWrapper>
        {new Array(15).fill(0).map((_, index) => (
          <Skelton key={index} />
        ))}
      </_SkeltonWrapper>
    );
  }

  if (isError) {
    return <_ErrorMessage>エラーが発生しました</_ErrorMessage>;
  }

  return (
    <_List isUsername={isUsername}>
      {[...messages].reverse().map((message) => (
        <MessageItem key={message.key} message={message} />
      ))}
    </_List>
  );
});

MessageList.displayName = "MessageList";
