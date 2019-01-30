import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import {Card, CardSection, Button, Input } from './commons/index';

class CreateTopic extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input label='Topic' placeholder='Add your topic'/>
        </CardSection>
        <CardSection>
          <Input label='Chapter' placeholder='Topic related to a chapter'/>
        </CardSection>
        <CardSection style={{ flexDirection: 'column'}}>
          <Text>Select Day</Text>
          <Picker
            style={{ height: 50, width: 100 }}
           onValueChange={(t) => console.log(t)}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
        <CardSection>
          <Button> Submit </Button>
        </CardSection>
      </Card>
    )
  }
}

export default CreateTopic;