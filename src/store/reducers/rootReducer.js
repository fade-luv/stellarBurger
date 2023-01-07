import { combineReducers } from "redux";

import ingredientsReducer from "./ingredients-reducer";
import burgerConstructorReducer from "./burger-contrucotor-reducer";
import focusIngredientReducer from "./modal-reducer";

const rootReducer = combineReducers({
  ingredientsReducer,
  burgerConstructorReducer,
  focusIngredientReducer,
});

export default rootReducer;



