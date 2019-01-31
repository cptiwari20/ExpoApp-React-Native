import React, {Component} from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import {Button, Spinner} from './commons/index';


class Dashboard extends Component {
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
         <Text>This is a Dashboard</Text>
        
        <ActivityIndicator size='large' animating={true}/>
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