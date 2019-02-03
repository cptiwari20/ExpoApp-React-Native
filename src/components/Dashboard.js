import React, {Component} from 'react';
import { View, FlatList, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchTopic } from '../actions';
import { CardSection } from './commons';


class Dashboard extends Component {
  componentWillMount(){
    this.props.fetchTopic()
  } 
  
  renderItem({ item }){
    return (
    <CardSection key={item.id}>
      <Text>{item}</Text>
    </CardSection>
    )
  }


  render() {
    return (
      <ScrollView>
         <FlatList 
            data={this.props.topics}
            keyExtractor={topic => (topic.id).toString()}
            renderItem={this.renderItem}
         />
      </ScrollView>
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

function mapStateToProps({ allTopics }){
  return {
    topics: _.map(allTopics, (val, uid) => {
      return { ...val, uid}
    })
  }
}

export default connect(mapStateToProps, { fetchTopic })(Dashboard);