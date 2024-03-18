import { useState } from 'react';
import toast from 'react-hot-toast';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRowVertical from '../../ui/FormRowVertical';
import Input from '../../ui/Input';
import Label from '../../ui/Label';
import { useLogin } from './useLogin';

function LoginForm() {
  const [email, setEmail] = useState('text2@example.com');
  const [password, setPassword] = useState('12341234');
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please enter password and email');
      return;
    }

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical>
        <Label>Sign in</Label>
      </FormRowVertical>

      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          disabled={isLoading}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          id="password"
          type="password"
          autoComplete="current-password"
          disabled={isLoading}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="medium" disabled={isLoading}>
          Log in
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
