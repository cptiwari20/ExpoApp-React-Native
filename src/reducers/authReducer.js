export default function(state = {email: ''}, action){
  switch (action.type){
    case 'EMAIL_CHANGED':
      return { ...state, email: action.payload };
    default:
      return state;
  }
}