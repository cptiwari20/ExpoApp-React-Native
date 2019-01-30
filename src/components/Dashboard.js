import React, {Component} from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import {Button, Spinner} from './commons/index';


class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is a Dashboard</Text>
        
        <ActivityIndicator style={styles.horizontal} size='large' animating/>
      </View>
    )
  }
}
const styles = {
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
}

export default Dashboard;