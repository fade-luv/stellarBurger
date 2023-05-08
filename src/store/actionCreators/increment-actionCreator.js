function incrementActionCreator(ingredient) {
  return {
    type: "INCREMENT",
    price: ingredient.price,
  };
}

export default incrementActionCreator;
