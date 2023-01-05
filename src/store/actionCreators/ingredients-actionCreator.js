function ingredientsActionCreator(data) {
  return {
    type: "LOAD_INGREDIENTS",
    value: data,
  };
  
}

export default ingredientsActionCreator;
