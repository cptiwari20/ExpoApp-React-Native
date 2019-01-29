import firebase from 'firebase';
// AUTH
export const onEmailChange = (text) => {
  return {
    type: 'EMAIL_CHANGED',
    payload: text
  }
};

export const onPasswordChange = (pass) => {
  return {
    type: 'PASSWORD_CHANGED',
    payload: pass
  }
};

export const loginUser = ({email, password}) => dispatch => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user =>{
      dispatch({ type: 'USER_LOGIN_SUCCESS', payload: user})
    })
}