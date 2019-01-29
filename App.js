import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  render() {
    return (
      <View>
       <LoginForm /> 
      </View>
    );
  }
}

export default App;
