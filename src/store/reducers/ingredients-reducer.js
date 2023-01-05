const LOAD_INGREDIENTS = "LOAD_INGREDIENTS";

function reducer(state, action) {
  switch (action.type) {
    case LOAD_INGREDIENTS:
      return { value: action.value };
    default:
      return state;
  }
  
}

export default reducer;