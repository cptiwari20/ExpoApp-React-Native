// -- 9907678302
export const createTopic = ({ prop, value }) => {
  console.log(prop, value)
  return {
    type: 'CREATE_TOPIC',
    payload: { prop, value }
  }
}

