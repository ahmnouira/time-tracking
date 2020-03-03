import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const TimerButton = ({ color, title, small, onPress }) => {
    return (

        <TouchableOpacity style={[styles.button, { borderColor: color }]} onPress={onPress} >
            <Text style={[
                styles.buttonText,
                small ? styles.small : styles.large,
                { color },
            ]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default TimerButton; 