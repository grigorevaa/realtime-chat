import { useState } from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { useCurrentUser } from '../auth/useCurrentUser';
import { useCreateMessage } from '../messages/useCreateMessage';
import { useChat } from './useChat';

const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  /* padding-right: 1rem; */

  background-color: var(--color-brand-600);
  border-radius: 0 0 var(--border-radius-lg) var(--border-radius-lg);
`;

const Input = styled.input`
  border: none;
  overflow: auto;
  word-wrap: break-word;
  width: 100%;
  line-height: 1.8rem;
  font-size: 1rem;
  margin: 0 1.2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: var(--border-radius-lg);

  &:focus {
    border: none;
    outline: 1px solid var(--color-brand-500);
  }
`;

function ChatInput() {
  const [text, setText] = useState('');
  const { createMessage } = useCreateMessage();
  const { chat } = useChat();
  const { user } = useCurrentUser();

  const chatId = chat.id;
  const sendBy = user.id;

  function handleSendMessage() {
    if (!text) return toast.error('Message should not be empty');
    createMessage({ chatId, sendBy, text });
    setText('');
  }

  return (
    <Container>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="write message here..."
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSendMessage();
          }
        }}
      />
      {/* <Button size="small" $variation="secondary" onClick={() => {}}>
        Send
      </Button> */}
    </Container>
  );
}
export default ChatInput;
