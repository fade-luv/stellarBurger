import initialState from "../initialState";

function ingredientsReducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_INGREDIENTS":
      return { ...state, ingredients: action.value };

    default:
      return state;
  }
}

export default ingredientsReducer;