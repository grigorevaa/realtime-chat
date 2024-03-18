import styled, { css } from 'styled-components';

const variations = {
  primary: css`
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    background-color: var(--color-grey-0);
    color: var(--color-grey-600);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-100);
    }
  `,
};

const sizes = {
  small: css`
    font-size: 1rem;
    padding: 0.6rem 1rem;
    font-weight: 500;
    text-align: center;
  `,
  medium: css`
    font-size: 1.2rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.4rem;
    padding: 1.4rem 1.8rem;
    font-weight: 500;
  `,
};

const Button = styled.button`
  border-radius: var(--border-radius-sm);
  border: none;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.$variation]}
`;

Button.defaultProps = {
  $variation: 'primary',
  size: 'medium',
};

export default Button;
