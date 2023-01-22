let initialState = {
  ingredients: [
    {
      _id: "60d3b41abdacab0026a733c6",
      name: "Краторная булка N-200i",
      type: "bun",
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: "https://code.s3.yandex.net/react/code/bun-02.png",
      image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
      __v: 0,
    },
  ],
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