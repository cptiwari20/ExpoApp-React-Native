import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Header, Card, CardSection, Input } from './src/commons/index'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header headerText='Login' />
        <Card>
          <CardSection>
            <Input label='Email' placeholder='example@mail.com'/>
          </CardSection>
          <CardSection>
            <Input label='Password' placeholder='your secret password' />
          </CardSection>
          <CardSection>
            <Button>
              Login Now
            </Button>
          </CardSection>
        </Card>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
