import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-rows: 4rem 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem;
  overflow: auto;
  /* &::-webkit-scrollbar {
    display:
  } */
`;

const Container = styled.div`
  max-width: 120rem;
  height: 100%;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
