import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './TaskNavigation';

export default function Navigator() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}