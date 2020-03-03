import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    formConatiner: {

        backgroundColor: 'white',
        borderColor: "#D6D7DA",
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        margin: 15,
        marginBottom: 0
    },

    attributeConatiner: {
        marginVertical: 8
    },

    textInputConatiner: {
        borderColor: "#D6D7DA",
        borderRadius: 2,
        borderWidth: 1,
        marginBottom: 5
    },

    textInput: {
        height: 30,
        padding: 5,
        fontSize: 12
    },
    textInputTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }


});

export default styles; 