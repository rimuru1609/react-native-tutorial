import React from 'react';
import { Button, Text, TextInput, View, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import { useState } from 'react';

const SearchBar = () => {
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
      <TextInput
        style={styles.searchInput}
        onChangeText={text => setSearchText(text)}
        value={searchText}
        placeholder="Search..."
        onSubmitEditing={handleSearch}
  />
  <ScrollView>
                {data.map((item:any,index:any)=>{
                    return(
                        <View style={styles.item_course}  key={index}>
                            <View>
                                <Text style={styles.txt_name}>{index+1}. {item.id}</Text>
                                <Text style={styles.txt_item}>{item.fullname}</Text>
                                <Text style={styles.txt_item}>{item.email}</Text>
                                <Text style={styles.txt_item}>{item.password}</Text>
                                
                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={()=>handleDelete(item.id)}
                                >
                                    <Text style={styles.txt_del}>Delete</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={()=>handleEdit(item)}
                                >
                                    <Text style={styles.txt_edit}>Edit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })}
  </ScrollView>
    </>
    

  );
};

const styles = StyleSheet.create({

  item_course : {
    padding :11,
    borderBottomWidth: 1,
    borderBottomColor : "#e2e2e2",
    flexDirection : "row",
    justifyContent:"space-between",
},
txt_name : {
    fontSize : 18,
    marginTop : 5,
    fontWeight : "bold"
},
txt_item : {
    fontSize : 14,
    marginTop : 5
},
txt_enabled : {
    fontSize : 14,
    marginTop : 5,
    color:"green",
    fontWeight : "bold"
},
txt_disabled : {
    fontSize : 14,
    marginTop : 5,
    color:"yellow",
    fontWeight : "bold"
},
txt_del:{
    fontSize : 14,
    marginTop : 5,
    color:"red",
    fontWeight : "bold"
},
txt_edit:{
    fontSize : 14,
    marginTop : 5,
    color:"blue",
    fontWeight : "bold"
},
searchInput: {
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
  marginBottom: 10,
  paddingHorizontal: 10,
  marginTop:15
},
});

export default SearchBar;