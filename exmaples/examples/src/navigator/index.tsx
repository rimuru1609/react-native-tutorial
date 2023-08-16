import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './TabNavigator';

export default function Navigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
