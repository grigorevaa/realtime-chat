import styled from 'styled-components';

import Spinner from '../../ui/Spinner';
import UserItem from './UserItem';
import { useUsers } from './useUsers';

const Container = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;

  width: 18rem;
  height: 100%;
  background-color: red;
  border-radius: var(--border-radius-lg);
  justify-content: space-between;

  background-color: var(--color-brand-200);
  border: 1px solid var(--color-brand-600);
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 4rem;
  background-color: var(--color-brand-600);
  color: var(--color-brand-50);
  font-size: 1.2rem;
`;

const LowerBorder = styled.div`
  min-height: 4rem;
  background-color: var(--color-brand-600);
`;

const List = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

function UsersList({ onlineUsersIds }) {
  const { users, isLoading } = useUsers(onlineUsersIds);
  return (
    <Container>
      <Header>Users in chat</Header>
      <List>
        {isLoading ? (
          <Spinner />
        ) : (
          users?.map((user) => <UserItem user={user} key={user.id} />)
        )}
      </List>
      <LowerBorder />
    </Container>
  );
}

export default UsersList;
