import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Container = styled.div`
  width: 100vw !important;
  height: 100vh;

  ${up('tablet')} {
    max-width: 100vw !important;
  }
`;

export const Main = styled.main`
  background-color: var(--color-box-base);
  width: 100%;
  max-width: 74rem;
  border-radius: 0.8rem;
  margin: -3.2rem auto 3.2rem;
  padding-top: 6.4rem;
  overflow: hidden;

  label {
    color: var(--color-text-complement);
  }
`;

export const Fieldset = styled.fieldset`
  border: 0;
  padding: 0 2.4rem;

  legend {
    font-family: 'Archivo', sans-serif;
    font-weight: 700;
    font-size: 2.4rem;
    color: var(--color-text-title);
    margin-bottom: 2.4rem;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid var(--color-line-in-white);

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    button {
      background-color: transparent;
      border: 0;
      color: var(--color-primary);
      font-family: 'Archivo', sans-serif;
      font-weight: 700;
      font-size: 1.6rem;
      cursor: pointer;
      transition: color 0.2s;

      &:hover,
      &:focus {
        color: var(--color-primary-dark);
      }
    }
  }

  + fieldset {
    margin-top: 6.4rem;
  }

  ${up('tablet')} {
    padding: 0 6.4rem;
  }
`;

export const Footer = styled.footer`
  padding: 4rem 2.4rem;
  margin-top: 6.4rem;
  background-color: var(--color-box-footer);
  border-top: 1px solid var(--color-line-in-white);

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--color-text-complement);

    img {
      margin-right: 2rem;
    }
  }

  button {
    width: 100%;
    height: 5.6rem;
    background-color: var(--color-secundary);
    color: var(--color-button-text);
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font-family: 'Archivo', sans-serif;
    font-weight: 700;
    font-size: 1.6rem;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s;
    margin-top: 3.2rem;

    &:hover,
    &:focus {
      background-color: var(--color-secundary-dark);
    }
  }

  ${up('tablet')} {
    padding: 4rem 6.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      justify-content: space-between;
    }

    button {
      margin-top: 0;
      width: 20rem;
    }
  }
`;

export const ScheduleItem = styled.div`
  ${up('tablet')} {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    column-gap: 1.6rem;

    .input-block {
      margin-top: 0;
    }
  }
`;
