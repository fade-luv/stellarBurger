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
  burgerConstructorElementsID: [0],
  burgerConstructorPrice: 0,
  constructorBun: {
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
  constructorSoucesAndFillings: [
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
  orderNumber: {}
};

function burgerConstructorReducer(state = initialState, action) {
  switch (action.type) {
    case "CONSTRUCTOR_INGREDIENTS":
      function sortSoucesAndFillings(value) {
        return action.constructorIngredients
          .filter((ingredient) => ingredient.type !== "bun")
          .slice(2, 9);
      }
      
      function sortBun(params) {
        return action.constructorIngredients.find(
          (ingredient) => ingredient.type === "bun"
        );
      }

      function getIngredientsPrice(params) {
        const mainPrice = sortSoucesAndFillings().reduce(
          (sum, el) => sum + el.price,
          0
        );
        const price = mainPrice + sortBun().price * 2;
        return price;
      }

    

      return {
        ...state,
        burgerConstructorPrice: getIngredientsPrice(),
        constructorBun: sortBun(),
        constructorSoucesAndFillings: sortSoucesAndFillings(),
      };

    default:
      return state;
  }
}

export default burgerConstructorReducer;
