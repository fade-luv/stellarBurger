export function userLogginedInfoActionCreator(info) {;
  return {
    type: "GET_LOGGINED_USER_INFO",
    payload: info,
  };
}

export function changeUserLogginedNameActionCreator(text) {

  return {
    type: "CHANGE_LOGGINED_USER_NAME",
    payload: text,
  };
}

export function changeUserLogginedEmailActionCreator(text) {

  return {
    type: "CHANGE_LOGGINED_USER_EMAIL",
    payload: text,
  };
}

