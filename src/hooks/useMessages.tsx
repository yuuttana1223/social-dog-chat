import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/redux/app/hooks";
import {
  Message,
  selectIsError,
  selectIsLoading,
  selectMessages,
  setIsLoading,
  setMessageState,
} from "src/redux/slices/messageSlice";
import { onValue, orderByKey, query } from "firebase/database";
import { messagesRef } from "src/firebase/config";

export const useMessages = () => {
  const messages = useAppSelector(selectMessages);
  const isLoading = useAppSelector(selectIsLoading);
  const isError = useAppSelector(selectIsError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsLoading(true));
    onValue(
      query(messagesRef, orderByKey()),
      (snapshot) => {
        // {{"MyzOgQW": { content: "Hello", username: "taro" }}, {MygQW: {content: "he"...} }
        const messages: {
          [key: string]: Omit<Message, "key">;
        } = snapshot.val();

        // 配列に変換
        // [{key: "MyzOgQW", content: "Hello", username: "taro"}, {key: "MygQW", content: "he"...}]

        // テーブル作成前はnullが返ってくる
        if (messages === null) {
          dispatch(setIsLoading(false));
          return;
        }
        const entries = Object.entries(messages);
        const newMessages = entries.map(([key, message]) => ({
          key,
          content: message.content,
          username: message.username,
          createdAt: message.createdAt,
          updatedAt: message.updatedAt,
        }));

        dispatch(
          setMessageState({
            messages: newMessages,
            isLoading: false,
            isError: false,
          })
        );
      },
      (error) => {
        console.error(error);
        dispatch(
          setMessageState({
            messages: messages,
            isLoading: false,
            isError: true,
          })
        );
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { messages, isLoading, isError };
};
