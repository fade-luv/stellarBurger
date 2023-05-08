const initialState = {
  wsConnected: false,
  orders: {},
  error: undefined,
};

export const wsAuthReducer = (state = initialState, action) => {

  switch (action.type) {
    case "WS_CONNECTION_AUTH_SUCCES":
      return {
        ...state,
        error: undefined,
        wsConnected: true,
      };

    case "WS_CONNECTION_AUTH_ERROR":
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      };

    case "WS_CONNECTION_AUTH_CLOSED":
      return {
        ...state,
        error: undefined,
        wsConnected: false,
      };

    case "WS_GET_AUTH_MESSAGE":
      
      return {
        ...state,
        error: undefined,
        wsConnected: true,
        orders: action.payload,
      };

    default:
      return state;
  }
};

export default wsAuthReducer;
