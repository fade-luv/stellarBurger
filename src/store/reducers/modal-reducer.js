const initialState = {
  focusIngredient: {
    _id: "60666c42cc7b410027a1a9b1",
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
};

function focusIngredientReducer(state = initialState, action) {
  switch (action.type) {
    case "ACTIVE_MODAL_INGREDIENT":
      function getFocusIngredient() {
        return ingredient;
      }

      return {
        ...state,
        focusIngredient: getIngredientsPrice(),
      };

    default:
      return state;
  }
}
