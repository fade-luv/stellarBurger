import initialState from "../initialState";

function burgerConstructorReducer(state = initialState, action) {

  switch (action.type) {
    case "CONSTRUCTOR_INGREDIENTS":
      return { ...state, ingredientsReducer: action.constructorIngredients };

    default:
      return state;
  }
}

export default burgerConstructorReducer;
