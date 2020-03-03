import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

import { millisecondsToHuman } from '../../utils/TimerUtils';
import TimerButton from '../TimerButton';

export default function Timer({ title, project, elapsed }) {

    const elapsedString = millisecondsToHuman(elapsed);
    return (
        <View style={styles.timerConatiner} >
            <Text style={styles.title}>{title}</Text>
            <Text>{project}</Text>
            <Text style={styles.elapsedTime}>{elapsedString}</Text>
            <View style={styles.buttonGroup}>
                <TimerButton color="blue" small title="Edit" />
                <TimerButton color="blue" small title="Remove" />
            </View>
            <TimerButton color="#21BA45" title="Start" />
        </View>
    );
}

