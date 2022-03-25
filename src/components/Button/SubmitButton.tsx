import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
};

export const SubmitButton: VFC<Props> = memo(({ children }) => {
  return <button type="submit">{children}</button>;
});

SubmitButton.displayName = "SubmitButton";
