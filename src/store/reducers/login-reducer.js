const initialState = {
  isAuth: false,
  accessToken: "Bearer ...",
  refreshToken: "",
  userEmail: "",
  userName: "",
};


export const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case "AUTH_SUCCES": {
      return {
        ...state,
        isAuth: action.authInfo.success,
        accessToken: action.authInfo.accessToken,
        refreshToken: action.authInfo.refreshToken,
        userName:action.authInfo.user.name,
        userEmail:action.authInfo.user.email
      };
    }

    default:
      return state;
  }
};

export default authReducer;
