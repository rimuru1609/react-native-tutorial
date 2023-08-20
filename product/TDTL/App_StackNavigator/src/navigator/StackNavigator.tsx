import * as React from 'react';
import { Button, FlatList, Image, ImageBackground, Pressable, SafeAreaView, StatusBar, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native-paper';
import HomeScreen from '../views/Home';
import { useEffect, useState } from 'react';
import { DogDetailScreenProps, DogPictureParamList } from './type';
import SearchScreen from '../views/Search';
import DogDetailScreen from '../views/Detail';


const Stack = createNativeStackNavigator<DogPictureParamList>();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="DogDetail" component={DogDetailScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
