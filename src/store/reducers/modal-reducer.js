const initialState = {
  focusIngredient: {},
  state: false,
};

function focusIngredientReducer(state = initialState, action) {
  switch (action.type) {
    case "ACTIVE_MODAL_INGREDIENT":
      return { ...state, focusIngredient: action.value, state: action.state };
    case "CLOSE_MODAL":
      return { state: action.state };
    case "ESC_CLOSE_MODAL":
      return { state: action.state };
    case "OVERLAY_MODAL_CLICK":
      return { state: action.state };
    default:
      return state;
  }
}

export default focusIngredientReducer;
