import { TiDelete } from 'react-icons/ti';
import styled, { css } from 'styled-components';
import { dateToHoursMins } from '../../utils/formatDate';
import { useDeleteMessage } from './useDeleteMessage';

const positions = {
  left: css`
    margin-right: auto;
  `,

  right: css`
    margin-left: auto;
  `,
};

const MessageItem = styled.div`
  flex-shrink: 0;
  background-color: white;
  min-height: 0;
  border-radius: var(--border-radius-sm);
  color: black;
  display: flex;
  gap: 0.5rem;
  justify-content: left;
  min-height: 0;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  padding: 0.5rem 0.5rem;
  height: auto;
  border: 1px solid var(--color-brand-500);

  ${(props) => positions[props.$position]};
`;

const Text = styled.p`
  font-size: 1rem;
  margin: 0.2rem 0rem;
  word-wrap: break-word;
  hyphens: auto;
  max-width: 18rem;
  padding-right: 0.5rem;
`;

const Avatar = styled.img`
  flex-shrink: 0;
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerNameDate = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
`;

const Name = styled.h4`
  font-weight: bold;
  font-size: 1rem;
  margin: 0.2rem 0;
`;

const StyledDate = styled.h4`
  font-size: 0.8rem;
  color: var(--color-grey-500);
  margin: 0;
`;

const DeleteContainer = styled.div`
  display: flex;
  width: 100%;
`;

const ButtonIcon = styled.button`
  width: 1.2rem;
  height: 1.2rem;
  border: none;
  background: none;
  border-radius: 100%;

  margin-left: auto;
  transition: all 0.2s;

  &:focus {
    border-color: var(--color-brand-500);
  }

  & svg {
    text-align: center;
    width: 1.2rem;
    height: 1.2rem;
    color: var(--color-brand-500);
    &:hover {
      color: var(--color-brand-700);
    }
  }
`;

function Message({ message, user }) {
  const { deleteMessage } = useDeleteMessage();
  const { profiles: userProfile, sendBy, text, created_at } = message;
  const position = user.id === sendBy ? 'right' : 'left';
  const isSendBy = user.id === sendBy;

  return (
    <MessageItem $position={position}>
      <Avatar
        src={userProfile.avatar ? userProfile.avatar : '/default-user.jpg'}
      />
      <Container>
        <ContainerNameDate>
          <Name>{userProfile.nickname}</Name>
          {/* <StyledDate>{new Date(created_at).toLocaleString()}</StyledDate> */}
          <StyledDate>{dateToHoursMins(created_at)}</StyledDate>
          {isSendBy && (
            <DeleteContainer>
              <ButtonIcon
                onClick={() => {
                  deleteMessage(message.id);
                }}
              >
                <TiDelete />
              </ButtonIcon>
            </DeleteContainer>
          )}
        </ContainerNameDate>

        <Text>{text}</Text>
      </Container>
    </MessageItem>
  );
}

export default Message;
