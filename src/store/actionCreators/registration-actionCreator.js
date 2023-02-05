import { registrationRequest } from "../../utils/burger-api";

export function registrationActionCreator(action) {

  return function (dispatch) {
    dispatch({
      type: "START_REGISTRATION",
    });
    registrationRequest(action).then((res) =>
      dispatch({ type: "REGISTRATION_SUCCES", registrationInfo: res })
    );
  };
}
