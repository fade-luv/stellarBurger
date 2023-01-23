import {getOrderNumber} from "../../utils/burger-api";


export function getOrderActionCreator(action) {
  return function (dispatch) {
    dispatch({
      type: "GET_ORDER",
    });
    getOrderNumber(action).then((res) =>
      dispatch({ type: "GET_ORDER_SUCCES", order: res.order.number })
    );
  };
}
