import { VFC, memo, ChangeEvent } from "react";

type Props = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const TextFiled: VFC<Props> = memo(({ value, onChange }) => {
  return <input type="text" value={value} onChange={onChange} />;
});

TextFiled.displayName = "TextFiled";
