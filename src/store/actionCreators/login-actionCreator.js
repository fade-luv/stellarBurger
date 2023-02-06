import { authorezationRequest } from "../../utils/burger-api";

export function loginActionCreator(action) {
  const {authEmailValue, authPasswordValue} = action;
  return function (dispatch) {
    dispatch({
      type: "START_AUTH",
    });
    authorezationRequest(authEmailValue, authPasswordValue).then((res) =>
      dispatch({ type: "AUTH_SUCCES", authInfo: res })
    );
  };
}
