import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { CiMedicalClipboard } from 'react-icons/ci';
import { FaUsers } from 'react-icons/fa';
import styled from 'styled-components';
import supabase from '../../services/supabase';
import { useCurrentUser } from '../auth/useCurrentUser';
import { useChat } from './useChat';

const StyledHeader = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  color: var(--color-brand-50);

  background-color: var(--color-brand-600);
  /* border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0; */
`;

const ChatName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;

const Users = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const ButtonIcon = styled.button`
  width: 2.2rem;
  height: 2.2rem;
  border: none;
  background: none;
  border-radius: var(--border-radius-lg);
  margin-left: 1rem;
  transition: all 0.2s;
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: var(--color-brand-50);
    outline: none;
  }

  & svg {
    width: 2rem;
    height: 2rem;
    color: white;
    &:hover {
      color: var(--color-brand-100);
    }
  }
`;

function ChatHeader({ setShowUsers, setOnlineUsersIds }) {
  const { chat } = useChat();
  const { user } = useCurrentUser();
  const [onlineUsersCount, setOnlineUsersCount] = useState(0);

  useEffect(() => {
    const chatRoom = supabase
      .channel(chat.id + 'header')
      .on('presence', { event: 'sync' }, () => {
        const userIds = [];
        for (const id in chatRoom.presenceState()) {
          userIds.push(chatRoom.presenceState()[id][0].user_id);
        }

        const setOfUsers = new Set(userIds);
        setOnlineUsersIds(Array.from(setOfUsers));
        setOnlineUsersCount(setOfUsers.size);
      })
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          await chatRoom.track({
            online_at: new Date().toISOString(),
            user_id: user.id,
          });
        }
      });

    return () => {
      supabase.removeChannel(chatRoom);
    };
  }, [user.id, chat.id]);

  return (
    <StyledHeader>
      <ChatName>
        Chat: {chat.chatName}
        <ButtonIcon
          onClick={() => {
            navigator.clipboard.writeText(document.URL);
            toast.success('Chat link was copied into your clipboard');
          }}
        >
          <CiMedicalClipboard />
        </ButtonIcon>
      </ChatName>
      <Users>
        Online users: {onlineUsersCount}
        <ButtonIcon
          onClick={() => {
            setShowUsers((current) => !current);
          }}
        >
          <FaUsers />
        </ButtonIcon>
      </Users>
    </StyledHeader>
  );
}

export default ChatHeader;
