function sortIngredientsActionCreator(ingredients) {
  return {
    type: "SORT_INGREDIENTS",
    newSoucesAndFilling: ingredients,
  };
}

export default sortIngredientsActionCreator;
