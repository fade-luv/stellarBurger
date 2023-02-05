const initialState = {
  userEmail: "test@mail.ru",
  userName: "test",
  accessToken: "Bearer",
  refreshToken: " "
};

export const registrationReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "REGISTRATION_SUCCES": {
      return {
        ...state,
        userEmail: action.registrationInfo.user.email,
        userName: action.registrationInfo.user.name,
        accessToken: action.registrationInfo.accessToken,
        refreshToken: action.registrationInfo.refreshToken,
      };
    }

    default:
      return state;
  }
};

export default registrationReducer;
