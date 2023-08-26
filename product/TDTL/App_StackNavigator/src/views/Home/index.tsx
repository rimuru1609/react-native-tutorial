import * as React from 'react';
import { Button, Image, ImageBackground, Pressable, View } from 'react-native';
import { Text } from 'react-native-paper';


export default function HomeScreen({ navigation } :any) {
  return (
    <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', display: 'flex' }}>
      <Pressable
        style={{ marginBottom: 10 }}
        onPress={() => navigation.navigate('Search')}>
        <View style={{ backgroundColor: 'blue' }}>
          <Image style={{ width: '100%', height: 200, display: 'flex', resizeMode: 'stretch' }}
            source={{ uri: 'https://media.istockphoto.com/id/1447804419/vi/vec-to/nh%E1%BA%ADn-nu%C3%B4i-th%C3%BA-c%C6%B0ng-t%E1%BB%AB-m%E1%BB%99t-trung-t%C3%A2m-c%E1%BB%A9u-tr%E1%BB%A3-%C4%91%E1%BB%99ng-v%E1%BA%ADt-d%C6%B0%E1%BB%9Bi-d%E1%BA%A1ng-m%C3%A8o-ho%E1%BA%B7c-ch%C3%B3-%C4%91%E1%BB%83-ch%C4%83m-s%C3%B3c-v%C3%A0.jpg?s=1024x1024&w=is&k=20&c=UCmPiqfoS56er8FCeGYv-riTGN3OoydQ_CxWH1ZxhOg=' }} />
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
            ADOPTION PET
          </Text>
        </View>
      </Pressable>

      <Pressable
        style={{ marginBottom: 10 }}
        onPress={() => navigation.navigate('Search')}>
        <View style={{ backgroundColor: 'green' }}>
          <Image style={{ width: '100%', height: 200, display: 'flex', resizeMode: 'stretch' }}
            source={{ uri: 'https://media.istockphoto.com/id/1447804419/vi/vec-to/nh%E1%BA%ADn-nu%C3%B4i-th%C3%BA-c%C6%B0ng-t%E1%BB%AB-m%E1%BB%99t-trung-t%C3%A2m-c%E1%BB%A9u-tr%E1%BB%A3-%C4%91%E1%BB%99ng-v%E1%BA%ADt-d%C6%B0%E1%BB%9Bi-d%E1%BA%A1ng-m%C3%A8o-ho%E1%BA%B7c-ch%C3%B3-%C4%91%E1%BB%83-ch%C4%83m-s%C3%B3c-v%C3%A0.jpg?s=1024x1024&w=is&k=20&c=UCmPiqfoS56er8FCeGYv-riTGN3OoydQ_CxWH1ZxhOg=' }} />
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
            FIND A PET OWNER
          </Text>
        </View>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Search')}>
        <View style={{ backgroundColor: 'pink' }}>
          <Image style={{ width: '100%', height: 200, display: 'flex', resizeMode: 'stretch' }}
            source={{ uri: 'https://media.istockphoto.com/id/1447804419/vi/vec-to/nh%E1%BA%ADn-nu%C3%B4i-th%C3%BA-c%C6%B0ng-t%E1%BB%AB-m%E1%BB%99t-trung-t%C3%A2m-c%E1%BB%A9u-tr%E1%BB%A3-%C4%91%E1%BB%99ng-v%E1%BA%ADt-d%C6%B0%E1%BB%9Bi-d%E1%BA%A1ng-m%C3%A8o-ho%E1%BA%B7c-ch%C3%B3-%C4%91%E1%BB%83-ch%C4%83m-s%C3%B3c-v%C3%A0.jpg?s=1024x1024&w=is&k=20&c=UCmPiqfoS56er8FCeGYv-riTGN3OoydQ_CxWH1ZxhOg=' }} />
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
            PET BREEDING
          </Text>
        </View>
      </Pressable>
    </View>
  );
}