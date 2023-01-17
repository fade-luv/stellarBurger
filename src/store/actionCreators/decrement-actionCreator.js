function decrementActionCreator(ingredient) {
  return {
    type: "DECREMENT",
    price: ingredient
  };
}

export default decrementActionCreator;
