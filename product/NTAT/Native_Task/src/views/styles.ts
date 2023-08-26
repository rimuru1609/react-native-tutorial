import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
        width: '80%',
        marginTop: 20,
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