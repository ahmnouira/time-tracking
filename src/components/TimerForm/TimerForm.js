import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles'; 
import TimerButton from '../TimerButton';

const TimerFrom = ({ id, title, project }) => {

    const submitText = id ? 'Update' : 'Create';

    return (

        <View style={styles.formConatiner}>
            <View style={styles.attributeConatiner}>
                <Text style={styles.textInputTitle}>
                    Title
                </Text>
                <View style={styles.textInputConatiner}>
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid="transparent"
                        defaultValue={title}
                    />
                </View>
            </View>
            <View>
                <Text style={styles.textInputTitle}>Project</Text>
                <View style={styles.textInputConatiner}>
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid="transparent"
                        defaultValue={project}
                    />
                </View>
            </View>
            <View style={styles.buttonGroup}>
                <TimerButton small color="#21BA45" title={submitText} />
                <TimerButton small color="#DB2828" title="Cancel" />

            </View>
        </View>
    )
}

export default TimerFrom; 