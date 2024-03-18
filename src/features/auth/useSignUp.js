import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { signUp as signUpApi } from '../../services/apiAuth';

export function useSignUp() {
  const navigate = useNavigate();

  const { mutate: signUp, isPending: isLoading } = useMutation({
    mutationFn: signUpApi,
    onSuccess: () => {
      toast.success('Account successfully created!');
      navigate('/login');
    },
    onError: () => {
      toast.error(
        'Error creating account: provided email has been used previously'
      );
    },
  });

  return { signUp, isLoading };
}
