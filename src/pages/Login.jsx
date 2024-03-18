import { useNavigate } from 'react-router-dom';
import LoginForm from '../features/auth/LoginForm';
import Button from '../ui/Button';
import Container from '../ui/Container';
import Heading from '../ui/Heading';
import Label from '../ui/Label';
import Layout from '../ui/Layout';

function Login() {
  const navigate = useNavigate();

  return (
    <Layout>
      <Heading as="h3">Realtime chat app</Heading>
      <LoginForm />
      <Container>
        <Label>Dont have an account?</Label>
        <Button size="medium" onClick={() => navigate('/signup')}>
          Sign up
        </Button>
      </Container>
    </Layout>
  );
}

export default Login;
