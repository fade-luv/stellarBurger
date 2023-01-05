import { combineReducers } from "redux";

import ingredientsReducer from "./ingredients-reducer";
import burgerConstructorReducer from "./burger-contrucotor-reducer";

const rootReducer = combineReducers({
  ingredientsReducer,
  burgerConstructorReducer,
});

export default rootReducer;



