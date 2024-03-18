import { FaArrowCircleDown } from 'react-icons/fa';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: absolute;
  bottom: 4.5rem;
  left: 0;
  width: 100%;
`;

const Notification = styled.div`
  background-color: white;
  border: 2px solid var(--color-brand-500);
  border-radius: var(--border-radius-md);
  cursor: pointer;
  text-align: center;
  width: 10rem;
  margin: 0 auto;
`;

const Label = styled.h4`
  font-size: 1rem;
  font-weight: 600;
`;

const ButtonIcon = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  border-radius: 100%;
  background-color: var(--color-grey-100);
  border: none;
  transition: all 0.2s;

  &:focus {
    border-color: var(--color-brand-500);
  }

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-500);
    &:hover {
      color: var(--color-brand-700);
    }
  }
`;

function NotificationWithArrow({ notification, scrollRef }) {
  function handleClick() {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }

  return (
    <StyledContainer>
      {notification ? (
        <Notification onClick={handleClick}>
          <Label>New {notification} messages</Label>
        </Notification>
      ) : (
        <ButtonIcon onClick={handleClick}>
          <FaArrowCircleDown />
        </ButtonIcon>
      )}
    </StyledContainer>
  );
}

export default NotificationWithArrow;
