function addIngredientActionCreator(ingredient) {
  return {
    type: "ADD_INGREDIENT",
    ingredient: ingredient,
  };
}

export default addIngredientActionCreator;
