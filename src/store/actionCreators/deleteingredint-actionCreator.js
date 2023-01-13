function deleteIngredientActionCreator(ingredient) {

  return {
    type: "DELETE_INGREDIENT",
    ingredient: ingredient,
  };
}

export default deleteIngredientActionCreator;
