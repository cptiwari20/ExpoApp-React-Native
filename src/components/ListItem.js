import React, { Component } from "react";
import { 
  Text, 
  TouchableWithoutFeedback, 
  View,
  LayoutAnimation
 } from 'react-native';
import { CardSection } from './commons/index';


class ListItem extends Component {
  componentWillUpdate(){
    LayoutAnimation.spring()
  }
 

  render(){
    const {  item} = this.props;
    const { title, chapter, day } = item;
    console.log('Item On List Item ', item)
    return (
       <TouchableWithoutFeedback
        onPress={() => {}} > 
         <View>
          <CardSection>
            <Text>
                {title} - { day }
            </Text>
          </CardSection>
         </View>
       </TouchableWithoutFeedback>
    )
  }
}


export default ListItem;