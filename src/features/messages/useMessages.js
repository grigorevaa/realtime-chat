import { useQuery } from '@tanstack/react-query';
import { getMessages } from '../../services/apiMessages';
import { useChat } from '../chat/useChat';

export function useMessages() {
  const { chat } = useChat();

  const {
    isLoading,
    data: messages,
    error,
  } = useQuery({
    queryKey: ['messages', chat.id],
    queryFn: () => getMessages(chat.id),
  });

  return { isLoading, error, messages };
}
