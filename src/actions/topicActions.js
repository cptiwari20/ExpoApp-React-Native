
export const createTopic = ( props, value ) => {
  return {
    type: 'CREATE_TOPIC',
    payload: { props, value }
  }
}