import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Container = styled.div`
  width: 100vw !important;
  height: 100vh;

  label {
    color: var(--color-text-in-primary);
  }

  ${up('tablet')} {
    max-width: 100% !important;

    .input-block,
    .select-block {
      margin-top: 0;
    }
  }
`;

export const Form = styled.form`
  margin-top: 3.2rem;

  ${up('tablet')} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -28px;
  }
`;

export const Main = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  ${up('tablet')} {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;
  }
`;
