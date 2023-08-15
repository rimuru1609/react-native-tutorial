/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  itemname: {
    margin: 3,
    fontSize: 15,
    height: 40,
  },
  inputs: {
    height: 50,
  },
  clearButtonParent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  clearButton: {
    height: 16,
    width: 16,
  },
  searchbar: {
    marginLeft: 25,
    marginRight: 25,
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

// const Dogs = [
//   {
//     id: '1',
//     age: '1',
//     location: 'France',
//     breed: 'France',
//     name: 'Happy',
//     ref: 'https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?w=1060&t=st=1691341969~exp=1691342569~hmac=b923b91f9337575cc31f62d832f5689b5d46d9d0ce3bd500901f9f7f0b197009',
//   },
//   {
//     id: '2',
//     age: '1',
//     location: 'VietNam',
//     breed: 'VietNam',
//     name: 'Happy',
//     ref: 'https://img.freepik.com/free-photo/cute-small-puppy-corgi-dog-calmly-posing-isolated-white-studio-background-looks-happy_155003-46197.jpg?w=1060&t=st=1691342054~exp=1691342654~hmac=a8fa2ee99c35e19843fe9bb0b1b482a299716cd913d93cecfbee7bdd8f6c33df',
//   },
//   {
//     id: '3',
//     age: '1',
//     location: 'England',
//     breed: 'England',
//     name: 'Happy',
//     ref: 'https://img.freepik.com/free-photo/dog-waiting-veterinarian-office_23-2149198673.jpg?w=360&t=st=1691342072~exp=1691342672~hmac=351223d2b18fd6a96407ee52e836a4597fff431e0a85b652d29eb8fe6e761478',
//   },
//   {
//     id: '4',
//     age: '1',
//     location: 'Japan',
//     breed: 'Japan',
//     name: 'Cool',
//     ref: 'https://img.freepik.com/premium-photo/chow-chow-front-black_100800-4400.jpg?w=1060',
//   },
//   {
//     id: '5',
//     age: '1',
//     location: '5',
//     breed: '5',
//     name: '5',
//     ref: 'https://img.freepik.com/free-photo/cute-small-puppy-corgi-dog-calmly-posing-isolated-white-studio-background-looks-happy_155003-46197.jpg?w=1060&t=st=1691342054~exp=1691342654~hmac=a8fa2ee99c35e19843fe9bb0b1b482a299716cd913d93cecfbee7bdd8f6c33df',
//   },
//   {
//     id: '6',
//     age: '1',
//     location: '5',
//     breed: '5',
//     name: '5',
//     ref: 'https://img.freepik.com/free-photo/cute-small-puppy-corgi-dog-calmly-posing-isolated-white-studio-background-looks-happy_155003-46197.jpg?w=1060&t=st=1691342054~exp=1691342654~hmac=a8fa2ee99c35e19843fe9bb0b1b482a299716cd913d93cecfbee7bdd8f6c33df',
//   },
// ];
const DogPicture = () => {
  const [text, setText] = useState('');
  const [data, setData] = useState<any>([]);
  const url = 'https://64dae644593f57e435b040a3.mockapi.io/api/dogs/dogs';
  const handleTextChange = (input: string) => {
    setText(input);
  };

  const handleClearSearch = () => {
    setText('');
  };

  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(json => setData(json))
      .catch(error => console.error(error)); // .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchbar}>
        <TextInput
          style={styles.inputs}
          clearButtonMode="always"
          placeholder="Search The Dog By Name!"
          onChangeText={input => handleTextChange(input)}
          defaultValue={text}
        />
        <StatusBar barStyle="dark-content" />
        <TouchableOpacity
          style={styles.clearButtonParent}
          onPress={handleClearSearch}
          testID="clear-button">
          <Image
            style={styles.clearButton}
            source={require('./Picture/pngegg.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={{height: 'auto'}}>
        <FlatList
          data={text === '' ? data : data.filter((e: any) => e.name === text)}
          // e.name.toLowerCase().match(input.toLowerCase())
          renderItem={({item}) => {
            return (
              <View
                style={{
                  borderRadius: 20,
                  borderColor: 'black',
                  borderStyle: 'solid',
                  borderWidth: 1,
                  margin: 5,
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <Image
                  source={{uri: item.ref}}
                  style={{
                    width: 100,
                    height: 'auto',
                    margin: 10,
                  }}
                />
                <View>
                  <Text style={styles.itemname}>Name: {item.name}</Text>
                  <Text style={styles.itemname}>Breed: {item.breed}</Text>
                  <Text style={styles.itemname}>Age: {item.age}</Text>
                  <Text style={styles.itemname}>Location: {item.location}</Text>
                </View>
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default DogPicture;
