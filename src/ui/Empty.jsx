import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

function Empty({ resourceName }) {
  const navigate = useNavigate();
  return (
    <Container>
      <h3>Specified {resourceName} cannot be find</h3>
      <Button onClick={() => navigate('/home')}>Return to the home page</Button>
    </Container>
  );
}

export default Empty;
