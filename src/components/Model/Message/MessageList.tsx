import { VFC, memo } from "react";
import { MessageItem } from "src/components/Model/Message/MessageItem";
import { useMessages } from "src/hooks/useMessages";

export const MessageList: VFC = memo(() => {
  const { messages, isLoading, isError } = useMessages();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <ul>
      {[...messages].reverse().map((message) => (
        <MessageItem key={message.key} message={message} />
      ))}
    </ul>
  );
});

MessageList.displayName = "MessageList";
