function reducer(state, action) {

  switch (action.type) {
    case "LOAD_INGREDIENTS":
      return { ...state, ingredients: action.value};
      
    default:
      return state;
  }
  
}

export default reducer;