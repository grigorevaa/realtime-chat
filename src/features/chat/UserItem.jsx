import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 90%;
  height: auto;
  background-color: white;
  margin: 0 auto;
  border: 1px solid var(--color-brand-500);
  border-radius: var(--border-radius-sm);
  padding: 0.5rem;
  margin-top: 0.5rem;
  max-width: 90%;
`;

const Avatar = styled.img`
  flex-shrink: 0;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 100%;
  margin-left: 1rem;
`;

const Nickname = styled.div`
  max-width: 60%;
  overflow: break-word;
  word-wrap: break-word;
`;

function UserItem({ user }) {
  return (
    <Container>
      <Avatar src={user.avatar ? user.avatar : '/default-user.jpg'} />
      <Nickname>{user.nickname}</Nickname>
    </Container>
  );
}

export default UserItem;
