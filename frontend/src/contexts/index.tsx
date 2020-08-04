import React from 'react';

import ThemeContext from './ThemeContext';

const AppProvider: React.FC = ({ children }) => {
  return <ThemeContext>{children}</ThemeContext>;
};

export default AppProvider;
