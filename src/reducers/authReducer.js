const initalState = { email: '', password: '', user: null, error: '', loading: false }

export default function(state = initalState, action){
  switch (action.type){
    case 'EMAIL_CHANGED':
      return { ...state, email: action.payload, error: '' };
    case 'PASSWORD_CHANGED':
      return { ...state, password: action.payload, error: '' };
    case 'USER_LOGIN_SUCCESS':
      return { ...state, user: action.payload, error: '', loading: false };
    case 'LOGIN_USER_FAIL': 
      return { ...state, error: 'Authentication Failed!!', loading: false };
    case 'LOGIN_USER': 
      return { ...state, error: '', loading: true }
    default:
      return state;
  }
}