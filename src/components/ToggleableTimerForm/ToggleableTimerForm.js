// this component around TimerForm. It will display either a "+" or
// a TimerForm.

import React from 'react';
import { View } from 'react-native';
import TimerButton from '../TimerButton';
import TimerForm from '../TimerForm';
import styles from './styles';

// accepts a single prop isOpen, from its parent that instructs its behavior
export default function ToggleableTimerForm({ isOpen }) {

    return (

        <View
            style={[styles.conatiner, !isOpen && styles.buttonPadding]}>
            {isOpen ? <TimerForm /> : <TimerButton title="+" color="black" />}
        </View>
    );
}

