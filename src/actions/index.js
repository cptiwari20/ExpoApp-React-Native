// AUTH
export const onEmailChange = (text) => {
  return {
    type: 'EMAIL_CHANGED',
    payload: text
  }
};

export const onPasswordChange = (pass) => {
  return {
    type: 'PASSWORD_CHANGED',
    payload: pass
  }
};