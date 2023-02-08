const initialState = {
  userEmail: "test@mail.ru",
  userName: "test",
  userPassword: "pass",
};

export const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER_NAME": {
      return {
        ...state,
        userName: action.registrationInfo.user.name,
      };
    }
    case "UPDATE_USER_EMAIL": {
      return {
        ...state,
        userEmail: action.registrationInfo.user.email,
      };
    }
    case "UPDATE_USER_PASSWORD": {
      return {
        ...state,
        userPassword: action.registrationInfo.user.email,
      };
    }

    default:
      return state;
  }
};

export default userInfoReducer;
