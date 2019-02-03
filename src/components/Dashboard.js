import React, {Component} from 'react';
import { View, FlatList, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { fetchTopic } from '../actions';
import ListItem from './ListItem';


class Dashboard extends Component {
  componentWillMount(){
    this.props.fetchTopic()
  } 
  
  renderItem({ item }){
    return <ListItem item={item} />
  }


  render() {
    console.log(this.props.allTopics)
    return (
      <ScrollView>
        <View>
         <Text>Your All topics</Text>
        </View>
         <FlatList 
            data={this.props.allTopics}
            keyExtractor={topic => topic}
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
  return { allTopics }
}

export default connect(mapStateToProps, { fetchTopic })(Dashboard);