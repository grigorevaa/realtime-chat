import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getUsers } from '../../services/apiUsers';

export function useUsers(userIds) {
  const { chatId } = useParams();
  const { data: users, isLoading } = useQuery({
    queryKey: [`usersIn${chatId}`, userIds],
    queryFn: () => getUsers(userIds),
    retry: false,
  });

  return { users, isLoading };
}
