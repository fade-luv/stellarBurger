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
  chosenIngredients: [],
  burgerConstructorBunPrice: 0,
  burgerConstructorTotalPrice: 0,
  constructorBun: {
    name: "Перетяните булочку сюда",
    price: 0,
    image:
      "https://stellarburgers.nomoreparties.site/static/media/loading.89540200.svg",
  },
  constructorSoucesAndFillings: [],
  orderNumber: {},
};

function burgerConstructorReducer(state = initialState, action) {

  function getSum(params) {
    return state.chosenIngredients
      .map((item) => item.price)
      .reduce((partialSum, a) => partialSum + a, 0);
  }


  switch (action.type) {
    case "ADD_INGREDIENT":
      const newArr = [...state.constructorSoucesAndFillings];
      const newIngredient = { ...action.ingredient };
      newIngredient.uuid = action.uuid;
      newArr.push(newIngredient);
      return {
        ...state,
        constructorSoucesAndFillings: newArr,
        chosenIngredients: newArr,
      };
    case "ADD_BUN":
      return {
        ...state,
        constructorBun: action.ingredient,
        burgerConstructorBunPrice: action.ingredient.price * 2
      };

    case "DELETE_INGREDIENT":
      const newStateIngredients = state.constructorSoucesAndFillings.filter(
        function (el) {
          return el.uuid != action.ingredient.uuid;
        }
      );

      return {
        ...state,
        constructorSoucesAndFillings: newStateIngredients,
        chosenIngredients: newStateIngredients,
      };
    case "GET_SUM_BUNS":
      return {
        ...state,
        burgerConstructorBunPrice: action.ingredient,

      };
    case "INCREMENT":
      return {
        ...state,
        burgerConstructorTotalPrice: state.burgerConstructorBunPrice + getSum()
      };
    case "DECREMENT":
      return {
        ...state,
        burgerConstructorTotalPrice: state.burgerConstructorTotalPrice - action.price,
      };

    default:
      return state;
  }
}

export default burgerConstructorReducer;
