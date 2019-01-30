import { combineReducers } from 'redux';
import authReducer from './authReducer';
import topicReducers from './topicReducers';

export default combineReducers({
  auth: authReducer,
  topic: topicReducers
});