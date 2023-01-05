function ingredientsActionCreator(value) {
  return {
    type: LOAD_INGREDIENTS,
    ingredients: value,
  };
}

export default ingredientsActionCreator;