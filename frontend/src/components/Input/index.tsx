import React, { InputHTMLAttributes } from 'react';

import { Container, Input as StyledInput, Label } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<IProps> = ({ name, label, ...rest }) => {
  return (
    <Container className="input-block">
      <Label htmlFor={name}>{label}</Label>
      <StyledInput id={name} name={name} {...rest} />
    </Container>
  );
};

export default Input;
