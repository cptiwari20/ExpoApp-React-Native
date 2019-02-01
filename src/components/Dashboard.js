import React, {Component} from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fetchTopic } from '../actions';


class Dashboard extends Component {
  componentWillMount(){
    this.props.fetchTopic()
  } 
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

function mapStateToProps({ allTopics }){
  return { allTopics }
}

export default connect(mapStateToProps, { fetchTopic })(Dashboard);