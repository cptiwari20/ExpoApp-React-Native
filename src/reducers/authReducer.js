const initalState = { email: '', password: '', user: null }

export default function(state = initalState, action){
  switch (action.type){
    case 'EMAIL_CHANGED':
      return { ...state, email: action.payload };
    case 'PASSWORD_CHANGED':
      return { ...state, password: action.payload };
    case 'USER_LOGIN_SUCCESS':
      return { ...state, user: action.payload };
    default:
      return state;
  }
}