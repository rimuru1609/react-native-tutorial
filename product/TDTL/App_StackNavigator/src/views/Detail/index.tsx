import { useEffect, useState } from "react";
import { DogDetailScreenProps } from "../../navigator/type";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";

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

export default function DogDetailScreen({ navigation, route }: DogDetailScreenProps) {
  const indexs = route.params.id;
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    console.log(indexs)
    fetch(`https://64dae644593f57e435b040a3.mockapi.io/api/dogs/dogs/${indexs}`)
      .then(resp => resp.json())
      .then(json => setData(json))
      .catch(error => console.error(error)); //.finally(() => setLoading(false));
  }, []);
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
        source={{ uri: data.ref }}
        style={{
          width: 200,
          height: 'auto',
          margin: 10,
        }}
      />
      <View>
        <Text style={styles.itemname}>Name: {data.name}</Text>
        <Text style={styles.itemname}>Breed: {data.breed}</Text>
        <Text style={styles.itemname}>Age: {data.age}</Text>
        <Text style={styles.itemname}>Location: {data.location}</Text>
      </View>
    </View>
  );
}