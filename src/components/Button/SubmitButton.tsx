import { memo, ReactNode, VFC } from "react";
import { devices } from "src/constants/style";
import styled from "styled-components";

const _Button = styled.button`
  box-sizing: border-box;
  display: block;
  padding: 8px 12px;
  border-radius: 24px;
  font-weight: bold;
  background-color: ${({ disabled }) =>
    disabled ? "rgb(96 165 250)" : "rgb(59 130 246)"};
  color: white;
  border-color: transparent;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  ${({ disabled }) =>
    disabled
      ? `
      background-color: rgb(96 165 250);
    `
      : `
      cursor: pointer;
      &:hover {
        background-color: rgb(29 78 216);
      }
  `}

  @media ${devices.tablet} {
    padding: 8px 24px;
    font-size: large;
  }
`;

type Props = {
  children: ReactNode;
  disabled?: boolean;
};

export const SubmitButton: VFC<Props> = memo(({ children, disabled }) => {
  return (
    <_Button type="submit" disabled={disabled}>
      {children}
    </_Button>
  );
});

SubmitButton.displayName = "SubmitButton";
