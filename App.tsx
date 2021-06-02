import React from 'react';
import { useFonts, Roboto_300Light, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { LandingPage } from './src/pages/LandingPage';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium
  });
  if(!fontsLoaded){
    return <AppLoading />
  }
  return (
    <>
      <LandingPage />
    </>
  );
}
