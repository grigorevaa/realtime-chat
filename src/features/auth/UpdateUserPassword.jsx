import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import ButtonContainer from '../../ui/ButtonContainer';
import Form from '../../ui/Form';
import FormRowHorizontal from '../../ui/FormRowHorizontal';
import Input from '../../ui/Input';
import { useUpdateUser } from './useUpdateUser';

function UpdateUserPassword() {
  const { handleSubmit, register, formState, reset, getValues } = useForm();
  const { errors } = formState;
  const { isUpdating, updateUser } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset() });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowHorizontal label="Password" error={errors?.password?.message}>
        <Input
          id="password"
          type="password"
          disabled={isUpdating}
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 8,
              message: 'Minimum length for password is 8 symbols',
            },
          })}
        />
      </FormRowHorizontal>
      <FormRowHorizontal
        label="Confirm Password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          id="confirm-password"
          type="password"
          disabled={isUpdating}
          {...register('passwordConfirm', {
            required: 'This field is required',
            validate: (value) =>
              value === getValues().password || 'Passwords need to match',
          })}
        />
      </FormRowHorizontal>

      <ButtonContainer>
        <Button
          size="small"
          $variation="secondary"
          type="reset"
          onClick={reset}
        >
          Cancel
        </Button>
        <Button size="small" disabled={isUpdating}>
          Update
        </Button>
      </ButtonContainer>
    </Form>
  );
}

export default UpdateUserPassword;
