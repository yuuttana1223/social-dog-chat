import {
  ChangeEvent,
  FormEvent,
  memo,
  useCallback,
  useMemo,
  useRef,
  useState,
  VFC,
} from "react";
import { SubmitButton } from "src/components/Button/SubmitButton";
import { TextFiled } from "src/components/Input/TextFiled";
import { useAppDispatch, useAppSelector } from "src/redux/app/hooks";
import { createAsyncMessage } from "src/redux/slices/messageSlice";
import {
  selectIsUsername,
  selectName,
  setName,
} from "src/redux/slices/userSlice";
import styled from "styled-components";

const _Form = styled.form`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
  gap: 8px;
  background-color: rgb(243 244 246);
`;

const textMaxLength = 670;
const usernameMaxLength = 30;

export const MessageForm: VFC = memo(() => {
  const [text, setText] = useState("");
  const trimmedText = useMemo(() => text.trim(), [text]);
  const username = useAppSelector(selectName);
  const isUsername = useAppSelector(selectIsUsername);
  const inputEl = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleSubmitText = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (trimmedText === "" || trimmedText.length > textMaxLength) {
        return;
      }
      dispatch(
        createAsyncMessage({
          content: trimmedText,
          username,
        })
      );
      setText("");
      inputEl.current?.focus();
    },
    [dispatch, trimmedText, username]
  );

  const handleSubmitUsername = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (trimmedText === "" || trimmedText.length > usernameMaxLength) {
        return;
      }
      dispatch(setName(trimmedText));
      setText("");
      inputEl.current?.focus();
    },
    [dispatch, trimmedText]
  );

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }, []);

  return (
    <_Form onSubmit={isUsername ? handleSubmitText : handleSubmitUsername}>
      <TextFiled
        value={text}
        inputRef={inputEl}
        placeholder={isUsername ? "メッセージをどうぞ" : "お名前をどうぞ"}
        maxLength={isUsername ? textMaxLength : usernameMaxLength}
        onChange={handleChange}
      />
      <SubmitButton disabled={trimmedText === ""}>
        {isUsername ? "送信" : "ログイン"}
      </SubmitButton>
    </_Form>
  );
});

MessageForm.displayName = "MessageForm";
