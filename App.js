import React from 'react';
import ToggleableTimerForm from './src/components/ToggleableTimerForm';
import EditableTimer from './src/components/EditableTimer';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class App extends React.Component {

  render() {

    return (

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
    )
  }
}

const styles = StyleSheet.create({

  appContainer: {
    flex: 1

  },

  titleConatiner: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#D6D7DA"

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  timerList: {
    paddingBottom: 15,
  }
});
