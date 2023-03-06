export const socketMiddleWare = (wsUrl, wsActions, isAuth) => {
  return (store) => {
    let socket = null;

    return (next) => (action) => {

      const { dispatch, getState } = store;
      const { type, payload } = action;
      const {
        wsConnectionStart,
        wsConnectionSuccess,
        wsConnectionError,
        wsConnectionClosed,
        wsGetMessage,
        wsSendMessage,
      } = wsActions;
      

      const accessToken = window.localStorage.getItem("accessToken");
      if (type === wsConnectionStart && isAuth) {
        socket = new WebSocket(
          `${wsUrl}?token=${accessToken.split("Bearer ")[1]}`
        );
      } else 
      if (type === wsConnectionStart && !isAuth) {
        socket = new WebSocket(wsUrl);
      }
      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: wsConnectionSuccess, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: wsConnectionError, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...ParsedData } = parsedData;
          dispatch({ type: wsGetMessage, payload: ParsedData });
        };

        socket.onclose = (event) => {
          dispatch({ type: wsConnectionClosed, payload: event });
        };

        if (type === wsSendMessage) {
          const message = payload;
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  };
};
