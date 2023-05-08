let initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
};


function ingredientsReducer(state = initialState, action) {

  switch (action.type) {
    case "GET_INGREDIENTS":
      return { ...state, ingredientsRequest: true, ingredientsFailed: false };
    case "GET_INGREDIENTS_SUCCESS":
      return {
        ...state,
        ingredients: action.ingredients,
        ingredientsRequest: false,
      };

    case "GET_INGREDIENTS_FAILED": {
      return {
        ...state,
        ingredientsFailed: true,
        ingredientsRequest: false,
      };
    }
    default:
      return state;
  }
}

export default ingredientsReducer;