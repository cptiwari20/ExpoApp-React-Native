import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { createTopic } from '../actions';
import {Card, CardSection, Button, Input } from './commons/index';

class CreateTopic extends Component {
  render() {
    const { title , chapter, day, createTopic, topic } = this.props;
    return (
      <Card>
        <CardSection>
          <Input 
            value={title}
            onChangeText={value => createTopic({ prop: 'title', value} )}
            label='Title' 
            placeholder='Add your topic'
            />
        </CardSection>
        <CardSection>
          <Input 
            value={chapter}
            onChangeText={value => createTopic({ prop: 'chapter', value })}
            label='Chapter' 
            placeholder='Topic related to a chapter'/>
        </CardSection>
        <CardSection style={{ flexDirection: 'column'}}>
          <Text>Select Day</Text>
          <Picker
            style={{ height: 50, width: 100 }}
            selectedValue={day}
            onValueChange={(value) => createTopic({ prop: 'day', value })}
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
          <Button onPress={() => console.log(topic)}> Submit </Button>
        </CardSection>
      </Card>
    )
  }
}

function mapStateToProps({ topic }){
  const { title, chapter, day } = topic;

  return { title, chapter, day, topic }
}
export default connect(mapStateToProps, { createTopic })(CreateTopic);