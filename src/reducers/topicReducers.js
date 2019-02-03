import _ from 'lodash';

export default function(state = [], action){
  switch (action.type){
    case 'FETCH_TOPIC':
      console.log('paylod', action.payload)
      const newState = _.map(action.payload, (val, uid) => { return {...val, uid } })
      console.log('New state', newState)
      return newState;
    default:
      return state;
  }
}