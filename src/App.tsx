import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "src/redux/app/hooks";
import { createAsyncMessage } from "src/redux/slices/messageSlice";
import { selectName, setName } from "src/redux/slices/userSlice";

export const App = () => {
  const [text, setText] = useState("");
  const username = useAppSelector(selectName);
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
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
      <input type="text" value={text} onChange={handleChange} />
      <button type="submit">{username ? "送信" : "ログイン"}</button>
    </form>
  );
};
