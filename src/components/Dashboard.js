import React, {Component} from 'react';
import { View, Text } from 'react-native';
import {Button, Spinner} from './commons/index';


class Dashboard extends Component {
  render() {
    return (
      <View>
        <Text>This is a Dashboard</Text>
        <Spinner />
      </View>
    )
  }
}

export default Dashboard;