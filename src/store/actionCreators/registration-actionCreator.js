import { registrationRequest } from "../../utils/burger-api";

export function registrationActionCreator(action) {
console.log(action);
  return function (dispatch) {
    dispatch({
      type: "START_REGISTRATION",
    });
    registrationRequest(action)
    .then((res) =>{
      dispatch({ type: "GET_LOGGINED_SUCCESS", payload: res.user });
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
    }
    )
  };
}
