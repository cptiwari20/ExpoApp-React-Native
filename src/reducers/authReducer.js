const initalState = { email: '', password: ''}

export default function(state = initalState, action){
  switch (action.type){
    case 'EMAIL_CHANGED':
      return { ...state, email: action.payload };
    case 'PASSWORD_CHANGED':
      return { ...state, password: action.payload };
    default:
      return state;
  }
}