const initalState = {}

export default function(state = initalState, action){
  switch (action.type){
    case 'CREATE_TOPIC':
      return { ...state, [action.payload.props]: action.payload.value };
    default:
      return state;
  }
}