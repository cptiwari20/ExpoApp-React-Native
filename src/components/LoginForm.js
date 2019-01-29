import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Button, Header, Card, CardSection, Input } from './commons/index';
import { onEmailChange, onPasswordChange, loginUser } from '../actions';

class LoginForm extends React.Component {
  state = { error: '' }

  onEmailTextChange(text){
    let RegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    RegEx.test(text) ? this.setState({ error: ''}) : this.setState({ error: 'Please enter a valid email!'});
    this.props.onEmailChange(text);
  };

  onPasswordTextChange(text){
    this.props.onPasswordChange(text);
  }

  onButtonPress(){
    const {email, password} = this.props.auth;
    this.props.loginUser( { email, password } )
  }

  render() {
    const { email, password } = this.props.auth;
    return (
      <View>
        <Header headerText='Login' />
        <Card>
          <CardSection>
            <Input 
              label='Email' 
              placeholder='example@mail.com'
              value={email}
              onChangeText={text => this.onEmailTextChange(text)}
              />
          </CardSection>
          <CardSection>
            <Input 
              label='Password' 
              placeholder='your secret password' 
              value={password}
              onChangeText={text => this.onPasswordTextChange(text)}
              secureTextEntry
              />
          </CardSection>
          <View style={{ alignContent: 'space-around'}}>
            <Text style={{color: "#e61c5d"}}>{this.state.error}</Text>
          </View>
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Login Now
            </Button>
          </CardSection>
          <CardSection>
            <Text>
              {this.props.auth.user}
            </Text>
          </CardSection>
        </Card>
      </View>
    );
  }
}
function mapStateToProps({ auth }){
  return { auth }
}

export default connect(mapStateToProps, { onEmailChange, onPasswordChange, loginUser })(LoginForm);