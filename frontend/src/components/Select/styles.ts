import styled from 'styled-components';

export const Container = styled.div`
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
`;

export const Select = styled.select`
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
  color: var(--color-text-base);

  &:required:invalid {
    color: #c1bccc;
  }

  option {
    color: var(--color-text-base);
  }
`;

export const Label = styled.label``;
