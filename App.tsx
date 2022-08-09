import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  
} from '@expo-google-fonts/poppins'

import {
  Inter_400Regular,

} from '@expo-google-fonts/inter';

import theme from './src/global/styles/theme';
import { CategorySelect } from './src/screens/CategorySelect'


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Inter_400Regular
  });

  if (!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <CategorySelect />  
    </ThemeProvider>
    
  )
}
