export const createTopic = ({ prop, value }) => {
  return {
    type: 'CREATE_TOPIC',
    payload: { prop, value }
  }
}

