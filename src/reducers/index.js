import { combineReducers } from 'redux';
import authReducer from './authReducer';
import topicFormReducers from './topicFormReducers';
import topicReducers from './topicReducers';

export default combineReducers({
  auth: authReducer,
  topic: topicFormReducers,
  allTopics: topicReducers
});
