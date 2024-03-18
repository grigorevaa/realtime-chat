import CreateChat from '../features/chat/CreateChat';
import JoinChat from '../features/chat/JoinChat';
import Layout from '../ui/Layout';

function HomePage() {
  return (
    <Layout>
      <CreateChat />
      <JoinChat />
    </Layout>
  );
}

export default HomePage;
