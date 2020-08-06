import { StatusBar } from 'expo-status-bar';
import { registerRootComponent, AppLoading } from 'expo';
import {
  useFonts,
  Archivo_400Regular,
  Archivo_700Bold,
} from '@expo-google-fonts/archivo';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import React from 'react';

import AppStack from './routes/AppStack';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <AppStack />

      <StatusBar style="light" />
    </>
  );
};

registerRootComponent(App);

export default App;
