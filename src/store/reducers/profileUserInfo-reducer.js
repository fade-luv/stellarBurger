const initialState = {
  userEmail: " ",
  userName: " ",
  userPassword: "*******",
  formChanged: false,
  isLoggined: false,
};

export const userLogginedInfoReducer = (state = initialState, action) => {
console.log(action);
  switch (action.type) {
    case "GET_LOGGINED_USER_INFO": {
      return {
        ...state,
        userName: action.payload.user.name,
        userEmail: action.payload.user.email,
        isLoggined: true,
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
    default:
      return state;
  }
};

export default userLogginedInfoReducer;
