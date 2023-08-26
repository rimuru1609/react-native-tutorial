import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, TouchableOpacity, Alert } from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import styles from '../styles';

type Color = {
    id: string;
    value: string;
}

type HomeProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
    const [colors, setColors] = useState<Color[]>([]);
    const [color, setColor] = useState<string>('#8B795E');

    useEffect(() => {
        fetch('https://64d4a572b592423e469469fa.mockapi.io/api/icker/colors')
            .then(response => response.json())
            .then(data => setColors(data))
            .catch(error => console.error('Error fetching colors:', error));
    }, []);

    const handleColorSelection = (selectedColor: string) => {
        setColor(selectedColor);
    };

    const handleCopyColor = () => {
        Clipboard.setString(color);
        Alert.alert('Color copied to clipboard');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>COLOR PICKER</Text>
            <View style={styles.preview}>
                <Image
                    style={[styles.image, { tintColor: color }]}
                    source={{
                        uri: 'https://cdn.pixabay.com/photo/2017/01/10/14/48/umbrella-1969261_960_720.png',
                    }}
                    testID="color-image"
                />
            </View>
            <Text>Choose color:</Text>
            <View style={styles.colorsContainer}>
                {colors.map(item => (
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => handleColorSelection(item.value)}
                        style={[styles.colorButton, { backgroundColor: item.value }]}
                        accessibilityLabel={`Select color ${item.id}`}
                    />
                ))}
            </View>
            <View style={styles.colorPreview}>
                <TouchableOpacity
                    style={[styles.colorPreviewButton, { backgroundColor: color }]}
                    onPress={handleCopyColor}
                >
                    <Text style={styles.colorPreviewText}>Copy Color</Text>
                </TouchableOpacity>
            </View>
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate('Settings')}
            />
        </View>
    );
};

export default Home;
