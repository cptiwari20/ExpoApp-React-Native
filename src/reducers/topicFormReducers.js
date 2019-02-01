const initalState = {
  title: '',
  chapter: '',
  day: 'Monday'
}

export default function(state = initalState, action){
  switch (action.type){
    case 'UPDATE_TOPIC':
      return { ...state, [action.payload.prop]: action.payload.value };
    case 'CREATE_TOPIC':
      return initalState;
    default:
      return state;
  }
}