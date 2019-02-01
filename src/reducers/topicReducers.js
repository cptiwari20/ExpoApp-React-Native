export default function(state = {}, action){
  switch (action.type){
    case 'FETCH_TOPIC':
      console.log(action.payload)
      return { ...state, ...action.payload };
    default:
      return state;
  }
}