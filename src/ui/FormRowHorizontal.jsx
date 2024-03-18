import styled from 'styled-components';

const StyledFormRow = styled.div`
  /* display: grid;
  align-items: center;
  grid-template-columns: 10rem 20rem 20rem;
  gap: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem; */
  display: grid;
  align-items: center;
  grid-template-columns: 10rem 1fr 1.2fr;
  gap: 2.4rem;
  padding: 1.2rem 0;

  border-bottom: 1px solid var(--color-grey-100);
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 1.2rem;
`;

const Error = styled.span`
  font-size: 1.2rem;
  color: var(--color-red-700);
`;

function FormRowHorizontal({ children, label, error }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRowHorizontal;
