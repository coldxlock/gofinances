
import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Welcome } from './src/Components/Welcome';

export default function App() {
  return (
    <Welcome  title='React Native Bare Workflor com Typescript'  />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
