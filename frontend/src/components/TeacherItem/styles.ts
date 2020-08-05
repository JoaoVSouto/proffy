import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Container = styled.article`
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
    white-space: pre-wrap;
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

    a {
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
      text-decoration: none;

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

  ${up('tablet')} {
    header,
    footer {
      padding: 3.2rem;
    }

    > p {
      padding: 0 3.2rem;
    }

    footer {
      p strong {
        display: initial;
        margin-left: 1.6rem;
      }

      a {
        width: 24.5rem;
        font-size: 1.6rem;
        justify-content: center;
      }

      img {
        margin-right: 1.6rem;
      }
    }
  }
`;
