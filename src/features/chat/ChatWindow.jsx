import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import supabase from '../../services/supabase';
import Spinner from '../../ui/Spinner';
import { useCurrentUser } from '../auth/useCurrentUser';
import Message from '../messages/Message';
import { useMessages } from '../messages/useMessages';
import NotificationWithArrow from './NotificationWithArrow';
import { useChat } from './useChat';

const Window = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  overflow-y: auto;
  padding: 0 1.2rem;

  border-top: 1px solid var(--color-brand-500);
  border-bottom: 1px solid var(--color-brand-500);

  scrollbar-color: var(--color-brand-500) var(--color-brand-50);
`;

const EmptyContainer = styled.div`
  flex: 1 1 0%;
  min-height: 0;
`;

function ChatWindow() {
  const { messages, isLoading } = useMessages();

  const { chat } = useChat();
  const { user } = useCurrentUser();
  const queryClient = useQueryClient();

  const messagesContainerRef = useRef();
  const [userScrolled, setUserScrolled] = useState();
  const [notification, setNotification] = useState(0);

  useEffect(() => {
    const chatRoom = supabase
      .channel(chat.id + 'chatWindow')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'messages',
          filter: `chatId=eq.${chat.id}`,
        },
        () => {
          queryClient.invalidateQueries({
            queryKey: ['messages', chat.id],
          });

          const scrollContainer = messagesContainerRef.current;
          if (
            scrollContainer.scrollTop <
            scrollContainer.scrollHeight - scrollContainer.clientHeight - 10
          ) {
            setNotification((current) => current + 1);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(chatRoom);
    };
  }, [chat.id]);

  useEffect(() => {
    const scrollContainer = messagesContainerRef.current;
    if (scrollContainer && !userScrolled) {
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  }, [messages, userScrolled]);

  if (isLoading) return <Spinner />;

  function handleOnScroll() {
    const scrollContainer = messagesContainerRef.current;
    if (scrollContainer) {
      const isScroll =
        scrollContainer.scrollTop <
        scrollContainer.scrollHeight - scrollContainer.clientHeight - 10;
      setUserScrolled(isScroll);
    }

    if (
      scrollContainer.scrollTop ===
      scrollContainer.scrollHeight - scrollContainer.clientHeight
    ) {
      setNotification(0);
    }
  }

  return (
    <Window ref={messagesContainerRef} onScroll={handleOnScroll}>
      <EmptyContainer />
      {messages.map((message) => {
        return <Message message={message} key={message.id} user={user} />;
      })}
      {userScrolled && (
        <NotificationWithArrow
          notification={notification}
          scrollRef={messagesContainerRef}
        />
      )}
    </Window>
  );
}

export default ChatWindow;
