import { VFC, memo, ChangeEvent, Ref } from "react";
import styled from "styled-components";

const _Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 12px 16px;
  border-radius: 24px;
  font-size: medium;
  border-color: transparent;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  outline: none;
`;

type Props = {
  value: string;
  placeholder?: string;
  inputRef: Ref<HTMLInputElement>;
  maxLength?: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const TextFiled: VFC<Props> = memo(
  ({ value, placeholder, inputRef, maxLength, onChange }) => {
    return (
      <_Input
        type="text"
        value={value}
        ref={inputRef}
        maxLength={maxLength}
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    );
  }
);

TextFiled.displayName = "TextFiled";
