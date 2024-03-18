import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRowVertical from '../../ui/FormRowVertical';
import Input from '../../ui/Input';
import Label from '../../ui/Label';
import { useSignUp } from './useSignUp';

function SignUpForm() {
  const { handleSubmit, register, formState, reset, getValues } = useForm();
  const { errors } = formState;
  const { signUp, isLoading } = useSignUp();

  function onSubmit({ nickname, email, password }) {
    signUp(
      {
        nickname,
        email,
        password,
      },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical>
        <Label>Registration</Label>
      </FormRowVertical>
      <FormRowVertical label="Nickname" error={errors?.nickname?.message}>
        <Input
          id="nickname"
          type="text"
          disabled={isLoading}
          {...register('nickname', {
            required: 'This field is required',
            minLength: {
              value: 2,
              message: 'Minimum length for nickname is 4 symbols',
            },
          })}
        />
      </FormRowVertical>
      <FormRowVertical label="Email" error={errors?.email?.message}>
        <Input
          id="email"
          type="email"
          disabled={isLoading}
          {...register('email', {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Please provide a valid email address',
            },
          })}
        />
      </FormRowVertical>
      <FormRowVertical label="Password" error={errors?.password?.message}>
        <Input
          id="password"
          type="password"
          disabled={isLoading}
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 8,
              message: 'Minimum length for password is 8 symbols',
            },
          })}
        />
      </FormRowVertical>
      <FormRowVertical
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          id="confirm-password"
          type="password"
          disabled={isLoading}
          {...register('passwordConfirm', {
            required: 'This field is required',
            validate: (value) =>
              value === getValues().password || 'Passwords need to match',
          })}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Button size="medium" disabled={isLoading}>
          Make an account
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default SignUpForm;
