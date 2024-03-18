import { useState } from 'react';
import styled from 'styled-components';
import Empty from '../../ui/Empty';
import Spinner from '../../ui/Spinner';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatWindow from './ChatWindow';
import UsersList from './UsersList';
import { useChat } from './useChat';

const AllContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const StyledChat = styled.div`
  display: grid;
  grid-template-columns: 30rem;
  grid-template-rows: 4rem 1fr 4rem;
  position: relative;

  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: var(--color-brand-200);

  border: 1px solid var(--color-brand-600);
  border-radius: var(--border-radius-lg);
  margin: auto;
  overflow: hidden;
`;

function Chat() {
  const [showUsers, setShowUsers] = useState(false);
  const [onlineUsersIds, setOnlineUsersIds] = useState([]);

  const { isLoading, chat } = useChat();
  if (isLoading) return <Spinner />;
  if (!chat) return <Empty resourceName="chat" />;

  return (
    <AllContainer>
      <StyledChat>
        <ChatHeader
          setShowUsers={setShowUsers}
          setOnlineUsersIds={setOnlineUsersIds}
        />
        <ChatWindow />
        <ChatInput />
      </StyledChat>
      {showUsers && <UsersList onlineUsersIds={onlineUsersIds} />}
    </AllContainer>
  );
}

export default Chat;
