import { forgotPasswordRequest } from "../../utils/burger-api";


function forgotPasswordActionCreator(action) {

  return function (dispatch) {
    forgotPasswordRequest(action).then((res) =>
      dispatch({ type: "EMAIL_RESET_SENDED_SUCCES", sendResetPasswordEmail:res })
    );
  };
}


export default forgotPasswordActionCreator;