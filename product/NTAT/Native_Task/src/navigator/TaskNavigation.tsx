import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../views/Home';
import Settings from '../views/Settings';
import { RootStackParamList } from '../views/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    );
};

export default App;
