export function updateUserNameActionCreator(text) {
  return {
    type: 'UPDATE_USER_NAME',
    payload: text
  }
}

export function updateUserEmailActionCreator(text) {
  return {
    type: "UPDATE_USER_EMAIL",
    payload: text,
  };
}

export function updateUserPasswordActionCreator(text) {
  return {
    type: "UPDATE_USER_PASSWORD",
    payload: text,
  };
}