import { VFC, memo } from "react";
import Moment from "react-moment";
import { Message } from "src/redux/slices/messageSlice";
import "moment/locale/ja";

type Props = {
  message: Message;
};

export const MessageItem: VFC<Props> = memo(({ message }) => {
  return (
    <li>
      <p>{message.username}</p>
      <p>{message.content}</p>
      <Moment fromNow>{message.createdAt}</Moment>
    </li>
  );
});

MessageItem.displayName = "MessageItem";
