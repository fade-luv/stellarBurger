function modalActionCreator(modalIngredient) {
  return {
    type: "ACTIVE_MODAL_INGREDIENT",
    value: modalIngredient
  };
}

export default modalActionCreator;