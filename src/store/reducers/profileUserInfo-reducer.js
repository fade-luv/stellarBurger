const initialState = {
  userEmail: " ",
  userName: " ",
  userPassword: "*******",
  isLoggined: false,
  isResetPasswordEmailSended: false,
  isLogginedRequest: false,
  isLogginedRequestFailed: false,
};

export const userLogginedInfoReducer = (state = initialState, action) => {

  switch (action.type) {
    case "GET_LOGGINED_USER_INFO": {
      return {
        ...state,
        isLogginedRequest: true,
      };
    }
    case "GET_LOGGINED_SUCCESS": {
      return {
        ...state,
        userName: action.payload.name,
        userEmail: action.payload.email,
        isLoggined: true,
      };
    }
    case "GET_LOGGINED_FAILED": {
      return {
        ...state,
        isLogginedRequestFailed: true,
        isLogginedRequest: false,
      };
    }
    case "SET_LOGGINED": {
      return {
        ...state,
        isLoggined: action.payload,
      };
    }
    case "CHANGE_LOGGINED_USER_NAME": {
      return {
        ...state,
        userName: action.payload,
        formChanged: true,
      };
    }
    case "CHANGE_LOGGINED_USER_EMAIL": {
      return {
        ...state,
        userEmail: action.payload,
        formChanged: true,
      };
    }

    case "CHANGE_LOGGINED_USER_PASSWORD": {
      return {
        ...state,
        userPassword: action.payload,
        formChanged: true,
      };
    }
    case "EMAIL_RESET_SENDED_SUCCES": {
      return {
        ...state,
        isResetPasswordEmailSended: action.sendResetPasswordEmail,
      };
    }
    case "LOGOUT_SUCCES": {
      return {
        ...state,
        userEmail: " ",
        userName: " ",
        userPassword: " ",
        isLoggined: false,
      };
    }
    default:
      return state;
  }
};

export default userLogginedInfoReducer;
