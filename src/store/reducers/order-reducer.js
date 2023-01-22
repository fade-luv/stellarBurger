const initialState = {
  orderRequest: false,
  orderFailed: false,
  order: 0
};

export const orderReducer = (state = initialState, action) => {

  switch (action.type) {
    case "GET_ORDER_SUCCES": {
      return {
        ...state,
        orderRequest: true,
        orderFailed: false,
        order: action.order,
      };
    }
    case "GET_ORDER_FAILED":{
      return {
        ...state,
        orderFailed: true,
        orderRequest: false,
        order: 0
      }
    }
      
    default:
      return state
  }
}

export default orderReducer;