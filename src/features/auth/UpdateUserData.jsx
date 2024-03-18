import { useState } from 'react';
import Button from '../../ui/Button';
import ButtonContainer from '../../ui/ButtonContainer';
import FileInput from '../../ui/FileInput';
import Form from '../../ui/Form';
import FormRowHorizontal from '../../ui/FormRowHorizontal';
import Input from '../../ui/Input';
import { useCurrentUser } from './useCurrentUser';
import { useUpdateUser } from './useUpdateUser';

function UpdateUserData() {
  const {
    user: {
      email,
      user_metadata: { nickname: currentNickname },
    },
  } = useCurrentUser();

  const { isUpdating, updateUser } = useUpdateUser();
  const [nickname, setNickname] = useState(currentNickname);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!nickname) return;
    updateUser(
      { nickname, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowHorizontal label="Email address">
        <Input value={email} disabled />
      </FormRowHorizontal>
      <FormRowHorizontal label="Nickname">
        <Input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          id="nickname"
          disabled={isUpdating}
        />
      </FormRowHorizontal>
      <FormRowHorizontal label="Avatar">
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </FormRowHorizontal>

      <ButtonContainer>
        <Button size="small" $variation="secondary" type="reset">
          Cancel
        </Button>
        <Button size="small">Update</Button>
      </ButtonContainer>
    </Form>
  );
}

export default UpdateUserData;
