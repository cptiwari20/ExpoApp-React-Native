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
    .then(user => loginUserSuccess(dispatch, user))
    .catch(err => { 
        console.log(err)
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => loginUserFail(dispatch))
      })
};

const loginUserFail = dispatch => dispatch({ type: 'LOGIN_USER_FAIL' })
const loginUserSuccess = (dispatch, user) => dispatch({ type: 'USER_LOGIN_SUCCESS', payload: user});