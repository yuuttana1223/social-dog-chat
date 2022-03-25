import {
  ChangeEvent,
  FormEvent,
  memo,
  useCallback,
  useState,
  VFC,
} from "react";
import { SubmitButton } from "src/components/Button/SubmitButton";
import { TextFiled } from "src/components/Input/TextFiled";
import { useAppDispatch, useAppSelector } from "src/redux/app/hooks";
import { createAsyncMessage } from "src/redux/slices/messageSlice";
import { selectName, setName } from "src/redux/slices/userSlice";

export const MessageForm: VFC = memo(() => {
  const [text, setText] = useState("");
  const username = useAppSelector(selectName);
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!text) return;
      if (username) {
        dispatch(
          createAsyncMessage({
            content: text,
            username,
          })
        );
      } else {
        dispatch(setName(text));
      }
      setText("");
    },
    [dispatch, text, username]
  );

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <TextFiled value={text} onChange={handleChange} />
      <SubmitButton>{username ? "送信" : "ログイン"}</SubmitButton>
    </form>
  );
});

MessageForm.displayName = "MessageForm";
