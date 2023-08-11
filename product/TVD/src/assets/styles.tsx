import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#322653',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textColor: {
        color: '#FFD2D7'
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
    },
    heading: {
        marginTop: 20,
        fontSize: 28,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#9288F8',
        padding: 8
    },
    form: {
        backgroundColor: '#8062D6',
        borderRadius: 16,
        width: 340,
        borderWidth: 1,
        padding: 8
    },
    input: {
        borderBottomWidth: 1,
        marginBottom: 8
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 14,
        marginVertical: 10,
        backgroundColor: '#012755',
        borderRadius: 20
    },
    boxTeams: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    boxName: {
        width: 100,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#fff',
    },
    boxScore: {
        width: 100,
        height: 100,
        borderRadius: 20,
        backgroundColor: '#fff',
    }
});

export default styles;