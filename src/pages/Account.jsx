import styled from 'styled-components';
import UpdateUserData from '../features/auth/UpdateUserData';
import UpdateUserPassword from '../features/auth/UpdateUserPassword';
import Heading from '../ui/Heading';

const Header = styled.h2`
  font-weight: 300;
  font-size: 1.6rem;
  color: var(--color-grey-400);
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60rem;
  height: 100%;
  gap: 1rem;
`;

function Account() {
  return (
    <Container>
      <Heading as="h3">Update your account</Heading>
      <Row>
        <Header>Update user data</Header>
        <UpdateUserData />
      </Row>

      <Row>
        <Header>Update password</Header>
        <UpdateUserPassword />
      </Row>
    </Container>
  );
}

export default Account;
