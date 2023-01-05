function burgerIngredientsActionCreator(ingredients) {


  return {
    type: "CONSTRUCTOR_INGREDIENTS",
    constructorIngredients: ingredients
  };
  
}

export default burgerIngredientsActionCreator;
