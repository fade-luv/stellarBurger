const initialState = {
  focusIngredient: {},
  focusOrder: {},
  state: false,
  stateModalFeedDetails: false,
};

function focusIngredientReducer(state = initialState, action) {

  switch (action.type) {
    case "ACTIVE_MODAL_INGREDIENT":
      return { ...state, focusIngredient: action.value, state: action.state };
    case "ACTIVE_MODAL_FEED":
      return {
        ...state,
        focusOrder: action.value,
        stateModalFeedDetails: action.state,
      };
    case "CLOSE_MODAL":
      return { state: action.state, stateModalFeedDetails: action.state };
    case "ESC_CLOSE_MODAL":
      return { state: action.state, stateModalFeedDetails: action.state };
    case "OVERLAY_MODAL_CLICK":
      return { state: action.state, stateModalFeedDetails: action.state };
    default:
      return state;
  }
}

export default focusIngredientReducer;
