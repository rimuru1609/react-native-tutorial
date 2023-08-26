import React from 'react';
import { Button, Text, TextInput, View, StyleSheet, FlatList, ScrollView, TouchableOpacity,Image } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';
import { DetailScreenProps } from '../../navigator/type';
import FormStyle from './FormStyle';

const Detail = ({ navigation,route }:DetailScreenProps) => {
  const indexs=route.params.index;
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    console.log(indexs);
    fetch(`https://64d748602a017531bc1319dc.mockapi.io/api/users/${indexs}`)
      .then(response => response.json())
      .then(json => {
        //console.log(typeof json)
        setData(json);
        // /console.log(json);
      })
      .catch(error => console.error(error));
  }, []);
  return (
    <View style={FormStyle.mainContainer}>
      <View style={FormStyle.courseContainer}>
      {data.image && (
        <Image
          style={FormStyle.cardImage}
          source={{uri: data.image}}
          resizeMode="contain"
        />
        )}
        <Text style={FormStyle.mainHeader}>Full name: {data.fullname}</Text>
        <Text style={FormStyle.description}>Email: {data.email}</Text>
        <Text style={FormStyle.description}>Password{data.password}</Text>
        <View style={FormStyle.buttonContainer}>  
        <TouchableOpacity
            style={FormStyle.buttonStyle}
            onPress={() => navigation.navigate("Home")}>
            <Text style={FormStyle.buttonText}> Go to Home </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
)};


export default Detail;