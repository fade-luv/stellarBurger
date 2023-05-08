import { getUserInfo } from "../../utils/burger-api";

export function userLogginedInfoActionCreator(params) {
  return function (dispatch) {
    dispatch({
      type: "GET_LOGGINED_USER_INFO"
    });

    getUserInfo().then((res) => {
      if (res && res.success) {
        dispatch({
          type: "GET_LOGGINED_SUCCESS",
          payload: res.user
        });
      } else {
        dispatch({
          type: "GET_LOGGINED_FAILED",
        });
      }
    });
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

export function changeUserLogginedPasswordActionCreator(text) {
  return {
    type: "CHANGE_LOGGINED_USER_PASSWORD",
    payload: text,
  };
}
