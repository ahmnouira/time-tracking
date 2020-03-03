import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    timerConatiner: {
        backgroundColor: 'white',
        borderColor: '#d6d7da',
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        margin: 15,
        marginBottom: 0
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    elapsedTime: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 15
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});


export default styles; 
