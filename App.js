import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App(){
  return(
    <NavigationContainer>
      <Routes
      
      />
    </NavigationContainer>
  )
}