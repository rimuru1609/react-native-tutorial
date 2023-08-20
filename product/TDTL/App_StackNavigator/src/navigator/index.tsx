import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './TabNavigator';
import MyStacks from './StackNavigator';

export default function Navigator() {
  return (
    <MyStacks/>
  );
}