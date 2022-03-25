import { MessageForm } from "src/components/Form/MessageForm";
import { MessageList } from "src/components/Model/Message/MessageList";
import { Layout } from "src/layouts/Layout";
import { useAppSelector } from "src/redux/app/hooks";
import { selectName } from "src/redux/slices/userSlice";

export const App = () => {
  const username = useAppSelector(selectName);

  return (
    <Layout>
      {username && <span>{username}</span>}
      <MessageForm />
      <MessageList />
    </Layout>
  );
};
