import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createChat as createChatApi } from '../../services/apiChat';

export function useCreateChat() {
  const {
    mutate: createChat,
    isPending,
    data,
  } = useMutation({
    mutationFn: createChatApi,
    onSuccess: () => {
      toast.success('Chat successfully created!');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { data, createChat, isPending };
}
