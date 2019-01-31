import firebase from 'firebase';
import { Actions } from 'react-native-router-flux'; 

export const updateTopic = ({ prop, value }) => {
  return {
    type: 'UPDATE_TOPIC',
    payload: { prop, value }
  };
}
export const createTopic = ({ title, chapter, day }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/topic`)
      .push({ title, chapter, day })
      .then(() => {
        dispatch({ type: 'CREATE_TOPIC'})
        Actions.pop();
      })
  };
};