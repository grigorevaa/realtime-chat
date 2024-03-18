import { HiHome, HiUser } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logout from '../features/auth/Logout';
import ButtonIcon from './ButtonIcon';

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate('/home')}>
          <HiHome />
        </ButtonIcon>
      </li>
      <li>
        <ButtonIcon onClick={() => navigate('/account')}>
          <HiUser />
        </ButtonIcon>
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
