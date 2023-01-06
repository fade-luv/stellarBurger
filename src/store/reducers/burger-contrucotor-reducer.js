const initialState = {
  burgerConstructorElements: [
    {
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
  ],
};

function burgerConstructorReducer(state = initialState, action) {

  switch (action.type) {
    case "CONSTRUCTOR_INGREDIENTS":
      return {
        ...state,
        burgerConstructorElements: action.constructorIngredients,
      };

    default:
      return state;
  }
}

export default burgerConstructorReducer;
