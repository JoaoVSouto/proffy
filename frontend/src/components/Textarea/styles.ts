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
    bottom: 7px;
    opacity: 0;
    vertical-align: top;
    transition: opacity 0.2s;
  }

  &:focus-within::after {
    opacity: 1;
  }

  label {
    font-size: 1.4rem;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 16rem;
  min-height: 8rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  background-color: var(--color-input-background);
  border: 1px solid var(--color-line-in-white);
  outline: 0;
  resize: vertical;
  padding: 1.2rem 1.6rem;
  font-size: 1.6rem;
  font-family: 'Archivo', sans-serif;
`;

export const Label = styled.label``;
