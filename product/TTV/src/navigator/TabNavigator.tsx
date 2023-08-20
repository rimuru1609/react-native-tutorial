import * as React from 'react';
import { Button, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Form from '../views/Home/Form';
import SearchBar from '../views/Search/SearchBar';
import Detail from '../views/Detail/Detail';
import { MainStackParamList } from './type';

const Stack = createNativeStackNavigator<MainStackParamList>();
const MyStack=()=> {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{ headerStyle: { backgroundColor: '#809fff' } }}>
      <Stack.Screen name="Home" component={Form}  options={{ headerTitleStyle: { color: '#eee',fontWeight:'bold' }, headerTitleAlign: 'center'}}/>
      <Stack.Screen name="Search" component={SearchBar} options={{ headerTitleStyle: { color: '#eee',fontWeight:'bold' }, headerTitleAlign: 'center' }}/>
      <Stack.Screen name="Details" component={Detail} options={{ headerTitleStyle: { color: '#eee',fontWeight:'bold' }, headerTitleAlign: 'center' }}/>
    </Stack.Navigator>
  );
}

export default MyStack;