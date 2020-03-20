import React from 'react';
import styles from './styles';
import ToggleableTimerForm from '../ToggleableTimerForm';
import EditableTimer from '../EditableTimer';
import { Text, View, ScrollView } from 'react-native';

/**
 * This represent the first screen 
 */
const Home = () =>

    <View style={styles.appContainer}>
        <View style={styles.titleConatiner}>
            <Text style={styles.title}>Timers</Text>
        </View>
        <ScrollView style={styles.timerList}>
            <ToggleableTimerForm isOpen={false} />
            <EditableTimer
                id="1"
                title="Mow the lawn"
                project="House Chores"
                elapsed="8986300"
                isRunnig
            />
            <EditableTimer
                id="2"
                title="Bake squash"
                project="Kitechen Chores"
                elapsed="3890985"
                isRunnig
            />
        </ScrollView>
    </View>

export default Home; 
