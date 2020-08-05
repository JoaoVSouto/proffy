import React, { TextareaHTMLAttributes } from 'react';

import { Container, Textarea as StyledTextarea, Label } from './styles';

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<IProps> = ({ name, label, ...rest }) => {
  return (
    <Container className="textarea-block">
      <Label htmlFor={name}>{label}</Label>
      <StyledTextarea id={name} name={name} {...rest} />
    </Container>
  );
};

export default Textarea;
