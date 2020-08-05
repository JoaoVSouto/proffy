import React, { SelectHTMLAttributes } from 'react';

import { Container, Select as StyledSelect, Label } from './styles';

interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<IProps> = ({
  name,
  label,
  options,
  placeholder,
  ...rest
}) => {
  return (
    <Container className="select-block">
      <Label htmlFor={name}>{label}</Label>
      <StyledSelect defaultValue="" id={name} name={name} {...rest}>
        <option value="" disabled hidden>
          {placeholder}
        </option>

        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </Container>
  );
};

export default Select;
