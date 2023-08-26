import { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

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


export default function SearchScreen({ navigation }: any) {
  const [text, setText] = useState('');
  const [data, setData] = useState<any>([]);
  const url = 'https://64dae644593f57e435b040a3.mockapi.io/api/dogs/dogs';
  const handleTextChange = (input: string) => {
    setText(input);
  };


  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(json => setData(json))
      .catch(error => console.error(error)); // .finally(() => setLoading(false));
  }, []);

  const handleClearSearch = () => {
    setText('');
  };

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
      <View style={{ height: 'auto' }}>
        <FlatList
          data={text === '' ? data : data.filter((e: any) => e.name.toLowerCase().match(text.toLowerCase()))}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('DogDetail', {id : item.id})}>
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
                    source={{ uri: item.ref }}
                    style={{
                      width: 200,
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
              </TouchableOpacity>
            )
          }}
        />
      </View>
    </SafeAreaView>
  );
}