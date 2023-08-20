import React from 'react';
import { Button, Text, TextInput, View, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import { useState } from 'react';
import { Image } from 'react-native';
import SearchStyle from './SearchStyle';

const SearchBar = ({ navigation }:any) => {
  const [data, setData] = useState<any>([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetch('https://64d748602a017531bc1319dc.mockapi.io/api/users')
      .then(response => response.json())
      .then(json => {
        console.log(typeof json)
        //console.log( json[0])
        setData(json);
      })
      .catch(error => console.error(error));
  }, []);
  const handleDelete = (itemId:any) => {
    fetch(`https://64d748602a017531bc1319dc.mockapi.io/api/users/${itemId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(json => {
        setData(data.filter((item: any) => item.id !== itemId));
      })
      .catch(error => console.error(error));
  };

const handleEdit = (item:any) => {
  //navigation.navigate('Item',{fullname:item.fullname,email:item.email,password:item.password})
}
const handleDetail = (item:any) => {
  navigation.navigate('Details',{index:item})
}
const handleClearSearch=()=>{
  fetch(`https://64d748602a017531bc1319dc.mockapi.io/api/users`)
  .then((response) => response.json())
  .then((json) => {
    setData(json);
  })
  .catch((error) => console.error(error));
}
const handleSearch = () => {
  if (searchText === '') {
    fetch(`https://64d748602a017531bc1319dc.mockapi.io/api/users`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.error(error));
  } else {
  const filteredData = data.filter((item: any) =>
    item.fullname.toLowerCase().includes(searchText.toLowerCase())
  );
  
  setData(filteredData);}
}

  return (
    <>
    <View  style={SearchStyle.search} >
      <TextInput
          style={SearchStyle.searchInput}
          onChangeText={text => setSearchText(text)}
          value={searchText}
          placeholder="Search..."
          onSubmitEditing={handleSearch}
    />
    <TouchableOpacity
          style={SearchStyle.clearButtonParent}
          onPress={handleClearSearch}>
          <Image
            style={SearchStyle.clearButton}
            source={require('../../assets/x.png')}
          />
        </TouchableOpacity>
    </View>
  <View>
      <ScrollView>
    
          {data.map((item:any,index:any)=>{
              return(
                  <View style={SearchStyle.item_course}  key={index}>
                    <Image
                                  style={SearchStyle.image}
                                  resizeMode="center"
                                  source={{uri: item.image}}
                      />  
                      <View>
                          <Text style={SearchStyle.txt_name}>{index+1}. {item.fullname}</Text>
                          <Text style={SearchStyle.txt_item}>{item.email}</Text>
                          <Text style={SearchStyle.txt_item}>{item.password}</Text>
                      </View>
                      <View>
                          <TouchableOpacity
                              onPress={()=>handleDelete(item.id)}
                          >
                              <Text style={SearchStyle.txt_del}>Delete</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                              onPress={()=>handleEdit(item)}
                          >
                              <Text style={SearchStyle.txt_edit}>Edit</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                              onPress={()=>handleDetail(item.id)}
                          >
                              <Text style={SearchStyle.txt_detail}>Detail</Text>
                              
                          </TouchableOpacity>
                      </View>
                  </View>
              )
          })}
    </ScrollView>
    <TouchableOpacity
            style={SearchStyle.buttonStyle}
            onPress={() => navigation.goBack()}>
            <Text style={SearchStyle.buttonText}> GO BACK </Text>
          </TouchableOpacity>
  
   
  </View>
  
  </>
  
    

  );
};
export default SearchBar;