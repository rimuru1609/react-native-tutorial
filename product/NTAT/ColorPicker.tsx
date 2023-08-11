import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, Alert } from 'react-native';
import Clipboard from '@react-native-community/clipboard';

type Color = {
    id: string;
    value: string;
}

export default function ColorPicker() {
    const [colors, setColors] = useState<Color[]>([]);
    const [color, setColor] = useState<string>('#8B795E');
    const [hue, setHue] = useState<number>(30);
    const [saturation, setSaturation] = useState<number>(50);
    const [lightness, setLightness] = useState<number>(50);

    useEffect(() => {
        fetch('https://64d4a572b592423e469469fa.mockapi.io/api/icker/colors')
            .then(response => response.json())
            .then(data => setColors(data))
            .catch(error => console.error('Error fetching colors:', error));
    }, []);

    const handleHueIncrease = () => {
        setHue((prevHue) => Math.min(prevHue + 1, 360));
    };

    const handleHueDecrease = () => {
        setHue((prevHue) => Math.max(prevHue - 1, 0));
    };

    const handleSaturationIncrease = () => {
        setSaturation((prevSaturation) => Math.min(prevSaturation + 1, 100));
    };

    const handleSaturationDecrease = () => {
        setSaturation((prevSaturation) => Math.max(prevSaturation - 1, 0));
    };

    const handleLightnessIncrease = () => {
        setLightness((prevLightness) => Math.min(prevLightness + 1, 100));
    };

    const handleLightnessDecrease = () => {
        setLightness((prevLightness) => Math.max(prevLightness - 1, 0));
    };

    const handleColorSubmit = () => {
        setColor(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
    };

    const handleColorSelection = (selectedColor: string) => {
        setColor(selectedColor);
    };

    const handleCopyColor = () => {
        Clipboard.setString(color); // Sử dụng thư viện clipboard để sao chép màu vào clipboard

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
                />
            </View>
            <Text>Choose color: </Text>
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
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleHueDecrease}>
                        <Text>-</Text>
                    </TouchableOpacity>
                    <Text>{hue}</Text>
                    <TouchableOpacity style={styles.button} onPress={handleHueIncrease}>
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
                <Text>Saturation:</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleSaturationDecrease}>
                        <Text>-</Text>
                    </TouchableOpacity>
                    <Text>{saturation}</Text>
                    <TouchableOpacity style={styles.button} onPress={handleSaturationIncrease}>
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
                <Text>Lightness:</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleLightnessDecrease}>
                        <Text>-</Text>
                    </TouchableOpacity>
                    <Text>{lightness}</Text>
                    <TouchableOpacity style={styles.button} onPress={handleLightnessIncrease}>
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    preview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        height: 150,
        width: 150,
        resizeMode: 'contain',
    },
    colorsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    colorButton: {
        width: 30,
        height: 30,
        margin: 10,
    },
    form: {
        marginTop: 20,
    },
    slider: {
        width: '100%',
    },

    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#ccc',
        padding: 10,
        marginHorizontal: 5,
    },
    colorPreview: {
        alignItems: 'center',
        marginTop: 20,
    },
    colorPreviewButton: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    colorPreviewText: {
        color: 'black',
        fontWeight: 'bold',
    },
    colorButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
});
