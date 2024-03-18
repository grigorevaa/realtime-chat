import styled from 'styled-components';
import { useCurrentUser } from './useCurrentUser';

const StyledUserInfo = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;
const Avatar = styled.img`
  display: block;
  height: 3rem;
  width: 3rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

function UserInfo() {
  const { user } = useCurrentUser();
  const { avatar, nickname } = user.user_metadata;

  return (
    <StyledUserInfo>
      <Avatar
        src={avatar || '/default-user.jpg'}
        alt={`Avatar of ${nickname}`}
      />
      <span>{nickname}</span>
    </StyledUserInfo>
  );
}

export default UserInfo;
