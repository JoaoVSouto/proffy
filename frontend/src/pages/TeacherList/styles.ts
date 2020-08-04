import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Container = styled.div`
  width: 100vw !important;
  height: 100vh;

  ${up('tablet')} {
    max-width: 100% !important;
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

export const InputBlock = styled.div`
  position: relative;

  + div {
    margin-top: 1.4rem;
  }

  &::after {
    content: '';
    width: calc(100% - 3.2rem);
    height: 2px;
    background-color: var(--color-primary-light);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:focus-within::after {
    opacity: 1;
  }

  label {
    font-size: 1.4rem;
  }

  ${up('tablet')} {
    + div {
      margin-top: 0;
    }
  }
`;

export const Label = styled.label`
  color: var(--color-text-in-primary);
`;

export const Input = styled.input`
  width: 100%;
  height: 5.6rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  background-color: var(--color-input-background);
  border: 1px solid var(--color-line-in-white);
  outline: 0;
  padding: 0 1.6rem;
  font-size: 1.6rem;
  font-family: 'Archivo', sans-serif;
`;
