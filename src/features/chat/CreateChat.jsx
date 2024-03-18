import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRowVertical from '../../ui/FormRowVertical';
import Input from '../../ui/Input';
import { useCurrentUser } from '../auth/useCurrentUser';
import { useCreateChat } from './useCreateChat';

function CreateChat() {
  const { handleSubmit, register, formState } = useForm();
  const { errors } = formState;
  const { user } = useCurrentUser();
  const { createChat, isPending } = useCreateChat();
  const navigate = useNavigate();

  function onSubmit({ chatName }) {
    createChat(
      { userId: user.id, chatName },
      {
        onSuccess: (chatId) => {
          navigate(`/chat/${chatId}`);
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical
        label="Create chat room"
        error={errors?.chatName?.message}
      >
        <Input
          id="chatName"
          type="text"
          placeholder="Write chat name here..."
          disabled={isPending}
          {...register('chatName', {
            required: 'This field is required',
            minLength: {
              value: 4,
              message: 'Minimum length for chat name is 4 symbols',
            },
          })}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button>Create</Button>
      </FormRowVertical>
    </Form>
  );
}

export default CreateChat;
