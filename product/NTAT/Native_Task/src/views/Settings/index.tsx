import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, Alert } from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import Slider from '@react-native-community/slider';
import styles from '../styles';

type Color = {
    id: string;
    value: string;
};

const Settings: React.FC = () => {
    const [colors, setColors] = useState<Color[]>([]);
    const [color, setColor] = useState<string>('#8B795E');
    const [hue, setHue] = useState<number>(30);
    const [saturation, setSaturation] = useState<number>(50);
    const [lightness, setLightness] = useState<number>(50);

    const handleColorSelection = (selectedColor: string) => {
        setColor(selectedColor);
    };

    const handleCopyColor = () => {
        Clipboard.setString(color);
        Alert.alert('Color copied to clipboard');
    };

    const handleColorSubmit = () => {
        setColor(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
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
                {colors.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => handleColorSelection(item.value)}
                        style={[styles.colorButton, { backgroundColor: item.value }]}
                        accessibilityLabel={`Select color ${item.id}`}
                    />
                ))}
            </View>
            <View style={styles.form}>
                <Text>Hue:</Text>
                <Slider
                    value={hue}
                    onValueChange={(value) => setHue(value)}
                    minimumValue={0}
                    maximumValue={360}
                />
                <Text>Saturation:</Text>
                <Slider
                    value={saturation}
                    onValueChange={(value) => setSaturation(value)}
                    minimumValue={0}
                    maximumValue={100}
                />
                <Text>Lightness:</Text>
                <Slider
                    value={lightness}
                    onValueChange={(value) => setLightness(value)}
                    minimumValue={0}
                    maximumValue={100}
                />
                <View style={styles.colorPreview}>
                    <TouchableOpacity
                        style={[styles.colorPreviewButton, { backgroundColor: color }]}
                        onPress={handleCopyColor}
                    >
                        <Text style={styles.colorPreviewText}>Copy Color</Text>
                    </TouchableOpacity>
                </View>
                <Button title="Pick a Color" onPress={handleColorSubmit} color="red" />
            </View>
        </View>
    );
};

export default Settings;
