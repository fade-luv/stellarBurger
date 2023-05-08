export const WS_CONNECTION_START = () => {
  return {
    type: "WS_CONNECTION_START",
  };
};

export const WS_CONNECTION_SUCCESS = () => {
  return {
    type: "WS_CONNECTION_SUCCESS",
  };
};

export const WS_CONNECTION_ERROR = () => {
  return {
    type: "WS_CONNECTION_ERROR",
  };
};

export const WS_CONNECTION_CLOSED = () => {
  return {
    type: "WS_CONNECTION_CLOSED",
  };
};

export const WS_GET_MESSAGE = (data) => {
  return {
    type: "WS_GET_MESSAGE",
    payload: data,
  };
};

export const WS_SEND_MESSAGE = (data) => {
  return {
    type: "WS_SEND_MESSAGE",
    payload: data,
  };
};
