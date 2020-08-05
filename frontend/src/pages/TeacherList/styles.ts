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
    grid-template-columns: repeat(3, 1fr) 5rem;
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

export const SubmitButton = styled.button`
  margin-top: 2.4rem;
  border: 0;
  background-color: var(--color-secundary);
  cursor: pointer;
  transition: background-color 0.2s;
  height: 5.6rem;
  width: 100%;
  border-radius: 0.8rem;

  &:hover,
  &:focus {
    background-color: var(--color-secundary-dark);
  }

  span {
    color: var(--color-button-text);
    font-size: 1.6rem;
    font-family: 'Archivo', sans-serif;
    font-weight: 700;
  }

  svg {
    color: var(--color-button-text);
    display: none;
  }

  ${up('tablet')} {
    align-self: end;
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    margin-bottom: 0.5rem;

    span {
      display: none;
    }

    svg {
      display: block;
    }
  }
`;

export const NotFound = styled.p`
  text-align: center;
  margin-top: 3.2rem;
  font-size: 2rem;
`;
