
import { v4 as uuidv4 } from "uuid";
function addIngredientActionCreator(ingredient) {
  return {
    type: "ADD_INGREDIENT",
    ingredient: ingredient,
    uuid: uuidv4()
  };
}

export default addIngredientActionCreator;
