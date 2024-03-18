import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRowVertical from '../../ui/FormRowVertical';
import Input from '../../ui/Input';

function JoinChat() {
  const [chatId, setChatId] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!chatId) return;

    navigate(`/chat/${chatId}`);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Join chat">
        <Input
          value={chatId}
          onChange={(e) => setChatId(e.target.value)}
          placeholder="Write chat id here..."
        ></Input>
      </FormRowVertical>
      <FormRowVertical>
        <Button>Join</Button>
      </FormRowVertical>
    </Form>
  );
}

export default JoinChat;
