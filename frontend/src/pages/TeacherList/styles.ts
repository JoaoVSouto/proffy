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

export const Main = styled.main`
  margin: 3.2rem auto;
  width: 90%;
`;

export const TeacherItem = styled.article`
  background-color: var(--color-box-base);
  border: 1px solid var(--color-line-in-white);
  border-radius: 0.8rem;
  margin-top: 2.4rem;
  overflow: hidden;

  header {
    padding: 3.2rem 2rem;
    display: flex;
    align-items: center;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }

    div {
      margin-left: 2.4rem;

      strong {
        font-family: 'Archivo', sans-serif;
        font-weight: 700;
        font-size: 2.4rem;
        display: block;
        color: var(--color-text-title);
      }

      span {
        font-size: 1.6rem;
        display: block;
        margin-top: 0.4rem;
      }
    }
  }

  > p {
    padding: 0 2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;
  }

  footer {
    margin-top: 3.2rem;
    padding: 3.2rem 2rem;
    background-color: var(--color-box-footer);
    border-top: 1px solid var(--color-line-in-white);

    display: flex;
    align-items: center;
    justify-content: space-between;

    p strong {
      color: var(--color-primary);
      font-size: 1.6rem;
      display: block;
    }

    button {
      width: 20rem;
      height: 5.6rem;
      background-color: var(--color-secundary);
      color: var(--color-button-text);
      border: 0;
      border-radius: 0.8rem;
      cursor: pointer;
      font-family: 'Archivo', sans-serif;
      font-size: 1.4rem;
      font-weight: 700;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      transition: background-color 0.2s;

      &:hover,
      &:focus {
        background-color: var(--color-secundary-dark);
      }
    }
  }
`;
