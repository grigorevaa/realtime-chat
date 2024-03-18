import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createMessage as createMessageApi } from '../../services/apiMessages';
import { useChat } from '../chat/useChat';

export function useCreateMessage() {
  const queryClient = useQueryClient();
  const { chat } = useChat();

  const { mutate: createMessage } = useMutation({
    mutationFn: createMessageApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['messages', chat.id] });
    },
    onError: () => {
      toast.error('Error sending message');
    },
  });

  return { createMessage };
}
