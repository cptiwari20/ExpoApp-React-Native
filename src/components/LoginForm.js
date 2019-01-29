import React from 'react';
import { Text, View } from 'react-native';
import { Button, Header, Card, CardSection, Input } from './commons/index'

 class LoginForm extends React.Component {
  render() {
    return (
      <View>
        <Header headerText='Login' />
        <Card>
          <CardSection>
            <Input label='Email' placeholder='example@mail.com'/>
          </CardSection>
          <CardSection>
            <Input label='Password' placeholder='your secret password'  secureTextEntry/>
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

export default LoginForm;