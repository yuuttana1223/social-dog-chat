import { MessageForm } from "src/components/Form/MessageForm";
import { MessageList } from "src/components/Model/Message/MessageList";
import { devices, heights } from "src/constants/style";
import { Layout } from "src/layouts/Layout";
import { useAppSelector } from "src/redux/app/hooks";
import { selectIsUsername, selectName } from "src/redux/slices/userSlice";
import styled from "styled-components";

type WrapperProps = {
  isUsername: boolean;
};

const _FormWrapper = styled.div<WrapperProps>`
  box-sizing: border-box;
  height: calc(${heights.form});
  padding: 0 16px;
  display: grid;
  align-items: center;
  background-color: rgb(243 244 246);
  ${({ isUsername }) =>
    isUsername &&
    `
    display: block;
    height: calc(${heights.form} + ${heights.username});
  `}

  @media ${devices.tablet} {
    display: grid;
    height: calc(${heights.form});
    ${({ isUsername }) =>
      isUsername &&
      `
      grid-template-columns: auto 1fr;
    `}
  }
  @media ${devices.laptop} {
    ${({ isUsername }) =>
      isUsername &&
      `
      grid-template-columns: auto 1fr;
    `}
  }
`;

const _User = styled.div`
  height: calc(${heights.username});
  line-height: ${heights.username};
  align-items: center;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media ${devices.tablet} {
    width: 144px;
  }
  @media ${devices.laptop} {
    width: 216px;
  }
`;

export const App = () => {
  const username = useAppSelector(selectName);
  const isUsername = useAppSelector(selectIsUsername);

  return (
    <Layout>
      <_FormWrapper isUsername={isUsername}>
        {isUsername && <_User>{username}</_User>}
        <MessageForm />
      </_FormWrapper>
      <MessageList />
    </Layout>
  );
};
