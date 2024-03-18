import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteMessage as deleteMessageApi } from '../../services/apiMessages';
import { useChat } from '../chat/useChat';

export function useDeleteMessage() {
  const queryClient = useQueryClient();
  const { chat } = useChat();

  const { mutate: deleteMessage } = useMutation({
    mutationFn: deleteMessageApi,
    onSuccess: () => {
      toast.success('Message successfully deleted');
      queryClient.invalidateQueries({ queryKey: ['messages', chat.id] });
    },
    onError: () => {
      toast.error('Error deleting message');
    },
  });
  return { deleteMessage };
}
