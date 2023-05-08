import { exiteRequest } from "../../utils/burger-api";

export function logoutActionCreator(action) {


  return function (dispatch) {
    exiteRequest(action).then((res) => {
      dispatch({ type: "LOGOUT_SUCCES", authInfo: res });
    });
  };
}
