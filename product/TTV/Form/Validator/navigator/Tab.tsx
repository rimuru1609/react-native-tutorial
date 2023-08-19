import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Form from '../views/Home/Form';
import SearchBar from '../views/Search/SearchBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();
const TabBar=()=>{
  return (
    
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
            <Ionicons name="search-outline" color={color} size={size}/>
          )
        }}/>
      </Tab.Navigator>
    
  );
}

export default TabBar;