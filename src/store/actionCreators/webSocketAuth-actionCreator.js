export const WS_CONNECTION_AUTH_START = () => {
  return {
    type: "WS_CONNECTION_AUTH_START",
  };
};

export const WS_CONNECTION_AUTH_SUCCESS = () => {
  return {
    type: "WS_CONNECTION_AUTH_SUCCESS",
  };
};

export const WS_CONNECTION_AUTH_ERROR = () => {
  return {
    type: "WS_CONNECTION_AUTH_ERROR",
  };
};

export const WS_CONNECTION_AUTH_CLOSED = () => {
  return {
    type: "WS_CONNECTION_AUTH_CLOSED",
  };
};

export const WS_GET_AUTH_MESSAGE = (data) => {
  return {
    type: "WS_GET_AUTH_MESSAGE",
    payload: data,
  };
};

export const WS_SEND_AUTH_MESSAGE = (data) => {
  return {
    type: "WS_SEND_AUTH_MESSAGE",
    payload: data,
  };
};
