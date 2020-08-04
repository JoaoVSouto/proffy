import React from 'react';

import Routes from './routes';

import AppProvider from './contexts';

import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Routes />

      <GlobalStyles />
    </AppProvider>
  );
};

export default App;
