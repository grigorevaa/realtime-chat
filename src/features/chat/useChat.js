import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getChat } from '../../services/apiChat';

export function useChat() {
  const { chatId } = useParams();

  const {
    isLoading,
    data: chat,
    error,
  } = useQuery({
    queryKey: ['chat', chatId],
    queryFn: () => getChat(chatId),
    retry: false,
  });

  return { isLoading, chat, error };
}
