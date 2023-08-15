import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Form from './Form';
import SearchBar from './SearchBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

const TabBar=()=>{
  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={{
        tabBarShowLabel:false,
        headerShown:false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'blue',
        }}>
        <Tab.Screen name="Home" component={Form} options={{
          tabBarIcon:({color,size})=>(
            <Ionicons name="home-outline" color={color} size={size}/>
          )
        }}/>
        <Tab.Screen name="Settings" component={SearchBar} options={{
          tabBarIcon:({color,size})=>(
            <Ionicons name="heart-outline" color={color} size={size}/>
          )
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabBar;