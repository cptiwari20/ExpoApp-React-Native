import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase'
import reducers from './src/reducers'
import Router from './src/Router';
import { config } from './src/firebaseConfig';

class App extends Component {
  componentWillMount(){
    firebase.initializeApp(config)
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    ); 
  }
}

export default App;
