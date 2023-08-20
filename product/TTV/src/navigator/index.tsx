import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyStack from './TabNavigator';

const App =()=>{
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
export default App;