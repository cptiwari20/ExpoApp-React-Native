
export const createTopic = ( {prop, value} ) => {
  console.log(props, value)
  return {
    type: 'CREATE_TOPIC',
    payload: { prop, value }
  }
}