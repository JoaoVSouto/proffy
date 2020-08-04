import React from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

const theme = {
  breakpoints: {
    tablet: '700px',
    desktop: '1100px',
  },
};

const ThemeProvider: React.FC = ({ children }) => {
  return <StyledProvider theme={theme}>{children}</StyledProvider>;
};

export default ThemeProvider;
